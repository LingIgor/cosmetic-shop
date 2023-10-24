import React from 'react';


import {  RecomBox, RecomList } from './RecomandationSection.styled';
import { productsList } from 'helpers/products';
import { Products } from 'components/Products/Products';



export const RecomendationSection = () => {


  const bestProducts = productsList.filter(product => product.best === true);

 


  return (
    <RecomBox>
      <div>
        <h2>Бестселлеры</h2>
        <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <button>Смотреть все</button>
      </div>
      <RecomList>
      {bestProducts.map((el)=> (        
        <Products key={el.id} el={el}/>         
      ))}  
      </RecomList>
    </RecomBox>
  );
};
