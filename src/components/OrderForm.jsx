import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import {
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormControl,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import DynamicPriceDisplay from "./DynamicPriceDisplay";
import "./OrderForm.css";
import CustomRadioGroup from "./CustomRadioGroup";
import StyledDropdown from "./StyledDropdown";
import pizzaImage from "../../Assets/Iteration-2-assets/pictures/form-banner.png";
import QuantitySelector from "./QuantitySelector";

const INGREDIENTS_LIST = [
  { label: "Pepperoni", value: "Pepperoni" },
  { label: "Sosis", value: "Sosis" },
  { label: "Kanada Jambonu", value: "Kanada Jambonu" },
  { label: "Tavuk Izgara", value: "Tavuk Izgara" },
  { label: "Soğan", value: "Soğan" },
  { label: "Domates", value: "Domates" },
  { label: "Mısır", value: "Mısır" },
  { label: "Sucuk", value: "Sucuk" },
  { label: "Jalepeno", value: "Jalepeno" },
  { label: "Sarımsak", value: "Sarımsak" },
  { label: "Biber", value: "Biber" },
  { label: "Ananas", value: "Ananas" },
  { label: "Kabak", value: "Kabak" },
];

const OrderForm = () => {
  const history = useHistory();

  const sizeOptions = [
    { label: "S", value: "small" },
    { label: "M", value: "medium" },
    { label: "L", value: "large" },
  ];

  const [priceDetails, setPriceDetails] = useState({
    totalPrice: 0,
    extrasPrice: 0,
  });

  const handlePriceChange = (totalPrice, extrasPrice) => {
    setPriceDetails({ totalPrice, extrasPrice });
  };

  return (
    <div>
      <section className="orderform-upper-section-wrapper">
        <img className="orderform-item-image" src={pizzaImage} alt="Pizza" />
        <div className="orderform-navlinks-container">
          <div className="orderform-navlinks-wrapper">
            <a href="">Ana Sayfa</a>
            <span>-</span>
            <a href="">Seçenekler</a>
            <span>-</span>
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
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir
            </p>
          </div>
        </div>
      </section>
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
            const orderDetails = {
              ...values,
              totalPrice: priceDetails.totalPrice, // Include total price
              extrasPrice: priceDetails.extrasPrice, // Include extras price
            };

            const response = await axios.post(
              "https://reqres.in/api/pizza",
              values
            );

            // Log response
            console.log("API Response Data:", response.data);
            console.log("Data with Price Calculated on frontend", orderDetails);
            history.push("/success", { orderDetails });
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
          setFieldValue,
        }) => (
          <>
            <form onSubmit={handleSubmit} className="form">
              <div className="size-and-crust-container">
                <FormControl>
                  <h3 className="form-heading">
                    Boyut Seç <span style={{ color: "#ce2829" }}> *</span>
                  </h3>
                  <CustomRadioGroup
                    name="size"
                    options={sizeOptions}
                    value={values.size}
                    onChange={setFieldValue}
                    aria-label="Pizza size selection"
                  />
                </FormControl>
                <FormControl sx={{ minWidth: "30%" }}>
                  <h3 className="form-heading">
                    Hamur Seç <span style={{ color: "#ce2829" }}> *</span>
                  </h3>
                  <StyledDropdown
                    name="crust"
                    onChange={handleChange}
                    value={values.crust}
                    aria-label="Crust selection"
                  />
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
                            control={
                              <Checkbox
                                sx={{
                                  color: "gray",
                                  "&.Mui-checked": {
                                    color: "#fdc913",
                                  },
                                  "& .MuiSvgIcon-root": { fontSize: 40 },
                                }}
                              />
                            }
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
                      aria-label="Order note"
                    />
                  </FormGroup>
                </div>
                <hr />
                <div className="purchase-section-container">
                  <div className="quantity-selector-container">
                    <h3 className="form-heading">Adet</h3>
                    <QuantitySelector
                      value={values.quantity}
                      onIncrement={() =>
                        values.quantity < 20 &&
                        handleChange({
                          target: {
                            name: "quantity",
                            value: values.quantity + 1,
                          },
                        })
                      }
                      onDecrement={() =>
                        values.quantity > 1 &&
                        handleChange({
                          target: {
                            name: "quantity",
                            value: values.quantity - 1,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="purchase-finalize-container">
                    <div className="prices-display-container">
                      <DynamicPriceDisplay
                        quantity={values.quantity}
                        ingredients={values.ingredients}
                        size={values.size}
                        onPriceChange={handlePriceChange}
                        aria-label="Price display"
                      />
                    </div>

                    <Button
                      variant="contained"
                      type="submit"
                      color="secondary"
                      size="large"
                      sx={{ width: "100%", height: "100%", fontSize: "1.3rem" }}
                      className="purchase-button"
                      disabled={
                        isSubmitting ||
                        Boolean(errors.username) ||
                        Boolean(errors.ingredients)
                      }
                      aria-label="Submit order"
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
