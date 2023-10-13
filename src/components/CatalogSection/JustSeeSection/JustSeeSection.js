import { Products } from 'components/Products/Products';
import React from 'react';
import { Container, List, ListItem, Title } from './JustSeeSection.styled';
import { productsList } from 'helpers/products';

export const JustSeeSection = () => {
  return (
    <Container>
      <Title>Ви тільки що переглядали</Title>
      <List>
        {productsList
          .slice(-4)
          .reverse()
          .map((el) => (
            <ListItem key={el.id}>
              <Products el={el} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

