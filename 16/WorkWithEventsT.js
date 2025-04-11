window.onload = function() {
    // Завдання 'onMouseOver' і 'onMouseOut'
    let area = document.createElement('div');
    area.style.width = '100px';
    area.style.height = '100px';
    area.style.backgroundColor = 'red';
    document.body.appendChild(area);
    area.addEventListener('mouseover', function() {
        area.style.backgroundColor = 'blue';
    });
    area.addEventListener('mouseout', function() {
        area.style.backgroundColor = 'red';
    });
    //Завдання 'onContextMenu'
    let box = document.createElement('div');
    box.style.width = '200px';
    box.style.height = '200px';
    box.textContent = 'Right Clicked!';
    box.style.backgroundColor = 'green';
    box.style.marginTop = '20px';
    document.body.appendChild(box);
    let boxT = document.createElement('div');
    boxT.style.width = '200px';
    boxT.style.height = '200px';
    boxT.style.backgroundColor = 'grey';
    boxT.style.display = 'none';
    boxT.style.position = 'absolute';
    document.body.appendChild(boxT);
    box.addEventListener('contextmenu', function(e){
        e.preventDefault(); 
        boxT.style.left = e.pageX + 'px';
        boxT.style.top = e.pageY + 'px';
        boxT.style.display = 'block';
    });
    let btnCenter = document.createElement('button');
    btnCenter.textContent = 'Вирівняти по центру';
    boxT.appendChild(btnCenter);
    let btnLeft = document.createElement('button');
    btnLeft.textContent = 'По лівому краю';
    boxT.appendChild(btnLeft);
    let btnRight = document.createElement('button');
    btnRight.textContent = 'По правому краю';
    boxT.appendChild(btnRight);
    let btnHide = document.createElement('button');
    btnHide.textContent = 'Сховати блок';
    boxT.appendChild(btnHide);
    btnCenter.addEventListener('click', function() {
        box.style.textAlign = 'center';
        boxT.style.display = 'none'; 
    });
    btnLeft.addEventListener('click', function() {
        box.style.textAlign = 'left';
        boxT.style.display = 'none'; 
    });
    btnRight.addEventListener('click', function() {
        box.style.textAlign = 'right';
        boxT.style.display = 'none'; 
    });
    btnHide.addEventListener('click', function() {
        box.style.display = 'none';
        boxT.style.display = 'none'; 
    });   
    //Завдання 'onMouseOver' і 'onMouseOut': 
    let img = document.createElement('img');
    img.src = 'https://cdn.pixabay.com/photo/2022/02/05/12/42/sea-of-clouds-6994730_1280.jpg';
    img.alt = 'Demo image';
    img.style.width = '350px';
    img.style.margin = '100px';
    img.style.transition = 'all 0.3s ease';
    document.body.appendChild(img);
    img.addEventListener('mouseover', function() {
        img.style.width = '450px';
    });
    img.addEventListener('mouseout', function() {
        img.style.width = '350px';
    });
    //Завдання 'keyup'
    
    let field = document.createElement('div');
    field.style.width = '400px';
    field.style.height = '400px';
    field.style.backgroundColor = 'pink';
    field.style.position = 'relative';
    field.style.margin = '50px auto';

    let player = document.createElement('div');
    player.style.width = '50px';
    player.style.height = '50px';
    player.style.backgroundColor = 'yellow';
    player.style.position = 'absolute';
    player.style.top = '0px';
    player.style.left = '0px';

    document.body.appendChild(field);
    field.appendChild(player);


    let menu = document.createElement('ul');
    menu.style.position = 'fixed';
    menu.style.bottom = '20px';
    menu.style.left = '50%';
    menu.style.transform = 'translateX(-50%)';
    menu.style.padding = '10px';
    menu.style.listStyle = 'none';
    menu.style.display = 'none';
    menu.style.backgroundColor = 'white';
    menu.style.border = '1px solid black';
    document.body.appendChild(menu);


    let items = ['pink', 'lightblue', 'lightgreen'];
    let menuItems = [];

    items.forEach(color => {
        let li = document.createElement('li');
        li.textContent = color;
        li.style.padding = '5px 10px';
        menu.appendChild(li);
        menuItems.push(li);
    });

    // Состояние
    let x = 0, y = 0;
    let menuActive = false;
    let selectedIndex = 0;


    function updateMenuSelection() {
        menuItems.forEach((item, i) => {
            item.style.backgroundColor = i === selectedIndex ? '#ddd' : 'transparent';
        });
    }

    document.addEventListener('keydown', function(e) {
        
        if (
            e.key === 'ArrowUp' ||
            e.key === 'ArrowDown' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight'
        ) {
            e.preventDefault();
        }

        if (e.key === 'm' || e.key === 'M') {
            menu.style.display = 'block';
            menuActive = true;
            selectedIndex = 0;
            updateMenuSelection();
            return;
        }

        if (e.key === 'c' || e.key === 'C') {
            menu.style.display = 'none';
            menuActive = false;
            return;
        }

        if (menuActive) {
            if (e.key === 'ArrowDown') {
                selectedIndex = (selectedIndex + 1) % menuItems.length;
                updateMenuSelection();
            } else if (e.key === 'ArrowUp') {
                selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
                updateMenuSelection();
            } else if (e.key === 'Enter') {
                field.style.backgroundColor = menuItems[selectedIndex].textContent;
                menu.style.display = 'none';
                menuActive = false;
            }
            return;
        }

        
        if (!menuActive) {
            if (e.key === 'ArrowUp' && y > 0) {
                y -= 10;
                player.style.top = y + 'px';
            } else if (e.key === 'ArrowDown' && y + 50 < 400) {
                y += 10;
                player.style.top = y + 'px';
            } else if (e.key === 'ArrowLeft' && x > 0) {
                x -= 10;
                player.style.left = x + 'px';
            } else if (e.key === 'ArrowRight' && x + 50 < 400) {
                x += 10;
                player.style.left = x + 'px';
            }
        }
    });
    //Додаткове завдання 'onMouseDown' і 'onMouseUp'
    let zone = document.createElement('div');
    zone.style.width = '400px';
    zone.style.height = '400px';
    zone.style.backgroundColor = '#f0f0f0';
    zone.style.border = '2px dashed gray';
    zone.style.position = 'relative';
    zone.style.margin = '50px auto';
    document.body.appendChild(zone);

    let dragItem = document.createElement('div');
    dragItem.style.width = '60px';
    dragItem.style.height = '60px';
    dragItem.style.backgroundColor = 'orange';
    dragItem.style.position = 'absolute';
    dragItem.style.top = '150px';
    dragItem.style.left = '150px';
    dragItem.style.cursor = 'grab';
    zone.appendChild(dragItem);

    let isDragging = false;

    dragItem.addEventListener('mousedown', function(e) {
        isDragging = true;
        dragItem.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        dragItem.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            let rect = zone.getBoundingClientRect();
            let x = e.clientX - rect.left - dragItem.offsetWidth / 2;
            let y = e.clientY - rect.top - dragItem.offsetHeight / 2;

            // ограничение в пределах зоны
            x = Math.max(0, Math.min(x, rect.width - dragItem.offsetWidth));
            y = Math.max(0, Math.min(y, rect.height - dragItem.offsetHeight));

            dragItem.style.left = x + 'px';
            dragItem.style.top = y + 'px';
        }
    });

}