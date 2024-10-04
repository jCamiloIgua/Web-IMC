function calcularIMC(){
    //datos recibidos del formulario
    let pesoCalculo = document.getElementById("peso").value;
    let alturaCalculo = document.getElementById("altura").value;
    //calculo IMC
    let calculo = pesoCalculo/ (alturaCalculo * alturaCalculo);
    let mensaje = `Tu IMC es: ${calculo.toFixed(2)}. </br>`;
    let recomendacion = "vacio";
    // Limpiar estilos previos
    document.querySelectorAll('tbody tr').forEach(row => {
        row.classList.remove('bg-yellow-300');
        row.classList.remove('bg-green-300');
        row.classList.remove('bg-orange-300');
        row.classList.remove('bg-red-300');
    });
    //Verificar datos vacios
    if(!pesoCalculo|| !alturaCalculo){
        //console.log("vacio");
        alert("Para poder calcular IMC ingrese los datos");
    }else if (pesoCalculo <= 0 || alturaCalculo <=0){//datos positivos 
    alert("Solo ingresar datos positivos");
    } else{        
        if (calculo < 18.5) {
            mensaje += "Clasificación: Bajo peso.";
            recomendacion = "Te recomendamos una dieta rica en calorías y nutrientes. Consulta a un nutricionista para obtener más información.";
            document.getElementById("bajoPeso").classList.add('bg-yellow-300');
        } else if (calculo >= 18.5 && calculo < 24.9) {
            mensaje += "Clasificación: Peso normal.";
            recomendacion = "Mantén una dieta equilibrada y sigue realizando actividad física para conservar tu salud.";
            document.getElementById("pesoSaludable").classList.add('bg-green-300');
        } else if (calculo >= 25 && calculo < 29.9) {
            mensaje += "Clasificación: Sobrepeso.";
            recomendacion = "Te sugerimos una dieta baja en grasas y carbohidratos, además de realizar más actividad física.";
            document.getElementById("sobrePeso").classList.add('bg-orange-300');
        } else {
            mensaje += "Clasificación: Obesidad.";
            recomendacion = "Es importante seguir una dieta baja en calorías y grasas. Consulta a un médico o nutricionista para recibir un plan adecuado.";
            document.getElementById("obesidad").classList.add('bg-red-300');
        }
        document.getElementById("informacionCalificacion").innerHTML = mensaje;
        document.getElementById("recomendacionDieta").innerHTML = `<strong>Recomendación de dieta:</strong> ${recomendacion}`;
        // Desplazar la pantalla a la sección de "Información del Cálculo"
        document.getElementById("informacionCalculoTitulo").scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToDieta() {
    document.getElementById("recomendacionDieta").scrollIntoView({ behavior: 'smooth' });
}
