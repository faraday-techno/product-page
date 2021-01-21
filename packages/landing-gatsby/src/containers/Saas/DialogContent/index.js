import React, { useState, useRef } from 'react';
import { checkCircle } from 'react-icons-kit/fa/checkCircle';
import { timesCircle } from 'react-icons-kit/fa/timesCircle';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { copy } from 'react-icons-kit/fa/copy';
import Box from 'common/src/components/Box';
import Link from 'common/src/components/Link';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { TextWrapper, LicenseTextarea } from './dialogContent.style';

const SUCCESS_MESSAGES = {
  title: 'Congratulations!',
  description:
    'Here is your license code, please copy license code, navigate to the relay tab and click extension icon to activate your license.',
  subtitle:
    'Attention: You can always find your license number under your account managment under the name "Billing ID" in your paypal account. Please bookmark below link for easier access.',
  icon: checkCircle,
  iconColor: 'green',
};
const FAILURE_MESSAGES = {
  title: 'Something went wrong...',
  description: 'There was a problem encountered during the transaction.',
  subtitle:
    'Make sure you are connected to the network, if issue persists, please give it a some time and try again later. ',
  icon: timesCircle,
  iconColor: 'lightcoral',
};

export default function DialogContent({
  row,
  col,
  titleSyle,
  descriptionStyle,
  subTitleStyle,
  licenseWrapperStyle,
  success,
  subscriptionID,
}) {
  const [copySuccess, setCopySuccess] = useState(null);
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <Box {...row}>
      <Box {...col}>
        <Heading
          content={`${
            success ? SUCCESS_MESSAGES.title : FAILURE_MESSAGES.title
          }`}
          {...titleSyle}
        />
        <Icon
          style={{
            margin: '10px',
            color: `${
              success ? SUCCESS_MESSAGES.iconColor : FAILURE_MESSAGES.iconColor
            }`,
          }}
          icon={success ? SUCCESS_MESSAGES.icon : FAILURE_MESSAGES.icon}
          size={'46'}
        />
        <Text
          content={`${
            success
              ? SUCCESS_MESSAGES.description
              : FAILURE_MESSAGES.description
          }`}
          {...descriptionStyle}
        />
        {success ? (
          <Box {...licenseWrapperStyle}>
            <LicenseTextarea
              ref={textAreaRef}
              readOnly
              value={subscriptionID}
              disabled
              cols="13"
            ></LicenseTextarea>
            <Icon
              style={{
                paddingLeft: '8px',
                cursor: 'pointer',
                color: `${copySuccess ? 'green' : '#000'}`,
              }}
              onClick={copyToClipboard}
              icon={copy}
              size={'20'}
            />
          </Box>
        ) : null}
        <TextWrapper>
          <Text
            as={'span'}
            content={`${
              success ? SUCCESS_MESSAGES.subtitle : FAILURE_MESSAGES.subtitle
            }`}
            {...subTitleStyle}
          ></Text>
          {success ? (
            <Link
              target="_blank"
              href={`${process.env.GATSBY_PAYPAL_ACCOUNT_MANAGEMENT}/myaccount/autopay/connect/${subscriptionID}`}
            >
              {'PayPal Settings'}
            </Link>
          ) : null}
        </TextWrapper>
      </Box>
    </Box>
  );
}

DialogContent.propTypes = {
  response: PropTypes.object,
};

DialogContent.defaultProps = {
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: [400, 400, 500, 570],
    width: [350, 450, 600, 800],
  },
  // feature col default style
  col: {
    width: [400, 400, 500, 500],
    padding: ['20px', '20px', '20px', '20px'],
    margin: [],
    flexBox: true,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleSyle: {
    fontSize: ['34px', '34px', '34px', '38px', '48px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '3',
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '3',
  },
  subTitleStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: '#5d646d',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '3',
  },
  licenseWrapperStyle: {
    flexBox: true,
    alignItems: 'center',
    mb: '2',
  },
};
