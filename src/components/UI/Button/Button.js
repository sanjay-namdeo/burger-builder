import React from 'react';
import classes from './Button.module.css';

const button = props => {
    const styles = [classes.Button, classes[props.class]].join(' ');
    return <button className={styles} onClick={props.click}>
        {props.children}
      </button>;    
};

export default button;