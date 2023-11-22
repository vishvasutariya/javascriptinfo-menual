let user = {
    name: "xyz",
    age: 22,
    "like sky":true,//triling and hanging comma
}
console.log('age' in user); // in operator
console.log(user.name);

user.isAdmin = true; //add user
user.address = "bhavanagar";
console.log(user);

delete user.age; // delete user
console.log(user);

user["like birds"] = true; //multiwords property declaration
user["like birds"] = true;//declare again same property
user["like birds"] = false;//change the value 
console.log(user);

// delete user["like birds"];

function cakeShop(cakeName, color){
    return{
        cakeName: cakeName,
        color: color,
    }
}

let shopOfCake = cakeShop('redvalvat', 'red');
console.log(shopOfCake);


let obj = {
    test : undefined,
}
console.log(obj.test);
console.log('test' in obj);


//for..in loop

let address = {
    street : 11,
    cityName :"bhavnager",
    state: "gujrat",
    country : "india"
}

for(let key in address){
    console.log(key);
    console.log(address[key]);
}
