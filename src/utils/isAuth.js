export function isLoggedIn() {
	//We assume that if the local storage has the user token, the user is authenticated
	console.log("this is isloggedin: "+JSON.parse(localStorage.getItem('userAuth')));
	return JSON.parse(localStorage.getItem('userAuth'));
}