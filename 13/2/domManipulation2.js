
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
    let tableBody = document.querySelector('table');

    for (let book of booksArray) {
      let row = document.createElement('tr');
    
      let titleCell = document.createElement('td');
      let yearCell = document.createElement('td');
      let ratingCell = document.createElement('td');
    
      titleCell.textContent = book.title;
      yearCell.textContent = book.year;
      ratingCell.textContent = book.rating;
    
      row.appendChild(titleCell);
      row.appendChild(yearCell);
      row.appendChild(ratingCell);
    
      tableBody.appendChild(row);
    }
}