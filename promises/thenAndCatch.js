let p1 = new Promise((resolve, reject)=>{
    console.log("promise is pending");
    setTimeout(()=>{
        console.log("i am a promise and im fulfilled");
        resolve(true);
    },2000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("promise is pending");
    setTimeout(()=>{
        console.log('i am a promise and im rejected');
        reject(new Error("im error"))
    },2000)
})

// console.log(p1,p2);

p1.then((value)=>{
    console.log(value);
})

// p2.catch((error)=>{
//     console.log("error is there");
// })

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
