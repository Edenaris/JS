
window.onload = function(){
    const elementsArray = [

        { text: 'Елемент 1', usePrepend: true },
    
        { text: 'Елемент 2', usePrepend: false },
    
        { text: 'Елемент 3', usePrepend: true }
    
    ]
    const container = document.createElement('div');
    container.textContent = 'Контейнер';
    document.body.appendChild(container); 

    for (const element of elementsArray) {
        let el = document.createElement('p');
        el.innerHTML = element.text;
        if (element.usePrepend) {
            container.before(el);
        } else {
            container.after(el);
        }
    }

}