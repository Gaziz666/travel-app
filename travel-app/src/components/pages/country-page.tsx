import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../reducers/root-reducer';
import * as actions from '../../actions/auth-actions';
import Inspire from '../Inspire/Inspire';
import NavTabs from '../tabs/tabs';
import { AuthStateType } from '../../reducers/auth-reducer';
import CountryInfo from '../country-info/country-info';
import CountryGallery from '../country-gallery/CountryGallery';

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
  }, []);

  const renderContent = () => {
    switch (props.match.params.id) {
      case tabs.inspire:
        return <Inspire />;
      case tabs.introducing:
        return <CountryInfo />;
      case tabs.while:
        return <CountryGallery/>;
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
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.authStatusState;
};

export default connect(mapStateToProps, actions)(CountryPage);
