(function(win,doc){
	'use strict';

// 	doc.querySelector('#svg2').addEventListener('mouseover',(e)=>{
// 		 let id = e.target.id;
// 		 doc.querySelector('#'+id).style.fill = 'rgb(3,3,3)';
// 	});

// 	doc.querySelector('#svg2').addEventListener('mouseout',(e)=>{
// 			let id = e.target.id;
// 			doc.querySelector('#'+id).style.fill = '#999999';
// 	});

	const territorios = doc.getElementsByTagName('path');

	
		
		for(let i = 0; i <territorios.length; i++) {
			const elemento = territorios[i]

			

			elemento.addEventListener('click',()=>{
				for(let i =0; i<territorios.length; i++){
					territorios[i].classList.remove('active');
				}
				elemento.classList.add('active')
				if(elemento.classList.contains('active')){
				elemento.classList.add('active');
				console.log('OIIIII');
			}
		});

	}
	

})(window,document);

//CÓDIGO ORIGINAL DO MAPA

// (function(win,doc){
// 	'use strict';

// 	doc.querySelector('#svg2').addEventListener('mouseover',(e)=>{
// 		 let id = e.target.id;
// 		 doc.querySelector('#'+id).style.fill = 'rgb(3,3,3)';
// 	});

// 	doc.querySelector('#svg2').addEventListener('mouseout',(e)=>{
// 			let id = e.target.id;
// 			doc.querySelector('#'+id).style.fill = '#999999';
// 	});

// 	doc.querySelector('#svg2').addEventListener('click',(e)=>{

// 		doc.querySelector('#'+id).style.fill = 'rgb(255,,3)';
// 			let id = e.target.id;
// 			console.log(id);
			

// 	});

// })(window,document);




// //BOMBANDO

// (function(win,doc){
// 	'use strict';

// const territorios = doc.getElementsByTagName('path');

	
		
// for(let i = 0; i <territorios.length; i++) {
// 	const elemento = territorios[i]

	

// 	elemento.addEventListener('click',()=>{
// 		for(let i =0; i<territorios.length; i++){
// 			territorios[i].classList.remove('active');
// 		}
// 		elemento.classList.add('active')
// 		if(elemento.classList.contains('active')){
// 		elemento.classList.add('active');
// 		console.log(elemento.classList + ' Olá');
// 	}
// 	 else if(elemento.classList.contains('active')){
// 		elemento.classList.remove('active');
// 		console.log(elemento.classList + ' Saiu');	
// 	}
	
// });

// }


// })(window,document);