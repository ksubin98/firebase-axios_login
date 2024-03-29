import React, {memo} from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout})=> {

    return (
        <header className={styles.header}>
            {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
            <img className={styles.logo} src="/images/baby.png" alt="logo" />
        </header>

    )
})
export default Header;