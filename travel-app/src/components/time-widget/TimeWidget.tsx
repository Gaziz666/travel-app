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

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  useEffect(() =>{
    const timerId = setInterval(() => tick(), 1000 );
    return function cleanUp(){
      clearInterval(timerId);
    };
  });

  const tick = () =>setTime(new Date());

  const enLocalFormat = new Intl.DateTimeFormat("en-US").format;
  const ruLocalFormat = new Intl.DateTimeFormat("ru-RU").format;
  const ukLocalFormat = new Intl.DateTimeFormat("uk-UA").format;




//   const utcData = 
  let times = new Date();
  const format1 = enLocalFormat(times);
  const format2 = ruLocalFormat(times);
  const format3 = ukLocalFormat(times);
  console.log(format1, "HEY");
  console.log(format2, "HEY");
  console.log(format3, "HEY");
// console.log(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
// console.log(new Date().toLocaleString('en-US', { timeZone: 'Europe/Rome' }))
// console.log(new Date().toLocaleString('en-US', { timeZone: 'Turkey' }))
// console.log(new Date().toLocaleString('en-US', { timeZone: 'Japan' }))
// console.log(new Date().toLocaleString('en-US', { timeZone: 'Brazil/East' }), 'Бразилия')
console.log(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }), 'Шанхай')
console.log(countries)


const timer = () => {


}


  return (
    <div className={classes.time__wraper}>
      <div className={classes.time}> 
        {/* {countries[selectedCountryId]
          ? countries[selectedCountryId].translations[selectedLanguage].name
          : ""}{" "}
        Local time{" "} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(TimeWidget);
