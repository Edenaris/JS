window.onload = function() {
    let Colors = document.querySelectorAll("input[type='radio']");
    for (const Color of Colors) {
        Color.addEventListener("change", function(e) {
            document.body.style.backgroundColor = e.target.value;
        });
    } 
    let activities = document.querySelectorAll("input[type='checkbox']");
    let activitiesF = document.querySelector(".activitiesF");
    for (const act of activities) {
        act.addEventListener("change", function(e) {
            if (act.checked === true) {
                activitiesF.innerHTML += `${act.value}<br>`;
            }else {
                activitiesF.innerHTML = activitiesF.innerHTML.replace(`${act.value}<br>`, "");
            }
        });
    }
    let  countries = document.querySelector("select");
    let countriesF = document.querySelector(".CountrF");
    let countryInfo = {
        "1": { capital: "Київ", population: "40 млн" },
        "2": { capital: "Варшава", population: "38 млн" },
        "3": { capital: "Берлін", population: "83 млн" }
    };

    countries.addEventListener('change', function(e) { 
        let selected = e.target.value;
        let info = countryInfo[selected]; 
        countriesF.textContent = `Столиця: ${info.capital}, Населення: ${info.population}`;
    });   

}