import React from 'react';


export const Product = ({el}) => {

  const {name, price, volume, img, category} =  el
  return (
    <div style={{ width: '270px', height: '350px', position:"relative"}}>
      <img src={img} alt='product' style={{height:"100%"}}/>
      <div style={{position:"absolute", top:"80%", width:"250px", left:"10px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <h2>{name}</h2>
        <span>{price}грн</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{category}</p>
        <span>{volume}мл</span>
      </div>
      </div>
    </div>
  );
};
