
function calcular_iva(param){
	var respuesta=document.getElementById('respuesta');
	var iva=0.19;
	var result=param*iva;
	respuesta.textContent=result;


}