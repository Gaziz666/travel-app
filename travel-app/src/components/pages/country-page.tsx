import React from 'react';
import Inspire from '../Inspire/Inspire';
import NavTabs from '../tabs/tabs';
import MapComponent from '../MapComponent/MapComponent';

export const tabs = {
  inspire: 'inspire',
  introducing: 'introducing',
  while: 'while',
  map: 'map',
};
type Props = any;

const CountryPage: React.FC<Props> = (props) => {
  const renderContent = () => {
    console.log(props);
    switch (props.match.params.id) {
      case tabs.inspire:
        return <Inspire />;
      case tabs.introducing:
        return <div>introduction</div>;
      case tabs.while:
        return <div>while</div>;
      case tabs.map:
        return <div>

          map</div>;
      default:
        return null;
    }
  };
  return (
    <React.Fragment>
      <NavTabs history={props.history} />
      {renderContent()}
      <MapComponent />
    </React.Fragment>
  );
};

export default CountryPage;
