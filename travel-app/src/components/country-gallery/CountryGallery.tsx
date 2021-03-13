import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions-country";
import { Countries, CountriesStateType } from "../../reducers/country-reducer";
import { RootStateType } from "../../reducers/root-reducer";
import CountriesService from "../../services/countries-service";
import ImageGallery from "react-image-gallery";
import classes from "./country-gallery.module.css";

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
}) => {
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  const renderImages = () => {
  
      return countries[selectedCountryIndex].places.map((place) => {
        return ({ original: place.imgUrl, thumbnail: place.imgSmallUrl, originalTitle:place.translations[selectedLanguage].name,  description: place.translations[selectedLanguage].info });
      });
 
  };
  


  return (
    <div className={classes.gallery__wrapper}>
      <div className={classes.gallery__top}>
        <div className={classes.gallery__mainscreen}>
        <ImageGallery showBullets={true}  items={renderImages()} />
        </div>
        <div className={classes.gallery__sidebar}>
          <div className={classes.description}>
            {/* {originalTitle} */}
            {/* {countries[selectedCountryIndex].places[selectedItemIndex].translations[selectedLanguage].info} */}
            {/* <h2 className={classes.title}>{countries[selectedCountryIndex] ? countries[selectedCountryIndex].translations[selectedLanguage].}</h2> */}
            {/* {countries[selectedCountryIndex] ? countries[selectedCountryIndex].translations[selectedLanguage].} */}
          </div>
          <div className={classes.rating}></div>
        </div>
      </div>
    
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(CountryGallery);
