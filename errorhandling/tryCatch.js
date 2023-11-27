try {
    console.log("name");
} catch (err) {
    console.log('error accure');
}


try {
    name = a; //variable not defined
    console.log(name);
} catch (err) {
    console.log('error accure');
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
    // console.log(err);
}


//without try catch
// name = a; 
// console.log(name);



let json = '{ "age": 70 }';
try{
    user = JSON.parse(json);
}catch(err){
    console.log("error"+ err);
}

try{
    console.log("try");
    // if(confirm("make an error?")){}
    // BAD_CODE();
}catch(err){
    console.log("catch");
}finally{
    console.log('finally');
}

