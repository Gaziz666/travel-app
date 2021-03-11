import React from 'react';
<<<<<<< HEAD
import CountryInfo from '../country-info/country-info';

const CountryPage: React.FC = () => {
  // return <div>Country Page</div>;
  return(
    <CountryInfo/>
  )
=======
import CenteredTabs from '../tabs/tabs';

const CountryPage: React.FC = () => {
  return (
    <React.Fragment>
      <CenteredTabs />
    </React.Fragment>
  );
>>>>>>> bb53cdcc6ba03d825336d2ce017a8ae6061b56a0
};

export default CountryPage;
