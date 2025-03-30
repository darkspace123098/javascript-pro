// simple constructer function
// function addUser(username,email,isLogged){
//     this.username = username
//     this.email = email
//     this.isLogged = isLogged
//     this.greet = function(){
//         console.log(`yoyo ${this.username}`);
//     }
    
// }

// const userOne = new addUser("jhon","jhon128@gmail.com",true)
// const userTwo = new addUser("rohan","rohanret128@gmail.com",false)
// console.log(userTwo);

// magic of prototype

// function createUser(username,score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increase = function(num){
//     this.score += num
// }
// createUser.prototype.decrease = function(num){
//     this.score -= num
// }
// let newUser = new createUser("christoper",500)

// newUser.increase(10)
// newUser.decrease(5)
// console.log(newUser);\

let userObj = {
    user : "",
    score: ""
}
console.log(userObj);

// https://noodlemagazine.com/video/