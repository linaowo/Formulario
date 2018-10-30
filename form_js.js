	function validarForm()
	{
	var verificar = true;
	var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	var expRegEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z]{2,3})$/;
	var expRegNum = /^[0-9]/;
	var formulario = document.getElementById("contacto-frm");

	var puesto = document.getElementById("puesto");
	var sueldoD = document.getElementById("sueldoD");
	var sueldoA = document.getElementById("sueldoA");
	var apellido_P = document.getElementById("apellido_P");
	var apellido_M = document.getElementById("apellido_M");
	var nombre = document.getElementById("nombre");
	var domicilio = document.getElementById("domicilio");
	var colonia = document.getElementById("colonia");
	var codigo = document.getElementById("codigo");
	var ciudad = document.getElementById("ciudad");
	var nacimiento = document.getElementById("nacimiento");
	var nacionalidad = document.getElementById("nacionalidad");
	var estatura = document.getElementById("estatura");
	var peso = document.getElementById("peso");
	var edad = document.getElementById("edad");
	var telefono = document.getElementById("telefono");
	var correo = document.getElementById("correo");
	var femenino = document.getElementById("F");
	var masculino = document.getElementById("M");
	var padres = document.getElementById("padres");
	var familia = document.getElementById("familia");
	var parientes = document.getElementById("parientes");
	var solo = document.getElementById("solo");
	var soltero = document.getElementById("soltero");
	var casado = document.getElementById("casado");
	var otro = document.getElementById("otro");
	var clave = document.getElementById("clave");
	var contribuyentes = document.getElementById("contribuyentes");
	var social = document.getElementById("social");
	var licencia_s = document.getElementById("licencia_s");
	var licencia_n = document.getElementById("licencia_n");
	var salud_b = document.getElementById("salud_b");
	var salud_r = document.getElementById("salud_r");
	var salud_m = document.getElementById("salud_m");
	var enfermedad_n = document.getElementById("enfermedad_n");
	var enfermedad_s = document.getElementById("enfermedad_s");

if(!puesto.value)
{
alert("El campo nombre es requerido");
puesto.focus();
verificar = false;
}
else if(!expRegNombre.exec(puesto.value))
{
alert("Solo letras y espacios");
puesto.focus();
verificar = false;
}

else if(!sueldoD.value)
{
alert("El campo sueldo deseado es requerido");
sueldoD.focus();
verificar = false; 
}		
else if(isNaN(sueldoD.value))
{ 
alert("El campo edad solo acepta numeros");
sueldoD.focus();
verificar = false;
}

else if(!edad.value)
{
alert("El campo edad es requerido");
edad.focus();
verificar = false; 
}		
else if(isNaN(edad.value))
{ 
alert("El campo edad solo acepta numeros");
edad.focus();
verificar = false;
}
else if(edad.value < 18 || edad.value > 65)
{
alert("Debes estar entre 18 y 65 años");
edad.focus();
verificar = false;
}
else if(!email.value)
{
alert("El campo email es requerido");
email.focus();
verificar = false;
}
else if(!expRegEmail.exec(correo.value))
{
alert("Formato de correo incorrecto");
correo.focus();
verificar = false;
}		
else if(!masculino.checked && !femenino.checked)
{
alert("El campo sexo es requerido");
femenino.focus();
verificar = false;
}
else if(!asunto.value)
{
alert("El campo asunto es requerido");
asunto.focus();
verificar = false;
}
else if(!comentarios.value)
{
alert("El campo comentarios es requerido");
comentarios.focus();
verificar = false;
}
else if(comentarios.value.lenght > 255)
{
alert("El campo comentarios no puede ser mayor a 255 caracteres");
comentarios.focus();
verificar = false;
}	 

}
	
	function limpiarForm()
	{ 
	document.getElementById("contacto-frm").reset();
	}

	window.onload = function()
	{
	alert("Formulario en memoria de uwu's");

	var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;
	botonEnviar = document.contacto_frm.enviar_btn;
	botonEnviar.onclick = validarForm;
	}

