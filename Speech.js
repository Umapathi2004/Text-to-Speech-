var texts = document.getElementById('texts');      
function textToSpeack(){                           
    let textsvaluem=(texts.value).trim();         
    textsvaluem = textsvaluem==''? "text any letter":textsvaluem;   
    let speech = new SpeechSynthesisUtterance(textsvaluem);       
    speech.volume=1;         
    window.speechSynthesis.speak(speech);        
}