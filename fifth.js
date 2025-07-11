// prototype
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
// chai.increement()
// chai.fancy()
// console.log(chai.price);
// console.log(chai.name);

// js inheritance
const user = {
    username: "chian",
    email:"jhon@chai.com"
}
const Teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssaignment : "js assignment",
    fullTime : true,
    __proto__:Teacher
}
// Teacher.__proto__ = user

// console.log(Teacher.username);
// console.log(TAsupport.makeVideo);




// MODERN APPROACH
let username = "irshadsfd gd"
Object.setPrototypeOf(teachingSupport, Teacher)
// console.log(teachingSupport.makeVideo);

Object.prototype.trueLen = function(){
            console.log(`True Length is ${this.trim().length}`)
            
}
// "   hghhg ".trueLen()
// username.trueLen()



// Call     -    explicit

function setUserId(userId){
    this.userId = userId
    console.log("account created");
    
}

function createAccount(userId,accNo,pin){
    setUserId.call(this,userId)
    this.accNo = accNo
    this.pin = pin
}

let user1 = new createAccount("user12p9",100625852,124816)

console.log(user1);

