import React, {useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './signup.module.css';
import Header from "../header/header";

const SignUp = ({authService}) => {

    const formRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const goToLogin = () => {
        history.push('/');
    }

    const handleChange = (event) => {
        const type = event.target.name;
        if (type === 'email') {
            const inputEmail = event.target.value;
            setEmail(inputEmail);
        } else if (type === 'password') {
            const inputPassword = event.target.value;
            setPassword(inputPassword);
        }
    }
    const onSignUp = async event => {
        event.preventDefault();
        formRef.current.reset();
        await authService
            .signup(email, password)
            .then(console.log)
            .then(() => goToLogin())
    }

    return (
        <section className={styles.container}>
            <Header />
            <h1 className={styles.text}>Sign Up</h1>
            <form ref={formRef} className={styles.form} onSubmit={onSignUp}>
                    <li className={styles.list}> 
                    <input 
                        className={styles.email}
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    /> </li>
                    <li className={styles.list}>
                    <input 
                        className={styles.email}
                        type="text"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    /></li>
                    <button className={styles.submit} name='Submit' onClick={onSignUp}>Submit</button>
            </form>
            <div className={styles.login}>
                <div className={styles.login_text}>Already have account?</div>
                <button className={styles.sign_in} onClick={goToLogin}>Log in</button>
            </div>

        </section>
    )

};

export default SignUp;