import React from "react";
import { connect } from "react-redux";
import { RootStateType } from '../../reducers/root-reducer';
import * as actions from '../../actions/actions-country';
import CountriesService from '../../services/countries-service';


import classes from "./country-info.module.css";
import { Countries, CountriesStateType } from "../../reducers/country-reducer";
import { useEffect } from "react";

type MapDispatchToProps = {
    countriesLoaded: (
      value: Array<Countries>,
    ) => actions.CountriesLoadedActionType;
    countrySelect: (value: string) => actions.CountrySelectActionType;
  };
  type Props = MapDispatchToProps & CountriesStateType;

const CountryInfo: React.FC<Props> = ({
    countriesLoaded, 
    countrySelect,
    countries,
    selectedCountryId,
    selectedLanguage,
    // currentCountryIndex: 0,
    
    
}) => {

    useEffect(() => {
        const countryService = new CountriesService();
        countryService.getAllCountry().then((countries) => {
          countriesLoaded(countries.data);
        });
        
      }, [countriesLoaded]);
      
      console.log(countries, "countries")
      // <div>{countries[currentCountryIndex].translations[selectedLanguage].about}</div>

      
  return (
    <div className={classes["card-info-wrapper"]}>
      <div className={classes["card-info-about"]}>
        {/* <h2>About {countries[0].translations[selectedLanguage].name}</h2> */}
        {/* <div>{countries[0].translations[selectedLanguage].about}</div> */}
      </div>
      <div className={classes["card-info-sidebar"]}>
        {/* <img src={countries[0].flagUrl} alt="country-flag" className={classes.flag}/> */}
        <div className={classes["country-key-facts"]}>
          <div className={classes.area}>
            <div>Area: </div>
            {/* <div>{countries[0].translations[selectedLanguage].area}</div> */}
          </div>
          <div className={classes.population}>
              <div>Population:</div>
            {/* <div>{countries[0].translations[selectedLanguage].population}</div> */}
          </div>
          <div className={classes['population-density']}>
              <div>Population density:</div>
              {/* <div>{countries[0].translations[selectedLanguage].populationDensity} </div> */}
          </div>
        <div className={classes.capital}>
            <div>Capital</div>
            {/* <div>{countries[0].translations[selectedLanguage].capital}</div> */}
        </div>
        <div className={classes.government}>
            <div>Government:</div>
            {/* <div>{countries[0].translations[selectedLanguage].government}</div> */}
        </div>
        <div className={classes['head-of-state']}>
            <div>Head of State:</div>
            {/* <div>{countries[0].translations[selectedLanguage].headOfState}</div> */}
        </div>
        <div className={classes['head-of-government']}>
            <div>Head of government:</div>
            {/* <div>{countries[0].translations[selectedLanguage].headOfGovernment}</div> */}
        </div>
        
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
    return state.countryState;
};

export default connect(mapStateToProps, actions)(CountryInfo);
