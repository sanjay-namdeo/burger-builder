import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props => (
  <div className={props.show ? classes.Backdrop : null} onClick={props.closeBackrop}>{props.children}</div>
);

export default backdrop;
