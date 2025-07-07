// GETTER AND SETTER USING CLASS SYNTAX
// class account{
//   constructor(email,password)
//   {
//     this.email = email;
//     this.password = password;
//   }
//   get email(){
//     return `_personal${this._email.toUpperCase()}`
//   }
//   set email(value){
//     this._email = value
//   }
// }

// let jhon = new account("jhonmathew128@gmail.com","17jhon89")

// console.log(jhon);
// console.log(jhon.email);

// GETTER AND SETTER USING FUNCTION SYNTAX
// function User(username, password) {
//   this.username = username;
//   Object.defineProperty(this, 'password', {
//     get: function() {
//       return `_fire${this._password}_code`;
//     },
//     set: function(value) {
//       this._password = value;
//     }
//   });

//   this.password = password; // NOW this uses the setter!
// }

// let user1 = new User("stephan@gmail.com", "step8752");
// console.log(user1.password); 


// GETTER AND SETTER USING OBJECT SYNTAX
const User = {
  _email : "hsdgd",
  password : "udhduh88998",

  get email()
  {
    return this._email.toUpperCase()
  },
  set email(value)
  {
    this._email = value
  }
}

console.log(User.email);
















// EXAMPLE
// class User {
//   constructor(username, password) {
//     this.username = username;
//     this._passwordHash = null;
//     this.password = password; // this calls the setter!
//   }

//   // Getter: only returns the hashed password
//   get password() {
//     console.log('Returning hashed password...');
//     return this._passwordHash;
//   }

//   // Setter: hashes the password before storing
//   set password(newPassword) {
//     console.log('Hashing password and storing...');
//     this._passwordHash = this.hashPassword(newPassword);
//   }

//   // Example hash function (simplified!)
//   hashPassword(password) {
//     // In real life, use bcrypt or another secure hash function!
//     return `hashed_${password}`;
//   }
// }

// // Usage
// const user = new User('alice', 'secret123');

// console.log(user.password); // Returning hashed password... → hashed_secret123

// user.password = 'newpassword'; // Hashing password and storing...
// console.log(user.password);    // Returning hashed password... → hashed_newpassword
