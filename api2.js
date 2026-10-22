

// let user = document.getElementById(user);
// let newUser = document.getElementById(newUser);

// async function getUser(){

//         user.textContent = "loading...";

//         try {
//              const response = await fetch("https://randomuser.me/api/");
//         if (!response.ok){
//             throw new error("Could not fetch user")
//         }
//         const data = await response.json();

//         const person = data.result[0];

//         user.innerHTML =
//         `
        
//         <img src= "${person.picture.large}" alt="user Picture">
//         <h2>${person.name.first} ${person.name.last}</h2>
//         <p>Email: ${person.email}</p>
//         <p>Location: ${person.location.city}, ${person.location.country}</p>
//         `;

//     }catch(error){
//         user.textContent = "Something went wrong. Please try again later."; 
//         console.log(error);
//     }

// }

// newUser.addEventListener("click", getUser);
// getUser();

let user = document.getElementById("user");
let newUser = document.getElementById("newUser");

async function getUser() {

    user.textContent = "Loading...";

    try{
        const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
        throw new Error("Could not fetch user")
    }
    const data = await response.json();

    const person = data.results[0];

    user.innerHTML = 
    `
    <img src="${person.picture.large}" alt="User Picture">
    <h2>${person.name.first} ${person.name.last}</h2>
    <p>Email: ${person.email}</p>
    <p>Location: ${person.location.city}, ${person.location.country}</p>
    `;

}catch (error) {
        user.textContent = "Something went wrong. Please try again later.";
        console.log(error);
    }

}

newUser.addEventListener("click", getUser);

getUser();