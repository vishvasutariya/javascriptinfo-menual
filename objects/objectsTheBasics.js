let user = {
    name: "xyz",
    age: 22,
    "like sky":true,//triling and hanging comma
}
console.log(user.name);

user.isAdmin = true; //add user
console.log(user);

delete user.age; // delete user
console.log(user);

user["like birds"] = true; //multiwords property declaration
user["like birds"] = true;//declare again same property
user["like birds"] = false;//change the value 
console.log(user);

// delete user["like birds"];




