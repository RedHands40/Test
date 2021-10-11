function Sumar(){
    alert("Vas a sumar")
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)+parseInt(num2);
    alert("La suma es de: "+ resultado);
}
function Restar(){
    alert("Vas a restar")
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)-parseInt(num2);
    alert("La resta es de: "+ resultado);
}
function Division(){
    alert("Vas a dividir")
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)/parseInt(num2);
    alert("La division es de: "+ resultado);
}
function Multiplicacion(){
    alert("Vas a multiplicar")
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1)*parseInt(num2);
    alert("La multiplicacion es de: "+ resultado);
}

function ver(){
    var dato = document.getElementById("Materia").value
    switch (dato){
        case "Progra":
        alert("Has seleccionado Programacion");
        break;
        case "Soporte TI":
        alert("Has seleccionado Soporte TI");
        break;
        case "Diseño de Software":
        alert("Has seleccionado Diseño de software");
        break;
        default:
        break;
    }
}

function Edad(){
    var Edad = document.getElementById("Edad").value;
    if (Edad>=18){
     alert("Eres mayor de edad"); 
    }
    else {
     alert("Eres menor de edad"); 
    }
}
