
//TWO-FER
/* Given a name, return a string with the message: 
  "One for name, one for me." 

 Where "name" is the given name.
 However, if the name is missing, return the string:
   "One for you, one for me."

*/



function share(oneName, self) {
    if (!oneName) {
      console.log(`One for you and one for ${self}`)
    } else {
      console.log(`One for ${oneName} and one for ${self}`)
    }
};

share("Anna", "me")


//LEAP

/* Given a year, report if it is leap year. 
   A leap year occurs:
   on every year that is evenly divisible by 4
    except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400 
*/


/*function leapYear(year) {
  if (year %4===0 
      && year %400===0 
      && year %100 !== 0
     ) 
      {
    console.log("Is a leap year")
  }
}
*/


const isDivisibleBy4  = function(year) {
  if(year %4 === 0) {
    return true
  }
}; 
const isDivisibleBy400 = function(year) {
  if (year %400 === 0){
    return true
  }
};
const isNotDivisibleBy100 = function(){
  if (year %100 !==0) {
    return true
  }
};
  
function isLeapYear(year); {
  if (isDivisibleBy4 && isDivisibleBy400 && isNotDivisibleBy100 == true){
    console.log("Is leap yearr")
  }
  else{
    console.log("Is not leap year")
  }
};

isLeapYear(1900)

//RAINDROP

/*The rules of raindrops are that if a given number:

has 3 as a factor, add 'Pling' to the result.
has 5 as a factor, add 'Plang' to the result.
has 7 as a factor, add 'Plong' to the result.
does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.*/

function raindrops(number) {
  if (number %3 === 0) {
    number = "Pling"
  } else if (number %5 === 0) {
    number = "Plang"
  } else if (number %7 === 0) {
    number = "Plong"
  } else {
    return number
  }
  console.log(number)
} 