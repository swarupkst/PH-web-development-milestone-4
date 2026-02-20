document.getElementById('red').addEventListener('click',function makeRed(){
    document.body.style.backgroundColor='red'
    document.querySelector('h1').style.color='white'
})

document.getElementById('blue').addEventListener('click', function makeBlue(){
    document.body.style.backgroundColor='blue'
    document.querySelector('h1').style.color='white'
})

document.getElementById('green').addEventListener('click', function makeBlue(){
    document.body.style.backgroundColor='green'
    document.querySelector('h1').style.color='white'
})
document.getElementById('white').addEventListener('click', function makeBlue(){
    document.body.style.backgroundColor='white'
    document.querySelector('h1').style.color='black'
})