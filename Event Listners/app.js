// let btn = document.getElementById('btn');

// test=()=>{
//     console.log("testing1")
// }

// btn.addEventListener('click',test)



// btn.addEventListener('click', (a)=>{
//     console.log(a.target.innerText)
// })

let btns = document.querySelectorAll('button');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let a = e.target;
        console.log(a.innerText +' clicked');
        a.innerText = "clicked";
        a.setAttribute('disabled', true);
    })
})


let box = document.querySelector('.box');
let alert = document.querySelector('.alert');

box.addEventListener('mouseover',()=>{
    // alert.classList.remove('hidden');
    alert.innerText = "Mouse Inside The Box"
})

box.addEventListener('mouseout',()=>{
    // alert.classList.remove('hidden');
   alert.innerText = "Mouse Ouside The Box"
})


let inputs = document.querySelectorAll('input');

inputs.forEach((input)=>{
    input.addEventListener('change',()=>{
        console.log(input.value);
    })
})

let inputKey = document.querySelector('#inputDown');

inputKey.addEventListener('keydown',()=>{
    console.log(inputKey.value);
})

let inputKeyUp = document.querySelector('#inputUp');

let textfield = document.querySelector('.textfield');

inputKeyUp.addEventListener('keyup',()=>{
    let text = inputKeyUp.value;
    textfield.innerText = text;
})

let loader = document.querySelector('.loader');
loader.classList.remove('hidden');
loader.classList.add('page-loader');
window.addEventListener('load',()=>{
    loader.classList.remove('page-loader');
    loader.classList.add('hidden');
    
})

let helpbtn = document.querySelector('.help');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        helpbtn.classList.add('show');
    }else{
        helpbtn.classList.remove('show');
    }
    console.log('page scrolled')
})


