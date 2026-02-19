function colour(){
 document.body.style.backgroundColor = 'green';
}

function red(){
 document.body.style.backgroundColor = 'red';
 document.querySelector("h1").style.color = 'white';
}

 function green(){
 document.body.style.backgroundColor = 'green';
 document.querySelector("h1").style.color = 'white';
 }

 function blue(){
 document.body.style.backgroundColor = 'blue';
 document.querySelector("h1").style.color = 'white';
 }

 function white(){
 document.body.style.backgroundColor = 'white';
 document.querySelector("h1").style.color = 'black';
 }

 const yelloBtn = document.getElementById('yelloc')
 yelloBtn.onclick = function makeyello(){
    document.body.style.background = 'yellow'
 document.querySelector("h1").style.color = 'black';
 }
