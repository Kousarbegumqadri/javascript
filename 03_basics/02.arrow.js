const user={
    username:'athiya',
    price:999,
    welcomeMessage:function(){
        // console.log(`${this.username},you are welcome`);
    }
}
// user.welcomeMessage()
// user.username='sonu'
// user.welcomeMessage()
// function chai(){
//     let username='athiya'
//     console.log(this.username);
    
// }
// chai()                   //ans Undefined//

// const chai=function(){
//     let username='athiya'
//     console.log(this.username)
// }
// chai()                //ans Undefined//
// const chai=()=>{
//     let username='athiya'
//     console.log(this);
// }
// chai();

// const addtwo=(num1,num2) =>{
//     return num1+num2;
// }
// console.log(addtwo(3,7))
const addtwo=(num1,num2) => num1+num2
console.log(addtwo(3,7));
const obj=() => ({username:'athiya'});
console.log(obj())