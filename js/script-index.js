
var email = document.getElementById('email')
var password = document.getElementById('password')
var btnLogin = document.getElementById('button-end');




// //MOSTRAR E ESCONDER SENHA
// function mostrarSenha(){
//     var tipo = document.getElementById('senha');

//     if(tipo.type == 'password'){
//         tipo.type = 'text';
//     }else{
//         tipo.type ='password';
//     }

// }

function login(){
  console.log('antes')
  firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(response=>{
    alert('Senha Correta!');
    window.location.href = 'form.html';
  }).catch(error=>{
	alert('Senha Errada!');
  });
  console.log('depois')
  console.log(email.value)
  console.log(password.value)
 
}

function showLoading(){
    const div = document.createElement("div");
    div.classList.add('loading');

    const label = document.createElement("label");
    label.innerText = "Carregando!"

    div.appendChild(label);
    document.body.appendChild(div);

    console.log(label);

}

function hideLoading(){

}