import React from 'react';
import { FooterConteiner } from './Footer.styled';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  FooterBox,
  Box,
  FooterListLink,
  FooterListSoc,
  UnderFooter,
} from './Footer.styled';

const mainLink = [
  { name: 'Каталог', rout: '/catalog' },
  { name: 'О Нас', rout: '/' },
  { name: 'Магазин', rout: '/catalog' },
  { name: 'Контакти', rout: '/' },
];

const socialLinks = [
  { href: 'http://google.com', icon: <FaFacebook size={25} /> },
  { href: 'http://google.com', icon: <AiFillInstagram size={28} /> },
  { href: 'http://google.com', icon: <FaTwitter size={25} /> },
];

export const Footer = () => {
  return (
    <FooterConteiner>
      <FooterBox>
        <Box>
          <Link>COSMETING</Link>
          <FooterListLink>
            {mainLink.map(({ name, rout }, index) => {
              return (
                <li key={index}>
                  <Link to={rout}>{name}</Link>
                </li>
              );
            })}
          </FooterListLink>
        </Box>
        <FooterListSoc>
        {socialLinks.map(({href, icon}, index) => (
            <li key={index}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </FooterListSoc>
      </FooterBox>
      <UnderFooter>
        <p>Cosmeting &copy; 2023 Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </UnderFooter>
    </FooterConteiner>
  );
};
