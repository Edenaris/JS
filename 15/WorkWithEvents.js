
window.onload = function(){
    function getRundColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        return color = `rgb(${r}, ${g}, ${b})`;
    }
    let Pelem = document.querySelector('.ColoredText');
    let buttonC = document.querySelector('.ButtonToChange');

    buttonC.addEventListener('click', function () {
        Pelem.style.color = getRundColor();
    });
    let TXobj = document.querySelector('.TXobj');
    TXobj.style.backgroundColor = getRundColor();
    TXobj.style.width = '100px';
    TXobj.style.height = '100px';
    TXobj.style.marginTop ='50px';
    let x = 100;
    TXobj.addEventListener('dblclick', function () {
        x = x*2;
        TXobj.style.height = `${x}px`;
        TXobj.style.width = `${x}px`;
        TXobj.style.backgroundColor = getRundColor();
    });
    let counter = document.querySelector('h1');
    let counterBtn = document.querySelector('.counterBtn');
    let y = 0;
    counter.textContent = `${y}`;
    counterBtn.addEventListener('click',function(){
        if (y < 10) {
            y += 1;
            counter.textContent = `${y}`;
        }
    });



    function removeSelf(e) {
        e.target.remove(); 
    }
    let container = document.createElement('div');
    document.body.appendChild(container);
    container.style.backgroundColor = getRundColor();
    
    for (let i = 0; i < 10; i++) {
        let box = document.createElement('div');
        box.textContent = `Блок ${i + 1}`;
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = 'lightblue';
        box.style.margin = '10px';
        box.style.display = 'inline-block';
        box.style.textAlign = 'center';
        box.style.lineHeight = '100px';
        box.style.cursor = 'pointer';
        box.classList.add('clickBox');
    
        box.addEventListener('click', removeSelf); 
        container.appendChild(box);
    }
    
    let disableBtn = document.createElement('button');
    disableBtn.textContent = 'Отключить удаление';
    document.body.appendChild(disableBtn);
    
    disableBtn.addEventListener('click', function() {
        let allBoxes = document.querySelectorAll('.clickBox');
    
        allBoxes.forEach(box => {
            box.removeEventListener('click', removeSelf); 
            box.style.opacity = '0.6';
            box.style.cursor = 'not-allowed';
        });
    });


    let cont = document.querySelector('.blockContainer');

    cont.addEventListener('click', function(event) {
    if (event.target.classList.contains('first')) {
        alert('Нажата кнопка 1');
    } else if (event.target.classList.contains('second')) {
        alert('Нажата кнопка 2');
    } else if (event.target.classList.contains('third')) {
        alert('Нажата кнопка 3');
    }
});

}