
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
  if (codedPhoneNum.indexOf[1]= 1) {
    phoneNumber = codedPhoneNum.substring(2,[3,4,6,7,8,10,11,12,],13)
  }
  return phoneNumber
}

formatPhoneNums("(120)-102-2836")

console.log(phoneNumber)



//SPACE AGE

function spaceAgeCalculator(seconds, planet) {
  if (planet == "Mercury") {
    orbitalPeriod = 0.2408267
  }
  else if (planet == "Venus") {
    orbitalPeriod = 0.615119726
  }
  else if (planet == "Earth") {
    orbitalPeriod = 1.0
  }
  else if (planet == "Mars") {
    orbitalPeriod = 1.8808158 
  } 
  else if (planet == "Jupiter") {
    orbitalPeriod = 11.862615  
  }
  else if (planet == "Saturn") {
    orbitalPeriod =  29.447498
  }
  else if (planet == "Uranus") {
    orbitalPeriod = 84.016846
  }
  else if (planet == "Neptune") {
    orbitalPeriod = 164.79132
  }
  return age = seconds / orbitalPeriod
}

spaceAgeCalculator(1000000000)
console.log( `You are ${age} Earth years old there!`)

// Find the Hamming dinstance
// The Hamming distance is only defined for sequences of equal length, 
// So an attempt to calculate it between sequences of different lengths should not work.

let dnaChain1 = "GAGCCTACTACCGGGAT"
let dnaChain2 = "CATCGTAATGACGGCCT"


function findHammingDistance(dnaChain1, dnaChain2) {
  let hammingDistance = 0;
  if (dnaChain1.length === dnaChain2.length) {
    console.log(dnaChain1.length)
    for (let i = 0; i < dnaChain1.length; i++) {
      if (dnaChain1[i] !== dnaChain2[i]){
        hammingDistance = hammingDistance + 1
     }
    };
  }
  return hammingDistance
}

findHammingDistance(dnaChain1, dnaChain2)

/*RNA Transcription
The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
G -> C
C -> G
T -> A
A -> U  */

let dna = ["GAGCCTACTACCGGGAT"]
function rnaTranscription(dna) {
  let rna = ""
  for (let i = 0; i< dna.length; i++) {
  if (dna[i] === "G") {
    rna[i] = "C"
  }
  if (dna[i] === "C") {
    rna[i] = "G"
  }
  if (dna[i] === "T") {
    rna[i] = "A"
  }
  if (dna[i] === "A"){
    rna[i] == "U"
  }
     }
  return rna
}

rnaTranscription(dna)