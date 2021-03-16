import React, { useEffect } from "react";
import ReactStars from "react-stars";
import styles from "./rating.module.css";
import { connect } from "react-redux";
import { RootStateType } from "../../reducers/root-reducer";
import { Countries, CountriesStateType } from "../../reducers/country-reducer";
import * as actions from "../../actions/actions-country";
import Popover from "@material-ui/core/Popover";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type MapDispatchToProps = {
  countriesLoaded: (
    value: Array<Countries>
  ) => actions.CountriesLoadedActionType;
  countrySelect: (value: number) => actions.CountrySelectActionType;
};
type Props = MapDispatchToProps & CountriesStateType;

const StarsRating: React.FC<Props> = ({
  countries,
  selectedCountryIndex,
  selectedPlace,
}) => {
  
  useEffect(() => {
    countRate();
  }, [countries]);

  const countRate = () => {
    const currentPlace = countries[selectedCountryIndex].places[selectedPlace];
    const ratingLength = currentPlace.rating.length;
    const sumRating = currentPlace.rating.reduce((sum, item) => {
      return (sum += Number(item.score));
    }, 0);
    console.log(currentPlace, ratingLength, sumRating);

    const rating = ratingLength ? sumRating / ratingLength : 0;
    return rating;
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      popover: {
        pointerEvents: "none",
      },
      paper: {
        padding: theme.spacing(1),
        backgroundColor: "rgba(60, 205, 215, 1)",
      },
    })
  );

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    return countries[selectedCountryIndex].places[selectedPlace].rating[0]
      .author === "string"
      ? null
      : setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const renderRating = () => {
    return (
      <div className={styles.rating}>
        {countries[selectedCountryIndex].places[selectedPlace].rating.map(
          (elem, index) => {
            if (index < 10) {
              return (
                <div className={styles.rating__lines}>
                  <div className={styles.rating__name}>{elem.author}</div>
                  <div className={styles.rating__scores}>
                    <ReactStars value={elem.score} edit={false} />
                  </div>
                </div>
              );
            }
          }
        )}
      </div>
    );
  };

  return (
    <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
      <ReactStars
        className={styles.stars__rating}
        count={5}
        size={30}
        value={countRate()}
        // edit={false}
        edit={true} //может редактировать рейтинг
        color2={"#ffd700"}
      />

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {renderRating()}
      </Popover>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return state.countryState;
};

export default connect(mapStateToProps, actions)(StarsRating);
