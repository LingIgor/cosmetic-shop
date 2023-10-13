import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { productsList } from 'helpers/products';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from 'redux/FavoriteSlice/FavoriteSlice';
import {
  ModalWrapper,
  ModalContent,
  CloseIcon,
  Box,
  CartList,
  CartItem,
} from '../ModalCart/ModalCart.styled';

import { BoxText, AddToCart } from './ModalFavorite.styled';

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
        {favorite !== 0 ? (
          <div>
            <div>
              <h1>Улюблені</h1>
              <CloseIcon size={25} onClick={closeModal} />
            </div>

            <Box>
              <CartList>
                {productsInFavorite.map(el => (
                  <CartItem key={el.id}>
                    <img
                      src={el.img}
                      alt="product"
                      style={{ width: '100px' }}
                    />
                    <div>
                      <BoxText>
                        <h2>{el.name}</h2>
                        <p>{el.category}</p>
                        <span>{el.volume}</span>
                      </BoxText>
                    </div>
                    <div>
                      <span>{el.price} UA</span>
                    </div>
                    <AddToCart>Кошик</AddToCart>

                    <RiDeleteBin5Line
                      size={17}
                      onClick={() => RemoveProduct(el.id)}
                    />
                  </CartItem>
                ))}
              </CartList>
            </Box>
          </div>
        ) : (
          <div>
            <h1>Sorry your favorite is empty</h1>
          </div>
        )}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal-root-favorite')
  );
};

export default ModalFavorite;
