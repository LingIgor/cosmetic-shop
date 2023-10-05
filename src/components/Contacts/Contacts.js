import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ContactsContainer } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsContainer>
      <h2 style={{ fontSize: '32px' }}>Назва Контакти</h2>
      <address>
        <p>Адреса:</p>
        <p>
          {' '}
          м.Одеса, <br /> вул. Пушкінська 12
        </p>
      </address>
      <p>Телефон:</p>
      <p> +380637451226</p>
      <p>Email:</p>
      <p>
        <a href="mailto:kosmetingsobaka@jamil.com">kosmeting@gmail.com</a>
      </p>

      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <a href="http//:google.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25} />
          </a>
        </li>
        <li>
          <a href="http//:google.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={28} />
          </a>
        </li>
        <li>
          <a href="http//:google.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} />
          </a>
        </li>
      </ul>
    </ContactsContainer>
  );
};

export default Contacts;
