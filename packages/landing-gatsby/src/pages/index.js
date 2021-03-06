import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import BannerSection from '../containers/Saas/BannerSection';
import ServiceSection from '../containers/Saas/ServiceSection';
import FaqSection from '../containers/Saas/FaqSection';
import Footer from '../containers/Saas/Footer';
import PricingSection from '../containers/Saas/PricingSection';
import PrivacySection from '../containers/Saas/PrivacySection';
import PartnerSection from '../containers/Saas/PartnerSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <SEO title="Superfly | Relay Auto Booker" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <PricingSection />
          <PartnerSection />
          <FaqSection />
          <PrivacySection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
