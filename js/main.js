//custom message that shows the user he/she should input their birthdate
var ageInput = document.getElementById("ageInput");
var nameInput = document.getElementById("nameInput");

var emailInput= document.getElementById("emailInput");

var phoneInput= document.getElementById("phoneInput");

var subjectInput= document.getElementById("subjectInput");

var messageInput= document.getElementById("messageInput");
function ShowContactDetails()
{
  window.alert("Nice to meet you " +nameInput.value +". Here is what you sent us.\n"+ "Name: "+nameInput.value+"\n"+"Email: "+emailInput.value+"\n" +  "Subject: "+subjectInput.value+"\n"+"Message: "+messageInput.value);
}
///
function ShowDateField() {
  ageInput.type = 'date';
}
function HideDateField() {
  ageInput.type = 'text';
}
function OnHideInfo() {
  document.getElementById("modal01").style.display = "none";
}
function onClick(element) {
  var get_prompt = window.prompt("Are you sure you want to buy this item?");
  if (get_prompt == "Yes" || get_prompt == "yes") {
    window.alert("Thanks for purchasing");
  }
  else if (get_prompt == "No" || get_prompt == "no") {
    window.alert("Select another item");
  }
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.querySelector("#mySidebar");
function open_menu() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    console.log("this stuff works");
  } else {
    mySidebar.style.display = 'block';
    console.log("this stuff works");
  }
}

// Close the sidebar with the close button
function close_menu() {
  mySidebar.style.display = "none";
  console.log("this stuff close");
}
