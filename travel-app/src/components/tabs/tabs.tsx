import React, { useEffect } from 'react';
import styles from './tabs.module.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import * as actions from '../../actions/actions-country';
import { Countries, CountriesStateType } from '../../reducers/country-reducer';
import CountriesService from '../../services/countries-service';
import { RootStateType } from '../../reducers/root-reducer';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
  component?: any;
  to?: string;
}

function LinkTab(props: LinkTabProps) {
  return <Tab className={styles.myTab} component="a" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>,
  ) => actions.CountriesLoadedActionType;
};

type Props = CountriesStateType & MapDispatchToProps;

const NavTabs: React.FC<Props> = ({
  countriesLoaded,
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

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} ${styles.tabs}`}>
      <AppBar position="static" className={styles.tabs}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
          textColor="primary"
          className={styles.tabs}
        >
          <LinkTab
            label={t('country-page.tabs.first')}
            component={Link}
            to="/country/inspire"
            {...a11yProps(0)}
          />
          <LinkTab
            label={`${t('country-page.tabs.second')} ${
              countries[selectedCountryIndex]
                ? countries[selectedCountryIndex].translations[selectedLanguage]
                    .name
                : ''
            }`}
            component={Link}
            to={`/country/introducing/${
              countries[selectedCountryIndex]
                ? countries[selectedCountryIndex].translations[selectedLanguage]
                    .name
                : ''
            }`}
            {...a11yProps(1)}
          />
          <LinkTab
            label={t('country-page.tabs.third')}
            component={Link}
            to="/country/while"
            {...a11yProps(2)}
          />
          <LinkTab
            label={t('country-page.tabs.fourth')}
            component={Link}
            to="/country/map"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Inspire
      </TabPanel>
      <TabPanel value={value} index={1}>
        Introducing
      </TabPanel>
      <TabPanel value={value} index={2}>
        While you’re there
      </TabPanel>
      <TabPanel value={value} index={3}>
        Map
      </TabPanel>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(NavTabs);
