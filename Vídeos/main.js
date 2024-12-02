const numeroSenha= document.querySelector('.parametro-senha-texto');
let tamanhoSenha=32;
numeroSenha.textContent= tamanhoSenha;
const botoes= document.querySelectorAll('.parametro-senha-botao');
const campoSenha= document.querySelector("#campo-senha");
const letrasMaiusculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ";
botoes[0].onclick= diminuirTamanho;
function diminuirTamanho(){
    if(tamanhoSenha>7){
    tamanhoSenha= tamanhoSenha-1;
    numeroSenha.textContent= tamanhoSenha;
    geraSenha();
}
}
botoes[1].onclick= aumentarTamanho;
geraSenha();

function aumentarTamanho(){
    if(tamanhoSenha<32){
    tamanhoSenha= tamanhoSenha+1;
    numeroSenha.textContent= tamanhoSenha;
    geraSenha();
}
}
function geraSenha(){
    let senha=" ";
    for(let i=0; i<tamanhoSenha;i++){
    let numeroAleatorio= Math.random()*letrasMaiusculas.length;
    numeroAleatorio= Math.floor(numeroAleatorio);
    senha=senha+letrasMaiusculas[numeroAleatorio];
}
campoSenha.value=senha;
}