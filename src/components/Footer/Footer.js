import React from 'react';
import { FooterConteiner } from './Footer.styled';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <FooterConteiner>
      <div
        style={{
          padding: ' 40px 98px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #D1D1D1',
        }}
      >
        <div style={{ display: 'flex', gap: '70px' }}>
          <Link>COSMETING</Link>
          <ul style={{ display: 'flex', gap: '10px' }}>
            <li>
              <Link>Каталог</Link>
            </li>
            <li>
              <Link>О Нас</Link>
            </li>
            <li>
              <Link>Магазин</Link>
            </li>
            <li>
              <Link>Контакти</Link>
            </li>
          </ul>
        </div>

        <ul style={{ display: 'flex', gap: '10px' }}>
          <li>
            <a
              href="http//:google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} />
            </a>
          </li>
          <li>
            <a
              href="http//:google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={28} />
            </a>
          </li>
          <li>
            <a
              href="http//:google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          // height: '40px',
          background: '#F4F1ED',
          padding: ' 22px 98px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          color: '#959595',
          fontWeight: '600',
        }}
      >
        <p>Cosmeting &copy; 2023 Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </FooterConteiner>
  );
};
