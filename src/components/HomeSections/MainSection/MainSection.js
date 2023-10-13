import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Title, AppContainer,MainSectionImg, MainSectionBox } from './MainSection.styled';
import mainFoto1 from '../../../images/MainSectionFoto1.png';
import mainFoto2 from '../../../images/MainSectionFoto2.png';


export const MainSection = () => {
  return (
    <MainSectionBox >
      <AppContainer />
      <div>
        <MainSectionImg src={mainFoto1} alt="mainFoto" />
        <MainSectionBox >
          <p>Уход за лицом</p>
          <Link>
            <FaLongArrowAltRight />
          </Link>
        </MainSectionBox>
      </div>

      <Title>
        <h1>COSMETING</h1>
        <p>Натуральная косметика для бережного ухода за кожей</p>
        <button >Подробнее</button>
      </Title>

      <div>
        <MainSectionImg src={mainFoto2} alt="MainFoto2" />
        <MainSectionBox >
          <p>Уход за телом</p>
          <Link>
            <FaLongArrowAltRight />
          </Link>
        </MainSectionBox>
      </div>
    </MainSectionBox>
  );
};
