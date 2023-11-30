let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolve p1");
        resolve(55)
    },3000)
})

p1.then((value)=>{
    console.log(value);
    // let p2 = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve("promise 2")
    //     },5000)
    // })
    // return p2;

    return p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('promise 2')
            // console.log("resolve p2");
        },5000)
    })
}).then(()=>{
    console.log("done");
    return 2;
}).then(()=>{
    console.log("finally done");
})



new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(1)},1000);
}).then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
})
