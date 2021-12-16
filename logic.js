const jokeDiv = document.getElementById("joke-div");
const jokeBtn = document.querySelector(".btn");

const generatejoke = ()=>{
    const setheader = {
        headers : {
            Accept : "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setheader)
    .then((res)=>res.json())
    .then((data)=>{
        jokeDiv.innerHTML = data.joke;
    })
    .catch((err)=>{
        console.log(err);
    })
}

jokeBtn.addEventListener('click',generatejoke)
generatejoke();