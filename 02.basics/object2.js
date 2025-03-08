// const tinderuser=new Object()
const tinderuser={}
tinderuser.id='b182188'
tinderuser.name='athiya'
tinderuser.location='hyd'

console.log(tinderuser);
const regularuser={
    email:'kousar@',
    fullname: {
        username:{
            firstname:'athiya',
            lastname:'talat'
        }
    }
}
//console.log(regularuser.fullname)
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'d'}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3)

//*********************array objects */
const user=[
    {
        id:12,
        user:'athi',
    },
    {
        number:2,
        name:'ab',
    },
]
// console.log(tinderuser);
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
const course={
    coursename:"js in hindi",
    courseInstructur:"abc",
}
const{courseInstructur:Instructur}=course
console.log(Instructur)
//************destructure
// const navbar=({company}) =>{

// }
// navbar(company='abc')
//***********json*************** */
{
    'place':'athiya',
   'price':'999',
    'location':'hyd',
}
//note//
//All apis are in json format//