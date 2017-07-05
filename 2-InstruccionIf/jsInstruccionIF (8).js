function Mostrar()
{
//tomo la edad  

	var edadd;
    var estado;
    edadd=document.getElementById("edad").value
    estado=document.getElementById("estadoCivil").value
    if(edadd>18&&estado="Soltero")
    {
        alert("Es soltero y no es menor de edad")
    }


}//FIN DE LA FUNCIÓN