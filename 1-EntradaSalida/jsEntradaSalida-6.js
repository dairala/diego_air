/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    numero1=document.getElementById("numeroUno").value
    numero1=parseInt(numero1)
    numero2=document.getElementById("numeroDos").value
    numero2=parseInt(numero2)
    alert(numero1+numero2)
    
}

