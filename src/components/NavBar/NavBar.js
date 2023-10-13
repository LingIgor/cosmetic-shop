import React from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {CartCounter, CartIconContainer, IconLink, IconContainer, NavBarContainer} from "./NavBar.styled"

export const NavBar = ({ openModal, closeModal }) => {
  const { favorite, cart } = useSelector((state) => state);

  return (
    <NavBarContainer>
      <nav>
        <Link to="/">Домашня</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/delivery">Доставка і оплата</Link>
        <Link>Про нас</Link>
        <Link>Контакти</Link>
      </nav>
      <IconContainer>
        <IconLink>
          <CiUser size={25} onClick={() => openModal('CiUser')} />
        </IconLink>
        <IconLink>
          <CartIconContainer onClick={() => openModal('BsHandbag')}>
            <BsHandbag size={23} />
            {cart.length !== 0 && <CartCounter>{cart.length}</CartCounter>}
          </CartIconContainer>
        </IconLink>
        <IconLink>
          {favorite.length === 0 ? (
            <AiOutlineHeart size={25} />
          ) : (
            <AiFillHeart
              size={25}
              style={{ color: 'red' }}
              onClick={() => openModal('AiFillHeart')}
            />
          )}
        </IconLink>
      </IconContainer>
    </NavBarContainer>
  );
};








