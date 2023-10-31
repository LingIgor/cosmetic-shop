import styled from 'styled-components';
 
export const Container = styled.div`
  margin-top: 140px;

  @media (max-width: 767px) {     
    margin-top: 70px;
  }
  
  @media (min-width: 768px) and (max-width: 1023px){
  
    margin-top: 100px;
  }
`;

export const Title = styled.h2``;

export const List = styled.ul`
  display: flex;
  max-width: 1200px;
   gap: 30px;

   @media (max-width: 767px) {     
    
  max-width: 600px;
   gap: 15px;
  }
  
  @media (min-width: 768px) and (max-width: 1023px){
  
    display: flex;
  max-width: 900px;
   gap: 20px;
  }

`;

export const ListItem = styled.li`
  width: 100%;
`;