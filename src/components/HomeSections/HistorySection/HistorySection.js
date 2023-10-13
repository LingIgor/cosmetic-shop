import React from 'react';
import { BackPhoto, TextBox, HistoryBox } from './HistorySection.styled';

export const HistorySection = () => {
  return (
    <HistoryBox>
      <BackPhoto />
      <TextBox>
        <h2>
          “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для
          всех, кто хочет заботиться о себе и своем теле”{' '}
        </h2>
        <button>Наша історія</button>
      </TextBox>
    </HistoryBox>
  );
};
