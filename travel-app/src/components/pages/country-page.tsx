import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../reducers/root-reducer';
import * as actions from '../../actions/auth-actions';
import Inspire from '../Inspire/Inspire';
import NavTabs from '../tabs/tabs';
import MapComponent from '../MapComponent/MapComponent';
import { AuthStateType } from '../../reducers/auth-reducer';
import CountryInfo from '../country-info/country-info';
import CurrencyWidget from '../currencyWidget/CurrencyWidget';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import TimeWidget from '../time-widget/TimeWidget';

export const tabs = {
  inspire: 'inspire',
  introducing: 'introducing',
  while: 'while',
  map: 'map',
};

type MapDispatchToProps = {
  mainPageIsOpen: (value: boolean) => actions.AuthStatusChangeActionType;
};
type Props = MapDispatchToProps & AuthStateType & any;

const CountryPage: React.FC<Props> = (props) => {
  useEffect(() => {
    props.mainPageIsOpen(false);
  }, [props.mainPageIsOpen]);

  const renderContent = () => {
    switch (props.match.params.id) {
      case tabs.inspire:
        return <Inspire />;
      case tabs.introducing:
        return <CountryInfo />;
      case tabs.while:
        return <div>while</div>;
      case tabs.map:
        return <div>map</div>;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <NavTabs history={props.history} />
      {renderContent()}
      {/* <MapComponent /> */}
      <div>
        <CurrencyWidget />
        <TimeWidget/>
        <WeatherWidget />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.authStatusState;
};

export default connect(mapStateToProps, actions)(CountryPage);
