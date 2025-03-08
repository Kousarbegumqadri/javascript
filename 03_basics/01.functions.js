function say(){
    // console.log('a');
    // console.log('f');
    // console.log('b');
}
say();
function addTwoNum(number1,number2){ //parameters//
    //console.log(number1+number2);
}
function addTwoNum(number1,number2){ //parameters//
 return number1+number2;
}
// const result=addTwoNum(3,5);
// console.log("result :",result);
// addTwoNum(3,8) //arguments//
// addTwoNum(3,'4')
// addTwoNum(3,'a')
function isLogin(username){
    if(username==='undefined'){
        console.log('please enter username');
        return;      //after writing return the next line wont execute;//
    }
    return '${username} just loggedin';
}
//console.log(isLogin('athiya'));             ///getting error in windows//
//console.log(isLogin());                 //the output will get user i=undefind
console.log(isLogin())
