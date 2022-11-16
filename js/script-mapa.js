(function(win,doc){
	'use strict';

	doc.querySelector('#svg2').addEventListener('mouseover',(e)=>{
		 let id = e.target.id;
		 doc.querySelector('#'+id).style.fill = 'rgb(3,3,3)';
	});

	doc.querySelector('#svg2').addEventListener('mouseout',(e)=>{
			let id = e.target.id;
			doc.querySelector('#'+id).style.fill = '#999999';
	});

	doc.querySelector('#svg2').addEventListener('click',(e)=>{
			// let id = e.target.id;
			// win.location.href='http://localhost/estado/'+id;
	});

})(window,document);