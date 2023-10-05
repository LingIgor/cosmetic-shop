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
          .map(({ id, name, price, category, img, volume }) => (
            <li key={id}>
              <div
                style={{
                  width: '270px',
                  height: '350px',
                  position: 'relative',
                }}
              >
                <img src={img} alt="product" style={{ height: '100%' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '80%',
                    width: '250px',
                    left: '10px',
                  }}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h2>{name}</h2>
                    <span>{price}грн</span>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p>{category}</p>
                    <span>{volume}мл</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
