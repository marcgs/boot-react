import ListComponent from 'component/ListComponent';
import {connect} from 'react-redux';
import {fetchSimple, fetchProducts} from 'reducers/simple';

export default connect(
  state => ({items: state.simple.items, products: state.simple.products}),
  {fetchSimple, fetchProducts}
)(ListComponent);
