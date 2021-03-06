export function emailIsValid(email) {
    /*The test() method executes a search for a match between a regular expression and a specified string. 
    Returns true or false.*/
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}