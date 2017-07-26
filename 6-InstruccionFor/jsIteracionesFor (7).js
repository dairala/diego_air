function Mostrar()
{
    var num=prompt("Inrese un numero");
    parseInt(num);
    var numdivisores=0;
    var cantidad;
    for(contador=1;contador<=num;contador++)
    {
         cantidad=num/contador;
        
         if(num%contador==0)
        {
            numdivisores+=contador;
            //cantidad=num/contador;
            alert(cantidad);
            
            
        }
        else
        {
            if(contador<=num)
            {
                //alert(cantidad);
                numdivisores++;
                break;
                
               
                
                
            }
        }
        
   }

 
alert("cantidad de divisores de ese numero"+numdivisores);
 






}//FIN DE LA FUNCIÓN