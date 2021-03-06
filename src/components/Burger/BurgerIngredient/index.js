import React from "react";
import classes from "./index.module.css";
import PropTypes from "prop-types";

const burgerIngredient = ({type}) => {
    let ingredient = null;

    switch (type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }

// Reasons to use PropTypes:
// working on a project which is going to get used by other people,
// working on a third party library,
// working in a developer team.

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
