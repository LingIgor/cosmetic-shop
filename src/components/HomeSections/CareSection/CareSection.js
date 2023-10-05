import React from 'react';
import { BackPhoto } from './CareSection.styled';

export const CareSection = () => {
  return (
    <div style={{ display: 'flex', marginTop: '140px', alignItems: 'center' }}>
      <div
        style={{
          width: '700px',
          height: '583px',
          background: '#F4F1ED',
          marginLeft: '-30px',
        }}
      >
        <div style={{ padding: '92px 204px 100px 100px' }}>
          <h2>Индивидуальный уход</h2>
          <p>
            Не всегда очевидно, какие элементы и минералы необходимы коже, а
            многочисленные эксперименты с разными средствами только ухудшают ее
            качество. Заполните анкету, и мы подберем уход, подходящий именно
            вам, учитывая ваш образ жизни, место жительства и другие факторы.{' '}
          </p>
          <button style={{ width: '163px', height: '41px' }}>Подробнее</button>
        </div>
      </div>
      <div
        style={{
          width: '670px',
          height: '451px',
          position: 'relative',
          left: '-150px',
        }}
      >
        <BackPhoto />
      </div>
    </div>
  );
};
