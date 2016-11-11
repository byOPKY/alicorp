$(document).ready(function(){

$('.button-collapse').sideNav({
      menuWidth: 200, 
      edge: 'left', 
      closeOnClick: true
    }
  );
        

$("#dni").keydown(validandoDni);
$("#enviar").click(imprimir);

	function validandoDni (evento) {
		var teclar = evento.keyCode;
		if (teclar == 8 || (teclar >= 48 && teclar <= 57)) {
			return true;
		} 
		else {
			return false;
		}
	};

	function imprimir(e){
	var nombre = $("#nombre").val();
	var dni = $("#dni").val();
	var textArea = $("#textArea").val();

	var regexNombre = /^[a-zñáéíóúü]+$/gi;
	 	if (!regexNombre.test(nombre)) {
			alert("Ingresa un nombre válido.");
		}
		else if(dni.length < 8){
			alert("Dni incompleto")
		}
		if (nombre.length ==0 ||
			dni.length == 0 ||
			textArea.length ==0) {
			alert("Todos los campos son obligatorios.");	
		}
		else{
			var cuadro = $("<div></div>").addClass("cuadrado z-depth-2 col l3 container");
			$("#listaTareas").prepend(cuadro);

			var texto = $("<p></p>").text(textArea).addClass("col l12 s12 center-align");
			cuadro.prepend(texto);
			
			var datos = $("<p></p>").text(nombre).addClass("col l9 s7 center-align");
			cuadro.append(datos);

			var datosDni = $("<p></p>").text(dni).addClass("col l3 s5 center-align");
			cuadro.append(datosDni);

			var f = new Date();
  			var d = f.getDate();
   			var m = f.getMonth() +1;
  			var a = f.getFullYear();
  			var fecha =$("<span> </span>").text( d +"-"+ m +  "-" + a ).addClass("col l10 s10 right-align");
			cuadro.append(fecha);

			var tacho = $("<i></i>").text("delete").addClass("col l2 s2 right-align small material-icons");
			cuadro.append(tacho);
			tacho.click("eliminar");

			
		}

	$("#nombre").val("");
	$("#dni").val("");
	$("#textArea").val("");

	function eliminar(){
		$(this).parent().remove();
		}
	};
	$(".img-max").show(3500);


}) 
