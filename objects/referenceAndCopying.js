

let user ={
    name :"example",
    age: 22,
}// in reference one memory bloce has two name -values are same 

// let newUser = user;
// newUser.name ="maya";
// console.log(newUser, user);

// let userName = {
//     name: "john",
// }
// let admin = userName;
// admin.name = 'bob';
// console.log(userName.name);


// let clone = Object.assign({},user); //Object.assign
// clone.name = "robert";
// console.log(clone, user);

let assign = {};
for(let key in user){
    assign[key] = user[key];
}
assign.name = "xyz";
console.log(assign, user);




