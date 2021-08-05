function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");

}

function redirecionar(){
    window.open("https://globallabs.academy/"); // Abre em outra Aba
    window.location.href = "https://google.com/"; // Abre na mesma Aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* var nome = "Arcyleu Júnior";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
*/

var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
lista.pop("maçã");
console.log(lista.length);
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - ")); // mesmo que o toString mas com separador definido

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);

/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
        alert("Menor de idade");
    }
*/

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}

/*
var contador;
for(contador=0; contador <= 5; contador++){
    alert(contador);
}
*/

/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/
/*
function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validarIdade(idade){
    //var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }    
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));
*/