let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1==id2);
console.log(id1);
console.log(id1.description);



let str1 = "hello";
let str2 = "hello";

console.log(str1==str2);


//symbol use in object

let age = Symbol("age");
let user = {
    name : "john",
    lname: "don",
    [age]: 23,
}
console.log(user);
console.log(user.name);
console.log(user[age]);

for(let key in user){
    console.log(key);
}




