import React from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export const NavBar = ({ openModal, closeModal }) => {
  const { cart } = useSelector(state => state);

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to={'/catalog'}>Каталог</Link>
        <Link>Про нас</Link>
        <Link>Контакти</Link>
      </nav>
      <div style={{ display: 'flex' }}>
        <Link>
          <CiUser size={25} onClick={() => openModal('CiUser')} />
        </Link>
        <Link>
          <div style={{ position: 'relative' }} onClick={() => openModal('BsHandbag')}>
            <BsHandbag size={23}  />
            {cart.length !==0 &&  <span
              style={{
                position: 'absolute',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                background: 'red',
                display: 'flex',
                justifyContent: 'center',
                bottom: '-5px',
                right: '-3px',
              }}
            >
              {cart.length}
            </span>}
          </div>
        </Link>
      </div>
    </div>
  );
};
