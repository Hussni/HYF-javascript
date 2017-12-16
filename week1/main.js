var sayHello = "Hola";
console.log(sayHello);
sayHello = "Hola";
console.log(sayHello);
sayHello = "Hello World";
console.log(sayHello);
console.log("I'm awesome");


var x =38;
console.log('the value of my variable x will be: whateverYouThinkItWillLog');
console.log(x);
x =40;
console.log('the value of my variable x will be: whateverYouThinkItWillLog');
console.log(x);

var y = "FooCafe";
console.log("the value of my string will be: FooCafe");
console.log(y);
y = "Home Work week1;
console.log("the value of my string will be: Home Work week1");
console.log(y);

let z =7.25;
console.log("Value before use of round function =" + z); 
let a = Math.round(z);
console.log("Value after using the round function =" + a);
var highestValue = Math.max(z,a);
console.log("highestValue " + highestValue);

var myarray = [];
console.log("the value of array will be: Null");
console.log(myarray.length);
myarray = ["dog", "cat", "cow","Snake"];
console.log(myarray.length);
console.log(myarray);
myarray = myarray.concat(['baby pig']);
console.log(myarray.length);
console.log(myarray);

let myString = "this,is,a,test";
console.log(myString);
console.log(myString.length);

let foo = 3;
console.log("The value of my variable foo is integer: " + foo);
console.log(typeof foo);

let fooint = 3.56;
console.log("The value of my variable foo is float: " + fooint);
console.log(typeof fooint);

let foostring = "foocafe";
console.log("The value of my variable foo is string: " + foostring);
console.log(typeof foostring);

if (fooint == foostring)    console.log("SAME TYPE");
else console.log("not same type");

var rem = 7;
rem = 7%3;
console.log(rem);

rem = 56;
rem =rem % 3;
console.log(rem);
            
rem = 90.45;
rem =rem % 3.0;
console.log(rem);

//  MULTIPLE TYPE ARRAY

var multipleArray = [];

multipleArray = ["Horse", 2, "donkey",4];
console.log(multipleArray);
multipleArray = multipleArray.concat(["baby pig" , 4.5]);
console.log("the value of array will be:" + multipleArray );
console.log(multipleArray);


if ( 6/0 == 10/0) console.log("Infinite");
console.log("I don't think the answer is correct" );