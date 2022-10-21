function calcula_imc(){
    const peso = Number(document.getElementById("peso").value);
    const nome = String(document.getElementById("nome").value);
    const altura = Number(document.getElementById("altura").value);
    let resultado = 0;
    const imc = peso / (altura * altura)
    document.getElementById("resultado-imc").innerHTML = `${nome} seu IMC é ${imc.toFixed(2)}`;

  
if(resultado < 15.99){
    document.getElementById(`resultado-categoria`).innerHTML = `Magreza Grave`;
    document.getElementById(`resultado-categoria`).className = `perigo`;

}else if(resultado >= 16 <= 16.99){
    document.getElementById(`resultado-categoria`).innerHTML = `Magreza Moderada`;
    document.getElementById(`resultado-categoria`).className = `alerta1`;

}else if(resultado >= 17 <= 18.5){
    document.getElementById(`resultado-categoria`).innerHTML = `Magreza Leve`;
    document.getElementById(`resultado-categoria`).className = `alerta2`;

}else if(resultado >= 18.5 <= 24.9){
    document.getElementById(`resultado-categoria`).innerHTML = `Saudável`;
    document.getElementById(`resultado-categoria`).className = `Saudável`;

}else if(resultado >= 25 <= 29.9){
    document.getElementById(`resultado-categoria`).innerHTML = `Sobrepeso`;
    document.getElementById(`resultado-categoria`).className = `alerta3`;

}else if(resultado >= 30 <= 34.9){
    document.getElementById(`resultado-categoria`).innerHTML = `Obesidade Grau 1`;
    document.getElementById(`resultado-categoria`).className = `alerta4`;

}else if(resultado >= 35 <= 39.9){
    document.getElementById(`resultado-categoria`).innerHTML = `Obesidade Grau 2(Severa)`;
    document.getElementById(`resultado-categoria`).className = `alerta5`;

}else if(resultado >= 40){
    document.getElementById(`resultado-categoria`).innerHTML = `Obesidade Grau 3(Mórbida)`;
    document.getElementById(`resultado-categoria`).className = `alerta6`;
}

}
