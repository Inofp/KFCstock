import React from 'react';
import classes from './MyButton.module.scss';

const MyButton = ({children, ...props}) => {
    return (
        <a {...props} className={classes.wave__btn}>
            <span className={classes.wave__btn__text}>{children}</span>
            <span className={classes.wave__btn__waves}></span>
        </a>
    );
};

export default MyButton;