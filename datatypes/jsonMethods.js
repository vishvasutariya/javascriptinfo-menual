let student ={
    name: "xyz",
    class: "B",
    standard: 5,
}
let json = JSON.stringify(student);
console.log(json);

//JSON.stringify is skip this properties 
let user ={
    sayHello(){
        console.log("hello");   
    },
    [Symbol("id")]: 123,
    undif: undefined
}
let jsonstring = JSON.stringify(user);
console.log(jsonstring);


//nested object are suported
let nesteds = {
    cake :"red valvet",
    avilableInShop :{
        color: "red",
        quantity: 8,
    }
}
console.log(JSON.stringify(nesteds));
