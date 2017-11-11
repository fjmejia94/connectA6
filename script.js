function saveEvent(){
  var input = document.getElementById('loginInput');
  sessionStorage.setItem('server', input.value);
  window.displayEvent();

}

function displayEvent(){
  var storedValue = sessionStorage.getItem('server');
  document.getElementById('some_message').innerHTML = storedValue;
}
