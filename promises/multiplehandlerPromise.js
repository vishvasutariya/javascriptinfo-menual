let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("im resolved");
        resolve(1)
    },2000)
})

p1.then(()=>{
    console.log("congratulations this is resolved");
})

p1.then(()=>{
    console.log("hurray");
})