let nameSpan = document.querySelector('#name');
let emailSpan = document.querySelector('#email');
let phSpan = document.querySelector('#phNo');

let updateProfile = () => {
    let userExists = 'user' in localStorage;

    if (userExists) {
        let getUser = JSON.parse(localStorage.getItem('user'));

        nameSpan.innerText = getUser.name;
        emailSpan.innerText = getUser.email;
        phSpan.innerText = getUser.phone;
    }
};


updateProfile();