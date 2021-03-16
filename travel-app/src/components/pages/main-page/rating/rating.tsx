import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactStars from "react-stars";
import classes from "./rating.module.css";
import { connect } from "react-redux";
import { RootStateType } from "../../../../reducers/root-reducer";
import CountriesService from "../../../../services/countries-service";
import { Countries, CountriesStateType } from "../../../../reducers/country-reducer";
import * as actions from "../../../../actions/actions-country";
import { useState } from "react";

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>
  ) => actions.CountriesLoadedActionType;
  countrySelect: (value: number) => actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const StarsRating: React.FC<Props> = ({
  countriesLoaded,
  countries,
  selectedCountryIndex,
  selectedLanguage,
}) => {
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating: any) => {
    setRating(newRating);
    console.log(newRating)
  }
  return (
    <div className={classes.rating}>
      <ReactStars className={classes.stars}
        count={5}
        onChange={ratingChanged}
        size={30}
        value={rating}
        // edit={false}
        edit={true} //может редактировать рейтинг
        color2={"#ffd700"}
      />
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(StarsRating);
