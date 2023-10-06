import { Products } from 'components/Products/Products';
import { productsList } from 'helpers/products';
import React from 'react';
// import { useState } from 'react';

export const JustSeeSection = () => {
  //   const [viewed, setViewed] = useState(productsList.slice(-4).reverse());

  return (
    <div style={{ marginTop: '140px' }}>
      <h2>Ви тільки що переглядали </h2>
      <ul
        style={{
          display: 'flex',
          maxWidth: '1200px',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {productsList
          .slice(-4)
          .reverse()
          .map(el => (
            <li key={el.id}>
            <Products  el={el}/>
            
            </li>
          ))}
      </ul>
    </div>
  );
};
