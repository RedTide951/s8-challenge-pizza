import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import {
  ButtonGroup,
  Button,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import DynamicPriceDisplay from "./DynamicPriceDisplay";

const INGREDIENTS_LIST = [
  { label: "Pepperoni", value: "pepperoni" },
  { label: "Sosis", value: "sausage" },
  { label: "Kanada Jambonu", value: "canadian-bacon" },
  { label: "Tavuk Izgara", value: "grilled-chicken" },
  { label: "Soğan", value: "onion" },
  { label: "Domates", value: "tomato" },
  { label: "Mısır", value: "corn" },
  { label: "Sucuk", value: "spicy-sausage" },
  { label: "Jalepeno", value: "jalapeno" },
  { label: "Sarımsak", value: "garlic" },
  { label: "Biber", value: "pepper" },
  { label: "Ananas", value: "pineapple" },
  { label: "Kabak", value: "zucchini" },
];

const yellow = [500];

const OrderForm = () => {
  const history = useHistory();

  return (
    <div>
      <div className="orderform-navlinks-container">
        <div className="orderform-navlinks-wrapper">
          <a href="">Ana Sayfa -</a>
          <a href="">Seçenekler -</a>
          <p href="">Sipariş Oluştur</p>
        </div>
      </div>
      <div className="description-container">
        <div className="item-heading-container">
          <h2 className="item-name-heading">Position Absolute Acı Pizza</h2>
        </div>
        <div className="numbers-container">
          <p className="price">85.50₺</p>
          <p></p>
          <p className="rating">4.9</p>
          <p className="bilinmeyen-sayi">200</p>
        </div>
        <div className="item-description-text">
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir
          </p>
        </div>
      </div>
      <Formik
        initialValues={{
          crust: "thin",
          size: "small",
          quantity: 1,
          ingredients: [],
          username: "",
          note: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Lütfen isminizi giriniz.";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            // Simulate API call with Axios
            const response = await axios.post(
              "https://reqres.in/api/pizza",
              values
            );
            // Log response
            console.log("Sipariş Özeti:", response.data);
            alert("Siparişiniz başarıyla alındı!");
            history.push("/success", { orderDetails: response.data });
            resetForm();
          } catch (error) {
            console.error("Sipariş gönderilirken bir hata oluştu:", error);
            alert(
              "Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz."
            );
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          isSubmitting,
        }) => (
          <>
            <form onSubmit={handleSubmit} className="form">
              <div className="size-and-crust-container">
                <FormControl>
                  <h3 className="form-heading">
                    Boyut Seç <span style={{ color: "#ce2829" }}> *</span>
                  </h3>
                  <RadioGroup
                    aria-labelledby="size-radio-buttons-group-label"
                    name="size"
                    onChange={handleChange}
                    value={values.size}
                  >
                    <FormControlLabel
                      value="small"
                      control={<Radio />}
                      label="Küçük"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="Orta"
                    />
                    <FormControlLabel
                      value="large"
                      control={<Radio />}
                      label="Büyük"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl sx={{ minWidth: "30%" }}>
                  <h3 className="form-heading">
                    Hamur Seç <span style={{ color: "#ce2829" }}> *</span>
                  </h3>
                  <Select
                    labelId="crust-select-label"
                    name="crust"
                    onChange={handleChange}
                    value={values.crust}
                  >
                    <MenuItem value="thin">İnce</MenuItem>
                    <MenuItem value="normal">Normal</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="ingredients-checkbox-container">
                <h3 className="form-heading" style={{ textAlign: "left" }}>
                  Ek Malzemeler
                </h3>
                <div className="item-description-text">
                  <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </div>
                <Grid container spacing={3}>
                  <FormGroup onChange={handleChange}>
                    <Grid container spacing={1}>
                      {INGREDIENTS_LIST.map(({ label, value }) => (
                        <Grid
                          size={4}
                          key={value}
                          display="flex"
                          justifyContent="left"
                          alignItems="left"
                        >
                          <FormControlLabel
                            control={<Checkbox
                              sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                  color: "#fdc913",
                                },
                                '& .MuiSvgIcon-root': { fontSize: 40 }

                              }}
                            /* icon={<span style={{
                              borderRadius: 3,
                              width: 40,
                              height: 40,
                              boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
                              backgroundColor: '#FAF7F2',
                              backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
                              '.Mui-focusVisible &': {
                                outline: '2px auto rgba(19,124,189,.6)',
                                outlineOffset: 2,
                              },
                              'input:hover ~ &': {
                                backgroundColor: '#ebf1f5',
                              },
                            }}
                            />} */
                            />}
                            label={label}
                            value={value}
                            onChange={handleChange}
                            name="ingredients"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Grid>
              </div>

              <div className="purchase-box">
                <div className="purchase-note-container">
                  <FormGroup onChange={handleChange}>
                    <h3 className="form-heading" style={{ textAlign: "left" }}>
                      İsim <span style={{ color: "#ce2829" }}> *</span>
                    </h3>
                    <TextField
                      name="username" // Add this name to associate with Formik state
                      placeholder=""
                      value={values.username || ""} // Bind to Formik state
                      onChange={handleChange} // Formik handles the change
                    />
                    {errors.username && touched.username && (
                      <div style={{ color: "red" }}>{errors.username}</div>
                    )}
                    <h3 className="form-heading" style={{ textAlign: "left" }}>
                      Sipariş Notu
                    </h3>
                    <TextField
                      name="note"
                      multiline
                      placeholder="Sipariş notunuzu buraya yazabilirsiniz."
                      value={values.note || ""}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <hr />
                <div className="purchase-section-container">
                  <div className="quantity-selector-container">
                    <FormGroup onChange={handleChange}>
                      <ButtonGroup disableElevation variant="contained">
                        <Button
                          className="quantity-button"
                          color="secondary"
                          size="large"
                          sx={{ width: "50px", height: "50px" }}
                          onClick={() => {
                            values.quantity > 1 &&
                              handleChange({
                                target: {
                                  name: "quantity",
                                  value: values.quantity - 1,
                                },
                              });
                          }}
                        >
                          -
                        </Button>
                        <div className="quantity-display">
                          {values.quantity}
                        </div>
                        <Button
                          className="quantity-button"
                          color="secondary"
                          sx={{ width: "50px", height: "50px" }}
                          onClick={() => {
                            values.quantity < 20 &&
                              handleChange({
                                target: {
                                  name: "quantity",
                                  value: values.quantity + 1,
                                },
                              });
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </FormGroup>
                  </div>
                  <div className="purchase-finalize-container">
                    <div className="prices-display-container">
                      <DynamicPriceDisplay
                        quantity={values.quantity}
                        ingredients={values.ingredients}
                        size={values.size}
                      />
                    </div>

                    <Button
                      variant="contained"
                      type="submit"
                      color="secondary"
                      size="large"
                      sx={{ width: "100%", height: "100%" }}
                      className="purchase-button"
                      disabled={
                        isSubmitting ||
                        Boolean(errors.username) ||
                        Boolean(errors.ingredients)
                      }
                    >
                      Sipariş oluştur
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
