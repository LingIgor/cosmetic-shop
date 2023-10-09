import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {RiDeleteBin5Line} from "react-icons/ri"
import { productsList } from 'helpers/products';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  width: 70vw;
  height: 80vh;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8); 
  position: relative;
  overflow: auto;
`;

const CartModal = ({ closeModal }) => {
  const [counters, setCounters] = useState({});

  const increaseCount = productId => {
    setCounters(prevCounters => ({
      ...prevCounters,
      [productId]: (prevCounters[productId] || 0) + 1,
    }));
  };

  const decreaseCount = productId => {
    setCounters(prevCounters => {
      const currentCount = prevCounters[productId] || 0;
      return {
        ...prevCounters,
        [productId]: currentCount > 1 ? currentCount - 1 : 1,
      };
    });
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
      console.log('yes');
    }
  };

  const totalSum = productsList
  .slice(-4)
  .reverse()
  .reduce((sum, el) => sum + el.price * (counters[el.id] || 1), 0);


  return createPortal(
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
        <div >
          <h1>Кошик</h1>
          <AiOutlineCloseCircle
            size={25}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          />
        </div>

      <div style={{display:"flex"}}>
      <ul
          style={{
            display: 'flex',
            width: '70%',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          {productsList
            .slice(-4)
            .reverse()
            .map(el => (
              <li key={el.id} style={{ width: '100%', display: 'flex', justifyContent: "space-between" }}>
                <img src={el.img} alt="product" style={{ width: '100px'}} />
                <div>
                  <div>
                    <h2>{el.name}</h2>
                    <p>{el.category}</p>
                    <span>{el.volume}</span>
                  </div>
                 
                </div>
                <div style={{display:"flex", height:"20px"}}>
                  <button
                    onClick={() => decreaseCount(el.id)}
                    disabled={counters[el.id] === 1}
                  >
                    -
                  </button>
                  <p> {counters[el.id] || 1}</p>
                  <button onClick={() => increaseCount(el.id)}>+</button>
                </div>
                <div>
                  <span>{el.price * (counters[el.id] || 1)}грн</span>                    
                  </div>
                  <RiDeleteBin5Line size={17}/>

              </li>
            ))}
        </ul>
        <div style={{width:"200px", height:"150px", background:"rgb(0 0 0 / 4%)"}}>
        <p>Загальна сума: {totalSum}</p>
        <button type='button'>Оформити замовлення</button>
        </div>
      </div>
        
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal-root-cart')
  );
};

export default CartModal;
