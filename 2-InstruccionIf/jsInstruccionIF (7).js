function Mostrar()
{
//tomo la edad  

	var edadd;
    var estado;
    edadd=document.getElementById("edad").value
    estado=document.getElementById("estadoCivil").value
    if(edadd<18&&estado!="soltero")
    {
        alert("Usted es muy pequeño para ser soltero")
    }



}//FIN DE LA FUNCIÓN