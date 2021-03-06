//If password contains letters and numbers and longer than 8 -> return true
export function passwordIsValid(password) {
    let regexNumber = /\d/g;
    let regexLetter = /[a-zA-Z]/g;
    
    if (password.length >= 8 && regexNumber.test(password) && regexLetter.test(password)){
        return true;
    } else {
        return false;
    }
}