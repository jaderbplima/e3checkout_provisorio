export const actionTypes = {
  INC_SUBTOTAL: 'INC_SUBTOTAL',
  LOADING: 'LOADING',

  SHOW_USER_EDIT: 'SHOW_USER_EDIT',
  FINISH_USER_EDIT: 'FINISH_USER_EDIT',
  TOGGLE_USER_LOADING: 'TOGGLE_USER_LOADING',
  TOGGLE_USER_BUTTON_LOADING: 'TOGGLE_USER_BUTTON_LOADING'
}

export const incSubTotal = () => dispatch => {
  dispatch({type: actionTypes.LOADING})
  setTimeout(() => {
    dispatch({type: actionTypes.INC_SUBTOTAL})
  }, 1000)
}

export const showUserEdit = () => dispatch => {
  console.log('showEditUser')
  dispatch({type: actionTypes.TOGGLE_USER_LOADING})
  setTimeout(() => {
    dispatch({type: actionTypes.TOGGLE_USER_LOADING})
    dispatch({type: actionTypes.SHOW_USER_EDIT})
  }, 2000)
}

export const finishUserEdit = () => dispatch => {
  console.log('finishUserEdit')
  dispatch({type: actionTypes.TOGGLE_USER_BUTTON_LOADING})
  setTimeout(() => {
    dispatch({type: actionTypes.TOGGLE_USER_BUTTON_LOADING})
    dispatch({type: actionTypes.FINISH_USER_EDIT})
  }, 2000)
}