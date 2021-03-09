//https://stackoverflow.com/a/17117730/14447555
//if all javascript object values are true = return true, else return false
export function allTrue(stateObj) {
    for (var property in stateObj) {
        
        //trash
        if (!stateObj[property]){
            console.log(property);
            return false;
        };
    };
    return true;
}