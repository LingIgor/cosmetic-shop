import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { productsList } from 'helpers/products';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from 'redux/FavoriteSlice/FavoriteSlice';

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
  width: 50vw;
  height: 80vh;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  position: relative;
  overflow: auto;
`;

const ModalFavorite = ({ closeModal }) => { 
  const { favorite } = useSelector(state => state);
  const dispatch = useDispatch();
  const productsInFavorite = productsList.filter(product =>
    favorite.includes(product.id)
  );

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

  const RemoveProduct = id => {
    dispatch(removeFromFavorite(id));
  };

  return createPortal(
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
       {favorite !==0?  <div>
        <div>
          <h1>Улюблені</h1>
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

        <div style={{ display: 'flex' }}>
          <ul
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            {productsInFavorite.map(el => (
              <li
                key={el.id}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <img src={el.img} alt="product" style={{ width: '100px' }} />
                <div>
                  <div style={{ width: '200px' }}>
                    <h2>{el.name}</h2>
                    <p>{el.category}</p>
                    <span>{el.volume}</span>
                  </div>
                </div>
                <div>
                  <span>{el.price} UA</span>
                </div>
                <button
                  style={{
                    height: '25px',
                    width: '50px',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Кошик
                </button>

                <RiDeleteBin5Line
                  size={17}
                  onClick={() => RemoveProduct(el.id)}
                />
              </li>
            ))}
          </ul>
        </div>
        </div>: <div><h1>Sorry your favorite is empty</h1></div>}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal-root-favorite')
  );
};

export default ModalFavorite;
