let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },11000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2")
        // reject(new Error("error"))
    },2000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })



// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
// })

// let promise_allseteld = Promise.allSettled([p1, p2, p3])
// let promise_allseteld = Promise.race([p1, p2, p3])
// let promise_allseteld = Promise.any([p1, p2, p3])
// let promise_allseteld = Promise.resolve(9)
let promise_allseteld = Promise.reject(new Error("hello"))
promise_allseteld.then((value)=>{
    console.log(value);
})