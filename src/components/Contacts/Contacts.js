import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ContactsContainer,Title, ContactsList } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsContainer>
      <Title>Назва Контакти</Title>
      <address>
        <p>Адреса:</p>
        <p>        
          м.Одеса, <br /> вул. Пушкінська 12
        </p>
      </address>
      <p>Телефон:</p>
      <p> +380637451226</p>
      <p>Email:</p>
      <p>
        <a href="mailto:kosmetingsobaka@jamil.com">kosmeting@gmail.com</a>
      </p>

      <ContactsList>
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
      </ContactsList>
    </ContactsContainer>
  );
};

