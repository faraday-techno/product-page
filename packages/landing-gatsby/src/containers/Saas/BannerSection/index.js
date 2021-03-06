import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, { BannerObject } from './bannerSection.style';
import { DrawerContext } from 'common/src/contexts/DrawerContext';

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from 'common/src/assets/image/saas/banner/bannerObject.png';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
}) => {
  const { dispatch } = useContext(DrawerContext);
  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  const ButtonGroup = () => (
    <Fragment>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://chrome.google.com/webstore/detail/relay-auto-booker/ikdalniioengaefjkpkhfcgjemdfhpfg"
      >
        <Button title="DOWNLOAD" {...btnStyle} />
      </a>
      <AnchorLink
        href="#feature_section"
        offset="70"
        onClick={() => toggleDrawer}
      >
        <Button
          className="outlined"
          title="READ MORE"
          variant="outlined"
          {...outlineBtnStyle}
        />
      </AnchorLink>
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading content="Amazon Relay Digital Helper." {...title} />
              }
              description={
                <Text
                  content="Automate your daily workflow on Amazon Relay Dashboard by auto booking the loads. Helps you get best possible deals by auto refreshing the load board. Also, can be configured to auto book loads based on the set filters. Boost your productivity by automating mundane tasks of refreshing the browser. Let the extension do the work for you."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <Image src={BannerObject1} alt="BannerObject1" />
          <div className="dashboardWrapper">
            <Image
              className="wrapperImage"
              src={BannerObject2}
              alt="BannerObject2"
            />
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
};

export default BannerSection;
