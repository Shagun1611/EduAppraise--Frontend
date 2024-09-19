import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import SidebarData from '../../../data/sidebar.json';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Images/logo.png';

const Sidebar = () => {

    const [ expanded, setExpanded ] = useState(false);
    const navigate = useNavigate();

    return (
        <section className={styles.container} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
            <button className={styles.logo}>
                <img src={Logo} alt="logo" />
            </button>
            <section className={styles.icons}>
                {SidebarData.map((x) => {
                    return (
                        <i key={x.name} onClick={() => navigate(x.path)}>
                            <Icon icon={x.icon} />
                            <p>{x.name}</p>
                        </i>
                    );
                })}
            </section>
            <button className={styles.logoutBtn}>
                <Icon icon="material-symbols:logout" />
                {
                    expanded && 
                    <p>Logout</p>
                }
            </button>
        </section>
    )
}

export default Sidebar;
