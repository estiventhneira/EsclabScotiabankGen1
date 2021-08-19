const initialState = [1];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return state => [...state, action.id];
    case 'DELETE_CHARACTER':
      return state;
    default:
      break;
  }
};

export default reducer;
