import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import styles from './babyinfo.module.css';

const BabyInfo = ({ authService }) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    return (
        <section className={styles.info}>
            <Header onLogout={onLogout} />
        </section>
    );
};

export default BabyInfo;