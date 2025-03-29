
window.onload = function(){
    const elementsArray = [

        { tag: 'p', text: 'Елемент 1' },
    
        { tag: 'div', text: 'Елемент 2' },
    
        { tag: 'span', text: 'Елемент 3' }
    
    ];
    function addObj(object) {
        let el = document.createElement(object.tag);
        el.textContent = object.text;
        document.body.appendChild(el);
    }
    for (const element of elementsArray) {
        addObj(element);
    }
}