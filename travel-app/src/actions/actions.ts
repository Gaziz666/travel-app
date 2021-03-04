// export const exampleAction = () => ({ type: 'EXAMPLE_ACTION' });

// export const exampleIncrement = () => ({ type: 'EXAMPLE_INCREMENT' });

const countriesLoaded = (newCountries: any) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newCountries,
  };
};

export { countriesLoaded };
