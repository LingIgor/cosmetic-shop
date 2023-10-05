import React from 'react';
import photo1 from '../../../images/Subscribe1.png';
import photo2 from '../../../images/Subscribe2.png';
import photo3 from '../../../images/Subscribe3.png';
import photo4 from '../../../images/Subscribe4.png';
import photo5 from '../../../images/Subscribe5.png';
import photo6 from '../../../images/Subscribe6.png';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const SubscribeSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '71px',
        marginTop: '140px',
      }}
    >
      <ul style={{ display: 'flex', width: '700px', flexWrap: 'wrap' }}>
        {photos.map((el, index) => (
          <li key={index}>
            <img src={el} alt="cosmetic" style={{ width: '233px' }} />
          </li>
        ))}
      </ul>

      <div style={{ width: '450px' }}>
        <h2>Присоединяйтесь к нам</h2>
        <p>
          Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях
          первыми
        </p>
        <button>Подписаться</button>
      </div>
    </div>
  );
};
