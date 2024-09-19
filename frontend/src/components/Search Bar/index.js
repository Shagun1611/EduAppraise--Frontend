import React from 'react';
import styles from './SearchBar.module.scss';
import Input from '../atoms/Input';
import { Icon } from '@iconify/react/dist/iconify.js';

const SearchBar = ({ state, setState }) => {

    return (
        <section className={styles.container}>
            <Icon icon='material-symbols:search' />
            <Input type='text' placeHolder='Enter faculty name' state={state} setState={setState} inlineStyles={{ width: '80%', border: 'none' }} />
            <Icon icon='material-symbols:person' />
        </section>
    )
}

export default SearchBar;
