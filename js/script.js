
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


//---------Desativa o botão de voltar na tela inicial--------- 
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
//---------Controller das "páginas" de navegação---------
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
        nenhumaPeca();
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


// ----------MANIPULA FORMULÁRIO: ENVIA/PEGA DADOS---------
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

//---------MANIPULA TELA DE SERVIÇOS: ENVIA/PEGA DADOS---------
function serviceList() {
    const valor_init = document.querySelector("#price");
    var troca_label = document.querySelector("#checkServices1"); var trocaPinta_label = document.querySelector("#checkServices2");
    const troca = troca_label.value;
    const trocaPinta = trocaPinta_label.value;
    var removeInstala_label = document.querySelector("#checkServices3");
    const removeInstala = removeInstala_label.value;
    var recupera_label = document.querySelector("#checkServices4");
    const recupera = recupera_label.value;
    var pintura_label = document.querySelector("#checkServices5");
    const pintura = pintura_label.value;
    var vetServicos = [troca, trocaPinta, removeInstala, recupera, pintura];
    var elementos = document.getElementsByClassName("checkServices");
    var precoDinamico = valor_init;

    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            document.getElementById("services").innerHTML += "<li>" + vetServicos[i] + "</li>";
        }
    }

    document.getElementById("price-form").innerHTML += "<li>" + "R$ " + precoDinamico.value + "</li>";
}


//--------- MANIPULANDO O MAPA ---------
(function (win, doc) {
    // 'use strict';

<<<<<<< HEAD
    doc.getElementsByClassName('button-next-2').disabled = true;
    doc.querySelector('#svg2').addEventListener('click', (e) => {
            let id = e.target.id;

            
            if(doc.querySelector('#' + id).style.fill = 'rgb(153,153,153)'){
            console.log(id);
            doc.querySelector('#svg2').addEventListener('click', (e) => {
                doc.querySelector('#' + id).style.fill = 'rgb(255,25,25)';
            });
            document.getElementById("peca_dinamica").innerHTML = id;
            document.getElementById("parts").innerHTML = id;
            doc.getElementsByClassName('.button-next-2').disabled = true;
            }

            if(doc.querySelector('#' + id).style.fill = 'rgb(255,25,25)'){
                console.log(id);
                doc.querySelector('#svg2').addEventListener('click', (e) => {
                    doc.querySelector('#' + id).style.fill = 'rgb(153,153,153)';
                });
                document.getElementById("peca_dinamica").innerHTML = id;
                document.getElementById("parts").innerHTML = id;
                doc.getElementsByClassName('.button-next-2').disabled = true;
                }
    })

    // doc.querySelector('#svg2').addEventListener('dblclick', (e) => {
    //     let id = e.target.id;
    //     console.log(id);
    //     doc.querySelector('#' + id).style.fill = '#999999';
    //     document.getElementById("peca_dinamica").innerHTML = id;
    //     document.getElementById("parts").innerHTML = id;
    // });



=======
    doc.querySelector('#svg2').addEventListener('click', (e) => {
        let id = e.target.id;
        console.log(id);
        const path = doc.querySelector('#' + id);
        path.style.fill = 'rgb(3,3,3)';
        document.getElementById("peca_dinamica").innerHTML = id;
        document.getElementById("parts").innerHTML += "<li>" + id + "</li>";

    });

    doc.querySelector('#svg2').addEventListener('dblclick', (e) => {
        let id = e.target.id;
        console.log(id);
        doc.querySelector('#' + id).style.fill = '#999999';
        document.getElementById("peca_dinamica").innerHTML = "Nenhuma peça selecionada.";
        document.getElementById("parts").innerHTML = "SEM PEÇA";
        nenhumaPeca();
    });

>>>>>>> 8fc64e4c198bfaef1dc3559c7d2a156cb07c8f79
})(window, document);

//---------TRATAMENTO DE ERRO PEÇA NÃO SELECIONADA ---------
function nenhumaPeca() {
    const peca_carro = document.getElementById("peca_dinamica");

    if (peca_carro.innerHTML == "" || peca_carro.innerHTML == "svg2") {
        document.getElementById("peca_dinamica").innerHTML = "Nenhuma peça selecionada.";
        document.getElementById("checkServices1").disabled = true;
        document.getElementById("checkServices2").disabled = true;
        document.getElementById("checkServices3").disabled = true;
        document.getElementById("checkServices4").disabled = true;
        document.getElementById("checkServices5").disabled = true;
        document.getElementById("price").disabled = true;

        return;

    } else {
        document.getElementById("checkServices1").disabled = false;
        document.getElementById("checkServices2").disabled = false;
        document.getElementById("checkServices3").disabled = false;
        document.getElementById("checkServices4").disabled = false;
        document.getElementById("checkServices5").disabled = false;
        document.getElementById("price").disabled = false;

        return;
    }
}


//--------- VERIFICA E DESABILITA OS CHECKBOX ---------
function validaCheck() {
    const checkbox1 = document.getElementById("checkServices1");
    const checkbox2 = document.getElementById("checkServices2");
    const checkbox3 = document.getElementById("checkServices3");
    const checkbox4 = document.getElementById("checkServices4");
    const checkbox5 = document.getElementById("checkServices5");

    if (checkbox1.checked) {
        checkbox2.disabled = true;
        checkbox3.disabled = true;
        checkbox4.disabled = true;
        checkbox5.disabled = true;
    } else {
        checkbox1.disabled = false;
        checkbox2.disabled = false;
        checkbox3.disabled = false;
        checkbox4.disabled = false;
        checkbox5.disabled = false;
    }
    if (checkbox2.checked) {
        checkbox1.disabled = true;
        checkbox3.disabled = true;
        checkbox4.disabled = true;
        checkbox5.disabled = true;
    }
    if (checkbox3.checked) {
        checkbox1.disabled = true;
        checkbox2.disabled = true;
        checkbox4.disabled = true;
        checkbox5.disabled = true;
    }
    if (checkbox4.checked) {
        checkbox1.disabled = true;
        checkbox2.disabled = true;
        checkbox3.disabled = true;
        checkbox5.disabled = true;
    }
    if (checkbox5.checked) {
        checkbox1.disabled = true;
        checkbox2.disabled = true;
        checkbox4.disabled = true;
        checkbox3.disabled = true;
    }
}


