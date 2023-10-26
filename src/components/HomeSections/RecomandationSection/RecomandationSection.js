import React from 'react';


import {  RecomBox, RecomList } from './RecomandationSection.styled';
import { productsList } from 'helpers/products';
import { Products } from 'components/Products/Products';
import { Btn } from '../MainSection/MainSection.styled';



export const RecomendationSection = () => {


  const bestProducts = productsList.filter(product => product.best === true);

 


  return (
    <RecomBox>
      <div>
        <h2>Бестселлеры</h2>
        <p style={{marginBottom:"20px"}}>Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <Btn>Смотреть все</Btn>
      </div>
      <RecomList>
      {bestProducts.map((el)=> (        
        <Products key={el.id} el={el}/>         
      ))}  
      </RecomList>
    </RecomBox>
  );
};
