// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task completed");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");   
// })

// new Promise(function(resolve,reject){
//      setTimeout(()=>{
//         console.log("async task 2");
//         resolve()
        
//      },1000)
// }).then(()=>{
//     console.log("async task 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"stephan",email:"stephan@firecode.com"})
//     },1000)
// })

// promiseThree.then(function(investor){
//     console.log(investor);
    
// })

// const promisefour = new Promise(function(res,rej){
//     setTimeout(()=>{
//         let error = true
//         if (!error) {
//             res({username:"stephan",email:"stephan@firecode.com"})
//         }
//         else{
//             rej('error : went wrong')
//         }
//     },2000)
// })

// promisefour
// .then((obj)=>{
//     console.log(obj);
//     return obj.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((err)=>{
//     console.log(err+" retry");
    
// })
// .finally(()=>(console.log("promise is either resolved or rejected")))

const promiseFive = new Promise((resolve,reject)=>{
    
})


