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
  countrySelect: (value: string) => actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const TimeWidget: React.FC<Props> = ({
  countriesLoaded,
  countrySelect,
  countries,
  selectedCountryId,
  selectedLanguage,
}) => {
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);
  
  const [timeAndDate, setTimeAndDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');

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
    timeZone: setTimeZone(countries[selectedCountryId] ? countries[selectedCountryId].timeZone : ''),
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  // const timeZone = countries[selectedCountryId] ? countries[selectedCountryId].timeZone : '';
  const locale = countries[selectedCountryId] ? countries[selectedCountryId].translations[selectedLanguage].timeFormat : '';

  // console.log(new Date().toLocaleDateString("en-US", options));
  // console.log(countries);

  return (
    <div className={classes.time__wraper}>
      <div className={classes.time}>
        {countries[+selectedCountryId]
          ? countries[+selectedCountryId].translations[selectedLanguage].name
          : ""}{" "}
        Local time{" "}
      </div>
      <div className={classes.date}>
            {timeAndDate.toLocaleDateString(locale, options)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(TimeWidget);
