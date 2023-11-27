//declaration

// class Product{
//     constructor(name, price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }

//     set setvalue(value){
//         this.discount = value;
//     }
     
//     get getvalue(){
//         return this.discount;
//     }
// }
// let pen = new Product("pen", 25, 2);
// console.log(pen.getvalue);
// console.log(pen.setvalue=26);
// console.log(pen.getvalue);








//extended class

class Product{
    constructor(itemName){
        this.itemName = itemName;
    }

    getItemnName(){
        return this.itemName + " is a product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);
    }
    getItemnName(){
        return this.itemName + " is a furniture";
    }
}

const pen = new Product("pen");
const chair = new Furniture("chair");

console.log(pen.getItemnName());
console.log(chair.getItemnName());



//super function: