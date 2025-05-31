function createProduct(name,price){
    this.name = name
    this.price = price
    
}
createProduct.prototype.increement = function(){
    this.price++
}


let chai = new createProduct("chai",25)
chai.increement()
// chai.increement()
console.log(chai);
console.log(createProduct.prototype);



