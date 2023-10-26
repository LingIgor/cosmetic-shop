import React from 'react';
import { FooterConteiner, FooterItemLink } from './Footer.styled';

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from './Footer.styled';
import {
  FooterBox,
  Box,
  FooterListLink,
  FooterListSoc,
  UnderFooter,
} from './Footer.styled';
import { Logo } from 'components/Header/Header.styled';

const mainLink = [
  { name: 'Каталог', rout: '/catalog' },
  { name: 'О Нас', rout: '/' },
  { name: 'Магазин', rout: '/catalog' },
  { name: 'Контакти', rout: '/' },
];

const socialLinks = [
  { href: 'http://google.com', icon: <Facebook size={25} /> },
  { href: 'http://google.com', icon: <Instagram size={30} /> },
  { href: 'http://google.com', icon: <Twitter size={25} /> },
];

export const Footer = () => {
  return (
    <FooterConteiner>
      <FooterBox>
        <Box>
          <Logo>COSMETING</Logo>
          <FooterListLink>
            {mainLink.map(({ name, rout }, index) => {
              return (
                <FooterItemLink key={index}>
                  <Link to={rout}>{name}</Link>
                </FooterItemLink>
              );
            })}
          </FooterListLink>
        </Box>
        <FooterListSoc>
          {socialLinks.map(({ href, icon }, index) => (
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
