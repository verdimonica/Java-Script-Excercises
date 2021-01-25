
//TWO-FER
/* Given a name, return a string with the message: 
  "One for name, one for me." 

 Where "name" is the given name.
 However, if the name is missing, return the string:
   "One for you, one for me."

*/

let oneName = "Anna";
let self = "me";

function share(a, b) {
    if (!oneName) {
      console.log(`One for you and one for ${self}`)
    } else {
      console.log(`One for ${oneName} and one for ${self}`)
    }
};

share()


//LEAP

/* Given a year, report if it is leap year. 
   A leap year occurs:
   on every year that is evenly divisible by 4
    except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400 
*/

let year = Number;

function leapYear(year) {
  if (year %4===0 
      && year%400===0 
      && year%100 !== 0
      ) 
      {
    console.log("Is a leap year")
  }
}

leapYear(190)