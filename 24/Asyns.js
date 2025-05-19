 export { userData, Strwrs, getDataPlanet, runTasks };

    async function userData(userID){
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
        let data = await response.json();
        console.log(data.name);
        console.log(data.email);
    }


    async function Strwrs(FilmID){
        let response = await fetch(`https://swapi.py4e.com/api/films/${FilmID}/`);
        let data = await response.json();
        console.log(data.title);
        console.log(data.release_date);
    }

        async function getDataPlanet(PlanetID) {
        let response = await fetch(`https://swapi.py4e.com/api/planets/${PlanetID}/`);
        let data = await response.json();
        console.log(data.name);
        console.log(data.climate);
    }
    
        
    async function runTasks() {
        await userData(1);
        console.log("------------------");
        await Strwrs(1);
        console.log("------------------");
        getDataPlanet(1);
    }
    

