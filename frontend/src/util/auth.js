import { redirect } from "react-router-dom";

export function getTokenDuration(){
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration   = expirationDate.getTime() - now.getTime();
    return duration
}
export function getAuthToken(){
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();

    if(!token){
        return null;
    }

    if(tokenDuration <0){
        return 'EXPIRED'
    }

    return token;
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthloader(){
    const token = getAuthToken();
    console.log("CheckAuthLoader token: ",token);
    if(!token){
        return redirect('/auth?mode=login');
    }
    return token;
}