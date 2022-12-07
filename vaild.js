let userInput = document.querySelector("[name='username']");
let passInput = document.querySelector("[name='pass']");
document.forms[0].onsubmit = function (e) {
    let validName = false;
    let validPASS = false;
  if (userInput.value === "admin" ) {
    validName = true;
  }
  if(passInput.value==="123"){ 
       validPASS= true;
  }
  if(validName===true && validPASS===true){
    e.preventDefault(e);
    result.innerHTML="welcome"

  }
  else{
    e.preventDefault(e);
    result.innerHTML="Not registered"
  }

}