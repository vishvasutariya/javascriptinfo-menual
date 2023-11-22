function Student(fname, lname, age, cls){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.class = cls;
}

let student1 = new Student("vishva","patel", 21, 0);

student1.netinality = "indian";

console.log(student1); //not added in constrocter, only added perticluler student1 object

student1.name = function(){
    return this.firstName + " " + this.lastName;
}

console.log(student1.name());

Student.prototype.netinality = "indian";
let student2 = new Student('kush', 'patel',22);
console.log(student2.netinality);
