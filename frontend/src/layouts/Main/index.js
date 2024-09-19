import React from 'react';
import Sidebar from '../../components/shared/Sidebar';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <section className={styles.container}>
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </section>
    )
}

export default Main;
