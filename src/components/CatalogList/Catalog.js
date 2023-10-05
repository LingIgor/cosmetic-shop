import React from 'react';
import { productsList } from 'helpers/products';
import { Product } from 'components/Product/Product';

export const CatalogList = () => {
  return (
    <div style={{display:"flex", maxWidth:"1200px", flexWrap: "wrap",
    gap: "30px"}}>
      {productsList.map(el => (
        <Product key={el.id} el={el}/>
      ))}
    </div>
  );
};
