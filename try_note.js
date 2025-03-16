let num = [7,8,92,12,87]

let fltr = num.filter((n)=>(n%2==0 && n<50))
// console.log(fltr);


const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

// console.log(filterItems(fruits, "ap")); 
// console.log(filterItems(fruits, "go"));

const myNum = [1,5,8,4,-2]
const newNum = myNum.map((num)=> {
    return num+5
})
const multi = myNum.map((num) => num*10).map((num) => num+1).filter((num) => num>15)
// console.log(newNum);
// console.log(multi);

const myArr = [1,2,3,4]
// const mytotal = myArr.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and CurrentValue : ${currval}`)
//     return acc + currval
//       },0)

    //   console.log(mytotal);

      let shopping = [
    {
        item: "javascript",
        price: 5999
    },
    {
        item: "Ethical Hacking",
        price: 9999
    },
    {
        item: "nodejs",
        price: 4999
    }
]

let ptp = shopping.reduce((acc,total) => acc + total.price,0)
// console.log(ptp);

let a=2
a*= 10

console.log(a);
