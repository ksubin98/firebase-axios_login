import React, {useState, useRef} from 'react';
import Header from "../header/header";
import styles from './login.module.css';
import {useHistory} from "react-router-dom";

const Login = ({authService}) => {

    const history = useHistory();
    const inputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    /*const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',

            state: {id: userId}
        })
    }*/

    const goToSignUp = () => {
        history.push('/signup')
    }
    const onSocialLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            //.then((userId) => goToMaker(userId.user.uid))
            .then(console.log);
    }
    const onEmailLogin = event => {
        event.preventDefault();
        authService
            .signIn(email.trim(), password)
            //.then((userId) => goToMaker(userId.user.uid))
            .then(console.log);
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

    /*    useEffect(() => {
            authService
                .onAuthChange(user => {
                    user && goToMaker(user.uid)
                })
        });*/
    return (
        <section className={styles.loginbox}>
            <Header />
            <section>
                <ul>
                    <form ref={inputRef} className={styles.inputlogin} onSubmit={onEmailLogin}>
                        <li className={styles.list}> 
                        <input 
                            type="text"
                            className={styles.email}
                            placeholder="Email"
                            name="email"
                            onChange={handleOnChange}
                        /> 
                        </li>
                        
                        <li className={styles.list}> 
                        <input 
                            type="text"
                            className={styles.email}
                            placeholder={"Password"}
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
                <ul className={styles.social}>
                    <div className={styles.text}>Social Login</div>
                    <button className={styles.google} onClick={onSocialLogin}>Google</button>
                    <button className={styles.facebook} onClick={onSocialLogin}>Fackebook</button>
                </ul>
            </section>
        </section>
    )
}

export default Login;
