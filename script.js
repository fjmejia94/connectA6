function saveEvent(){
  var input = document.getElementById('loginInput');
  localStorage.setItem('server', input.value);
  displayEvent();

}

function displayEvent(){
  var storedValue = localStorage.getItem('server');
  document.getElementById('some_message').innerHTML = storedValue;
}
