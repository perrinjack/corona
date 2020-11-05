const counterReducer = (state = null, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return action.payload;
    case 'DECREMENT':
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
