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

// Takes var day, aka desired date to be displayed
function displayEvent( day ){
  var desiredDate = "2017-11-" + day;
  var eventNum = parseInt(sessionStorage.getItem('eventIndex'));
  console.log(desiredDate);
  for (i=0;i<eventNum;i++){
    var eventStr = 'event' + i;
    var eventObj = JSON.parse(sessionStorage.getItem(eventStr));
    if (eventObj.date == desiredDate){
      var newEvent = '<div class="panel panel-primary"> \
                				<div class="panel-heading">' + eventObj.name + '</div> \
                				<div class="panel-body"> \
                          <p>' + eventObj.date + '</p> \
                          <p>' + eventObj.descrip + '</p> \
                				</div> \
                			</div>';
      document.getElementById('dayContent1').innerHTML += (newEvent);
    }
  }
}

function selectDay( day ){
  clearEventDisplay();
  var dayStr = "day" + parseInt(selectedDay);
  document.getElementById(dayStr).className -= "active";
  dayStr = "day" + parseInt(day);
  document.getElementById(dayStr).className = "active";
  selectedDay = day;

  displayEvent(selectedDay);
}

function clearEventDisplay(){
  document.getElementById('dayContent1').innerHTML = "";
}

function resetEvent(){
  // Reset form values
  document.getElementById('eventNameInput').value = "";
  document.getElementById('dateInput').value = "";
  document.getElementById('descripInput').value = "";
}

function returnMsgRecipient(){
  var list = document.getElementsByName('rl')[0];
  console.log( list.options[list.selectedIndex].value );
  console.log( list.selectedIndex );

}

function clearMsg(){
  document.getElementById('msgInput').value = "";
}

function sendMsg(){
  var str = ' <div class="alert alert-success alert-dismissable fade in"> \
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
              <strong>Message Sent!</strong> \
              </div> ';

  document.getElementById('msgAlert').innerHTML = str;
}
