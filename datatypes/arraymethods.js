['xyz', 'ttt', 'ooo'].forEach((item, index, array) => {
    console.log(`${index}, ${item} : ${array}`);
});

// indexof

let arr = [1, 2, false];
console.log( arr.indexOf(1) );
console.log( arr.indexOf(2) );
console.log( arr.indexOf(false) );

//map

let length1 = ["xyz","cc"].map(item => item.length);
console.log(length1);


//sort 

let sorting = [2,5,22];
console.log(sorting.sort());

//reverse

let array1 = [1,2,3,4,5];
 array1.reverse();
console.log(array1);



