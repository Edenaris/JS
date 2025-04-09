
window.onload = function(){
    let header = document.createElement('header');
    header.style.padding = '50px';
    header.style.backgroundColor = 'yellow';
    header.style.textAlign = 'center';
    document.body.appendChild(header);

    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' }
    ];
    for (const item of menuData) {
        let link = document.createElement('a');
        link.textContent = item.name;
        link.setAttribute('href', item.url);
        link.style.marginRight = '20px';
        link.setAttribute('target', '_blank');
        header.appendChild(link);
    }

    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '10px';
    for (let i = 0; i < 50; i++) {
        let box = document.createElement('div');
    
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.borderRadius = '50px';
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        let color = `rgb(${r}, ${g}, ${b})`;
        box.style.backgroundColor = color;


        box.classList.add('circle-elemt');

        container.appendChild(box);
    }
    document.body.appendChild(container);

}