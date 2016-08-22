$menu = getElementById('menu');
$menu.classList.toggle('active')//añadienddo clase ocn javascript

$burguerButton.addEventListener('touchstart',function(){

})

window.matchMedia('(max-width:800px'); //hacienod media queries dn javascript

if(window.matchMedia('max-width: 800px').matches){
	//si se cumple
}else{
	//si no se cumplio
}

var consulta = window.matchMedia('(max-width:800px)');
consulta.addListener(mediaQuery);
function mediaQuery(){
	if(consulta.matches){
	//si se cumple
}else{
	//si no se cumplio
}
}
//clase de listener frontend
https://platzi.com/clases/responsive-design/concepto/construyendo-nuestro-proyecto3842/como-utilizar-media-queries-con-javascript/material/

var bLazy = new Blazy({
	selector: 'img'//afecta a todos la simagenes
})
/*pantallas retina cuanod son retina
*/
/*https://platzi.com/clases/responsive-design/concepto/construyendo-nuestro-proyecto3842/optimizando-la-carga-de-imagenes-con-lazy-loading/material/
*/
 @media screen and (-webkit-min-divice-pixel-ratio:2){
 	body{
 		.............;
 	}
 }

 /*hamemr*/
 var $body = document.body;

 var gestos = new Hammer($body);
 gestos.on('swipeleft',function(ev){
 	console.log(ev);
 });

gestos.on('swiperight',function(ev){
 	console.log(ev);
 });
 