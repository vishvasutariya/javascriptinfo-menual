//syntex : let promise = new promise(function(resolve, reject){ //execution });

let promise = new Promise(function(resolve,reject){
    console.log("hello");
    resolve(77);
})

console.log('hello');

setTimeout(function(){
    console.log('hello in 2 sec');
},2000)

console.log('end');
console.log(promise);