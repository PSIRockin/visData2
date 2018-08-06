url = "https://randomuser.me/api/?results=50";

let firstNameAccess = {};
let lastNameAccess = {};

fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(myJson){
        for(let i = 0; i < myJson.results.length; i++){
            let user = myJson.results[i];
            let firstName = user.name.first;
            let lastName = user.name.last;
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
            //if key is present, push to array, else make new arr
            if(Object.keys(firstNameAccess).includes(firstName)){
                let obj = {first: firstName, last: lastName};
                firstNameAccess[firstName].push(obj);
            }else{
                firstNameAccess[firstName] = [{first: firstName, last: lastName}];
            }
            if(Object.keys(lastNameAccess).includes(lastName)){
                lastNameAccess[lastName].push({first: firstName, last: lastName});
            }else{
                lastNameAccess[lastName] = [{first:firstName, last: lastName}]
            }
        }  
    })

    document.getElementById("nameA-Z").addEventListener("click", function(){
        let sortedFirstNames = Object.keys(firstNameAccess).sort();
        let main = document.querySelector("#main-container");
        main.innerHTML = "";
        for(let i = 0; i < sortedFirstNames.length; i++){
            let currPerson = firstNameAccess[sortedFirstNames[i]][0];
            let container = document.getElementById("main-container");
            let userContainer = document.createElement("div");
            let headerTag = document.createElement("h2");
            // let userImg = document.createElement("img");
            let userInfo = document.createElement("p");
            userContainer.className = "users";
            headerTag.innerHTML = currPerson.first + " " + currPerson.last;
            // userImg.src = currPerson.picture.thumbnail;
            userInfo.innerHTML = currPerson.gender;
            container.appendChild(userContainer);
            userContainer.appendChild(headerTag);
            // userContainer.appendChild(userImg);
            userContainer.appendChild(userInfo);
        }
    })