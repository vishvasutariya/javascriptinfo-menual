let data = new Map([
    ['name', 'xyz'],
    [10, 'this is a number kry'],
    [true, 'sky is blue']
]);
console.log(data.get(true));
console.log(data.get(10));
console.log(data.keys());

data.set('city', 'dubai');
console.log(data);

data.set('name', 'ooo');
console.log(data);
console.log(data.values());
console.log(data.keys());
console.log(data.size);

data.delete(true);
console.log(data);

data.forEach((v, k)=>{
    console.log(k, v);
})

for(x of data){
    // console.log(x);
    // console.log(x[0]);
    console.log(x[1]);
}

for([k, v] of data){
    // console.log(k);
    // console.log(v);
}

data.set({}, 'this is an object');
data.set(() => {}, 'this is an arrow function');
console.log(data);

console.log(typeof data);

