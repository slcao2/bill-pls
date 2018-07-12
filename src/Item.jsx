import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ quantity, name, price }) => (
  <li>
    {quantity}
    {name}
    {price}
  </li>
);

Item.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
};

Item.defaultProps = {
  quantity: 0,
  name: '',
  price: 0,
};

export default Item;
