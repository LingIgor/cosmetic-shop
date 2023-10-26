import React from 'react';
import { Facebook, Twitter, Instagram } from '../Footer/Footer.styled';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarker,
  FaViber,
  FaTelegram,
} from 'react-icons/fa';
import {
  ContactInfo,
  Address,
  FooterListSoc,
  ContactsList,
  Title,
  ContactsContainer,
} from './Contacts.styled';

const socialLinks = [
  { href: 'http://google.com', icon: <Facebook size={25} /> },
  { href: 'http://google.com', icon: <Instagram size={30} /> },
  { href: 'http://google.com', icon: <Twitter size={25} /> },
];

export const Contacts = () => {
  const handleAddressClick = () => {
    window.open(
      'https://www.google.com/maps?q=м.Одеса,вул.Пушкінська12',
      '_blank'
    );
  };

  return (
    <ContactsContainer>
      <Title>Наші Контакти</Title>

      <ContactInfo>
        <FaMapMarker />
        <Address onClick={handleAddressClick}>
          <p>Адреса: м.Одеса, вул. Пушкінська 12</p>
        </Address>
      </ContactInfo>
      <ContactInfo>
        <FaPhone />
        <a href="tel:+380637451226">+380637451226</a>
      </ContactInfo>
      <ContactInfo>
        <FaEnvelope />{' '}
        <a href="mailto:kosmetingsobaka@jamil.com">kosmeting@gmail.com</a>
      </ContactInfo>
      <ContactInfo>
        <FaViber />{' '}
        <a href="viber://chat?number=+380637451226">Viber: +380637451226</a>
      </ContactInfo>
      <ContactInfo>
        <FaTelegram /> <a href="https://t.me/LingIgor">Telegram: @LingIgor</a>
      </ContactInfo>
      <ContactsList>
        <FooterListSoc>
          {socialLinks.map(({ href, icon }, index) => (
            <li key={index}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </FooterListSoc>
      </ContactsList>
    </ContactsContainer>
  );
};
