let expresioncorreo = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
let expresiontextnumber = /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.]+$/;
let expresioncontra = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
let expresionfecha = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
let expresiononlytext = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u;

function validarcorreo(correo) {
    var validar = expresioncorreo.test(correo);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un correo valido'
        });
    }
    return validar;
}

function validarcontrasena(contrasena) {
    var validar = expresioncontra.test(contrasena);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese una contraseña valida',
            text: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
        });
    }
    return validar;
}

function validarnombre(nombre) {
    var validar = expresiononlytext.test(nombre);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un nombre valido (solo letras)'
        });
        return false;
    } else if (nombre.length > 20 || nombre.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'El tamaño del nombre no es correcto',
            text: 'El nombre tiene que medir entre 1 y 20 caracteres'
        });
        return false;
    } else {
        return true;
    }
}

function validarfecha(fecha) {
    var validar = expresionfecha.test(fecha);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese una fecha valida'
        });
    }else{
        var fechas = fecha.split('-');
        const hoy = new Date();
        var ano = hoy.getFullYear();
        console.log(fechas[0])
        var diferencia = ano-parseInt(fechas[0]);
        console.log(diferencia)
        if(diferencia < 11 || diferencia > 100){
            validar = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes que tener al menos 11 años para utilizar la aplicacion'
            });
        }
    }
    return validar;
}

function validarPregunta(pregunta) {
    var validar = expresiontextnumber.test(pregunta);
    if (pregunta.length > 200 || pregunta.length < 11) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Solo puedes ingresar como maximo 100 caracteres y minimo 10 caracteres'
        });
        return false;
    } else if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Solo puedes ingresar letras y numeros en el campo'
        });
        return false;
    } else {
        return true;
    }
}

function registrarr() {
    var fecha = document.getElementById('fecha').value;
    var email = document.getElementById('correo').value;
    var nombre = document.getElementById('nombre').value;
    var pass = document.getElementById('password').value;
    var confpas = document.getElementById('confpass').value;
    if (pass != confpas) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden'
        });
    } else if (validarfecha(fecha) && validarnombre(nombre) && validarcorreo(email) && validarcontrasena(pass)) {
        //document.registrar.submit();
        location.href = 'index.html'
    }
}

function iniciars() {
    var email = document.iniciar.email.value;
    var pass = document.iniciar.pass.value;
    if (validarcorreo(email) && validarcontrasena(pass)) {
        //document.iniciar.submit();
        location.href = 'distribución.html'
    }
}

function modificarcuenta() {
    var fecha = document.getElementById('fecha').value;
    var nombre = document.getElementById('nombre').value;
    if (validarfecha(fecha) && validarnombre(nombre)) {
        
        //document.modcuenta.submit;
        setTimeout(function() {
            //document.modicuenta.submit();
            location.href= 'sesionUsuario.html'
        }, 2000);
    }
}

function modificarContra() {
    var antpass = document.getElementById('antpass').value;
    var pass = document.getElementById('password').value;
    var confpas = document.getElementById('confpass').value;
    if (pass != confpas) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No coinciden las nuevas contraseñas'
        });
    } else if (validarcontrasena(pass) && validarcontrasena(antpass)) {
       
        //document.modcontra.submit;
        setTimeout(function() {
            //document.ModContra.submit();
            location.href= 'sesionUsuario.html'
        }, 2000);
    }
}

function HPregunta() {
    var pregunta = document.getElementById("pregunta").value;
    if (validarPregunta(pregunta)) {
        //document.HacerP.submit();
        location.href= 'preguntasSimilares.html'
    }
}

function MPregunta() {
    var pregunta = document.getElementById("Mpregunta").value;
    if (validarPregunta(pregunta)) {
       //document.ModificarPre.submit();
       location.href = 'preguntasPendientes.html'
    }
}

function RechaPregunta() {
    var razon = document.rechapre.razon.value;
    if (validarPregunta(razon)) {
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Se ha rechazado la pregunta con exito'
        });
        //document.rechapre.submit;
    }
}

function ResPregunta() {
    var pregunta = document.repre.pre.value;
    var respuesta = document.repre.res.value;
    if (validarPregunta(pregunta) && validarPregunta(respuesta)) {
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Se ha respondido la pregunta con exito'
        });
        //document.repre.submit;
    }
}

function ReContra(){
    var correo = document.recuperar.email.value;
    if(validarcorreo(correo)){
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Se ha enviado el correo para recuperar la contraseña con exito'
        })
        setTimeout(function (){
            location.href = 'recuperarcontra.html'
        }, 1000)
    }
}

function ModCorreo(){
    var correo = document.modemail.correo.value;
    if(validarcorreo(correo)){
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Se ha enviado el correo para modificarlo con exito con exito'
        })
    }
}

function RecuperarContra(){
    var pass = document.getElementById('contra').value;
    var confpas = document.getElementById('confcontra').value;
    if (pass != confpas) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No coinciden las nuevas contraseñas'
        });
    } else if (validarcontrasena(pass) && validarcontrasena(antpass)) {
        //document.modcontra.submit;
        setTimeout(function() {
            //document.ModContra.submit();
            location.href= 'index.html'
        }, 2000);
    }
}