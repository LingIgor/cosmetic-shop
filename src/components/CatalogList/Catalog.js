import React from 'react';
import { productsList } from 'helpers/products';
import { Products } from 'components/Products/Products';
import { CatalogBox } from './CatalogList.styled';


export const CatalogList = () => {

  return (
    <CatalogBox >
      {productsList.map((el)=> (        
        <Products key={el.id} el={el}/>         
      ))}          
    </CatalogBox>
  );
};
