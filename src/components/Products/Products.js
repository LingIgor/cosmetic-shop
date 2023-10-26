import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'redux/CartSlise/CartSlice';
import ModalProduct from 'components/Modal/ModalProduct/ModalProduct';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  addToFavorite,
  removeFromFavorite,
} from 'redux/FavoriteSlice/FavoriteSlice';
import { ProductCard, BtnAdd } from './Produst.styled';

export const Products = ({ el }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <AiFillHeart size={20} color="rgb(221 21 121)" />
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
          <BtnAdd
            onClick={e => {
              e.stopPropagation();
              addProduct(id);
            }}
          >
            Додати у кошик
          </BtnAdd>
        </div>

        {isModalOpen && <ModalProduct el={el} closeModal={closeModal} />}
      </ProductCard>
    </div>
  );
};
