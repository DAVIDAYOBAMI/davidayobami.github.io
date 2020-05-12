let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/download.png') {
      myImage.setAttribute ('src','image/firefox2.png');
    } else {
      myImage.setAttribute ('src','image/download.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}
let myHeading = document.querySelector('h1');
function setUserName() 
{
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the world of Web Design, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the world of Web Design, ' + storedName;
}
