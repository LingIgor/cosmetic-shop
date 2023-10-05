import React from 'react';

export const Product = () => {
  return (
    <div style={{ width: '270px', height: '350px' }}>
      <img />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Назва товару</h2>
        <span>500грн</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>категорія</p>
        <span>50мл</span>
      </div>
    </div>
  );
};
