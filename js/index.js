/*check to make sure js is working*/
console.log("Your index.js file is loaded correctly!");

/*B. Create a jQuery Event Listener That Triggers a UI Interaction*/
/*We want the document to shift down and display mor information*/
$(document).ready(function(){
    $("#introReadMore-btn").click(toggleIntro);
    $("#introReadLess-btn").click(toggleIntro);
  });

  function toggleIntro(){
    $("#extendedIntro").slideToggle();
    $("#introReadMore-btn").toggle();
    $("#introReadLess-btn").toggle();
  }