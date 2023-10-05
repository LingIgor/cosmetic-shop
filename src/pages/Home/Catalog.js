import React from 'react';
import Contacts from 'components/Contacts/Contacts';
import { SubscribeSection } from 'components/HomeSections/SubscribeSection/SubscribeSection';
import { CatalogList } from 'components/CatalogList/Catalog';

export const Catalog = () => {
  return (
    <>
    <h1>Catalog</h1>
    <CatalogList/>
      <SubscribeSection />
      <Contacts />
    </>
  );
};
