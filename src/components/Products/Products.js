import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'redux/CartSlise/CartSlice';
import ModalProduct from 'components/Modal/ModalProduct/ModalProduct';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  addToFavorite,
  removeFromFavorite,
} from 'redux/FavoriteSlice/FavoriteSlice';

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

export const Products = ({ el }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalFavorite, setIsModalFavorite] = useState(false);
  const cart = useSelector(state => state.cart);
  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const { name, price, volume, img, category, id } = el;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('close your fucking modal');
    setIsModalOpen(false);
  };

  const addProduct = id => {
    if (cart.includes(id)) {
      return;
    }
    dispatch(addToCart(id));
  };

  const toggleFavorite = id => {
    if (favorite.includes(id)) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <ProductCard onClick={openModal}>
        <img src={img} alt="product" />
        <button
          type="button"
          style={{
            position: 'absolute',
            zIndex: '1',
            right: '0',
            top: '5px',
            border: 'none',
            background: 'inherit',
          }}
          onClick={e => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
        >
          {favorite.includes(id) ? (
            <AiFillHeart size={20} color="red" />
          ) : (
            <AiOutlineHeart size={20} color="black" />
          )}
        </button>
        <div className="product-details">
          <div>
            <h2>{name}</h2>
            <span>{price}грн</span>
          </div>
          <div>
            <p>{category}</p>
            <span>{volume}</span>
          </div>
          <button
            onClick={e => {
              e.stopPropagation();
              addProduct(id);
            }}
          >
            Додати у кошик
          </button>
        </div>

        {isModalOpen && <ModalProduct el={el} closeModal={closeModal} />}
      </ProductCard>
    </div>
  );
};
