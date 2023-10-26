import React from 'react';
import { BackPhoto } from './Advertising.styled';
import { Box, InformBox } from './Advertising.styled';
import { Btn } from '../MainSection/MainSection.styled';

export const AdvertisingSection = () => {
  return (
    <Box>
      <BackPhoto />
      <InformBox>
        <h2>Встречайте весну вместе с нами</h2>
        <p style={{marginBottom:"20px"}}>
          Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
        </p>
        <Btn> Подробнее</Btn>
      </InformBox>
    </Box>
  );
};
