import { actionTypes } from '../actions/checkout';

const initialState = {
  subTotal: 20,
  loading: false,

  userSegment: {
    mobile: 'visible',
    view: 'disabled',
    loading: false,
    buttonLoading: false
  },
  shipmentSegment: {
    mobile: 'visible',
    view: 'disabled',
    loading: 'false',
    buttonLoading: 'false'
  },
  paymentSegment: {
    mobile: 'visible',
    view: 'disabled',
    loading: 'false',
    buttonLoading: 'false'
  }
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
    case actionTypes.SHOW_USER_EDIT:
      console.log('SHOW_USER_EDIT')
      return {
        ...state,
        userSegment: { view:'edit' }
      };
    case actionTypes.FINISH_USER_EDIT:
      console.log('FINISH_USER_EDIT')
      return {
        ...state,
        userSegment: { view:'enabled' }
      };
    case actionTypes.TOGGLE_USER_LOADING:
      console.log('TOGGLE_USER_LOADING')
      return {
        ...state,
        userSegment: { ...state.userSegment, loading: !state.userSegment.loading}
      };
    case actionTypes.TOGGLE_USER_BUTTON_LOADING:
        console.log('TOGGLE_USER_BUTTON_LOADING')
        return {
          ...state,
          userSegment: { ...state.userSegment, buttonLoading: !state.userSegment.buttonLoading}
        };

    default:
      return state
  }
}