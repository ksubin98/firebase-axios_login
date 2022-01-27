import firebase from 'firebase';
import { firebaseAuth, googleProvider, facebookProvider } from './firebase';

class AuthService {

    signin (email, password){ // 기본 로그인
        return firebaseAuth.signInWithEmailAndPassword(email,password);
    }

    signup (email, password) { // 회원가입
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }

    login(provoiderName) { // 이메일 로그인
        const authProvider = this.getProvider(provoiderName);
        return firebaseAuth.signInWithRedirect(authProvider);
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user)
        });
    }

    logout() {
        return firebaseAuth.signOut();
    }

    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Facebook':
                return facebookProvider;
            default:
                throw new Error (`not supported provider: ${providerName}`);
        }
    }
}

export default AuthService;