import React from 'react';
import style from "./button.module.css"
const Button = (props) => {
    return (
        <button {...props} className={style.Button}>
            {props.children}
        </button>
    );
};

export default Button;