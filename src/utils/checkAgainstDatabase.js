export function checkAgainstDatabase(email, password) {
    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
        return true;
    }
}