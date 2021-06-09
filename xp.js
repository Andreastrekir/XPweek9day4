
//Exercise XP
//Instructions
//Convert the below promise into async await:
//fetch("https://swapi.dev/api/starships/9/")
//    .then(response => response.json())
//    .then(console.log);


async function fetchStart(){
try{
	const response = await fetch("https://swapi.dev/api/starships/9/")
	const data = await response.json();
	console.log(data);
} catch(e){
	console.log(e);
}
}
fetchStart()
   









