function saveEvent(){
  var input = document.getElementById('loginInput');
  var day = document.getElementById('date');
  for (i=0;i<eventArr;i++){
    sessionStorage.setItem(''+i,)
  }
  sessionStorage.setItem('server', input.value);
  var
  window.displayEvent();

}

function displayEvent(){
  var storedValue = sessionStorage.getItem('server');
  document.getElementById('some_message').innerHTML = storedValue;
}
