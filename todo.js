var todos=[];

function setDate(){
    var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    var todaysDate = new Date(); /* This line will set todaysDate to be the current date/time */
    var formattedDate;
    var day = todaysDate.getDate();
    var month = todaysDate.getMonth();
    var year = todaysDate.getFullYear();
    formattedDate = months[month]+" "+day+", "+year;
    document.getElementById('date').innerHTML = formattedDate;
}

function addItemPrompt(){
  var itemName = prompt("What would you like to do today?");
  if (itemName) {
    todos.push({"name": itemName, "done": false, "date": "", "time": "", "importance": ""});
    console.log(todos);
    putTextInTable();
  }
}

function checkTheBox(thisTD){
  console.log("box checked!");
  thisTD.innerHTML="<i class='fas fa-plus-circle'></i>"
  var index = thisTD.parentElement.rowIndex; /*Gets the number of the row;*/
  if (todos[index].done){
         todos[index].done = false; /* In that case we set it to false, to uncheck the box */
  }
  else {
    todos[index].done = true;
  }
  putTextInTable();
}

function putTextInTable(){
  var toDoList = document.getElementById("toDoList");
  toDoList.innerHTML= "";
  for (var i = 0; i < todos.length; i++){
    var itemNode = document.createTextNode(todos[i].name);
    var newRow = document.createElement('tr');
    var itemTD = document.createElement('td');
    var dateNode = document.createTextNode(todos[i].date);
    var dateTD = document.createElement('td');
    var timeNode = document.createTextNode(todos[i].time);
    var timeTD = document.createElement('td');
    var urgencyNode = document.createTextNode(todos[i].importance);
    var urgencyTD = document.createElement('td');

    toDoList.appendChild(newRow);
    newRow.appendChild(itemTD);
    itemTD.appendChild(itemNode);
    newRow.appendChild(dateTD);
    dateTD.appendChild(dateNode);
    newRow.appendChild(timeTD);
    timeTD.appendChild(timeNode);
    newRow.appendChild(urgencyTD);
    urgencyTD.appendChild(urgencyNode);

    if (todos[i].date == ""){
      dateTD.innerHTML="<div class='dropdown'><button onclick='date()' class='dropbtn'>Date</button><div id='myDropdownDate' class='dropdown-contentDate'><a onclick='makeDay(this)' href='#Sunday'>Sunday</a><a onclick='makeDay(this)' href='#Monday'>Monday</a><a onclick='makeDay(this)' href='#Tuesday'>Tuesday</a><a onclick='makeDay(this)' href='#Wednesday'>Wednesday</a><a onclick='makeDay(this)' href='#Thursday'>Thursday</a><a onclick='makeDay(this)' href='#Friday'>Friday</a><a onclick='makeDay(rthis)' href ='#Saturday'>Saturday</a></div></div>";
    }
    if (todos[i].time == ""){
      timeTD.innerHTML="<div class='dropdown'><button onclick='time()' class='dropbtn'>Time</button><div id='myDropdownTime' class='dropdown-contentTime'><a onclick='makeHour(this)' href='#7am'>7am</a><a onclick='makeHour(this)' href='#8am'>8am</a><a onclick='makeHour(this)' href='#9am'>9am</a><a onclick='makeHour(this)' href='#10am'>10am</a><a onclick='makeHour(this)' href='#11am'>11am</a><a onclick='makeHour(this)' href='#12pm'>12pm</a><a onclick='makeHour(this)' href ='#1pm'>1pm</a><a onclick='makeHour(this)' href='#2pm'>2pm</a><a onclick='makeHour(this)' href='#3pm'>3pm</a><a onclick='makeHour(this)' href='#4pm'>4pm</a><a onclick='makeHour(this)' href='#5pm'>5pm</a><a onclick='makeHour(this)' href='#6pm'>6pm</a><a onclick='makeHour(this)' href='#7pm'>7pm</a></div></div>";
    }
    if (todos[i].importance == ""){
      urgencyTD.innerHTML="<div class='dropdown'><button onclick='importance()' class='dropbtn'>Importance</button><div id='myDropdownImportance' class='dropdown-contentImportance'><a onclick='makeUrgency(this)' href='#NotUrgent'>Not Urgent</a><a onclick='makeUrgency(this)' href='#Urgent'>Urgent</a><a onclick='makeUrgency(this)' href='#VeryUrgent'>Very Urgent</a><a onclick='makeUrgency(this)' href='#MUSTDO'>MUST DO</a></div></div>";
    }

    if (todos[i].done == true){
    newRow.innerHTML+= "<td onclick='checkTheBox(this)'><i class='far fa-check-square' class='checkbox'></i></td>";
    }
    else {
      newRow.innerHTML+="<td onclick='checkTheBox(this)'><i class='far fa-square'></i></td>";
    }
  }
}
  function date(){
    document.getElementById("myDropdownDate").classList.toggle("show");
  }

  window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-contentDate");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function time(){
  document.getElementById("myDropdownTime").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-contentTime");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      }
    }
  }
}

function importance(){
  document.getElementById("myDropdownImportance").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-contentImportance");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      }
    }
  }
}

function makeDay(thisA){
  var index = thisA.parentElement.parentElement.parentElement.parentElement.rowIndex;
  console.log(thisA.parentElement.parentElement.parentElement.parentElement);
  todos[index].date = thisA.innerHTML;
  putTextInTable();
}

function makeHour(thisA){
  var index = thisA.parentElement.parentElement.parentElement.parentElement.rowIndex;
  console.log(thisA.parentElement.parentElement.parentElement.parentElement);
  todos[index].time = thisA.innerHTML;
  putTextInTable();
}
function makeUrgency(thisA){
  var index = thisA.parentElement.parentElement.parentElement.parentElement.rowIndex;
  console.log(thisA.parentElement.parentElement.parentElement.parentElement);
  todos[index].importance = thisA.innerHTML;
  putTextInTable();
}
