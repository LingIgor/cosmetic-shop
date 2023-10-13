import React from 'react';
import { BackPhoto } from './Advertising.styled';
import { Box, InformBox, AdvertisingBtn } from './Advertising.styled';

export const AdvertisingSection = () => {
  return (
    <Box>
      <BackPhoto />
      <InformBox>
        <h2>Встречайте весну вместе с нами</h2>
        <p>
          Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
        </p>
        <AdvertisingBtn> Подробнее</AdvertisingBtn>
      </InformBox>
    </Box>
  );
};
