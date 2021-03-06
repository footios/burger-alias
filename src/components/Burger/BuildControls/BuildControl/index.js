import React from "react";
import classes from "./index.module.css";

// child of Buildcontrols
export default ({label, removed, added, disabled}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
      className={classes.Less}
      onClick={removed}
      disabled={disabled} 
    >
      Less
    </button>
    <button className={classes.More} onClick={added}>
      More
    </button>
  </div>
);


