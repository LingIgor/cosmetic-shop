import { Footer } from 'components/Footer/Footer';
import { Header } from '../Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = ({ openModal }) => {
  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
