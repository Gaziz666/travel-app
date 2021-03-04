import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import App from './components/App/App';
import ErrorBoundary from './components/error-boundary/error-boundary';
import CountriesService from './services/countries-service';
import { CountriesServiceProvider } from './components/countries-service-context/countries-service-context';

import store from './store';

const countriesService = new CountriesService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <CountriesServiceProvider value={countriesService}>
          <App />
        </CountriesServiceProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
