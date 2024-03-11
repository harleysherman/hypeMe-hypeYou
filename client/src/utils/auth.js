import decode from "jwt-decode";

class Authentication {
    getProfile(){
        return decode(this.getToken());
    }
    LoggedIn(){
        const token =this.getToken();
        return token && !this.isTokenExpired(token)?true:false;
    }
    isTokenExpired(token){
        const decoded =decode(token);

        if (decoded.exp < Date.now() / 1000){
            localStorage.removeItem('id_token');
            return true;
        }

        return false;
    }

    getToken() { 
        return localStorage.getITem('id_token')
    }

    login(idJWT) {
        localStorage.setItem('id_token', idJWT);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new Authentication();