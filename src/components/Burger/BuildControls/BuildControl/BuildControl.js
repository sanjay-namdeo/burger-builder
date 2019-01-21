import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div>
      <button onClick={props.added} className={classes.More}>
        More
      </button>
    </div>
    <div>
      <button onClick={props.removed} className={classes.Less}>
        Less
      </button>
    </div>
  </div>
);

export default BuildControl;
