/* Globals */

// This string will basically serve as a hash key for finding events
var accessString;
var selectedDay = 11;

function initEventArr(){
  sessionStorage.setItem('eventIndex', 0);
}

function saveEvent(){
  // Figure which event you're on if on a single day
  var eventNum = sessionStorage.getItem('eventIndex');

  /* Using JSON.stringify */
  var eventObj =
  {
    name: document.getElementById('eventNameInput').value,
    date: document.getElementById('dateInput').value,
    descrip: document.getElementById('descripInput').value
  };
  var eventStr = 'event' + eventNum;
  console.log(eventStr);
  sessionStorage.setItem(eventStr, JSON.stringify(eventObj));

  // Increment event number
  eventNum = parseInt(eventNum) + 1;
  sessionStorage.setItem('eventIndex', eventNum);

  // Reset form values
  document.getElementById('eventNameInput').value = "";
  document.getElementById('dateInput').value = "";
  document.getElementById('descripInput').value = "";

}

function displayEvent( day ){
  var desiredDate = "2017-11-" + day;
  var eventNum = parseInt(sessionStorage.getItem('eventIndex'));
  console.log(desiredDate);
  for (i=0;i<eventNum;i++){
    var eventStr = 'event' + i;
    var eventObj = JSON.parse(sessionStorage.getItem(eventStr));
    if (eventObj.date == desiredDate){
      console.log(eventObj);
      document.getElementById('dayContent1').innerHTML = eventObj.name;
      document.getElementById('dayContent2').innerHTML = eventObj.date;
      document.getElementById('dayContent3').innerHTML = eventObj.descrip;

    }
  }
}

function selectDay( day ){
  var dayStr = "day" + parseInt(selectedDay);
  document.getElementById(dayStr).className -= "active";
  dayStr = "day" + parseInt(day);
  document.getElementById(dayStr).className = "active";
  selectedDay = day;

  displayEvent(selectedDay);
}
