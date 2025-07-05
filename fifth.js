function createProduct(name,price){
    this.name = name
    this.price = price
    
}
createProduct.prototype.increement = function(){
    this.price++
}

createProduct.prototype.fancy = function(){
     this.name +="Ab546"
    
}

let chai = new createProduct("chai",25)
chai.increement()
chai.fancy()
console.log(chai.price);
console.log(chai.name);


