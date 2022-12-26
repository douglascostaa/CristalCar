
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
const buttonNext_4 = document.querySelector(".button-next-4")
const buttoEnd = document.querySelector(".button-end")
const buttonBack = document.querySelector("#button-back")
const buttonOrcamento = document.querySelector(".button-orcamento")
const divButtonBack = document.querySelector(".div-back-button")
const buttonPictureRequest = document.querySelector('.button-picture-request')
const buttonTakePicture = document.querySelector('.button-picture')
const buttonTakeAnotherPicture = document.querySelector('.button-take-another-photo')
const video = document.querySelector('video')
const photoGallery = document.getElementsByClassName('photo-gallery')
const modal = document.getElementById('modal')

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
        modal.style.display = 'none';
    }
    console.log(currentStep)
})

// Abre a câmera para tirar fotos e salva as fotos na tela final

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => {
        console.log(error);
    })

buttonPictureRequest.addEventListener('click', () => {
    currentStep++;

    if (currentStep == 3) {
        formMain[2].classList.remove("active");
        formMain[3].classList.add("active");
    }
    console.log(currentStep)
    console.log('oi')
    video.style.display = 'block';
    modal.style.display = 'none';
    buttonTakePicture.style.display = 'block';
    // img.src = canvas.toDataURL('image/png');
    // photoGallery.removeChild(img);

});

buttonTakePicture.addEventListener('click', () => {
    console.log(currentStep)
    video.style.display = 'none';
    modal.style.display = '';
    buttonTakePicture.style.display = 'none';
    var canvas = document.querySelector('canvas');
    canvas.width = 200;
    canvas.height = 200;

    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 200, 200);

});
// console.log(currentStep)
// video.style.display='none';
// modal.style.display = '';
// buttonTakePicture.style.display = 'none';
// var canvas = document.querySelector('canvas');
// currentStep++;

// canvas.width = 500;
// canvas.height = 400;

// var context = canvas.getContext('2d');
// context.drawImage(video, 0, 0, 500, 400);

// // for(let i =0; i<=photoGallery.length; i++){
// //     console.log('Tirei a foto', i)
// //     const img = document.createElement('img');
// //     img.src = canvas.toDataURL('image/png');
// //     photoGallery[i].appendChild(img);
// //     console.log(photoGallery)
// // }


buttonTakeAnotherPicture.addEventListener('click', () => {
    console.log('oi')
    video.style.display = 'block';
    modal.style.display = 'none';
    buttonTakePicture.style.display = 'block';
    img.src = canvas.toDataURL('image/png');
    photoGallery.removeChild(img);
})

buttonNext_2.addEventListener("click", (e) => {
    currentStep = currentStep + 2;

    if (currentStep == 4) {
        formMain[2].classList.remove("active");
        formMain[4].classList.add("active");
    }
    console.log(currentStep)

})

buttonNext_3.addEventListener("click", (e) => {
    currentStep++;
    if (currentStep == 4) {
        formMain[1].classList.remove("active");
        formMain[0].classList.remove("active");
        formMain[3].classList.remove("active");
        formMain[4].classList.add("active");
        console.log(currentStep)
    }
})
buttonNext_4.addEventListener("click", (e) => {
    console.log(currentStep)

    if (currentStep == 4) {
        currentStep = currentStep - 2;
        formMain[1].classList.remove("active");
        formMain[0].classList.remove("active");
        formMain[3].classList.remove("active");
        formMain[4].classList.remove("active");
        formMain[2].classList.add("active");
        console.log(currentStep)
    }
   
})

buttoEnd.addEventListener("click", (e) => {
    currentStep++;
    if (currentStep == 5) {
        formMain[0].classList.remove("active");
        formMain[1].classList.remove("active");
        formMain[2].classList.remove("active");
        formMain[3].classList.remove("active");
        formMain[4].classList.remove("active");
        formMain[5].classList.add("active");
    }
    console.log(currentStep)
})

//---------Controller das "páginas" de navegação (VOLTAR)---------
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
        //TO DO: REMOVER OS ITENS: PEÇA SELECIONADA
        //WARNING: TEM QUE CUIDAR PARA CONSEGUIR ADICIONAR MAIS QUE UMA 
        nenhumaPeca();
        console.log(currentStep)
    }
    if (currentStep == 4) {
        currentStep = currentStep - 2;
        formMain[4].classList.remove("active");
        formMain[2].classList.add("active");
        formMain[3].classList.remove("active");
        formMain[0].classList.remove("active");
        formMain[1].classList.remove("active");

        //REMOVE A PEÇA SELECIONADA
        const pecas = document.getElementsByTagName('path');
        for (let i = 0; i < pecas.length; i++) {
            pecas[i].classList.remove('active');
        }

        //TO DO: REMOVER OS ITENS: VALOR, SERVIÇOS
        console.log(currentStep)
    }
    if (currentStep == 5) {
        currentStep--;
        formMain[5].classList.remove("active");
        formMain[4].classList.add("active");
        formMain[2].classList.remove("active");
        formMain[3].classList.remove("active");
        formMain[0].classList.remove("active");
        formMain[1].classList.remove("active");

        //TO DO: REMOVER OS ITENS: VALOR, SERVIÇOS
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
    var troca_label = document.querySelector("#checkServices1");
    var trocaPinta_label = document.querySelector("#checkServices2");
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


//---------SELECIONA AS PEÇAS DO CARRO---------

(function selectParts() {
    'use strict';
    const pecas = document.getElementsByTagName('path');

    for (let i = 0; i < pecas.length; i++) {
        const elemento = pecas[i]

        elemento.addEventListener('click', (event) => {
            for (let i = 0; i < pecas.length; i++) {
                pecas[i].classList.remove('active');
            }
            elemento.classList.add('active')
            if (elemento.classList.contains('active')) {
                elemento.classList.add('active');
            }

            const el = event.target;
            const id = el.id;

            console.log(id)
            document.getElementById("peca_dinamica").innerHTML = id;
            
             
            buttonNext_4
            document.getElementById("parts").innerHTML += "<li>" + id + "</li>";



            // console.log(id);
        })
    }

    // document.querySelector('#svg2').addEventListener('click', (e) => {
    //     let id = e.target.id;
    //     console.log(id);
    //     // document.querySelector('#' + id).style.fill = '#999999';
    //     document.getElementById("peca_dinamica").innerHTML = "Nenhuma peça selecionada.";
    //     document.getElementById("parts").innerHTML = "SEM PEÇA";
    //     nenhumaPeca();
    // });

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



// clientes = [[Nome: Victor, Carro: IXL1929, Peças: [Capo,Porta], Fotos: [img1,img2,im3]], [Nome: Douglas, Carro: IXL1929, Peças: [Porta], Fotos: [img1,img3]]];

// clientes[index].Fotos.img1;


// clients[index];

// listItemClientes.addEventListener('onclick'){
//     for(let i =0; clientes.lenght>i; i++){

//         request.FireBase.clients[index].Fotos
//     }
// }

