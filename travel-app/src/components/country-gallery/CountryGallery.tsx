import React, {useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/actions-country";
import { Countries, CountriesStateType } from '../../reducers/country-reducer';
import { RootStateType } from '../../reducers/root-reducer';
import CountriesService from '../../services/countries-service';
import ImageGallery from 'react-image-gallery';
import classes from './country-gallery.module.css';


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
            <div className={classes.gallery__top}>
            <div className={classes.gallery__mainscreen}></div>
            <div className={classes.gallery__sidebar}>
                <div className={classes.description}>
               <h2 className={classes.title}>Colosseum in Rome</h2>
<p>The Colosseum in Rome is the largest and most famous 
amphitheater in the Roman world. Its construction was started by 
emperor Vespasian of the Flavian dynasty in 72 AD and was finished by his 
son Titus in 80 AD. The Colosseum was capable of holding some 50,000 spectators
 who could enter the building through no less than 80 entrances. Spectators were 
 protected from the rain and heat of the sun by sails called the “velarium”, that 
 was attached around the top of the attic</p>
                </div>
                <div className={classes.rating}></div>

            </div>
            </div>
            <div className={classes.gallery__bottom}>
            <div className={classes.gallery__thumbnails}>

            </div>
             <button> back </button>
             <button> forward </button>
            </div>

        </div>
       );
  };

  const mapStateToProps = (state: RootStateType) => {
    return state.countryState;
  };
  
  export default connect(mapStateToProps, actions)(CountryGallery);