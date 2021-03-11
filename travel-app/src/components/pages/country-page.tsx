import React from "react";

import CountryInfo from "../country-info/country-info";

import CenteredTabs from "../tabs/tabs";

const CountryPage: React.FC = () => {
  return (
    <React.Fragment>
      <CenteredTabs />
      <CountryInfo />
    </React.Fragment>
  );
};

export default CountryPage;
