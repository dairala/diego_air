function Mostrar()
{

    var contadorpares=0;
    
    var num=prompt("Ingrese un numero");
    parseInt(num);

    for(contador=0;contador<num;contador++)
    {
        
        if(num%2==0)
        {
            contadorpares++;
            
            break;
        }
        
        
    } 
      
 alert(contadorpares);               
 




}//FIN DE LA FUNCIÓN