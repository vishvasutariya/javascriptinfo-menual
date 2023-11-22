//object method :

let person ={
    firstName: "vishvjeet",
    lastName: "kumar",
}
// person.sayHello = function(){
//     console.log(`hello ${person.firstName}`);
// }
// person.sayHello();



function greet(){
    console.log("hello !");
}
person.sayhello = greet;
person.sayhello();



//3rd type of method declaration:

let humanName ={
    name: "jaya",
    age: 22,
    sayhello : function(){
        console.log(`hello ${humanName.name}`);
    }
}
humanName.sayhello();

//es5:

let humanName2 ={
    name: "xyz",
    age: 22,
    sayhello() {
        console.log(`hello ${humanName2.name}`);
    }
}
humanName2.sayhello();




// this method:

let user={
    name: "john",
    age: 33,
    sayhi(){
        console.log(this.name);
    }
}
user.sayhi();


//arrow function have no this 

let cakeShop ={
    color: "black",
    sayhi(){
        let arrow =() => console.log(this.color);
        arrow();
    }
}
cakeShop.sayhi();
