const FETCH = 'simple/FETCH';
const FETCH_SUCCESS = 'simple/FETCH_SUCCESS';
const FETCH_FAIL = 'simple/FETCH_FAIL';

const FETCH_PRODUCT = 'simple/FETCH_PRODUCT';
const FETCH_PRODUCT_SUCCESS = 'simple/FETCH_PRODUCT_SUCCESS';
const FETCH_PRODUCT_FAIL = 'simple/FETCH_PRODUCT_FAIL';

const initialState = {
  items: [],
  products: []
};

// Reducer

export default function simpleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        items: action.result.data
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.result.data
      };
    default:
      return state;
  }
}

// Actions

export function fetchSimple() {
  return  {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: client => client.get('/api/simple')
  };
}


export function fetchProducts() {
  return  {
    types: [FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAIL],
    promise: client => client.get('/api/products')
  };
}
