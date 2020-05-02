const initialState = {
  location: ''
}

const updateNav = (state = initialState, action) => {
  if (action.type === 'UPDATE') {
    return {
      location: action.location
    }
  } else {
    return state
  }
}

export default updateNav
