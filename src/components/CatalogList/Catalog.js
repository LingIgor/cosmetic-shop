import React from 'react';
import { productsList } from 'helpers/products';
import { Products } from 'components/Products/Products';


export const CatalogList = () => {

 



  return (
    <div style={{display:"flex", maxWidth:"1200px", flexWrap: "wrap",
    gap: "30px"}}>
      {productsList.map((el)=> (        
        <Products key={el.id} el={el}/>        
        
      ))}




          
    </div>
  );
};
