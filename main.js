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

var transcricao ='';
//evento que diz ao computador que obteve os resultados
escuta.onresult = (e)=>{

    //armazena a transcrição
    transcricao = e.results[0][0].transcript;
    //exibe a transcrição
    caixaTexto.innerHTML = transcricao;
    
    if(transcricao == "tire minha selfie" || transcricao == "tira minha selfie"){
        pronuncia = new SpeechSynthesisUtterance("OI VINÍCIUS");
        console.log(pronuncia);
        //facilitar a sua vida
        synthesis = window.speechSynthesis;
        //método que permite você ouvir o texto
        synthesis.speak(pronuncia);
    }

}




