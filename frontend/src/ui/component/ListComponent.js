import React, {Component} from 'react';

export default class ListComponent extends Component {
  render() {
    const products = this.props.products;
    const listProducts = products.map(({ name, amount, price }, index) => <li className='product' key={index}>
      <span className='info'>{name}</span> <span className='info'>{amount}</span> <span className='info'>{price}</span>
      </li>);

    return (
      <div>
        <h2>Products:</h2>
        <ul className='products'>
          {listProducts}
        </ul>
        <button onClick={this.props.fetchProducts}>
          Fetch
        </button>
      </div>
    );
  }
}
