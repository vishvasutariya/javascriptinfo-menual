// // async function student(){
// //     return 4;
// // }

// // student().then((x)=>{
// //     console.log(x);
// // })

// async function weathere(){
//     let delhiWeather = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("27 deg")
//         },1000)
//     })

//     let goaWeather = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("20 deg")
//         },5000)
//     })
    
//     console.log("featching delhi weather please wait...");
//     let delhiw = await delhiWeather
//     console.log("fetched delhi weather: "+ delhiw);

//     console.log("featching goa weather please wait...");
//     let goaw = await goaWeather
//     console.log("fetched goa weather: "+ goaw);
//     return [delhiw, goaw]
// }

// let charry = ()=>{
//     console.log("hey i'm charry im not waiting");
// }

// console.log("welcom to weather control room");
// let a = weathere()
// let b = charry()
// a.then((value)=>{
//     console.log(value);
// })
// // console.log(a);



const person = {
test(){
    setTimeout(function(){
        console.log(this)
    })
}
}
person.test()