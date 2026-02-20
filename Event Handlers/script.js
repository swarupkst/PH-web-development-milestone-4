document.getElementById('btn').addEventListener('click', function textBtn(){

const pageTitle = document.getElementById('title');

pageTitle.innerText = 'Updated Text'
} )

document.getElementById('login-test').addEventListener('click', function something(){
    const changeLogin = document.getElementById('login-test');
    changeLogin.innerText = 'LogOut'
})

document.getElementById('text-btn').addEventListener('click', function(){
    const collectText =document.getElementById('collect-text');
    const newText = collectText.value;
    const textBtn = document.getElementById('text-blank')
    textBtn.innerText = newText;
})