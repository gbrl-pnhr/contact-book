
function verifyInputs(phone: string, email: string){
    if(phone === '' || email === ''){
        return false;
    }else{
        if(validateEmail(email) && validatePhone(phone)){
            return true;
        }else{
            return false;
        }
        
    }
}

function validateEmail(email: string){
    if(email.includes('@')){
        let validateEmail = email.split('@');
        let validateDominion = validateEmail[1].split('.');
        if(email.includes(' ') || validateEmail[0].length === 0 || validateDominion.length < 2 || validateDominion[0].length === 0 || validateDominion[1] !== "com"){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

function validatePhone(phone: string){
    let verifyPhone = new RegExp('^\\([1-9]{2}\\)((9[0-9]{4}-[0-9]{4})|9[0-9]{8})$');
    if(verifyPhone.test(phone)){
        return true;
    }else{
        return false;
    }
}

export default verifyInputs;