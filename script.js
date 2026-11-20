let select=document.querySelector(".name")
let btn=document.querySelector("#search")
let Input=document.querySelector("#input")
let button=document.querySelector("#change")
let change=document.querySelector(".name")
let anothertextchange=document.querySelector(".container")
function github(){
    let username=Input.value.trim();
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("User not found!")
        }
    })
    .then(data=>{
        select.innerHTML=`
        <div class="bigclass">
        <div class="style">
        <img id="avatar" src="${data.avatar_url}" alt="Profile picture">
        <h2 id="name">${data.name}</h2>
        <p id="login">@${data.login}</p>
        </div>
        <div class="adnan"
        <p id="followers">Followers: ${data.followers}</p>
        <p id="following">Following: ${data.following}</p>
        </div>
        <p id="repo">Repositories: ${data.public_repos}</p>
        <a id="link" href="${data.html_url}" target="blank">view profile</a> 
        </div>       
        `
    })
    .catch(error=>{
        select.innerHTML=`<p>${error.message}</p>`
    })
}
document.body.style.backgroundColor = "rgb(121, 121, 210)";
btn.addEventListener("click",github);
button.addEventListener("click",function(){
    if(document.body.style.backgroundColor=="rgb(121, 121, 210)"){
        document.body.style.backgroundColor="black";
        change.style.color="white";
        anothertextchange.style.color="white";

    }
    else{
        document.body.style.backgroundColor="rgb(121, 121, 210)"
         change.style.color="black";
         anothertextchange.style.color="black";

    }

});

