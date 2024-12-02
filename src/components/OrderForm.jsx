import React from 'react';
import { Formik } from 'formik';
import { ButtonGroup, Button, FormGroup, Checkbox, FormLabel, Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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
            initialValues={{ crust: 'thin', size: 'small' }}
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
                <>
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
                                <MenuItem value="thin">İnce</MenuItem>
                                <MenuItem value="normal">Normal</MenuItem>
                            </Select>
                        </FormControl>

                        <FormGroup onChange={handleChange}>
                            {INGREDIENTS_LIST.map(({ label, value }) => (
                                <FormControlLabel name="ingiridients" key={value} control={<Checkbox />} label={label} value={value} />
                            ))}
                        </FormGroup>

                        <FormGroup onChange={handleChange}>
                            <ButtonGroup
                                disableElevation
                                variant="contained"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                            </ButtonGroup>
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