import React from 'react';
import UKR from '../../images/SVG/Ukrposhta.png';
import NOVA from '../../images/SVG/nova-poshta.png';

export const Delivery = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '20px 200px',
        }}
      >
        <li
          style={{
            display: 'flex',
            width: '48%',
            marginBottom: '60px',
            texAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '60%' }}>
            <img src={UKR} alt="logo" height={80} />
            <h2>Укрпошта (кур'єр)</h2>
            <p>
              Доставка кур'єром компнії "Укрпошта" протягом 1-3 днів. При сумі
              замовлення до 399 грн - доставка всього 39 грн, понад 399 грн -
              безкоштовно. Мінімальна сума замовлення - 169 грн.
            </p>
          </div>
        </li>
        <li
          style={{
            marginBottom: '60px',
            display: 'flex',
            width: '48%',

            texAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '60%' }}>
            <img src={UKR} alt="logo" height={80} />
            <h2>Укрпошта</h2>
            <p>
              Доставка до відділення "Укрпошта" протягом 1-3 днів. При сумі
              замовлення до 249 грн - доставка всього 13 грн, понад 249 грн -
              безкоштовно. Мінімальна сума замовлення - 169 грн.
            </p>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
            width: '48%',
            marginBottom: '60px',
            texAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '60%' }}>
            <img src={NOVA} alt="logo" />
            <h2>Нова пошта (Самовивіз) </h2>
            <p>
              Доставка до відділення "Нова пошта". При сумі замовлення до 799
              грн - доставка всього 39 грн, понад 799 грн - безкоштовно.
            </p>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
            width: '48%',
            marginBottom: '60px',
            texAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '60%' }}>
            <img src={NOVA} alt="logo" />
            <h2>Укрпошта (поштомат)</h2>
            <p>
              Доставка до поштомату "Нова пошта". При сумі замовлення до 799 грн
              - доставка всього 39 грн, понад 799 грн - безкоштовно.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
