import styled from "styled-components";


export const OrderFormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  margin: 0 auto;


  @media (max-width: 767px) {   
  padding: 14px;  
  min-width: 300px;
  margin: 0 auto;
  }
  
  @media (min-width: 768px) and (max-width: 1023px){
    padding: 18px;  
  min-width: 400px;
  margin: 0 auto;
  }

`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

 
  
  @media  (max-width: 1023px){
    margin-bottom: 12px;
  }

`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

 
  
  @media (max-width: 1023px){
    padding: 8px;
  }


`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  @media (max-width: 1023px){
    padding: 8px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const Button = styled.button`
  background-color: #ff69b4;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 1023px){
    padding: 8px 12px;
  }
`;
