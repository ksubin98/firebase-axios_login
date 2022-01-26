import React, {useState, useRef} from 'react';
import { useHistory} from 'react-router-dom';
import styles from './signup.module.css';
import Header from "../header/header";

const SignUp = ({authService}) => {

    const formRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const goToLogin = () => {
        history.push('/')
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
            .signUp(email, password)
            .then(console.log)
            .then(() => goToLogin())
    }

    return (
        
    )

};

export default SignUp;