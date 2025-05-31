// function employee(eno,ename,depname,esalary)
// {
//     this.eno = eno
//     this.ename = ename
//     this.depname = depname.toUpperCase()
//     this.esalary = esalary
//      this.getEmployee = function(){

//         console.log(`The Employee ${this.ename} with ${this.eno} is working in ${this.depname} Department`);
        
//     }
//     return this
// }

// let user1 = new employee(101,"jacob","it",50000)

// console.log(user1);
// console.log(user1.getEmployee());

fetch("simple.json")
.then(function(data){
    if(!data.ok)
    {
        throw new Error(`http error ${data.status}`)
    }
    return data.json()
    
})
.then(function(info)
{
    console.log(info);
    
})
.catch(function(err){
    console.log("invalid fetching :"+ err);

})

