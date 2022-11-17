
// function funcao_geraPDF () {
// 	var pega_dados = document.getElementById('dados').innerHTML;

// 	var janela = window.open('', '', 'width=800, heigth=600');

// 	janela.document.write('<html><head>');
// 	janela.document.write('<title>PDF</title></head>');
// 	janela.document.write('<body>');
// 	janela.document.write(pega_dados);
// 	janela.document.write('</body></html>');
// 	janela.document.close();
// 	janela.print();
// }



// const data =  toLocaleDateString();
// document.querySelector('.date').innerHTML = data;




/*Declaração das constantes*/
const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
const buttonNext_1 = document.querySelector(".button-next-1")
const buttonNext_2 = document.querySelector(".button-next-2")
const buttonNext_3 = document.querySelector(".button-next-3")
const buttonBack = document.querySelector("#button-back")
const buttonOrcamento = document.querySelector(".button-orcamento");
const divButtonBack = document.querySelector(".div-back-button")

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})
let formMain = document.getElementsByClassName('form-main');


// Desativa o botão de voltar na tela inicial 
function removeStyle() {
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`#button-back{
        display: none;
    }`);
    document.adoptedStyleSheets = [sheet];
}
// Ativa o botão nas outras telas
function addStyle() {
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`#button-back{
        display: block;
    }`);
    document.adoptedStyleSheets = [sheet];
}
/*Controller das "páginas" de navegação*/
if (currentStep < 0) {
    currentStep = 0
    formMain[0].classList.add("active");
}
console.log(currentStep)


buttonOrcamento.addEventListener("click", (e) => {
    currentStep++;
    if (currentStep == 1) {
        addStyle();
        formMain[0].classList.remove("active");
        formMain[1].classList.add("active");
    }
    console.log(currentStep)
})

buttonNext_1.addEventListener("click", (e) => {
    currentStep++;

    if (currentStep == 2) {
        formMain[1].classList.remove("active");
        formMain[2].classList.add("active");
    }
    console.log(currentStep)
})

buttonNext_2.addEventListener("click", (e) => {
    currentStep++;

    if (currentStep == 3) {
        formMain[2].classList.remove("active");
        formMain[3].classList.add("active");
    }
    console.log(currentStep)
})

buttonNext_3.addEventListener("click", (e) => {
    currentStep++;

    if (currentStep == 4) {
        formMain[3].classList.remove("active");
        formMain[4].classList.add("active");
    }
    console.log(currentStep)
})


buttonBack.addEventListener("click", (e) => {
    if (currentStep == 1) {
        currentStep--;
        formMain[1].classList.remove("active");
        formMain[0].classList.add("active");
        removeStyle();
        console.log(currentStep)
    }
    if (currentStep == 2) {
        currentStep--;
        formMain[2].classList.remove("active");
        formMain[0].classList.remove("active");
        formMain[1].classList.add("active");
        console.log(currentStep)
    }
    if (currentStep == 3) {
        currentStep--;
        formMain[3].classList.remove("active");
        formMain[2].classList.add("active");
        formMain[0].classList.remove("active");
        formMain[1].classList.remove("active");
        console.log(currentStep)
    }
    if (currentStep == 4) {
        currentStep--;
        formMain[4].classList.remove("active");
        formMain[3].classList.add("active");
        formMain[2].classList.remove("active");
        formMain[0].classList.remove("active");
        formMain[1].classList.remove("active");
        console.log(currentStep)
    }
})


/* MANIPULA FORMULÁRIO: ENVIA/PEGA DADOS */
const btn = document.querySelector(".button-next-1");

btn.addEventListener("click", function (e) {
    const cliente_init = document.querySelector("#cliente");
    const modelo_init = document.querySelector("#modelo");
    const placa_init = document.querySelector("#placa");
    const ano_init = document.querySelector("#ano");
    const cor_init = document.querySelector("#cor");


    const cliente = cliente_init.value;
    const modelo = modelo_init.value;
    const placa = placa_init.value;
    const ano = ano_init.value;
    const cor = cor_init.value;

    document.getElementById("client").innerHTML = cliente;
    document.getElementById("car").innerHTML = modelo;
    document.getElementById("board").innerHTML = placa;
    document.getElementById("year").innerHTML = ano;
    document.getElementById("color").innerHTML = cor;

})

/* MANIPULA TELA DE SERVIÇOS: ENVIA/PEGA DADOS*/
function serviceList() {
    const valor_init = document.querySelector("#price");

    var vetServicos = ["Troca", "Troca e Pintura", "Remover e Instalar", "Recuperar", "Pintura"];
    var elementos = document.getElementsByClassName("checkServices");

    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            document.getElementById("services").innerHTML = "<li>" + vetServicos[i] + "</li>";
        }
    }

    const valor = valor_init.value;
    document.getElementById("price-form").innerHTML = "R$ " + valor;

    console.log(peca);
    console.log(valor);

    document.getElementById("price-form").innerHTML = 'R$ ' + valor;
    document.getElementById("parts").innerHTML = peca;

}

//BRINCANDO COM O MAPA 
(function (win, doc) {
    'use strict';

    doc.getElementsByClassName('button-next-2').disabled = true;

    doc.querySelector('#svg2').addEventListener('click', (e) => {
        let id = e.target.id;
        console.log(id);
        doc.querySelector('#' + id).style.fill = 'rgb(3,3,3)';
        document.getElementById("peca_dinamica").innerHTML = id;
        document.getElementById("parts").innerHTML = id;
        doc.getElementsByClassName('.button-next-2').disabled = false;
    });

    doc.querySelector('#svg2').addEventListener('dblclick', (e) => {
        let id = e.target.id;
        console.log(id);
        doc.querySelector('#' + id).style.fill = '#999999';
        document.getElementById("peca_dinamica").innerHTML = id;
        document.getElementById("parts").innerHTML = id;
    });

    

})(window, document);



