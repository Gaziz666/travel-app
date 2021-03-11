import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import CountriesService from '../../services/countries-service';
import * as actions from '../../actions/actions-country';
import { Countries, CountriesStateType } from '../../reducers/country-reducer';
import CountryCard from '../countryCard/CountryCard';
import { RootStateType } from '../../reducers/root-reducer';
import styles from './CountriesList.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const CountriesList: React.FC<Props> = ({ countriesLoaded, countries }) => {
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };

  const renderCard = () => {
    return countries.map((country, index) => {
      return <CountryCard index={index} key={country._id} />;
    });
  };

  return (
    <div className={styles['country-list-wrapper']}>
      <div className={styles['explore-button']}>Explore</div>
      <div className={styles['country-list']}>
        <Slider {...settings}>{renderCard()}</Slider>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(CountriesList);
