//custom message that shows the user he/she should input their birthdate
var ageInput = document.getElementById("ageInput");
ageInput.setCustomValidity("Please enter your birthdate in the format MM/DD/YYYY.");
///
function ShowDateField()
{
  ageInput.type='date';
}
function HideDateField()
{
  ageInput.type='text';
}
  function OnHideInfo()
  {
    document.getElementById("modal01").style.display = "none";
  }
  function onClick(element) {
      var get_prompt=window.prompt("Are you sure you want to buy this item?");
      if(get_prompt == "Yes")
      {
        window.alert("Thanks for purchasing");
      }
      else if(get_prompt == "No")
      {
        window.alert("Select another item");
      }
    }
    
    
    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");
    
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
