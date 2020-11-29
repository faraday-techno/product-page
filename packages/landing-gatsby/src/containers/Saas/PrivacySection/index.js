import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

const PrivacySection = ({
  sectionWrapper,
  row,
  title,
  subtitle,
  description,
  textArea
}) => {
  return (
    <Box {...sectionWrapper} id="privacy">
      <Container>
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Privacy Policy & Disclosure" />
            <Text {...subtitle} content="Our Policy regarding data usage" />
            <Text
              {...description}
              content="We are committed to respecting and protecting the privacy rights of our users, and we created this Privacy Policy to give you notice of how your individual information will (and will not) be used by us. This Privacy Policy provides information on our policies and procedures regarding the use and disclosure of such information we receive from you. By using or accessing any of the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will use and process your information in the following ways. This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new Privacy Policy on this website. You are advised to consult this Privacy Policy regularly for any changes."
            />
            <Text
              {...subtitle}
              content="How do we use individual information?"
            />
            <Text
              {...description}
              content="We use individual information mainly to verifying the license as stated in permissions. We do not sell or share any Personally Identifiable Information or other information about our users to any third parties. If you contact us by email, we may keep a record of your contact information and correspondence, and may use your email address, and any information that you provide to us in your message, to respond to you."
            />
            <Text
              {...subtitle}
              content="What information do we collect and how do we collect it?"
            />
            <Text
              {...description}
              content="We do not collect nor store any personally identifiable user information. We may use your data to verify that you have a valid license as stated in permissions."
            />
            <Text
              {...subtitle}
              content="How do we store your personal information?"
            />
            <Text
              {...description}
              content="We do not store any user information in any external storage. We utilize browser storage for caching license information to reduce the number of calls we make to the identity server. Once extension is removed, information will automatically be destroyed."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PrivacySection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object
};

PrivacySection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    borderRadius: '5px',
    border: '1px solid #f2f4f7',
    backgroundColor: 'white'
  },
  textArea: {},
  title: {
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['13px', '13px', '13px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.8',
    textAlign: 'left',
    mb: ['35px']
  },
  subtitle: {
    fontWeight: '400',
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'headingColor',
    lineHeight: '2',
    textAlign: 'left',
    mb: ['6px']
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  }
};

export default PrivacySection;
