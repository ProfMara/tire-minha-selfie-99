//api com reconhecimento de fala
var SpeechRecognition = window.webkitSpeechRecognition;
//criamos um objeto de escuta
var escuta = new SpeechRecognition();


//namespacing - acessa o elemento caixaTexto
var caixaTexto = document.getElementById("caixaTexto"); 

function start(){
    //limpa a caixa de texto
    caixaTexto.innerHTML = "";
    //começa a transcrição 
    escuta.start();
} 

var conteudo ='';
//evento que diz ao computador que obteve os resultados
escuta.onresult = (e)=>{
    //executa os comandos nesse evento

    //armazena a transcrição
    conteudo = e.results[0][0].transcript;
    //exibe a transcrição
    caixaTexto.innerHTML = conteudo;
   
}



