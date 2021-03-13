import React, { useState, useEffect } from "react";
import { Countries, CountriesStateType } from "../../reducers/country-reducer";
import classes from "./time-widget.module.css";
import * as actions from "../../actions/actions-country";
import { connect } from "react-redux";
import { RootStateType } from "../../reducers/root-reducer";
import CountriesService from "../../services/countries-service";

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>
  ) => actions.CountriesLoadedActionType;
  countrySelect: (value: number )=> actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const TimeWidget: React.FC<Props> = ({
  countries,
  selectedCountryIndex,
  selectedLanguage,
}) => {

  
  const [timeAndDate, setTimeAndDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState(countries[selectedCountryIndex] ? countries[selectedCountryIndex].timeZone : '');

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  });

  const tick = () => setTimeAndDate(new Date());



  const options: Object = {
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: {timeZone},
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  console.log(countries)
  // const timeZone = countries[selectedCountryId] ? countries[selectedCountryId].timeZone : '';
  // const locale = countries[selectedCountryIndex] ? countries[selectedCountryIndex].translations[selectedLanguage].: '';

  // console.log(new Date().toLocaleDateString("en-US", options));
  // console.log(countries);

  return (
    <div className={classes.time__wraper}>
      <div className={classes.time}>
        {countries[selectedCountryIndex]
          ? countries[selectedCountryIndex].translations[selectedLanguage].name
          : ""}{" "}
        Local time{" "}
      </div>
      <div className={classes.date}>
            {timeAndDate.toLocaleDateString('en-US', options)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(TimeWidget);
