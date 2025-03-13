// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }
// const greetings='hello world'
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`)
// }

// const map=new Map()      //map is object which hold key value pair//
// map.set('in','india');
// map.set('f','france')
// map.set('in','india');
// console.log(map)
// for (const [key,value] of map) {
//     console.log(key,':-', value)
// }

// const myobj={
//     game1:'nfs',
//     game2:'sp',
// }

// for (const key in myobj) {        //forin//
//       console.log(`${key} shortvut is for ${myobj[key]}`); 
// }

// const programming=["js","rd",'fd']
// for (const key in programming) {
//    console.log(programming[key])
// }
//  const coding=["js",'pss','jjs']
// // coding.forEach(function (val){
// //     console.log(val);
// // })
// coding.forEach((item)=>{
//     console.log(item)
// })
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })
const mycoding=[
    {
        language:'js',
        languagefile:'jjj'
    },
    {
        language:'js1',
        languagefile:'jjj'
    },
    {
        language:'js2',
        languagefile:'jjj'
    },
]
mycoding.forEach((item)=>{
    console.log(item.languagefile);
})