import React from 'react';
import { MainSection } from '../../components/HomeSections/MainSection/MainSection';
import { RecomendationSection } from 'components/HomeSections/RecomandationSection/RecomandationSection';
import { AdvertisingSection } from 'components/HomeSections/AdvertisingSection/Advertising';
import { CareSection } from 'components/HomeSections/CareSection/CareSection';
import { HistorySection } from 'components/HomeSections/HistorySection/HistorySection';
import { SubscribeSection } from 'components/HomeSections/SubscribeSection/SubscribeSection';

import Contacts from 'components/Contacts/Contacts';
// import LoginForm from 'components/Signin/Signin';
// import RegistrForm from 'components/Signup/Signup';

export const Home = () => {
  return (
    <>
      {/* <LoginForm />
      <RegistrForm /> */}
      <MainSection />
      <RecomendationSection />
      <AdvertisingSection />
      <CareSection />
      <HistorySection />
      <SubscribeSection />

      <Contacts />
    </>
  );
};
