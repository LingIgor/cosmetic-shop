import styled from 'styled-components';

export const ContactsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const FooterListSoc = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;
    font-size: 24px;

    a {
      color: #555;
      text-decoration: none;

      &:hover {
        color: #e44d26;
      }
    }
  }
`;

export const Address = styled.address`
  color: #555;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const ContactInfo = styled.p`
  display: flex;
  gap: 10px;
  color: #555;
  margin: 10px 0;

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
