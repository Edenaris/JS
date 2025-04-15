window.onload = function() {
    let form = document.createElement('form');

    let inputAmount = document.createElement('input');
    inputAmount.type = 'text';
    inputAmount.placeholder = 'Сума';
    inputAmount.name = 'amount';

    let inputRate = document.createElement('input');
    inputRate.type = 'text';
    inputRate.placeholder = 'Курс';
    inputRate.name = 'rate';

    let BtnSumb = document.createElement('button');
    BtnSumb.type = 'submit';
    BtnSumb.innerHTML = 'Відправити';

    let Result = document.createElement('div');
    Result.id = 'result';
    Result.style.width = 80 + 'px';
    Result.style.height = 50 + 'px';
    Result.style.backgroundColor = 'red';
    Result.style.textAlign = 'center'; 
    Result.style.fontSize = '40px';

    form.appendChild(inputAmount); 
    form.appendChild(inputRate);
    form.appendChild(BtnSumb);
    document.body.appendChild(form);
    document.body.appendChild(Result);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let x = parseFloat(inputAmount.value);
        let y = parseFloat(inputRate.value);
        Result.textContent =`${x * y}`;
        Result.style.backgroundColor = 'green';
    });    

    //Динамічний список задач
    let taskList = document.createElement('ul');
    taskList.id = 'taskList';
    taskList.style.listStyleType = 'none';
    taskList.style.padding = '0';
    taskList.style.margin = '0';
    taskList.style.width = '200px';
    taskList.style.height = '200px';
    taskList.style.overflowY = 'scroll';
    taskList.style.border = '1px solid black';
    taskList.style.backgroundColor = 'lightgray';
    taskList.style.position = 'absolute';
    taskList.style.top = '100px';
    taskList.style.left = '10px';
    document.body.appendChild(taskList);
    let taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Нова задача';
    taskInput.name = 'taskInput';
    taskInput.style.position = 'absolute';
    taskInput.style.top = '303px';
    taskInput.style.left = '10px';
    document.body.appendChild(taskInput);
    let taskBtn = document.createElement('button');
    taskBtn.type = 'button';
    taskBtn.innerHTML = '+';
    taskBtn.style.position = 'absolute';
    taskBtn.style.top = '303px';
    taskBtn.style.left = '190px';
    document.body.appendChild(taskBtn);

    taskBtn.addEventListener('click', function() {
        let taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
        taskItem.style.cursor = 'pointer';
        taskItem.style.padding = '5px';
        taskItem.style.borderBottom = '1px solid black';
        taskItem.addEventListener('click', function(e) {
            taskList.removeChild(e.target);
        });
        taskList.appendChild(taskItem);
    });
}