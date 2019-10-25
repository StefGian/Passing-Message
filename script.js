const messageInput = document.querySelector("input");
const button = document.querySelector("button");
const display = document.querySelector("#display");
const displayTime = document.querySelector("#time");

button.addEventListener("click", sendMsg);

function sendMsg(){
  let content = messageInput.value;
  if(content === ''){
    alert("Please fill out the fields");
  }else{
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    display.innerHTML = content;
    displayTime.innerHTML = date + " " + time;
    messageInput.value = '';
  }
};
