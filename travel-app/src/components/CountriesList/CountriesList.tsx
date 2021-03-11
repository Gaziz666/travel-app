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
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { routs } from '../App/App';
import { tabs } from '../pages/country-page';

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const CountriesList: React.FC<Props> = ({ countriesLoaded, countries }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const countryService = new CountriesService();
    countryService.getAllCountry().then((countries) => {
      countriesLoaded(countries.data);
    });
  }, [countriesLoaded]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const renderCard = () => {
    return countries.map((country, index) => {
      return <CountryCard index={index} key={country._id} />;
    });
  };

  return (
    <div className={styles['country-list-wrapper']}>
      <div className={styles['explore-button']}>
        <Link to={`${routs.country}/${tabs.inspire}`}>
          {t('main-page.main-body.explore')}
        </Link>
      </div>
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
