const initState = {
  thin: false
}

const layoutReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU_WIDTH': {
      if (action.toggle === undefined) {
        return { thin: !state.thin }
      }
      return { thin: action.toggle }
    }
    default:
      return state
  }
}

export default layoutReducer

