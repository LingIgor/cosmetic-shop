import { Footer } from 'components/Footer/Footer';
import { Header } from '../Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/HomeSections/AdvertisingSection/Advertising.styled';

export const Layout = ({ openModal }) => {
  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  );
};
