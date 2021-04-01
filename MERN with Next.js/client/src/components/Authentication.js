import jwt from 'jsonwebtoken';

export function validToken(){
    const authorizationToken = localStorage.getItem('jwtToken');
    if(authorizationToken === null){
        console.log("Kein Token");
        return false;
    }
    else{
        try{
        jwt.decode(localStorage.getItem('jwtToken'));
        console.log("Success")
        return true;
        }
        catch(err){
        console.log("Failure");
        return false;
        }
    }
}