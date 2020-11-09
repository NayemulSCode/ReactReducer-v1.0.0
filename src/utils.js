export async function login({ username, password}){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(username === 'nayemul' && password ==='password'){
                resolve();
            }
            else{
                reject();
            }
        }, 1000);
    });
}