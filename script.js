/* Globals */

// This string will basically serve as a hash key for finding events
var accessString;


function initEventArr(){
  sessionStorage.setItem('eventIndex', 0);
}

function saveEvent(){
  // Figure which event you're on if on a single day
  var eventNum = sessionStorage.getItem('eventIndex');

  /*
  // Save input local
  var eventName = document.getElementById('eventNameInput').value;
  var eventDate = document.getElementById('dateInput').value;

  // Store data into storage sesh using accessString as hash key

  accessString = toString(eventNum) + "(@)" + eventDate + "(@)" + "eventName";
  sessionStorage.setItem(accessString, eventName);

  accessString = eventNum + eventDate + "(@)" + "eventDate";
  sessionStorage.setItem(accessString, eventDate);

  */

  /* Using JSON.stringify */
  var eventObj =
  {
    name: document.getElementById('eventNameInput').value,
    date: document.getElementById('dateInput').value,
    descrip: document.getElementById('descripInput').value
  };
  console.log(eventNum);
  var eventStr = 'event' + eventNum;
  sessionStorage.setItem(eventStr, JSON.stringify(eventObj));
  displayEvent();

  // Increment event number
  eventNum = parseInt(eventNum) + 1;
  sessionStorage.setItem('eventIndex', eventNum);

  // Reset form values
  document.getElementById('eventNameInput').value = "";
  document.getElementById('dateInput').value = "";
  document.getElementById('descripInput').value = "";

}


function incTest(){
  document.getElementById('eventNameInput').value = "";
  document.getElementById('dateInput').value = "0001-01-01";

  dayArray.push(1);
  console.log(document.getElementById('dateInput').value);
}


function displayEvent(){
  var desiredDate = "2017-11-07";
  var eventNum = parseInt(sessionStorage.getItem('eventIndex'));
  console.log(eventNum);
  for (i=0;i<eventNum+1;i++){
    var eventStr = 'event' + i;
    var eventObj = JSON.parse(sessionStorage.getItem(eventStr));

    if (eventObj.date == desiredDate){
      console.log(i);
      console.log(eventObj);
      document.getElementById('some_message').innerHTML = eventObj.name;
      document.getElementById('some_message2').innerHTML = eventObj.date;
      document.getElementById('some_message3').innerHTML = eventObj.descrip;

    }
  }

}
