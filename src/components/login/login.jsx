import React, { useState, useRef } from 'react';
import Header from "../header/header";
import styles from './login.module.css';
import { useHistory } from "react-router-dom";

const Login = ({authService}) => {

    const history = useHistory();
    const inputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const goToBabyInfo = (userId) => {
        history.push({
            pathname: '/babyinfo',

            state: {id: userId}
        })
    }

    const goToSignUp = () => {
        history.push('/signup');
    }

    const onSocialLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then((userId) => goToBabyInfo(userId.user.uid))
    }
    const onEmailLogin = event => {
        event.preventDefault();
        authService
            .signin(email.trim(), password)
            .then((userId) => goToBabyInfo(userId.user.uid))
    }

    const handleOnChange = (event) => {
        const type = event.target.name;
        if (type === 'email') {
            const inputEmail = event.target.value;
            setEmail(inputEmail);
        } else if (type === 'password') {
            const inputPassword = event.target.value;
            setPassword(inputPassword);
        }
    }

    /*useEffect(() => {
            authService
            .onAuthChange(user => {
                    user && goToBabyInfo(user.uid)
                })
        })
    */
    return (
        <section className={styles.loginbox}>
            <Header />
            <section>
                <ul>
                    <form ref={inputRef} className={styles.inputlogin} onSubmit={onEmailLogin}>
                        <li className={styles.inputlist}> 
                        <input 
                            type="text"
                            className={styles.email}
                            placeholder="Email"
                            name="email"
                            onChange={handleOnChange}
                        /> 
                        </li>
                        
                        <li className={styles.inputlist}> 
                        <input 
                            type="password"
                            className={styles.email}
                            placeholder="Password"
                            name="password"
                            onChange={handleOnChange}
                        /> 
                        </li>
                        <button className={styles.inbutton} onClick={onEmailLogin}>Login</button>
                    </form> 
                    <div className={styles.create}>
                        <div className={styles.text}>Don't have account?</div>
                        <button className={styles.signup} onClick={goToSignUp}>Sign up</button>
                    </div>
                </ul>
                <ul className={styles.social_login}>
                    <button className={`${styles.list} ${styles.google}`} onClick={onSocialLogin}>Google</button>
                    <button className={`${styles.list} ${styles.facebook}`} onClick={onSocialLogin}>Facebook</button>
                </ul>
            </section>
        </section>
    )
}

export default Login;
