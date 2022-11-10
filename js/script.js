
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
const buttonNext = document.querySelector(".button-next")
const buttonBack = document.querySelector("#button-back")
const buttonOrcamento = document.querySelector(".button-orcamento");
const divButtonBack = document.querySelector(".div-back-button")

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})
let formMain = document.getElementsByClassName('form-main');


// Desativa o botão de voltar na tela inicial 
function removeStyle(){
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`#button-back{
        display: none;
    }`);
    document.adoptedStyleSheets = [sheet];
}
// Ativa o botão nas outras telas
function addStyle(){
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
buttonNext.addEventListener("click", (e) => {
    currentStep++;

    if (currentStep == 2) {
        formMain[1].classList.remove("active");
        formMain[2].classList.add("active");
    }
    console.log(currentStep)
})

buttonBack.addEventListener("click",(e) => {
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
})