import React from 'react';
import photo1 from '../../../images/Subscribe1.png';
import photo2 from '../../../images/Subscribe2.png';
import photo3 from '../../../images/Subscribe3.png';
import photo4 from '../../../images/Subscribe4.png';
import photo5 from '../../../images/Subscribe5.png';
import photo6 from '../../../images/Subscribe6.png';
import { SubMainBox, SubList, BoxText } from './SubscribeSection.styled';
import { Btn } from '../MainSection/MainSection.styled';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const SubscribeSection = () => {
  return (
    <SubMainBox>
      <SubList>
        {photos.map((el, index) => (
          <li key={index}>
            <img src={el} alt="cosmetic" />
          </li>
        ))}
      </SubList>

      <BoxText>
        <h2>Присоединяйтесь к нам</h2>
        <p style={{marginBottom:"20px"}}>
          Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях
          первыми
        </p>
        <Btn>Подписаться</Btn>
      </BoxText>
    </SubMainBox>
  );
};
