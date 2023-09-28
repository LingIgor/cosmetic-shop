import React from 'react';
import { Link } from 'react-router-dom';
import foto from '../../../images/MainSectionFoto1.png';
import { Item, TextBox } from './RecomandationSection.styled';

export const RecomendationSection = () => {
  return (
    <div style={{ display: 'flex', marginTop: '210px', padding: '0 28px', alignItems: "center" }}>
      <div>
        <h2>Бестселлеры</h2>
        <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <button>Смотреть все</button>
      </div>
      <ul style={{ display: 'flex', gap: '30px' }}>
        <Item>
          <img src={foto} alt="foto" />
          <TextBox>
            <h3>Hight</h3>
            <p>Крем для лиця</p>
            <Link>Детальніше</Link>
          </TextBox>
        </Item>
        <Item>
          <img src={foto} alt="foto" />
          <TextBox>
            <h3>Hight</h3>
            <p>Крем для лиця</p>
            <Link>Детальніше</Link>
          </TextBox>
        </Item>
        <Item>
          <img src={foto} alt="foto" />
          <TextBox>
            <h3>Hight</h3>
            <p>Крем для лиця</p>
            <Link>Детальніше</Link>
          </TextBox>
        </Item>
        <Item>
          <img src={foto} alt="foto" />
          <TextBox>
            <h3>Hight</h3>
            <p>Крем для лиця</p>
            <Link>Детальніше</Link>
          </TextBox>
        </Item>
      </ul>
    </div>
  );
};
