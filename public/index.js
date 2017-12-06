

var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
  },1500);
};

var btns = document.querySelectorAll('button');
for (var i=btns.length-1;i>=0;i--) {
  btns[i].addEventListener('click',loading);
}
// document.getElementById("joke").addEventListener('click',getjoke);

function getjoke(){
  url = "/getjoke";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      var response = (xhr.responseText);
      document.getElementById("rjoke").innerHTML = response;
      var pic = `https://api.adorable.io/avatars/285/${Math.floor((Math.random() * 100) + 1)}.png`;
      document.getElementById("face").src = pic;
    } else {
      console.log('Status Code: ' + xhr.status);
    }
  };
  xhr.open('POST', url);
  xhr.send();
  }
