import React from 'react';
import classes from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';

const modal = props => {
  return <>
      <Backdrop show={props.show} closeBackrop={props.purchasingCancelled} />
      <div className={classes.Modal} style={{ transform: props.show ? 'transformY(0)' : 'transformY(-100vh)', opacity: props.show ? '1' : '0' }}>
        {props.children}
      </div>
    </>;
};

export default modal;
