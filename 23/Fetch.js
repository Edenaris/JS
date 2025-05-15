window.onload = function() {
   let mContainer = document.querySelector(".container")
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(function(data){
      return data.json()
   })
   .then(function(users){
      users.forEach(function(user){
         let div = document.createElement("div")
         div.className = "card mb-3";
         div.innerHTML =  `
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.email}</p>
        </div>
       `
         mContainer.appendChild(div);
      });
   });

   let iContainer = document.querySelector(".important")
   fetch("https://jsonplaceholder.typicode.com/users/1")
   .then(function(data){
      return data.json()
   })
   .then(function(user){
      let div = document.createElement("div")
      div.className = "card mb-3";
      div.innerHTML =  `
       <div class="card-body">
         <h5 class="card-title"> Name: ${user.name}</h5>
         <p class="card-text"> Email: ${user.email}</p>
         <p class="card-text"> Nickname: ${user.username}</p>
       </div>   
      `
      iContainer.appendChild(div);
      });

   let dangCont = document.querySelector(".dang");
   fetch("https://jsonplaceholder.typicode.com/posts?userId=1")  
   .then(function(data){
      return data.json()
   })
   .then(function(posts){
      posts.forEach(function(post){
         let div = document.createElement("div")
         div.className = "card mb-3";
         div.innerHTML =  `
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
        </div>
       `
         dangCont.appendChild(div);
      });
   });
   

   let spinner = document.querySelector(".Immortal");
   spinner.style.display = "none";
   let bPlanet = document.querySelector(".btn");
   let PlanetCard = document.querySelector("#planetCard");
   bPlanet.addEventListener("click", function(){
      spinner.style.display = "block";
      bPlanet.style.display = "none";
      setTimeout(function(){
         fetch("https://swapi.py4e.com/api/planets/1/")
         .then(function(data){
            return data.json()
         })
         .then(function(planet){
            let div = document.createElement("div")
            div.className = "card mb-3";
            div.innerHTML =  `
            <div class="card-body">
               <h5 class="card-title"> Name: ${planet.name}</h5>
               <p class="card-text"> Rotation Period: ${planet.rotation_period}</p>
               <p class="card-text"> Orbital Period: ${planet.orbital_period}</p>
               <p class="card-text"> Diameter: ${planet.diameter}</p>
               <p class="card-text"> Climate: ${planet.climate}</p>
            </div>   
           `
            let linksContainer = document.createElement("div");
            linksContainer.innerHTML = 
            `
            <div class="card-body">
               <h5 class="card-title text-center"> Links </h5>
            </div>   
           `
            let numer = 1;
            if (Array.isArray(planet.residents)){
               planet.residents.forEach(function(residents){
                  let numberText = document.createTextNode(`${numer++}. `);
                  let link = document.createElement("a");
                  let Ent = document.createElement("br");
                  link.href = residents;
                  link.innerHTML = residents;
                  link.className = "card-text";
                  linksContainer.appendChild(numberText);
                  linksContainer.appendChild(link);
                  linksContainer.appendChild(Ent);
                  linksContainer.appendChild(Ent);
               });
            }
            PlanetCard.appendChild(div);
            PlanetCard.appendChild(linksContainer);
            spinner.style.display = "none";
         })  
      }, 3000);
   });

}