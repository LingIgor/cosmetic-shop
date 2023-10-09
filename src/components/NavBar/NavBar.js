import React from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';

export const NavBar = ({ openModal, closeModal }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to={'/catalog'}>Каталог</Link>
        <Link>Про нас</Link>
        <Link>Контакти</Link>
      </nav>
      <div style={{ display: 'flex' }}>
        <Link>
          <CiUser size={25} onClick={() => openModal("CiUser")} />
        </Link>
        <Link>
          <BsHandbag size={23}  onClick={() => openModal("BsHandbag")}/>
        </Link>
      </div>
    </div>
  );
};
