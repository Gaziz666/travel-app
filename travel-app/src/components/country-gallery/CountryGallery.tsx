import React, {useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/actions-country";
import { Countries, CountriesStateType } from '../../reducers/country-reducer';
import { RootStateType } from '../../reducers/root-reducer';
import CountriesService from '../../services/countries-service';
import ImageGallery from 'react-image-gallery';
import classes from './country-gallery.module.css';
import "~react-image-gallery/styles/css/image-gallery.css";


type MapDispatchToProps = {
    countriesLoaded: (
      value: Array<Countries>
    ) => actions.CountriesLoadedActionType;
    countrySelect: (value: number) => actions.CountrySelectActionType;
  };
  type Props = MapDispatchToProps & CountriesStateType;

  const CountryGallery: React.FC<Props> = ({
    countriesLoaded,
    countrySelect,
    countries,
    selectedCountryIndex,
    selectedLanguage,
  }) =>{
    useEffect(() => {
        const countryService = new CountriesService();
        countryService.getAllCountry().then((countries) => {
          countriesLoaded(countries.data);
        });
      }, [countriesLoaded]);
      
       return(
        <div className={classes.gallery__wrapper}>
            <div className={classes.sidebar}>
                <div className={classes.description}>
                {countries[selectedCountryIndex] ? countries[selectedCountryIndex].translations[selectedLanguage] : 'description of Sightseeing'}
                </div>
                <div className={classes.rating}></div>

            </div>

        </div>
       );
  };

  const mapStateToProps = (state: RootStateType) => {
    return state.countryState;
  };
  
  export default connect(mapStateToProps, actions)(CountryGallery);