// const string = 'This is a typical sentance';

// function revercestring(str) {
//     let newstring = '';
//     for (let i= str.length - 1; i>= 0; i--) {
//       newstring = newstring + str[i];
//     //   console.log(newstring);
//     }
//     return newstring;
//   }

// function reverseString(str) {
//     if (typeof str === 'string'){

//       const words = str.split(' ');
//       for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 5) {
//           words[i] = revercestring(words[i]);
//         //   console.log(words[i]);
//         }
//       }
//       return words.join(' ');
//   }
// }
  
//     const reverse = reverseString(string);
//   console.log(reverse);









// js
// string are there :
// let str = hello;
// create a function when how many laters are there and how many times 
// retun object 
// output like : h-1, e-1, l-2,o-1
// without forof loop

// in string only print max length value like hello in 2 times l thats why output is l:2




// function strcount(str){
//   let string = {};

//   let lowstr = str.toLowerCase().trim();
//   for(let i=0; i<lowstr.length; i++){
//     const char = lowstr[i];
//     if(!string[char]){
//       string[char]=0;
//     }
//     string[char]++;
//   }
//   return string;  
// }
// let str = 'hello';
// let charater = strcount(str);
// console.log(charater);






// otherwise


// function strcount(str) {
//   let string = {};

//   let lowstr = str.toLowerCase().trim();
//   let maxChar = null;
//   let maxCount = 0;

//   for (let i = 0; i < lowstr.length; i++) {
//     const char = lowstr[i];
//     if (!string[char]) {
//       string[char] = 0;
//     }
//     string[char]++;

//     if (string[char] > maxCount) {
//       maxChar = char;
//       maxCount = string[char];
//     }
//   }

//   return { [maxChar]: maxCount };
// }

// let str = 'hello';
// let character = strcount(str);
// console.log(character);





function method(array){
    let result = [];
    for(let i=0; i<array.length; i++){
            result = result.concat(array[i]);
    }
    return result;
}

const givenarray = [1,2,[3,4],[6,7]];
const final = method(givenarray);
console.log(final);








// function customFlat(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(customFlat(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// const arr1 = [1, 2, [3, 4]];
// const flattenedArr = customFlat(arr1);
// console.log(flattenedArr);
