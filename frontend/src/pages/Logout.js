import { redirect } from "react-router-dom";

export const action= function(){
    localStorage.removeItem('token');
    return redirect('/');
}