/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numerosecreto;
var contador;
var num;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numerosecreto=Math.floor((Math.random()*(100-1)+1))
  alert(numerosecreto)
  contador=0


}

function verificar()
{
 
contador++
documnet.getElementById("intentos").value=contador;
num=document.getElementById("numero").value;

//num=document.getElementById("numero").value
//contadorintentos=document.getElementById("intentos").value

if(num==numerosecreto)
{
  alert("acertaste, en tan solo"+contador+"intento");
}
else
{
  if(num<numerosecreto)
  {
    alert("te falta un poco");
  }
  else
 {
   alert("te pasaste")
 }
}
}
}

