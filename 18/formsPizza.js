window.onload = function() {
    let pizzaSelect = document.querySelector("#pizzaType");
    let sizeRadios = document.querySelectorAll("input[name='size']");
    let toppings = document.querySelectorAll("input[type='checkbox']");
    let resultDiv = document.querySelector(".result");
    
    let basePrices = {
        margherita: 100,
        pepperoni: 130,
        hawaiian: 120
    };
    
    function calculatePrice() {
        let base = basePrices[pizzaSelect.value]; 
        let sizePrice = 0;
        let toppingsPrice = 0;
    
        for (let radio of sizeRadios) {
            if (radio.checked) {
                sizePrice = parseInt(radio.value);
                break;
            }
        }
    
        for (let topping of toppings) {
            if (topping.checked) {
                toppingsPrice += parseInt(topping.value);
            }
        }
    
        let total = base + sizePrice + toppingsPrice;
        resultDiv.textContent = `Ціна: ${total} грн`;
    }
    
  
    pizzaSelect.addEventListener("change", calculatePrice);
    
    for (let radio of sizeRadios) {
        radio.addEventListener("change", calculatePrice);
    }
    
    for (let topping of toppings) {
        topping.addEventListener("change", calculatePrice);
    }
    
  
    calculatePrice();
    
      
}