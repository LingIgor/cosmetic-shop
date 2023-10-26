import React from 'react';

import { SubscribeSection } from 'components/HomeSections/SubscribeSection/SubscribeSection';
import { CatalogList } from 'components/CatalogList/Catalog';
import { JustSeeSection } from 'components/CatalogSection/JustSeeSection/JustSeeSection';
import { Contacts } from 'components/Contacts/Contacts';

export const Catalog = () => {
  return (
    <>
      <h1>Каталог</h1>
      <CatalogList />
      <JustSeeSection />
      <SubscribeSection />
      <Contacts />
    </>
  );
};
