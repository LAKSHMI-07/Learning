let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');
let counterText = document.querySelector('#counterValue');


// sessionStorage.clear();
// let counter = 0;

incrementBtn.addEventListener('click',()=>{
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter + 1;
    sessionStorage.setItem('counter' , counter);
    // counterText.innerText = sessionStorage.getItem('counter');
    updateCounter();
    
})

decrementBtn.addEventListener('click',()=>{
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    if (counter > 0){
        counter = counter - 1;
        sessionStorage.setItem('counter' , counter);
        // counterText.innerText = sessionStorage.getItem('counter');
        updateCounter();
    }
    
})

function updateCounter(){
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counterText.innerText = counter;
}

updateCounter();
