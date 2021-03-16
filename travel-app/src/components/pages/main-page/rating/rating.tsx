import React, { useEffect } from 'react';
import ReactStars from 'react-stars';
import classes from './rating.module.css';
import { connect } from 'react-redux';
import { RootStateType } from '../../../../reducers/root-reducer'
import CountriesService from '../../../../services/countries-service';
import { Countries, CountriesStateType } from '../../../../reducers/country-reducer';
import * as actions from '../../../../actions/actions-country';

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
  countrySelect: (value: number) => actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const StarsRating: React.FC<Props> = ({
  countriesLoaded,
  countries,
  selectedCountryIndex,
  selectedLanguage,
  selectedPlace,
}) => {
  let rating = 0;
  useEffect(() => { });
  const currentPlace = countries[selectedCountryIndex].places[selectedPlace];
  const ratingLength = currentPlace.rating.length;
  const sumRating = currentPlace.rating.reduce((sum, item) => {
    return (sum += Number(item.score));
  }, 0);

  rating = ratingLength ? sumRating / ratingLength : 0;
  console.log('rating');
  const ratingChanged = (newRating: any) => {
    // setRating(newRating);
    console.log(newRating);
  };
  return (
    <div className={classes.rating}>
      <ReactStars
        className={classes.stars}
        count={5}
        onChange={ratingChanged}
        size={30}
        value={rating}
        // edit={false}
        edit={true} //может редактировать рейтинг
        color2={'#ffd700'}
      />
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(StarsRating);
