import React from 'react';

const NoItems = ({ property }) => {
  return <p style={{...styles}}>No {property} available!</p>;
};

export default NoItems;

const styles = {
  paddingRight: 32,
  textAlign: 'center',
  color: "#6851ff",
  fontWeight: 700
};
