import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import yourData from '../../cityes/city.json';
// import * as Yup from 'yup';
import Select from 'react-select';

import {
  OrderFormContainer,
  FormGroup,
  Label,
  Input,
  CheckboxLabel,
  CheckboxInput,
  Button,
} from './Agreement.styled'; // Додайте або імпортуйте стилізовані компоненти з попереднього коду

const Agreement = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [citiesOptions, setCitiesOptions] = useState([]);


  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    region: selectedRegion,
    city: selectedCity,
    paymentMethod: 'card',
  };

  const regionOptions = yourData[0].regions.map(city => ({
    value: city.name,
    label: city.name,
  }));


  const handleRegionChange = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
    // Отримати міста для обраної області
    const selectedCities = yourData[0].regions
      .find(region => region.name === selectedRegion.value)?.cities || [];
      console.log(selectedCities)
    
    // Оновити опції для другого селекту
    const updatedCitiesOptions = selectedCities.map(city => ({
      value: city.name,
      label: city.name,
    }));
    setCitiesOptions(updatedCitiesOptions);

    // Очистити обране місто
    setSelectedCity('');
  };





  useEffect(() => {
    console.log('Data:', yourData[0].regions);
   
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {   
    values.region = selectedRegion.value;
    values.city = selectedCity.value;
    console.log('Form Data Submitted:', values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <OrderFormContainer>
          <FormGroup>
            <Label>Ім'я:</Label>
            <Field type="text" name="firstName" as={Input} />
          </FormGroup>

          <FormGroup>
            <Label>Фамілія:</Label>
            <Field type="text" name="lastName" as={Input} />
          </FormGroup>

          <FormGroup>
            <Label>Номер телефону:</Label>
            <Field type="tel" name="phoneNumber" as={Input} />
          </FormGroup>

          <FormGroup>
            <Label>Email:</Label>
            <Field type="email" name="email" as={Input} />
          </FormGroup>

          <FormGroup>
            <Label>Область:</Label>

            <Select
                value={selectedRegion}
                onChange={handleRegionChange}
                options={regionOptions}
              />
          </FormGroup>

          <FormGroup>
            <Label>Місто:</Label>

            <Select
                value={selectedCity}
                onChange={setSelectedCity}
                options={citiesOptions}
              />
          </FormGroup>

          <FormGroup>
            <CheckboxLabel>
              <Field
                type="checkbox"
                name="paymentMethod"
                id="paymentMethod"
                as={CheckboxInput}
              />
              Оплата на пошті
            </CheckboxLabel>
          </FormGroup>

          <Button type="submit">Замовити</Button>
        </OrderFormContainer>
      </Form>
    </Formik>
  );
};

export default Agreement;
