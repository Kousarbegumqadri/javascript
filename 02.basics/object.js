mysum=Symbol('key1')
 const User={
    name:'athiya',
    [mysum]:'mykey1',
    age:18,
    location:'india'
}
console.log(User.location)
console.log(typeof User[mysum])
//console.log(User[location])
User.name='talat';
//Object.freeze(User);
User.name='sonu';
console.log(User)
//// Adding Greetings to USer
User.greetings=function(){
    console.log("hello js user");
}
User.greetingTwo=function(){
    console.log('hello js user,${this.name}')
}
//getting error
console.log(User.greetings());
console.log(User.greetingTwo());