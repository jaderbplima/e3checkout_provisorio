import { actionTypes } from '../actions/checkout';

const initialState = {
  subTotal: 20,
  discount: 0,
  shipment: 0,
  total: 0,
  loading: false
}

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_SUBTOTAL:
      console.log('INC_SUBTOTAL')
      return {
          ...state,
          subTotal: state.subTotal + 1,
          loading: false
      };
    case actionTypes.LOADING:
      console.log('LOADING')
      return {
        ...state,
        loading: true
      };
    default:
      return state
  }
}