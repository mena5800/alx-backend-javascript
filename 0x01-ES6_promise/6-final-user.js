import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

function handleProfileSignup(firstName, lastName, fileName){
  Promise.all([signUpUser(), uploadPhoto()])
  .then((results) => {
    
  })
}

module.exports = handleProfileSignup;