// fetch is used to fetch data from API 
// fetch is an async code

// fetch('https://type.fit/api/quotes').then((data)=>{
// return data.json();
// }).then((data)=>{
//     console.log(data);
// })



async function fetchQuotes(){
    let data = await fetch('https://type.fit/api/quotes');
    let quotes = await data.json();
    let random = Math.floor(Math.random()*quotes.length);
    let quote = quotes[random]
    console.log(quote);
    document.getElementById('text').innerText = quote.text;
    document.getElementById('author').innerText = quote.author;
}

// fetchQuotes();


async function fetchProfile(){
    let data =  await fetch('https://randomuser.me/api');
    let profile = await data.json();
    
    console.log(profile);

    let result = profile.results[0];

    console.log(result);

    let name = `${result.name.title} ${result.name.first} ${result.name.last}`;
    let email = `${result.email}`;
    let phone = `${result.phone}`;
    let gender = `${result.gender}`;
    let location = `${result.location.country}`;
    let pictureUrl = `${result.picture.large}`;

    console.log(pictureUrl)

    document.getElementById('name').innerText = name;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('gender').innerText = gender;
    document.getElementById('location').innerText = location;
    document.getElementById('profile-img').src = pictureUrl; 
}

fetchProfile();

