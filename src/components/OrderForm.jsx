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
  Input,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

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
      initialValues={{ crust: "thin", size: "small" }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Lütfen isminizi giriniz.";
        }
        return errors;
      }}
      // validate={values => {
      //     const errors = {};
      //     if (!values.email) {
      //         errors.email = 'Required';
      //     } else if (
      //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //     ) {
      //         errors.email = 'Invalid email address';
      //     }
      //     return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
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
              {/* {errors.email && touched.email && errors.email} */}

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
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </Grid>
            </div>

            <FormGroup onChange={handleChange}>
              <ButtonGroup disableElevation variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
              </ButtonGroup>
            </FormGroup>

            <FormGroup onChange={handleChange}>
              <h3>İsim</h3>
              <Input
                name="username" // Add this name to associate with Formik state
                placeholder="Type something…"
                value={values.username || ""} // Bind to Formik state
                onChange={handleChange} // Formik handles the change
              />
              {errors.username && touched.username && (
                <div style={{ color: "red" }}>{errors.username}</div>
              )}
              <h3>Sipariş Notu</h3>
              <Input
                name="note"
                multiline
                placeholder="Type something…"
                value={values.note || ""}
                onChange={handleChange}
              />
            </FormGroup>

            <button type="submit" disabled={isSubmitting}>
              Sipariş oluştur
            </button>
          </form>
        </>
      )}
    </Formik>
  </div>
);

export default OrderForm;
