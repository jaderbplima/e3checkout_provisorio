export const actionTypes = {
  INC_SUBTOTAL: 'INC_SUBTOTAL',
  LOADING: 'LOADING'
}

export const incSubTotal = () => dispatch => {
  dispatch({type: actionTypes.LOADING})
  setTimeout(() => {
    dispatch({type: actionTypes.INC_SUBTOTAL})
  }, 1000)
}