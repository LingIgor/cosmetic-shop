import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Title, AppContainer } from './MainSection.styled';
import mainFoto1 from '../../../images/MainSectionFoto1.png';
import mainFoto2 from '../../../images/MainSectionFoto2.png';

export const MainSection = () => {
  return (
    <div style={{ display: 'flex' }}>
      <AppContainer />
      <div>
        <img src={mainFoto1} alt="mainFoto" style={{ width: '330px' }} />
        <div style={{ display: 'flex' }}>
          <p>Уход за лицом</p>
          <Link>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>

      <Title>
        <h1>COSMETING</h1>
        <p>Натуральная косметика для бережного ухода за кожей</p>
        <button style={{width:"163px", height:"41px"}}>Подробнее</button>
      </Title>

      <div>
        <img src={mainFoto2} alt="MainFoto2" style={{ width: '330px' }} />
        <div style={{ display: 'flex' }}>
          <p>Уход за телом</p>
          <Link>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
