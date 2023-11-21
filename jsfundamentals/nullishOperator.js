let user;
console.log(user ?? "name");
console.log(123 ?? "name");

let firstName = null;
let lastName = null;
let password = 1233;
console.log(firstName ?? lastName ?? password);

//diffrence of || and ??
let height = 0;
console.log(height || 100);
console.log(height ?? 100);