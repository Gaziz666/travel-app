// Example
// const reducer = (state = 0, action: { type: string; payload: any }) => {
//   switch (action.type) {
//     case 'EXAMPLE_ACTION':
//       return state + action.payload;
//     case 'EXAMPLE_INCREMENT':
//       return state + 1;
//     default:
//       return state;
//   }
// };

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
