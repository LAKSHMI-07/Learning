let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// shoppingList.push = "apple";

// console.log(shoppingList);

// shoppingList.pop();

// console.log(shoppingList)

// shoppingList[4].splice(1,2,'Cucumbers','Bell Peppers');
// console.log(shoppingList);

let students = {
    name:'sandy',
    age:'20',
    grade:'A',
    address:{
        street:'ayanavaram',
        city:'chennai',
        country:'india'
    }
}

students.address.phone = "123-456-7890";

students.age = 21;

// delete students.grade;
// console.log(students);

let a = -2

if(a>=0){
    // console.log('positive');
}else{
    // console.log('negative');
}

// let score = 71;

// if(score>=90 && score<=100){
//     console.log("A")
// }else if(score>=80 && score<=89){
//     console.log("B")
// }else if(score>=70 && score<=79){
//     console.log("C")
// }else if(score>=60 && score<=69){
//     console.log("D")
// }else{
//     console.log("F")
// }


// let n = "sandy"

// if(n === "sandy"){
//     console.log(true)
// }else{
//     console.log(false)
// }


function sqr(n){
    let result = n*n;
    return result;
}

let r = sqr(2)
// console.log(r);


let user = [
    {name:'lakshmi' , age:26 , Job:"UI Developer" , salary:45000 },
    {name:'kumar' , age:32 , Job:"Business" , salary:100000 },
    {name:'hirthi' , age:26 , Job:"Developer" , salary:50000 },
    {name:'kavitha' , age:26 , Job:"intern" , salary:15000 },
    {name:'madhu' , age:26 , Job:"Developer" , salary:35000 },
    {name:'sudha' , age:26 , Job:"UI Developer" , salary:50000 },
    {name:'Gokul' , age:36 , Job:"Doctor" , salary:145000 },
    {name:'kiran' , age:26 , Job:"Doctor" , salary:55000 },
    {name:'arun' , age:26 , Job:"Manager" , salary:55000 },
    {name:'Ravi' , age:26 , Job:"Army" , salary:35000 },
]


for(let i=0;i<user.length;i++){
if(user[i].salary <= 50000){
    // console.log(user[i].name)
}
}


let num = [2,4,6]

for(let i=0;i<num.length;i++){
    // console.log(num[i]*num[i]);
}

num.forEach(function(n){
    // console.log(n*n);
})

num.forEach(n=>{
    // console.log(n*n);
})

let person =[
    {name:"lakshmi" , age:26 , city:"chennai"},
    {name:"kum", age:32 ,city:"andra" },
    {name:"brindha" , age:60 , city:"chennai"}
]

person.forEach(n=>{
    // console.log(n.name);
})

// person[0].gender="female";

// console.log(person[0]);

person.forEach(g=>{
    g.gender="female";
    // console.log(g)
})

let student = [
    {name:"lakshmi" , age:20 , grade:"A"},
    {name:"karthik" , age:21,grade:"b"},
    {name:"kum" , age:22 , grade:"A"},
    {name:"kala" , age:16 , grade:"A"},
    {name:"Ravi" , age:17 , grade:"A"},
    {name:"sudha" , age:18 , grade:"A"}
];



student.forEach(s=>{
//    console.log(s)
})

// console.log(student)



student.push({name:"kala" , age:23,grade:"D",city:"chennai"});
// console.log(student)

let fruits = ['apple','mango','banana','guva']



for(let i=0 ; i<fruits.length;i++){
    // console.log(fruits[i])
   
}

fruits.push="berry";

// console.log(fruits)

for(let i=1 ; i<=10 ; i++){
    // console.log(i)
}

for(let i=1; i<=20;i++){
    
    if(i%2 == 0){
        // console.log(i)
    }
}


let add = [2,3,4];

b=0;

add.forEach(a=>{
b = b + a;
return b;
})

// console.log(b)

let l =[20,30,2,9,29]

large = l[0]

// for(let i=1;i<l.length;i++){
//     if(l[i]>large){
//        large = l[i];
      
//     }
// }

l.forEach(r=>{
    if(r>large){
        large=r;
    }
})

// console.log(large)



let num_arry=[1,2,3,4,5]

let num_ressult = num_arry.filter((n)=>{
  return n<5;
})

// console.log(num_ressult)


let emp = [
    {name:"lakshmi" , age:20 , grade:"A"},
    {name:"karthik" , age:21,grade:"b"},
    {name:"kum" , age:22 , grade:"A"},
    {name:"kala" , age:16 , grade:"A"},
    {name:"Ravi" , age:17 , grade:"O"},
    {name:"sudha" , age:18 , grade:"C"}
];

let result = emp.map(r=>{
    return {name: r.name, n:r.age}
})

// console.log(result)

let age = emp.filter(a=>a.age < 20).filter(g=>g.grade == "A").map(n=>n.name)
// console.log(age)

const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed2",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];

    // let moviesTitle = movies.map(n=>n.title);

    // let movieRating = movies.map(n=>({name:n.title,Rating:n.imdbRating}))

    // let Thriller = movies.filter(t=> t.genre=="Thriller").filter(t=>t.year>2000).map(t=>({name:t.title, genre:t.genre,year:t.year}))

    //  create an array of drama movies with IMDb ratings above 8.5.

    // let dramaMovies = movies.filter(n=>n.genre == 'Drama').filter(n=>n.imdbRating > 8.5).map(n=>({title:n.title, genre:n.genre,Rating:n.imdbRating}))

    // create an array of action movies starring Leonardo DiCaprio.

    // let actionMovies = movies.filter(movie =>movie.genre === "Adventure" && movie.actors.includes("Leonardo DiCaprio")).map(n=>n.title)

    let allDramaMovies = movies.filter(m=> m.actors.includes("Tim Robbins") && m.genre=="Drama").map(n=>n.title)
  
  console.log(allDramaMovies);
  









