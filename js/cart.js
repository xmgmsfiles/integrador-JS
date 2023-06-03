function calcular()
{
    var valor1=document.getElementById("cantidad").value;

    if (valor1<100 && valor1>0)
    {
    var select=document.getElementById("precioxcat");
    var select_activo=select.options[select.selectedIndex].value;

    var result=0

    switch(select_activo=parseInt(select_activo))
    {
        case 1:
            result=valor1*40;
                break;
        case 2:
            result=valor1*100;
                break;
        case 3:
            result=valor1*170;
                break;
        case 4:
            result=valor1*200;
                break;
    }

    document.getElementById("total").value=result;
    } 
    else
    {
    result=null;
    }

    document.getElementById("total").value=result;
}

function borrar()
{
    document.getElementById("total").value=0;
}

function cantmax()
{
    var cantidad=document.getElementById("cantidad").value;

    if (cantidad.length > 2)
    {
        alert('Sólo puede comprar de 1 a 99 tickets. De otra forma se le anulará la compra. Si desea reservar otras cantidades, por favor contactese con el organizador.');
        return false;
    }
}