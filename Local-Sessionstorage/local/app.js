let btn = document.querySelector('#btn');
let inputName = document.querySelector('#inputName');
let inputEmail = document.querySelector('#inputEmail');
let inputPhoneNo = document.querySelector('#inputPhoneNo');
let form = document.querySelector('#registerForm');
let viewProfile = document.querySelector('#viewProfile');
let title = document.querySelector('#title');
let nameSpan = document.querySelector('#name');
let emailSpan = document.querySelector('#email');
let phoneSpan = document.querySelector('#phNo');

// localStorage.clear();

let userExists = 'user' in localStorage;

btn.addEventListener('click', () => {
    let user = {
        'name': inputName.value,
        'email': inputEmail.value,
        'phone': inputPhoneNo.value
    };

    localStorage.setItem('user', JSON.stringify(user));
    checkUser();
});


checkUser = () => {

    userExists = 'user' in localStorage; 

    if (userExists) {
        title.innerText = "Check Your Profile Info";
        form.classList.add('hidden');
        viewProfile.classList.remove('hidden'); 
    }
}

updateProfile = () => {
    userExists = 'user' in localStorage; 

    if (userExists) {
        let getUser = JSON.parse(localStorage.getItem('user'));

        nameSpan.innerText = getUser.name;
        emailSpan.innerText = getUser.email;
        phoneSpan.innerText = getUser.phone;
    }
}

checkUser();






