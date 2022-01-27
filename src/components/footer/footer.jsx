import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <button className={styles.footbutton}>아이 정보</button>
            <button className={styles.footbutton}>모니터링</button>
            <button className={styles.footbutton}>사용자 등록</button>
        </div>
    )
};

export default Footer;