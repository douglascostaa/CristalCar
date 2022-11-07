
function funcao_geraPDF () {
	var pega_dados = document.getElementById('dados').innerHTML;

	var janela = window.open('', '', 'width=800, heigth=600');
	
	janela.document.write('<html><head>');
	janela.document.write('<title>PDF</title></head>');
	janela.document.write('<body>');
	janela.document.write(pega_dados);
	janela.document.write('</body></html>');
	janela.document.close();
	janela.print();
}



const data =  toLocaleDateString();
document.querySelector('.date').innerHTML = data;


