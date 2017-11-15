/* Globals */

// This string will basically serve as a hash key for finding events
var accessString;
var selectedDay = 11;
var selectedFam = 0;

function initEventArr(){
  sessionStorage.setItem('eventIndex', 0);
}

function saveEvent(){
  // Figure which event you're on if on a single day
  var eventNum = sessionStorage.getItem('eventIndex');
  var famCode = findFamCode(sessionStorage.getItem('selectedFam'));

  /* Using JSON.stringify */
  var eventObj =
  {
    name: document.getElementById('eventNameInput').value,
    date: document.getElementById('dateInput').value,
    descrip: document.getElementById('descripInput').value,
    member: famCode
  };

  var eventStr = 'event' + eventNum;
  sessionStorage.setItem(eventStr, JSON.stringify(eventObj));

  // Increment event number
  eventNum = parseInt(eventNum) + 1;
  sessionStorage.setItem('eventIndex', eventNum);

  eventAlert();

  // Reset form values
  resetEvent();
}

function eventAlert(){

  var name = sessionStorage.getItem('selectedFam');
  if (name == 0){
    name = 'you';
  }
  if (name == 1){
    name = 'Leila';
  }
  if (name == 2){
    name = 'Meg';
  }
  if (name == 3){
    name = 'Rachel';
  }
  if (name == 4){
    name = 'Ryan';
  }
  console.log(name);

  // For Alerts
  var str = ' <div class="alert alert-success alert-dismissable fade in"> \
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
              <strong> Event created for '+ name +'! </strong> \
              </div> ';
  console.log(document.getElementById('eventNameInput').value);
  // Edge case: If no message is written
  if ( document.getElementById('eventNameInput').value == "" ){
    str = '<div class="alert alert-danger alert-dismissable fade in"> \
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
                <strong>Give your event a name!</strong> \
           </div>';
  }
  document.getElementById('eventAlert').innerHTML = str;

}

// Takes var day, aka desired date to be displayed
function displayEvent( day, memb ){
  var desiredDate = "2017-11-" + day;
  var eventNum = parseInt(sessionStorage.getItem('eventIndex'));
  console.log(desiredDate);
  for (i=0;i<eventNum;i++){
    var eventStr = 'event' + i;
    var eventObj = JSON.parse(sessionStorage.getItem(eventStr));
    if (eventObj.date == desiredDate && eventObj.member == memb){
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

function selectDay( day, memb ){
  clearEventDisplay();
  var dayStr = "day" + parseInt(selectedDay);
  document.getElementById(dayStr).className -= "active";
  dayStr = "day" + parseInt(day);
  document.getElementById(dayStr).className = "active";
  selectedDay = day;

  displayEvent(selectedDay, memb);
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

function msgRecipient(){
  var list = document.getElementsByName('rl')[0];

  return (list.options[list.selectedIndex].value);

}

function clearMsg(){
  document.getElementById('msgInput').value = "";
}

function sendMsg(){
  var str = ' <div class="alert alert-success alert-dismissable fade in"> \
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
              <strong>Message sent to '+ msgRecipient() +'!</strong> \
              </div> ';
  var list = document.getElementsByName('rl')[0];

  // Edge case: If no recip is selected
  if ( list.selectedIndex == 0 ){
    str = '<div class="alert alert-danger alert-dismissable fade in"> \
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
                <strong>Choose a recipient!</strong> \
           </div>';
  }

  // Edge case: If no message is written
  if ( document.getElementById('msgInput').value == "" ){
    str = '<div class="alert alert-danger alert-dismissable fade in"> \
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
                <strong>Write your message first!</strong> \
           </div>';
  }

  document.getElementById('msgAlert').innerHTML = str;
  clearMsg();
}

function famSelect(index){
  sessionStorage.setItem('selectedFam',index);
}

function setRecip(){
  var list = document.getElementsByName('rl')[0];
  list.selectedIndex = sessionStorage.getItem('selectedFam');
}

function findFamCode(who){
  var name = who;
  if (name == 0){
    name = '';
  }
  if (name == 1){
    name = 'l';
  }
  if (name == 2){
    name = 'm';
  }
  if (name == 3){
    name = 'ra';
  }
  if (name == 4){
    name = 'r';
  }

  return name;
}

function loadCal(who){
  var famcode = findFamCode(who);
  for (i=2;i<=31;i++){
    var str = "<li onclick='selectDay('0" + i + "','" + famcode + "')'> <span id='day" + i + "'>" + i + "</span></li>";
    document.getElementById('cul').innerHTML += str;
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function calendarDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}