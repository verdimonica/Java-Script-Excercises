/* Given a name, return a string with the message: 
  "One for name, one for me." 

 Where "name" is the given name.
 However, if the name is missing, return the string:
   "One for you, one for me."

*/

let name = "Anna";
let me = "me"

function share(name, me){
    console.log(`One for ${name} and one for ${me}`)
}