import React from 'react';
import { Link } from 'react-router-dom';
import foto from '../../../images/MainSectionFoto1.png';
import { Item, TextBox, RecomBox, RecomList } from './RecomandationSection.styled';

const best = [
  {
    img: foto,
    title: 'hight',
    text: 'Крем для лиця',
  },
  {
    img: foto,
    title: 'hight',
    text: 'Крем для лиця',
  },
  {
    img: foto,
    title: 'hight',
    text: 'Крем для лиця',
  },
  {
    img: foto,
    title: 'hig',
    text: 'Крем для лиця',
  },
];

export const RecomendationSection = () => {
  return (
    <RecomBox>
      <div>
        <h2>Бестселлеры</h2>
        <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <button>Смотреть все</button>
      </div>
      <RecomList>
        {best.map(({ img, title, text }, index) => {
          return (
            <Item key={index}>
              <img src={img} alt="foto" />
              <TextBox>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link>Детальніше</Link>
              </TextBox>
            </Item>
          );
        })}
      </RecomList>
    </RecomBox>
  );
};
