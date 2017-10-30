import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Container = (props) => {
  const { children } = props;
  return (
    <View style = {[{ paddingHorizontal: 40, paddingVertical: '30' }, props.style]}>
      { children }
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.object,
  style: PropTypes.array,
};

export default Container;
