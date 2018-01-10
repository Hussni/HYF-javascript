let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

myString = myString.replace(/,/g," ");
console.log(myString);



let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice( 1, 0 ,'meerkat');
console.log(favoriteAnimals);

console.log('The array has a length of: ' + favoriteAnimals.length);

favoriteAnimals.splice(3 , 1);
console.log(favoriteAnimals);
const index = favoriteAnimals.indexOf('meerkat');
    favoriteAnimals.splice(index, 1);
console.log('The item you are looking for is at index: ' + index );
console.log(favoriteAnimals);


function addition(val1,val2,val3) {
    var result = val1 + val2 + val3 ;
    return result ;  
  }
  let addition_Answer = addition(4,5,6);
  console.log('addition of three num is : ' + addition_Answer);


  function colorCar(color) {
    var result = color;
    return 'a ' + result + ' car' ;
  }
  var col = colorCar('red');
  console.log(col);