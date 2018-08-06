/* myJson.results.map(function(user){
    let container = document.getElementById("main-container");
    let userContainer = document.createElement("div");
    let headerTag = document.createElement("h2");
    let userImg = document.createElement("img");
    let userInfo = document.createElement("p");
    headerTag.innerHTML = user.name.first + " " + user.name.last;
    userContainer.className = "users";
    userImg.src = user.picture.large;
    userInfo.innerHTML = user.login.username + '<br>' + user.gender + '<br>' + user.email + '<br>' + "AGE: " + user.dob.age + '<br>' + user.nat;
    container.appendChild(userContainer);
    userContainer.appendChild(headerTag);
    userContainer.appendChild(userImg);
    userContainer.appendChild(userInfo);
}) */

/* let userGrid = document.getElementById("userGrid");
let space = document.createElement("br")
let info = myJson.results

function createUser(){
    for (let i = 0; i<info.length;i++){
        let currentUser = info[i]
        //Div Creation
        let userDiv = document.createElement("div");
        userGrid.appendChild(userDiv);
        userDiv.classList.add("users")
        //Img Creation
        let userImg = document.createElement("img");
        userImg.src = currentUser.picture.large;
        userDiv.appendChild(userImg);
        //Basic Info
        let basicInfo = document.createElement("p");
            //Name
            let title = currentUser.name.title.charAt(0).toUpperCase() + currentUser.name.title.substr(1) + ".";
            let first = currentUser.name.first.charAt(0).toUpperCase() + currentUser.name.first.substr(1);
            let last = currentUser.name.last.charAt(0).toUpperCase() + currentUser.name.last.substr(1);
            let name = "Name: " + title + " " + first + " " + last;
            //Gender
            let gender = "Gender: " + currentUser.gender.charAt(0).toUpperCase() + currentUser.gender.substr(1);
            //Age
            let age = "Age: " + currentUser.dob.age;
            //Location
            let state = "Location: " + currentUser.location.state.charAt(0).toUpperCase() + currentUser.location.state.substr(1);
            //Contact
            let email = "Contact info: " + currentUser.email;
            //More button
            let moreButton = document.createElement("button");
            let buttonText = document.createElement("p");
            buttonText.innerHTML = "More"
            moreButton.appendChild(buttonText);
        basicInfo.innerHTML = name;
        userDiv.appendChild(basicInfo);
        basicInfo.innerHTML += "<br />";
        basicInfo.innerHTML += gender;
        basicInfo.innerHTML += "<br />";
        basicInfo.innerHTML += age;
        basicInfo.innerHTML += "<br />";
        basicInfo.innerHTML += state;
        basicInfo.innerHTML += "<br />";
        basicInfo.appendChild(moreButton);
    }
} */

let userFirstNames = []
let userLastNames = []

let url = "https://randomuser.me/api/?results=9";

fetch(url)
    .then(function (response) {
        return response.json();
     }).then(function (myJson) {
         for(i=0; i<myJson.results.length; i++){
            let user = myJson.results[i];
            let container = document.getElementById("main-container");
            let userContainer = document.createElement("div");
            let headerTag = document.createElement("h2");
            let userImg = document.createElement("img");
            let userInfo = document.createElement("p");


            headerTag.innerHTML = user.name.first + " " + user.name.last;
            userContainer.className = "users";
            userImg.src = user.picture.large;
            userInfo.innerHTML = user.gender;


            container.appendChild(userContainer);
            userContainer.appendChild(headerTag);
            userContainer.appendChild(userImg);
            userContainer.appendChild(userInfo);


            userFirstNames.push(user.name.first);
            userLastNames.push(user.name.last);
         }
         console.log(userFirstNames);
         console.log(userLastNames);
         let fNameAZ = document.getElementById("nameA-Z");
        let fNameZA = document.getElementById("nameZ-A");
        let lNameAZ = document.getElementById("lNameA-Z");
        let lNameZA = document.getElementById("lNameZ-A");

        fNameAZ.addEventListener("click", sortfAZ());
        fNameZA.addEventListener("click", sortfZ());    
    })


let input = uadd.value;
if (input.charAt(0) === '3') {
    gender = "male";
} else if (input.charAt(0) === '4') {
    gender = "female";
}