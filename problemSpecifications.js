
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


leapYearCond1 = (year %4 === 0); {return true}; 
leapYearCond2 = (year %400 === 0 && year %100 !==0);{return true};
  
function isLeapYear(year); {
  if (leapYearCond1 && leapYearCond2 == true){
    console.log("Is leap yearr")
  }
  else{
    console.log("Is not leap year")
  }
}
isLeapYear(1900)

