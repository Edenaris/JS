
window.onload = function(){
    const booksArray = [

        {
    
            title: 'Пригоди Аліси в Країні Див',
    
            year: 1865,
    
            rating: 4.5
    
        },
    
        {
    
            title: '1984',
    
            year: 1949,
    
            rating: 4.8
    
        },
    
        {
    
            title: 'Гаррі Поттер і філософський камінь',
    
            year: 1997,
    
            rating: 4.7
    
        }
    
    ];
    let choice = prompt("Введіть номер книги (1, 2 або 3):");
    choice = parseInt(choice) - 1;
    let Book;
    if (choice > -1 && choice<3) {
        Book = booksArray[choice];
    }else{
        alert(`Wrong choice`);
    }
    let ths = document.querySelectorAll('thead th');

    let thTitle = ths[0];
    let thYear = ths[1];
    let thRating = ths[2];
    thTitle.textContent = (`Name:${Book.title};`);
    thYear.textContent = (`Year:${Book.year};`);
    thRating.textContent = (`Rating:${Book.rating}.`);
}