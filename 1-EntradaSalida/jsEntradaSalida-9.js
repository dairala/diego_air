/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldoo;
    sueldoo=document.getElementById("sueldo").value
    sueldoo=parseInt(sueldoo)
    document.getElementById("resultado").value=(sueldoo*0.1)
    
}
