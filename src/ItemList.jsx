import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ItemList = ({ items }) => (
  <ul>
    {items.map(item => <Item quantity={item.quantity} name={item.name} price={item.price} />)}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number,
    name: PropTypes.string,
    assignee: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number,
  })),
};

ItemList.defaultProps = {
  items: [],
};

export default ItemList;
