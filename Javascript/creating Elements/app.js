function roll(){
    let dice = document.getElementById('dice');
    let random = Math.floor(Math.random()*6)+1;
    let audio = document.getElementById('diceAudio');
    dice.classList.add('spin');
    audio.play();
    setTimeout(function(){
        dice.classList.remove('spin');
        dice.innerText = random;
    },1000)
}


createBox = () => {
    let boxContainer = document.getElementById('boxContainer');
    let div = document.createElement('div');
    div.classList.add('box');
    boxContainer.appendChild(div);
}