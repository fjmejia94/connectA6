/* Globals */

// This string will basically serve as a hash key for finding events
var accessString;


function initEventArr(){
  sessionStorage.setItem('eventIndex', 0);
}

function saveEvent(){
  // Figure which event you're on if on a single day
  var eventNum = sessionStorage.getItem('eventIndex');

  // Save input local
  var eventName = document.getElementById('eventNameInput').value;
  var eventDate = document.getElementById('dateInput').value;

  /* Store data into storage sesh using accessString as hash key */

  accessString = toString(eventNum) + "(@)" + eventDate + "(@)" + "eventName";
  sessionStorage.setItem(accessString, eventName);

  accessString = eventNum + eventDate + "(@)" + "eventDate";
  sessionStorage.setItem(accessString, eventDate);

  displayEvent();

  // Increment event number
  eventNum = parseInt(eventNum) + 1;
  sessionStorage.setItem('eventIndex', eventNum);
}

function incTest(){
  document.getElementById('eventNameInput').value = "";
  document.getElementById('dateInput').value = "0001-01-01";

  dayArray.push(1);
  console.log(document.getElementById('dateInput').value);
}

function displayEvent(){
  var eventDetails;
  eventDetails = sessionStorage.getItem("accessString") + "\n";
  document.getElementById('some_message').innerHTML = eventDetails;

  var desiredDate = "2017-07-11";
  /*
  for (i=0;i<eventNum;i++){
    var
    if ()
  }
  */
}
