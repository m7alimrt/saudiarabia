main.js

//1.
console.log('It worked!')

//2.
var var1 = 3 + 5;
var var2 = var1 / 2;
var2 += 6;
console.log(var2);

//3.
var arr1 = [6, true, 'I am a string'];
arr1.push('I am another element');

//4.
if (3 > 5) {
    console.log('3 is greater than 5');
} else {
    console.log('3 is less than 5');
}

//5.
if (2 * 2 > 2 + 2) {
    console.log('2*2 is greater than 2+2');
  } else if (2 * 2 == 2 + 2) {
    console.log('2*2 is equal to 2+2');
  } else {
    console.log('2*2 is less than 2+2');
  }
  
//6.
var counter = 0;
  while (counter <= 4) {
      console.log('I have been logged ' + counter + ' times. I should be logged 5 times total!');
      counter++;
  }
   
//7.
  var arr2 = ['S', 'u', 'c', 'e', 's', 's', '!'];
  for (var i = 0; i < arr2.length; i++) {
      console.log(arr2[i]);
  } 
   