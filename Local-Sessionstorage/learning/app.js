// localStorage.setItem('name','yash');
// localStorage.setItem('email','sandhiya402@gmail.com');
// localStorage.setItem('name','kumar');
// localStorage.removeItem('email');
// localStorage.clear();


let btn = document.querySelector('.btn');
let nameInput = document.querySelector('.input');
let form = document.querySelector('#registerForm');
let userName = document.querySelector('#userName');

btn.addEventListener('click',()=>{
    let name = nameInput.value;
    localStorage.setItem('name', name);
    checkUser();
})

checkUser = (()=>{
    
let userExists = 'name' in localStorage;

if(userExists){
        form.classList.add('hidden');
       userName.innerText = localStorage.getItem('name');
}
})

checkUser();

let user1 = {
    'name' : 'lakshmi',
    'email' : 'sandy@gmail.com',
    'phone' : '9884614686'
}

// // console.log(JSON.stringify(user));

localStorage.setItem('user',JSON.stringify(user1));

let getUser = JSON.parse(localStorage.getItem('user'));

// console.log(getUser.name);


// To get all values of localStorage and sessionStorage key and values

// console.log('localStorage', localStorage);
// console.log('sessionStorage', sessionStorage)

for (i=0; i<localStorage.length;i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key,value);
}

// template Literals

let name = "santhanalakshmi";
let email = "santa@gmail.com";

console.log('The user name is ' + email + '. The email is ' + email);

//template Literals 

console.log(`The user name is ${name}.The email is ${email}`);