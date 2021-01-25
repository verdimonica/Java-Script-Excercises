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

