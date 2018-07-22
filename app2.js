function validacion(valor)
{
//creamos nuestra expresion regular (.tes lo que va hacer es comparar la cadena con el valor)
if(/^[A-Z-a-z-0-9]+@+[a-z]+.+[a-z]/.test(valor))
{
alert('Correo '+valor+' Correcto')
return (true);
}
alert('Correo Incorrecto');
return(false);
}
