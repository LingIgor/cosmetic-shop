import styled from 'styled-components';

export const CatalogBox = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;


  @media (max-width: 767px) {     
  max-width: 600px; 
  gap: 15px;
  margin-top: 20px;


  }
  
  @media (min-width: 768px) and (max-width: 1023px){
  
  max-width: 900px; 
  gap: 20px;
  margin-top: 20px;
   
  }

`;
