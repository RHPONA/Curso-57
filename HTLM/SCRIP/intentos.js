// EN ESTE CASO HAY  QUE SACAR LOS COMENTARIOS DE LA LINEA 2 A 4. GRACIAS
//var respuesta = prompt("ya compraste una trek?", "si, claro que compre!")

//alert("su respuesta fue "+ respuesta)

//SE NECESITA COMENTAR LO ANTERIOR PARA QUE ESTA VARIABLE FUNCIONE EN EL IF

var confirmacion = confirm("queres recibir nuestars ofertas?")

    if (confirmacion == true) {
        alert("muchas gracias por suscribirte")
    }
    else{
        alert("TENEMOS CUOTAS SIN INTERES")
    };

// VAMOS A SACAR LOS PRECIOS DE LAS BICILETAS SEGUN EL MODELO POR CONSOLA

var rutera = 10000 + 5012;
var montaña = 7900 + 3490;
var accesorios = 3999

var total = rutera + accesorios;
var total1 = montaña + accesorios;
var promo = rutera + montaña + accesorios;

console.log("el total de la promocion es: " + rutera);
console.log("el total de la promocion es: " + montaña);
console.log("el total de la super promocion es: " + promo);




/*(function(){

var formulario = document.getElementsById("formulario");
var elementos = formulario.elements;
var boton = document.getElementById("btn");

    var validar = function(e){
        if (formulario.nombre.value == 0) {
        alert("completa el campo nombre");
        e.preventDefault();
        }
    };
    var validarRadio = function(){
        if (formulario.)
    } 
    var validar = function(e){
        validarNombre(e);

    };
    
    formulario.addEventListener("submit", validar);

}())

const bicicletas = []

var respuesta = window.prompt("ya compraste una trek?", "envianos mensajes");

alert("su respuesta fue "+ "respuesta") */