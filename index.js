function calcula_imc(){
    const peso = Number(document.getElementById("peso").value);
    const nome = String(document.getElementById("nome").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = 0;
    altura = altura * altura;
    resultado = peso / altura;
  


if(resultado < 15.99){
    resultado = "Magreza Grave"
}else if(resultado >= 16 <= 16.99){
    resultado = "Magreza Moderada"
}else if(resultado >= 17 <= 18.5){
    resultado = "Magreza Leve"
}else if(resultado >= 18.5 <= 24.9){
    resultado = "Saudável"
}else if(resultado >= 25 <= 29.9){
    resultado = "Sobrepeso"
}else if(resultado >= 30 <= 34.9){
    resultado = "Obesidade Grau 1"
}else if(resultado >= 35 <= 39.9){
    resultado = "Obesidade Severa"
}else if(resultado >= 40){
    resultado = "Obesidade Mórbida"
}
document.getElementById("resultado-imc").innerHTML = `${nome} seu IMC é ${resultado}`
}
