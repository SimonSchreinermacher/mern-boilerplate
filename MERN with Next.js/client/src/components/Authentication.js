import jwt from 'jsonwebtoken';

export function validToken(){
    const authorizationToken = localStorage.getItem('jwtToken');
    if(authorizationToken === null){
        return false;
    }
    else{
        try{
        jwt.decode(localStorage.getItem('jwtToken'));
        return true;
        }
        catch(err){
        return false;
        }
    }
}