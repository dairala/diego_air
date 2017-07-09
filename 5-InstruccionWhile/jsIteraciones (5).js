function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
document.getElementById('Sexo').value=sexo;
while(sexo!="f")
{
    alert("opcion no valida, vuelva a ingresar una opcion");
    sexo = prompt("ingrese f ó m .");
}
while(sexo!="m")
{
    alert("opcion no valida, vuelva a ingresar una opcion");
    sexo = prompt("ingrese f ó m .");
}

}//FIN DE LA FUNCIÓN