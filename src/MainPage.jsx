import React, { Component } from 'react';

import { splitPayment } from './calculate';
import ItemList from './ItemList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      items: [],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ItemList items={items} />
      </div>
    );
  }
}

export default MainPage;
