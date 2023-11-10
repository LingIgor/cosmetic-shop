import React from 'react';
import { BackPhoto, TextBox, HistoryBox } from './HistorySection.styled';
import { Btn } from '../MainSection/MainSection.styled';

export const HistorySection = () => {
  return (
    <HistoryBox>
      <BackPhoto />
      <TextBox>
        <h2 style={{ marginBottom: '20px', fontSize: '35px' }}>
          “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для
          всех, кто хочет заботиться о себе и своем теле”{' '}
        </h2>
        <Btn>Наша історія</Btn>
      </TextBox>
    </HistoryBox>
  );
};
