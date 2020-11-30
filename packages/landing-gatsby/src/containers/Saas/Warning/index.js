import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/entypo/cross';

import Alert from 'common/src/components/Alert';
import Text from 'common/src/components/Text';
import Box from 'common/src/components/Box';

const data = [
  'Automate your daily workflow on Amazon Relay Dashboard by auto booking the loads. Helps you get best possible deals by auto refreshing the load board. Also, can be configured to auto book loads based on the set filters. Boost your productivity by automating mundane tasks of refreshing the browser. Let the extension do the work for you.',
];

const Warning = ({ textContainerStyle, text }) => {
  const [warnings, setWarnings] = useState(data);
  const onRemove = (index, e) => {
    e.stopPropagation();
    warnings.splice(index, 1);
    setWarnings([...warnings]);
  };
  return warnings.map((warning, index) => {
    return (
      <Fragment key={index}>
        <Alert>
          <>
            <span>
              <Icon
                icon={cross}
                size={18}
                onClick={(e) => onRemove(index, e)}
              />
            </span>
            <Box {...textContainerStyle}>
              <Text {...text} content={warning}></Text>
            </Box>
          </>
        </Alert>
      </Fragment>
    );
  });
};

// FaqSection style props
Warning.propTypes = {
  textContainerStyle: PropTypes.object,
  text: PropTypes.object
};

// FaqSection default style
Warning.defaultProps = {
  textContainerStyle: {
    ml: ['16px', '16px', '30px'],
    mr: ['16px', '16px', '30px'],
    mb: ['16px', '16px']
  },
  text: {
    fontSize: '14px'
  }
};

export default Warning;
