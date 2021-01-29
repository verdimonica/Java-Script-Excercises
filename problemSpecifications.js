
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

function isLeapYear(year) {
  const divisibleBy400 = isDivBy400(year);

  if (isDivBy4(year) && divisibleBy400 || isNotDivBy100(year)){
    console.log("Is leap year")
  }
  else{
    console.log("Is not leap year")
  }
};

function isDivBy4 (number){
  if (number % 4 === 0) {
    return true
  }else{
    return false
  }
}

function isDivBy400(number) {
  return number % 400 === 0
}

function isNotDivBy100(number){
  return number % 100 !== 0
}

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


//PHONE NUMBERS

/*Your task is to clean up 
differently formatted telephone numbers 
by removing punctuation and 
the country code (1) if present.
The format is usually represented as:
(NXX)-NXX-XXXX
where N is any digit from 2 through 9
and X is any digit from 0 through 9.*/

function formatPhoneNums(codedPhoneNum) {
  if (codePhoneNum.indexOf[1]= 1) {
    phoneNumber = codedPhoneNum.silce(2,3,4,6,7,8,10,11,12,13)
  }
  return phoneNumber
}