
var email = document.getElementById('email')
var password = document.getElementById('password')
var btnLogin = document.getElementById('button-end');




//Faz o login do usuário
function login() {
  console.log('antes')
  firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(response => {
    window.location.href = 'form.html';
  }).catch(error => {
    alert('Senha Errada!');
  });
}

//Recupera a senha do usuário
function recoverPassword(){
  firebase.auth().sendPasswordResetEmail(email.value).then(()=>{
    alert('Email enviado com sucesso')
  }).catch(error =>{
    alert(error);
  })
}


//Faz o logout do usuário
function logout(){
  firebase.auth().signOut().then(()=>{
    window.location.href = "index.html";
  }).catch(()=>{
    alerta('Erro ao fazer login')
  })
}