/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var numero;
    numero=document.getElementById("importe").value
    numero=parseInt(numero)
    document.getElementById("resultado").value=(numero*0.25)
    
}
