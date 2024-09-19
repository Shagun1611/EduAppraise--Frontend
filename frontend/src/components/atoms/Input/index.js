import React from 'react';
import styles from './Input.module.scss';

const Input = ({ type, placeHolder, state, setState, inlineStyles = {} }) => {

    const styling = {
        width: '300px',
        height: '50px',
        border: '1px solid #072C2B',
        ...inlineStyles
    }

    return (
        <input className={styles.input} type={type} placeholder={placeHolder} value={state} onChange={(e) => setState(e.target.value)} style={styling} />
    )
}

export default Input;
