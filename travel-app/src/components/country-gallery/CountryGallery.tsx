import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions-country";
import { Countries, CountriesStateType } from "../../reducers/country-reducer";
import { RootStateType } from "../../reducers/root-reducer";
import CountriesService from "../../services/countries-service";
import ImageGallery from "react-image-gallery";
import classes from "./country-gallery.module.css";
import pic1 from '../../assets/gallery/1.jpeg';
import pic2 from '../../assets/gallery/2.jpeg';
import pic3 from '../../assets/gallery/3.jpeg';
import pic4 from '../../assets/gallery/4.jpeg';
import pic5 from '../../assets/gallery/5.jpeg';
import pic6 from '../../assets/gallery/6.jpeg';

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

  const images = [
    {
      original:  pic1,
      thumbnail: pic1,
    },
    {
        original: pic2,
        thumbnail: pic2,
      },
      {
        original: pic3,
        thumbnail: pic3,
      },
      {
        original: pic4,
        thumbnail: pic4,
      },
      {
        original: pic5,
        thumbnail: pic5,
      },
      {
        original: pic6,
        thumbnail: pic6,
      },
  ];
  console.log(countries, 'gallery');

  return (
    <div className={classes.gallery__wrapper}>
      <div className={classes.gallery__top}>
        <div className={classes.gallery__mainscreen}>
            <ImageGallery items={images}/>
        </div>
        <div className={classes.gallery__sidebar}>
          <div className={classes.description}>
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
