// Array 

// const arr = ["java",74,true,98,"go"]
// arr.push("why push")
// arr.pop()
// console.log(arr);
// console.log(arr.includes("go"));



// arr.unshift("why shifted")
// arr.shift()
// console.log(arr);


// const myArr = [];
// myArr[1] = 5
// const set = new Date("10-2-2024")
// const get = set.toDateString()
// myArr[2] = get
// console.log(myArr);

//Join
// const arr1 = [58,25,61]
// const arr2 = arr1.join();
// console.log(arr2);
// console.log(arr2.slice(0,5));
// console.log("a",arr1);
// console.log(typeof arr2);

// Slice and Splice
// const myarr = [1,2,3,4,5]
// const spli = myarr.splice(0,4)      //  it will effect the original array
// const sli = myarr.slice(2,4)
// console.log(sli);
// console.log(spli);
// console.log(myarr);

// Array Part2 


// const marvel_heros = ["thor","ironman","spiderman"]
// const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// marvel_heros.concat(dc_heros)
// const all = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(all);

/* Another Method to concat - Spread Operator*/
// const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);

// flat
// const unknown_arr = [1,2,3,[4,5,6],7,[8,9,0,[5,6,[8,9]]]]
// const flater = unknown_arr.flat()
// const multi_flater = unknown_arr.flat(Infinity)
// console.log(unknown_arr);
// console.log(flater);
// console.log(multi_flater);

// Checkerr
// console.log(Array.isArray("wordpress"));

// console.log(Array.from("jacob"));
// const obj = {
//     name : "joseph"
// }
// let strarr = Array.from(obj.name)
// console.log(strarr[0]);

// console.log(Array.from(obj.name));

// Object - The Nitro
const jsuser = {
    name: "joseph",
    age: 18,
    married: false
}
// console.log(jsuser.name);
// jsuser.add = "karnataka"
// Object.freeze(jsuser)
// jsuser.email = "userjos@gmail.com"
// console.log(jsuser);
// Add funtion into an object
// jsuser.greeting = function () {
//     console.log("Hellow Js User");
    
// }
// console.log(jsuser.greeting());

// Symbol
// const mysym = Symbol()
// const obj1 = {
//     [mysym] : "mykey1"
// }
// obj1.mysym = "changed"
// console.log(obj1[mysym]);
// console.log(typeof [mysym]);


// Constructor method to create object
// const tinder_user = new Object()
// tinder_user.name = "Irshad ali"
// tinder_user.age = "19"
// console.log(tinder_user);

// For geting key of object
// console.log(Object.keys(jsuser));
// console.log(Object.entries(jsuser));
// console.log(Object.values(jsuser));
// console.log(jsuser.hasOwnProperty('age'))




// Assigning two or more object values
// const obj1 = {1:"abc",2:"def",3:"ghi"}
// const obj2 = {4:"klm",5:"nop"}
// const obj3 = {6:"qrs",7:"tuv"}
// const ass = Object.assign(obj1,obj2)
// const multi_ass = Object.assign({},obj1,obj2,obj3)
// const sprd = {...obj1,...obj2}
// console.log(ass);
// console.log(multi_ass);
// console.log(sprd);

// Object De-structure
// const course = {
//     course_name : "Java - spring",
//     price : 2999,
//     course_Instructor : "Hithesh"
// }
// const {course_Instructor:Teacher} = course
// const {price:rate} = course
// console.log(course);
// console.log(Teacher);
// console.log(rate);

// Functions 
// function add(num1,num2)
// {
//     console.log(num1+num2);
    
// }
// const result = add(5,2) 
// add(5,8)

// function addTwo(num1,num2) {
//     let result = num1+num2
//     return result;
// }
// let result = addTwo(5,10)
// console.log(result);

// function addS(n1,n2) {
//     return n1 + n2;
// }
// let res = addS(5,6);
// console.log(res);
 
// function login(username) {
//     return `${username} Just logged In`
// }
// console.log(login("Irshad"));

// Adding multiple value to a single parameter
// function cart(...num) {
//     return num
// }
// let total = cart(123,23,56)
// console.log(total);
// console.log(typeof total);

// real time exception  =   when we perform arithmetic operation using restParameter the restParameter will treat number as string
// function cartPrice(val1,val2,...num) {
//     return val1+num
// }
// console.log(cartPrice(56,678,788,600,900));

// Passing Object In a Function
// const user1  = {
//     username : "gopal",
//     price : "25000"
// }

// const user2  = {
//     username : "hithesh",
//     price : "85000"
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is $${anyObject.price}`);
    
// }
// handleObject(user1)
// handleObject(user2)
// handleObject({
//     username : "yousef",
//     price : "85000"
// })

/* Passing Array In a Function  */

// const arr = [24,89,90,58]

// function returnArr(getArr) {
//     return getArr[3]
// }
// console.log(returnArr(arr));
// console.log(returnArr([56,67,90,69]));

//   part next
// const arr = [24,89,90,58]
// function returnArr(getArr) {
//     for (let i = 0; i < getArr.length; i++) {
        
//         console.log(getArr[i]);
//     }
    
// }
// returnArr(arr)

// Scope of a variable
// one()
// function one() {
//     let user = "irshad"

//     function two() {
//         let web = "firecode"
//         console.log(user); 
//     }
//     two()
    // console.log(web);
    
// }
// one()


// console.log(addone(9));
// function addone(num) {
//     return num+1    
// }

// console.log(addtwo(9));
// const addtwo = function(num){
//     return num+2
// }
// console.log(addtwo(9));

// This Keyword
// const user = {
//     name:"hithesh",
//     age:19,
//     greet : function(){
//         console.log(`welcome ${this.name}, to the black website`);
//         console.log(this);
//         console.log(typeof this);
        
//     }
// }
// user.greet()
// user.name = "irshad"
// user.greet()

// function chai() {
//     let type = "light chai"
//     console.log(this.type);
    
// }
// chai()

// Arrow Function
// const chai = () =>{
//     let user = "jacob"
//     console.log(user);
    
// }
// chai()
// console.log(typeof chai);

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,8));

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(5,9));

// const app = (name) => {
//     console.log(name);
    
// }
// app("kohli")

// IIFE Immedietly invoked function expression

/// Named IIFE

// (function chai(){
//     console.log(`automated output without calling`);
    
// })();

/// unamed IIFE
// ((name)=>{
//     console.log(`welcome : ${name}`);
    
// })("irshad");

// check Truthy and falsy value
// let app = NaN
// if(app)
// {
//     console.log("Truth");
// }
// else{
//     console.log("falsy");
// }

// Nullish coalescing operator(??)
// let app;
// app = undefined ?? null ?? 10 ?? 7;
// console.log(app);
 
// Ternary Operator

// let age = 18
// age>=18 ? console.log("valid") : console.log("unvalid");
 
// For Of loop
// const arr = [4,6,"uio",9]
// for(const num of arr)
// {
//     console.log(num);
    
// }

// let greetings = "Hello Developer"
// for(wel of greetings)
// {
//     console.log(wel);
    
// }

///  map using for of loop
// const map = new Map()
// map.set(7,"ronaldo")
// map.set(11,"messi")
// //console.log(map);

// for(const [k,v] of map)
// {
//     console.log(`${k} : ${v}`);
    
// }
// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// contacts.has("Jessie"); // true
// contacts.get("Hilary"); // undefined
// contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// // contacts.delete("Raymond"); // false
// // contacts.delete("Jessie"); // true
// console.log(contacts.size); // 1
// console.log(contacts.get("Jessie"))

// For In loop
// const myObj = {
//      js : "javascript",
//      cpp : "c++",
//      rb : "ruby",
//      py : "python"
// }
// for(key in myObj)
// {
//     // console.log(myObj[key] , key);
//     console.log(`${key} shortcut is for ${myObj[key]}`);
    
    
// }

// let rulers = ["ronaldo","messi","neymar","benzama","mbappe"]
// for(let key in rulers)
// {
//     console.log(key);
//     console.log(rulers[key]);
    
// }

// For Each method loop
// let arr = ["black","green","red","blue","yellow"]

// arr.forEach((item,index,itemall)=>{
//     console.log(itemall);
    
// })
// arr.forEach(function(val){
//     console.log(val);
    
// })
// arr.forEach((item) => {
//     console.log(item);
    
// })

// const mycoding = [
//     {
//         lang : "javascript",
//         ext : "js"
//     },
//     {
//         lang : "python",
//         ext : "py"
//     },
//     {
//         lang : "c sharp",
//         ext : "cs"
//     }
// ]
// mycoding.forEach((item) =>{
//     console.log(item.lang);
    // console.log(item.ext);
    // console.log(item);
    
// })
// function printer(item,iter,all) {
//     console.log(item.ext);
//     console.log(all.ext);
    
    
// }
// mycoding.forEach(printer)

// While loop
// let myarry = ["flash","batman","superman"]
// let arr = 0;
// while (arr<myarry.length) {
//     console.log(myarry[arr]);
//     // arr++;
//     arr = arr + 1
    
// }

// For loop
// let car = ["bmw","benz","ferrari","porche"]
// for (let i = 0; i < car.length; i++) {
//     const element = car[i];
//     console.log(element);
// }

//                FILTER MAP REDUSE

// filter
// const num = [7,8,0,9,3,4,6]
// const even = num.filter(function(n){
//       return n%2==0
// });
// const even = num.filter((dnum) => (dnum%2==0 && dnum!=0))
// console.log(even);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

// const nam = [
//     {
//         name: "fish",
//         live: "sea"
//     },
//     {
//         name: "cat",
//         live: "land"
//     },
//     {
//         name: "goat",
//         live: "land"
//     }
// ]

// const fltr = nam.filter((js) => js.live=="land")
// console.log(fltr);

// MAP - for changing the values
const myNum = [1,5,8,4,-2]
// const newNum = myNum.map((num)=> {
//     return num*10
// })
// const newNum2  = myNum.map((num)=> num - 1)
// console.log(newNum);
// console.log(newNum2);
// Chaining
// const multi = myNum.map((num) => num*10).map((num) => num+1).filter((num) => num>15)
// console.log(multi);


// REDUSE
// const myArr = [1,2,3,4]
// const mytotal = myArr.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and CurrentValue : ${currval}`)
//     return acc + currval
//       },0)

// const mytotal = myArr.reduce((acc,currval) => (acc + currval),0)

// console.log(mytotal);

// let shopping = [
//     {
//         item: "javascript",
//         price: 5999
//     },
//     {
//         item: "Ethical Hacking",
//         price: 9999
//     },
//     {
//         item: "nodejs",
//         price: 4999
//     }
// ]

// let ptp = shopping.reduce((acc,total) => acc + total.price,0)
// console.log(ptp);