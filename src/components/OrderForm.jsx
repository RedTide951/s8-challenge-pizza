import React from "react";
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

const OrderForm = () => (
  <div>
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
          resetForm(); // Reset form after successful submission
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

              <FormControl sx={{ minWidth: 200 }}>
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
                          control={<Checkbox />}
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
                    İsim
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
                      <div className="quantity-display">{values.quantity}</div>
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
                    <h3 className="form-heading" style={{ textAlign: "left" }}>
                      Sipariş Toplamı
                    </h3>
                    <div className="secimler-container">
                      <p className="secimler-text">Seçimler</p>
                      <p className="secimler-text">25.00</p>
                    </div>
                    <div className="toplam-container">
                      <p className="toplam-text">Toplam</p>
                      <p className="toplam-text">110.50</p>
                    </div>
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

export default OrderForm;
