var n = document.getElementById('nombre');
var m = document.getElementById('email')
var f = document.getElementById('form')[0];

    f.onsubmit = function(){
        var er = /^[a-z]{3,}$/i;
        var rta = er.test(n.value);

        var er1 = /^[A-Z-a-z-0-9]+@+[a-z]+.+[a-z]/;
        var rta1 = er1.test(m.value);

        if(rta==false){
            alert('El nombre no lleva simbolos')
            return false;
        }
        if(rta1==false){
            alert('El correo lleva @ y una extensión')
            return false;
        }
    }