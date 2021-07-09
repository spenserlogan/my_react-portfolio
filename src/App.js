import withRoot from './withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './views/ProductCategories';
import ProductHelp from './views/ProductHelp';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
// import ProductValues from './views/ProductValues';
// import ProductHowItWorks from './views/ProductHowItWorks';
import ProductCTA from './views/ProductCTA';
import AppAppBar from './views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductCTA />
      <ProductHelp />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
