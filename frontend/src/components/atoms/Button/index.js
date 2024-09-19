import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, propStyles, onClick = () => console.log("Clicked") }) => {

    const customStyles = {
        color: "#ffffff",
        backgroundColor: "#000000",
        borderRadius: "var(--br-sm)",
        borderColor: "transparent",
        borderWidth: "0px",
        ...propStyles
    };

    return (
        <button style={customStyles} className={styles.btn} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
