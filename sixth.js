// class as syntactical sugar

class createAcc
{
    constructor(username,email,password)
    {
        this.username = username
        this.password = password
        this.email = email
    }

    encrypt(){
        console.log(`str${this.password}pty`);
        
    }
    uniqueUi(){
        console.log(`${this.username.toUpperCase()}`);
        
    }
    static appleEmail(){
        console.log(`${this.email.replace('.com','.apple')}`);
        
    }
}

let jhon = new createAcc("jhon mathew","jhon129@apple.com","jhon654./")

// console.log(jhon);
// jhon.encrypt()
// jhon.uniqueUi()
// jhon.appleEmail()   //throws error - no access
