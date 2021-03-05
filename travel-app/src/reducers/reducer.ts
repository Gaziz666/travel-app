const initialState = {
  countries: [],
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case 'COUNTRIES_LOADED':
      return {
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
