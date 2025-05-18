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

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if (!error) {
//             resolve({username:"stephan",email:"stephan@firecode.com"})
//         }
//         else{
//             reject('error : went wrong')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }
// consumePromiseFive()

// async function getAllUser() {
//     try{
//     const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log("error");
        
//     }
// }
// getAllUser()

async function getRandom(){
    try{
       const response = await fetch('https://randomuser.me/api')
       const data = await response.json()
       console.log(data.results[0].name.first);
    }
    catch(error){
        console.log("error Fetching");
        
    }
}

getRandom()

