import axios from 'axios';


class User {

    async login (email, password){
        try {
            const res = await axios({
                method: "post",
                url: '/api/auth/login',
                data: {
                    email: email,
                    password: password,
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
};


export default User;