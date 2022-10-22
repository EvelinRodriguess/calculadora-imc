function calcula_imc() {
    const peso = Number(document.getElementById("peso").value);
    const nome = String(document.getElementById("nome").value);
    const altura = Number(document.getElementById("altura").value);
    const imc = peso / (altura * altura)
    document.getElementById("resultado-imc").innerHTML = `${nome} seu IMC é ${imc.toFixed(2)}`;


    if (imc < 15.99) {
        document.getElementById(`resultado-categoria`).innerHTML = `MAGREZA GRAVE!`;
        document.getElementById(`resultado-categoria`).className = `perigo`;

    } else if (imc <= 16.99) {
        document.getElementById(`resultado-categoria`).innerHTML = `MAGREZA MODERADA!`;
        document.getElementById(`resultado-categoria`).className = `alerta1`;

    } else if (imc <= 18.5) {
        document.getElementById(`resultado-categoria`).innerHTML = `MAGREZA LEVE!`;
        document.getElementById(`resultado-categoria`).className = `alerta2`;

    } else if (imc <= 24.9) {
        document.getElementById(`resultado-categoria`).innerHTML = `SAUDÁVEL!`;
        document.getElementById(`resultado-categoria`).className = `Saudável`;

    } else if (imc <= 29.9) {
        document.getElementById(`resultado-categoria`).innerHTML = `SOBREPESO!`;
        document.getElementById(`resultado-categoria`).className = `alerta3`;

    } else if (imc <= 34.9) {
        document.getElementById(`resultado-categoria`).innerHTML = `OBESIDADE GRAU 1!`;
        document.getElementById(`resultado-categoria`).className = `alerta4`;

    } else if (imc <= 39.9) {
        document.getElementById(`resultado-categoria`).innerHTML = `OBESIDADE SEVERA!`;
        document.getElementById(`resultado-categoria`).className = `alerta5`;

    } else if (imc >= 40) {
        document.getElementById(`resultado-categoria`).innerHTML = `OBESIDADE MÓRBIDA!`;
        document.getElementById(`resultado-categoria`).className = `alerta6`;
    }

}
