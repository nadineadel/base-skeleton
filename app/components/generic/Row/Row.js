import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Row = (props) => {
  let tempStyles = props.style || {};
  tempStyles = { flexDirection: 'row', ...tempStyles };
  return (
    <View style= {tempStyles}>
      {props.children}
    </View>
  );
};

Row.propTypes = {
  children: PropTypes.object,
  style: PropTypes.array,
};

export default Row;
