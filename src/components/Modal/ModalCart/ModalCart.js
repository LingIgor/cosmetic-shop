import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { productsList } from 'helpers/products';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from 'redux/CartSlise/CartSlice';

import {
  ModalWrapper,
  ModalContent,
  CloseIcon,
  Box,
  CartList,
  CartItem,
  CartCounter,
  CartOrder,
  Order,
  BoxOrder,
  TrashIcon

} from './ModalCart.styled';

const ModalCart = ({ closeModal }) => {
  const [counters, setCounters] = useState({});
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  const productsInCart = productsList.filter(product =>
    cart.includes(product.id)
  );

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

  const RemoveProduct = id => {
    dispatch(removeFromCart(id));
  };

  const totalSum = productsInCart.reduce(
    (sum, el) => sum + el.price * (counters[el.id] || 1),
    0
  );

  return createPortal(
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
        <CloseIcon size={25} onClick={closeModal} />
        {cart.length !== 0 ? (
          <div>
            <div>
              <h1 style={{marginBottom:"40px"}}>Кошик</h1>
            </div>
            <Box>
              <CartList>
                {productsInCart.map(el => (
                  <CartItem key={el.id}>
                    <img src={el.img} alt="product" />
                    <div>
                      <div>
                        <h2 style={{marginBottom:"20px"}}>{el.name}</h2>
                        <p>{el.category}</p>
                        <span>{el.volume}</span>
                      </div>
                    </div>
                    <CartCounter>
                      <button
                      style={{width:"30px", height:"30px"}}
                        onClick={() => decreaseCount(el.id)}
                        disabled={counters[el.id] === 1}
                      >
                        -
                      </button>
                      <p> {counters[el.id] || 1}</p>
                      <button style={{width:"30px", height:"30px"}} onClick={() => increaseCount(el.id)}>+</button>
                    </CartCounter>
                    <div>
                      <span>{el.price * (counters[el.id] || 1)}грн</span>
                    </div>
                    <TrashIcon
                      size={17}
                      onClick={() => RemoveProduct(el.id)}
                    />
                  </CartItem>
                ))}
              </CartList>
              <CartOrder>
              <BoxOrder>
              <p>Загальна сума: </p>
                <span>{totalSum} ₴</span>
              </BoxOrder>
                <Order to={'/agreement'}>Оформити замовлення</Order>
              </CartOrder>              
            </Box>            
          </div>
        ) : (
          <div>
            <h1>Sorry your bag is empty</h1>
          </div>
        )}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal-root-cart')
  );
};

export default ModalCart;
