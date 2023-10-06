
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductModal from 'components/Modal/ModalProduct/ModalProduct';

const ProductCard = styled.div`
  width: 270px;
  height: 350px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div.product-details {
    position: absolute;
    top: 82%;
    width: 250px;
    left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin: 0;
      }
    }
  }
`;

export const Products = ({el}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {name, price, volume, img, category} =  el

  const openModal = () => {
    setIsModalOpen(true);
  
  };

  const closeModal = () => {
    console.log("close your fucking modal")
    setIsModalOpen(false);
    
  };

  return (
    <ProductCard onClick={openModal}>
      <img src={img} alt='product' />
      <div className="product-details">
        <div>
          <h2>{name}</h2>
          <span>{price}грн</span>
        </div>
        <div>
          <p>{category}</p>
          <span>{volume}</span>
        </div>
      </div>

      {isModalOpen && <ProductModal el={el} closeModal={closeModal} />}
    </ProductCard>
  );
};














// import ProductModal from 'components/Modal/ModalProduct/ModalProduct';
// import React, { useState } from 'react';


// export const Products = ({el}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   }; 


//   const closeModal = () => {
//     setIsModalOpen(false)
//   }

//   const {name, price, volume, img, category} =  el
//   return (
//     <div style={{ width: '270px', height: '350px', position:"relative", cursor:"pointer"}} onClick={openModal}>
//       <img src={img} alt='product' style={{height:"100%"}}/>
//       <div style={{position:"absolute", top:"80%", width:"250px", left:"10px" }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between'}}>
//         <h2>{name}</h2>
//         <span>{price}грн</span>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <p>{category}</p>
//         <span>{volume}мл</span>
//       </div>
//       </div>

//       {isModalOpen ? (
//           <ProductModal  el={el} closeModal={closeModal}/>
//         ) : (
//           <></>
//         )}
//     </div>
//   );
// };
