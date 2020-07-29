/** Example section. IMPORTANT: you must comment out this section before running the tests. **/

/** End of the example section. Your solution goes below. **/

var inputString = prompt('Enter your haystack')
var haystack = inputString.split(' ')

for (var i=0; i<haystack.length; i++){
  console.log(' '+ haystack[i]);
  
  if(haystack[i] === 'needle'){
    console.log('Found the needle at index'+ [i]);
  }
}



