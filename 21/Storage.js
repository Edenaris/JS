window.onload = function() {
    let EntInp = document.querySelector(".input");
    let OutDiv = document.querySelector(".out");
    let SavBtn = document.querySelector(".Save");
    let OuBtn = document.querySelector(".Output");

    SavBtn.addEventListener("click", function() {
        let EntVal = EntInp.value;
        sessionStorage.setItem("input", EntVal);
        alert("Data Saved: " + EntVal);
    });
    OuBtn.addEventListener("click", function() {
        let OutVal = sessionStorage.getItem("input");
        OutDiv.textContent = "Output: " + OutVal;
    });

    let Selector = document.querySelector(".colorSelect");
    let ColDiv = document.querySelector(".colorBox");

    Selector.addEventListener("change", function() {
        let selectedColor = Selector.value;
        ColDiv.style.backgroundColor = selectedColor;
        localStorage.setItem("color", selectedColor);
    });
    let savedColor = localStorage.getItem("color");
    if (savedColor !== null){
        ColDiv.style.backgroundColor = savedColor;
        Selector.value = savedColor;
    }


    let todo = document.querySelector(".todoInput");
    let addBtn = document.querySelector(".addBtn");
    let ulTodo = document.querySelector(".todoList");
    let tasks = []; 
    addBtn.addEventListener("click", function() {
        let todoVal = todo.value;
        if (todoVal) {
            let li = document.createElement("li");
            li.textContent = todoVal;
            ulTodo.appendChild(li);
            tasks.push(todoVal);
            todo.value = "";
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks !== null) {
        tasks = savedTasks;
        tasks.forEach(function(task) {
            let li = document.createElement("li");
            li.textContent = task;
            ulTodo.appendChild(li);
        });
    }


    let data = {
        name: "AgGaa",
        age: 25,
        hobies: ["reading", "gaming", "coding"],
        adres: {
            city: "New York",
            state: "NY",
            zip: "10001"
        }
    };
    let jsonData = JSON.stringify(data);
}