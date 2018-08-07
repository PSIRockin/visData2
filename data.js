url = "https://randomuser.me/api/?results=50";

let firstNameAccess = {};
let lastNameAccess = {};
let genderAccess = {};
let imageAccess = {};
let usernameAccess = {};
let emailAccess = {};
let ageAccess = {};
let natAccess = {};

fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(myJson){
        for(let i = 0; i < myJson.results.length; i++){
            let user = myJson.results[i];
            let firstName = user.name.first;
            let lastName = user.name.last;
            let gender = user.gender;
            let image = user.picture.large;
            let username = user.login.username;
            let email = user.email;
            let age = user.dob.age;
            let nat = user.nat;


            let container = document.getElementById("main-container");
            let userContainer = document.createElement("div");
            let headerTag = document.createElement("h2");
            let userImg = document.createElement("img");
            let userInfo = document.createElement("p");


            headerTag.innerHTML = firstName + " " + lastName;
            userContainer.className = "users";
            userImg.src = user.picture.large;
            userInfo.innerHTML = username + '<br>' + gender + '<br>' + email + '<br>' + "AGE: " + age + '<br>' + nat;


            container.appendChild(userContainer);
            userContainer.appendChild(headerTag);
            userContainer.appendChild(userImg);
            userContainer.appendChild(userInfo);

            //if key is present, push to array, else make new arr
            if(Object.keys(firstNameAccess).includes(firstName)){
                let obj = {first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat};
                firstNameAccess[firstName].push(obj);
            }else{
                firstNameAccess[firstName] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}];
            }
            if(Object.keys(lastNameAccess).includes(lastName)){
                lastNameAccess[lastName].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                lastNameAccess[lastName] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
            if(Object.keys(genderAccess).includes(gender)){
                genderAccess[gender].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                genderAccess[gender] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
            if(Object.keys(imageAccess).includes(image)){
                imageAccess[image].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                imageAccess[image] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
            if(Object.keys(usernameAccess).includes(username)){
                usernameAccess[username].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                usernameAccess[username] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
            if(Object.keys(emailAccess).includes(email)){
                emailAccess[email].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                emailAccess[email] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
            if(Object.keys(ageAccess).includes(age)){
                ageAccess[age].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                ageAccess[age] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
            if(Object.keys(natAccess).includes(nat)){
                natAccess[nat].push({first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat});
            }else{
                natAccess[nat] = [{first:firstName, last: lastName, gender: gender, image: image, username: username, email: email, age: age, nat: nat}]
            }
        }  
    })

    document.getElementById("nameA-Z").addEventListener("click", function(){
        let sortedFirstNames = Object.keys(firstNameAccess).sort();
        let main = document.querySelector("#main-container");
        main.innerHTML = "";
        for(let i = 0; i < sortedFirstNames.length; i++){
            let currPerson = firstNameAccess[sortedFirstNames[i]][0];
            console.log(currPerson);
            let container = document.getElementById("main-container");
            let userContainer = document.createElement("div");
            let headerTag = document.createElement("h2");
            let userImg = document.createElement("img");
            let userInfo = document.createElement("p");
            userContainer.className = "users";
            headerTag.innerHTML = currPerson.first + " " + currPerson.last;
            userImg.src = currPerson.image;
            userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
            container.appendChild(userContainer);
            userContainer.appendChild(headerTag);
            userContainer.appendChild(userImg);
            userContainer.appendChild(userInfo);
        }
    })

    document.getElementById("nameZ-A").addEventListener("click", function(){
        let sortedFirstNames = Object.keys(firstNameAccess).sort();
        let main = document.querySelector("#main-container");
        main.innerHTML = "";
            for(let i = (sortedFirstNames.length - 1); i >= 0; i--){
            let currPerson = firstNameAccess[sortedFirstNames[i]][0];
            console.log(currPerson);
            let container = document.getElementById("main-container");
            let userContainer = document.createElement("div");
            let headerTag = document.createElement("h2");
            let userImg = document.createElement("img");
            let userInfo = document.createElement("p");
            userContainer.className = "users";
            headerTag.innerHTML = currPerson.first + " " + currPerson.last;
            userImg.src = currPerson.image;
            userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
            container.appendChild(userContainer);
            userContainer.appendChild(headerTag);
            userContainer.appendChild(userImg);
            userContainer.appendChild(userInfo);
            }
        })
        document.getElementById("lNameA-Z").addEventListener("click", function(){
            let sortedLastNames = Object.keys(lastNameAccess).sort();
            let main = document.querySelector("#main-container");
            main.innerHTML = "";
                for(let i = 0; i < sortedLastNames.length; i++){
                let currPerson = lastNameAccess[sortedLastNames[i]][0];
                console.log(currPerson);
                let container = document.getElementById("main-container");
                let userContainer = document.createElement("div");
                let headerTag = document.createElement("h2");
                let userImg = document.createElement("img");
                let userInfo = document.createElement("p");
                userContainer.className = "users";
                headerTag.innerHTML = currPerson.first + " " + currPerson.last;
                userImg.src = currPerson.image;
                userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
                container.appendChild(userContainer);
                userContainer.appendChild(headerTag);
                userContainer.appendChild(userImg);
                userContainer.appendChild(userInfo);
                }
            })
    
        document.getElementById("lNameZ-A").addEventListener("click", function(){
            let sortedLastNames = Object.keys(lastNameAccess).sort();
            let main = document.querySelector("#main-container");
            main.innerHTML = "";
                for(let i = (sortedLastNames.length - 1); i >= 0; i--){
                let currPerson = lastNameAccess[sortedLastNames[i]][0];
                console.log(currPerson);
                let container = document.getElementById("main-container");
                let userContainer = document.createElement("div");
                let headerTag = document.createElement("h2");
                let userImg = document.createElement("img");
                let userInfo = document.createElement("p");
                userContainer.className = "users";
                headerTag.innerHTML = currPerson.first + " " + currPerson.last;
                userImg.src = currPerson.image;
                userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
                container.appendChild(userContainer);
                userContainer.appendChild(headerTag);
                userContainer.appendChild(userImg);
                userContainer.appendChild(userInfo);
                }
        })

        document.getElementById("male").addEventListener("click", function(){
            let males = genderAccess.male;
            let main = document.querySelector("#main-container");
            main.innerHTML = "";
            for(let i = 0; i < males.length; i++){
                let currPerson = males[i];
                console.log(currPerson);
                let container = document.getElementById("main-container");
                let userContainer = document.createElement("div");
                let headerTag = document.createElement("h2");
                let userImg = document.createElement("img");
                let userInfo = document.createElement("p");
                userContainer.className = "users";
                headerTag.innerHTML = currPerson.first + " " + currPerson.last;
                userImg.src = currPerson.image;
                userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
                container.appendChild(userContainer);
                userContainer.appendChild(headerTag);
                userContainer.appendChild(userImg);
                userContainer.appendChild(userInfo);
                }
        })

        document.getElementById("female").addEventListener("click", function(){
            let females = genderAccess.female;
            let main = document.querySelector("#main-container");
            main.innerHTML = "";
            for(let i = 0; i < females.length; i++){
                let currPerson = females[i];
                console.log(currPerson);
                let container = document.getElementById("main-container");
                let userContainer = document.createElement("div");
                let headerTag = document.createElement("h2");
                let userImg = document.createElement("img");
                let userInfo = document.createElement("p");
                userContainer.className = "users";
                headerTag.innerHTML = currPerson.first + " " + currPerson.last;
                userImg.src = currPerson.image;
                userInfo.innerHTML = currPerson.gender;
                container.appendChild(userContainer);
                userContainer.appendChild(headerTag);
                userContainer.appendChild(userImg);
                userContainer.appendChild(userInfo);
                }
        })

        document.getElementById("youngest").addEventListener("click", function(){
            let sortedAge = Object.keys(ageAccess).sort();
            let main = document.querySelector("#main-container");
            main.innerHTML = "";
            for(let i = 0; i < sortedAge.length; i++){
                let currPerson = ageAccess[sortedAge[i]][0];
                console.log(currPerson);
                let container = document.getElementById("main-container");
                let userContainer = document.createElement("div");
                let headerTag = document.createElement("h2");
                let userImg = document.createElement("img");
                let userInfo = document.createElement("p");
                userContainer.className = "users";
                headerTag.innerHTML = currPerson.first + " " + currPerson.last;
                userImg.src = currPerson.image;
                userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
                container.appendChild(userContainer);
                userContainer.appendChild(headerTag);
                userContainer.appendChild(userImg);
                userContainer.appendChild(userInfo);
            }
        })
    
        document.getElementById("oldest").addEventListener("click", function(){
            let sortedAge = Object.keys(ageAccess).sort();
            let main = document.querySelector("#main-container");
            main.innerHTML = "";
                for(let i = (sortedAge.length - 1); i >= 0; i--){
                let currPerson = ageAccess[sortedAge[i]][0];
                console.log(currPerson);
                let container = document.getElementById("main-container");
                let userContainer = document.createElement("div");
                let headerTag = document.createElement("h2");
                let userImg = document.createElement("img");
                let userInfo = document.createElement("p");
                userContainer.className = "users";
                headerTag.innerHTML = currPerson.first + " " + currPerson.last;
                userImg.src = currPerson.image;
                userInfo.innerHTML = currPerson.username + '<br>' + currPerson.gender + '<br>' + currPerson.email + '<br>' + "AGE: " + currPerson.age + '<br>' + currPerson.nat;
                container.appendChild(userContainer);
                userContainer.appendChild(headerTag);
                userContainer.appendChild(userImg);
                userContainer.appendChild(userInfo);
                }
            })