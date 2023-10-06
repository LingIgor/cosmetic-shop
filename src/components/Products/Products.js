import ProductModal from 'components/Modal/ModalProduct/ModalProduct';
import React, { useState } from 'react';


export const Products = ({el}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }; 


  const closeModal = () => {
    setIsModalOpen(false)
  }

  const {name, price, volume, img, category} =  el
  return (
    <div style={{ width: '270px', height: '350px', position:"relative", cursor:"pointer"}} onClick={openModal}>
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

      {isModalOpen ? (
          <ProductModal  el={el} closeModal={closeModal}/>
        ) : (
          <></>
        )}
    </div>
  );
};
