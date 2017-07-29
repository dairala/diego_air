function Mostrar()
{
    var nota;
    var sexo;
    var contalumnos=0;
    var bandera=true;
    var acumulador=0;
    var baja;
    var contadorvar;

    nota=prompt("ingrese nota");
    

    while(contalumnos<101)
    {
        
        contalumnos++;
        nota=prompt("ingrese nota");
        nota=parseInt(nota);
        sexo=prompt("ingrese sexo");
        acumulador=acumulador+nota;

        while(nota!<0||nota!>10)
        {
            nota=prompt("ingrese nota");   
            nota=parseint(nota);
        }

        while(sexo!="f"&&sexo!="m")
        {
            sexo=prompt("ingrese sexo");
        }

        if(nota<11)
        {
            baja=nota;
            alert(baja);
        }



    }







}
