

// const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor);

const user = {
    userId : "user1752",
    address : "asdfggert",
    phone : 9886652,
    getId : function(){
        console.log("just to valid");
        
    }
}



// console.log(Object.getOwnPropertyNames(user));

Object.defineProperty(user,'userId',{
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(user,'userId'));

user.userId = "jack"
// console.log(user.userId);

for(let [key,value] of Object.entries(user))
{
    if(typeof value !== 'function')
    {
    console.log(`${key} : ${value}`);

    }
    
}



