
//syncronous programing
// let a = prompt("what is your name?");
// let b = prompt('what is your age');
// console.log(a+' is my name and age is '+ b);



//asyncronous programing
// console.log("start");
// setTimeout(function(){
//     console.log('vishva');
// },3000)
// console.log("end");



// callback function
console.log("start");
setTimeout(function(callback){
    console.log('vishva');
    callback();
},3000,hello)

function hello(){
    console.log("end");
}
