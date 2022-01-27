import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './babyinfo.module.css';
import Condition from '../condition/condition';
import BabyAdd from '../babyadd/babyadd';

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
            <div className={styles.container}>
                <Condition />
                <BabyAdd />
            </div>
            <Footer />
        </section>
    );
};

export default BabyInfo;