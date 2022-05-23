// We created a constant here and then assigned it to moment method to get the date
const today = moment();
//We console log to see the specific format of the date
console.log(today.format("dddd, MMM Do YYYY")); 
//We created a variable called date and set it equals to query selector which will search for an ID current day in HTML
var date = document.querySelector("#currentDay")
//Then add text content and set it equals to the date format we desire
date.textContent = today.format("dddd, MMM Do YYYY");
//we then console log to see the if the date appears
console.log(moment().hours());
//we created a variable called text and set it equals to query selector that would search for an ID text area to implement the following for loop
var text = document.querySelectorAll("textarea")
// we created a for loop to do the iteration through 9 to 5 working schedule
for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
    console.log(text[i].id)
    // Here we add if statements to see if i.id is less than moment() then the color would change of past as assigned it in the css file
    if (text[i].id < moment().hours())  {
        text[i].classList.add("past")
    }
    //we did same for present
    if (text[i].id === moment().hours())  {
        text[i].classList.add("present")
    }
    //we did same for future 
    if (text[i].id > moment().hours())  {
        text[i].classList.add("future")
    }
    
}
//We created jquery ready function to set up our local storage
$(document).ready(function(){
    //We then called our class for the save button and add an event listner
    $(".saveContent").on("click", function() {
        //We then set item using what we had in textarea
        localStorage.setItem("myContent", $("textarea").val());
        //And then we do get Item to retrieve the data
        console.log(localStorage.getItem("myContent"));
    })
});






