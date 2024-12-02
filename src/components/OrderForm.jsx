import React from 'react';
import { Formik } from 'formik';
import { FormLabel, Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const OrderForm = () => (
    <div>
        <Formik
            initialValues={{ crust: 'Thin', size: 'small' }}
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
            }) => (
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel id="size-radio-buttons-group-label">Boyut</FormLabel>
                        <RadioGroup
                            aria-labelledby="size-radio-buttons-group-label"
                            name="size"
                            onChange={handleChange}
                            value={values.size}

                        >
                            <FormControlLabel value="small" control={<Radio />} label="Küçük" />
                            <FormControlLabel value="medium" control={<Radio />} label="Orta" />
                            <FormControlLabel value="large" control={<Radio />} label="Büyük" />
                        </RadioGroup>
                    </FormControl>
                    {/* {errors.email && touched.email && errors.email} */}

                    <FormControl fullWidth>
                        <InputLabel id="crust-select-label">Hamur Seçimi</InputLabel>
                        <Select
                            labelId="crust-select-label"
                            name="crust"
                            onChange={handleChange}
                            value={values.crust}
                        >
                            <MenuItem value="Thin">İnce</MenuItem>
                            <MenuItem value="Normal">Kalın</MenuItem>
                        </Select>
                    </FormControl>

                    <button type="submit" disabled={isSubmitting}>
                        Sipariş oluştur
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default OrderForm;