console.log("Hello DOM");

const allSections = document.getElementsByTagName("section")
console.log(allSections);

// const oneTitle = document.getElementById("titleone");
// console.log(oneTitle);


const oneTitle = document.getElementById("titleone");
console.log(oneTitle.innerText);

oneTitle.innerText = "Practice DOM"


const sectionName = document.getElementsByClassName("twosection");
console.log(sectionName);

const lastList = document.getElementById('lastId')

const li = document.createElement('li');
li.innerText = 'New list';

lastId.appendChild(li);