// let userName = "VIGNESH-2406";
// const button = document.querySelector("button");
// const input = document.querySelector("input");
// const info = document.getElementById("info");
// button.addEventListner("click", () => {
//   info.innerHTML = "";
//   userName = input.value;
//   getRepos();
// });

// async function getRepos() {
//   const data = await fetch(`https://api.github.com/users/${userName}/repos`);
//   const repoData = await data.json();
//   console.log(repoData);
//   repoData.forEach((elements) => createUser(elements));
// }

// function createUser(s) {
//   const { avatar_url, login } = owner;
//   const { name, stargazer_count, forks } = s;
//   const cards = document.createElement("div");

//   cards.setAttribute("class", "cardsContainer");
//   cards.innerHTML = `
//   <div class="imageContainer">
//     <img src="${avatar_url}"/>
//   </div>
//   <div class="textContainer">
//   <p> ${login}</p>
//   <p>${name}</p>
//  <p>${stargazer_count}</p>
//   <p>${forks}</p>
//   </div>
//   `;

//   info.appendChild(cards);
// }

// getRepos();
/*










*/
const button = document.querySelector("button");
const input = document.querySelector("input");
const info = document.getElementById("info");
button.addEventListener("click", () => {
  info.innerHTML = "";
  userName = input.value;
  getRepositories();
});
async function getRepositories() {
  const repo = await fetch(
    `https://api.github.com/users/${userName}/repos`
  ); /*fetch call is given and recieved here*/
  const data =
    await repo.json(); /*as the recieved data can be in any format we give json to it*/
  console.log(
    data
  ); /*HERE WE LOOK AT THE elements present in  the recieved data at browser console for further manipulations*/
  data.forEach((element) => createUser(element));
}

function createUser(u) {
  const { forks, stargazers_count, owner, name, created_at } =
    u; /*destructuring for only the keys that we want from an object */
  const { avatar_url, login } =
    owner; /* if the recieved data is objects of of objects we again detructure it out with the object names*/

  const user = document.createElement("div");

  user.setAttribute("class", "userContainer");

  user.innerHTML = `
    <div class="imageContainer" >
    <img src="${avatar_url}"/>
    </div>
    <div class="content">
    <h2>  Repo Name: ${name}</h2>
     <p>  Name: ${login}</p>
    <p>  Created at: ${new Date(created_at).toDateString()}</p>
    <p> Stars: ${stargazers_count}</p>
    <p> Forks: ${forks}</p>
    `;
  info.appendChild(user);
}

getRepositories();
