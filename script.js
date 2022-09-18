
const jokeHolder = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single';

let jokeFetch = () => {
 jokeHolder.classList.remove("fade");

 fetch(url)
 .then(data => data.json())
 .then(item => 
  {
   jokeHolder.innerHTML=`${item.joke}`;
   jokeHolder.classList.add("fade");
  });
}
btn.addEventListener("click",jokeFetch);
