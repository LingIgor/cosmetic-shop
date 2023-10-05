import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledContainer = styled.div`
  min-width: 400px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledField = styled(Field)`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const RegistrForm = ({ onRegistr, onSwitchToRegister }) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <StyledContainer>
      <h2>Registration</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledForm>
          <StyledField
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <StyledErrorMessage name="username" component="div" />
          <StyledField
            type="email"
            id="email"
            name="email"
            placeholder="email"
          />
          <StyledErrorMessage name="email" component="div" />

          <StyledField
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <StyledErrorMessage name="password" component="div" />

          <StyledButton type="submit">Registration</StyledButton>
        </StyledForm>
      </Formik>
      <p style={{ fontSize: '16px' }}>
        Are you already registered?
        <StyledButton type="button" onClick={onSwitchToRegister}>
          Login
        </StyledButton>
      </p>
    </StyledContainer>
  );
};

export default RegistrForm;
