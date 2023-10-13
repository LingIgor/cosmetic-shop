import React from 'react';
import {
  BackPhoto,
  ContentContainer,
  CareSectionContainer,
  BoxSection,
  ImageContainer
} from './CareSection.styled';

export const CareSection = () => {
  return (
    <CareSectionContainer>
      <BoxSection>
        <ContentContainer>
          <h2>Индивидуальный уход</h2>
          <p>
            Не всегда очевидно, какие элементы и минералы необходимы коже, а
            многочисленные эксперименты с разными средствами только ухудшают ее
            качество. Заполните анкету, и мы подберем уход, подходящий именно
            вам, учитывая ваш образ жизни, место жительства и другие факторы.{' '}
          </p>
          <button >Подробнее</button>
        </ContentContainer>
      </BoxSection>
      <ImageContainer
      
      >
        <BackPhoto />
      </ImageContainer>
    </CareSectionContainer>
  );
};
