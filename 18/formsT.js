window.onload = function() {
    let rating = document.querySelectorAll("input[type='radio']");
    let answ = {
        "1": "Ми шкодуємо, що вам не сподобалось",
        "2": "Дякуємо, ми покращимось!",
        "3": "Дякуємо за середню оцінку!",
        "4": "Дуже дякуємо!",
        "5": "Ви найкращі"
    };
    let dAnsw = document.querySelector(".Answer");
      
    for (const r of rating) {
        r.addEventListener("change", function(e){
            let value = e.target.value;
            dAnsw.textContent = answ[value];
        })
    }   
}