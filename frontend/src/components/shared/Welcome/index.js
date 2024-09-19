import React, { useContext } from 'react';
import UserContext from '../../../context/User/Context';
import styles from './Welcome.module.scss';

const Welcome = () => {

    const { user } = useContext(UserContext);

    return (
        <section className={styles.welcomeContainer}>
            <h1>Welcome { user.name }!</h1>
        </section>
    )
}

export default Welcome;
