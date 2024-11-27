let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let dark = document.querySelector(".dark-text");
let light = document.querySelector(".light-text");
let title = document.querySelector(".title")
let mainContent = document.querySelector(".main-content");
let searchInput = document.querySelector("#search-input");
let p = document.querySelectorAll("p");
let userFollowers = document.querySelector(".user-followers")
let a = document.querySelectorAll("a");
let img = document.getElementById("user-img")
let followersNum = document.getElementById("followers-num");
let followingNum = document.querySelector("#following-num");
let reposNum = document.getElementById("repos-num");
let registrationDate = document.getElementById("user-joined");
let userName = document.getElementById("user-name");
let userTag = document.getElementById("user-tag");
let userLocation = document.getElementById("location");
let userUrl = document.getElementById("user-url");
let ragaca = document.getElementById("ragaca");
let errorText = document.getElementById("no-result");
moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";
    dark.style.display = "none";
    light.style.display = "block";
    document.body.style.backgroundColor = "rgba(20, 29, 47, 1)";
    title.style.color = "white"
    mainContent.style.backgroundColor = "rgb(30, 42, 71)";
    searchInput.style.backgroundColor = "rgb(30, 42, 71)";
    p.forEach((p) => {
        p.style.color = "white";
    })
    userFollowers.style.backgroundColor = "rgba(20, 29, 47, 1)";
    a.forEach((a) => {
        a.style.color = "white";
    })
})

sun.addEventListener("click", () => {
    moon.style.display = "block";
    sun.style.display = "none";
    dark.style.display = "block";
    light.style.display = "none";
    document.body.style.backgroundColor = "rgb(246, 248, 255, 1)";
    dark.style.color = "rgba(75, 106, 155, 1)";
    title.style.color = "rgba(34, 39, 49, 1)";
    mainContent.style.backgroundColor = "white";
    searchInput.style.backgroundColor = "white";
    userFollowers.style.backgroundColor = "rgb(246, 248, 255)";
    p.forEach((p) => {
        p.style.color = "rgba(75, 106, 155, 1)";
    })
    a.forEach((a) => {
        a.style.color = "rgba(75, 106, 155, 1)";
    })

})
let Btn = document.getElementById("search-button");
let bio = document.querySelector(".user-info");
Btn.addEventListener("click", () => {
    async function getData() {
        try {
            let data = await fetch(`https://api.github.com/users/${searchInput.value}`);
            let users = await data.json();
            if (users.name === undefined) {
                errorText.style.display = "block";
            } else {
                followersNum.textContent = users.followers;
                bio.textContent = users.bio;
                followingNum.textContent = users.following;
                reposNum.textContent = users.public_repos;
                registrationDate.textContent = users.created_at;
                userName.textContent = users.login;
                userTag.textContent = `@${users.login}`;
                userLocation.textContent = users.location;
                userUrl.textContent = "null";
                userUrl.style.textDecoration = "none";
                ragaca.textContent = users.login;
                img.src = users.avatar_url;
                img.style.width = "117px"
                img.style.borderRadius = "50%"
            }
        } catch (error) {

        }
    }
    getData();
})