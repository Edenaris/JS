window.onload = function() {
    function showMessage(message, delay) {
        setTimeout(function() {
          console.log(message);
        }, delay);
      }
    showMessage("Привіт! Я з'явився через 5 секунд", 5000); 

    let bt = document.querySelector(".startBTN");
    let timer = document.querySelector(".timer");
    
    function StartTimer() {
        let time = 0;
        let interval = setInterval(function() {
            time++;
            timer.textContent = time;
    
            if (time >= 10) {
                clearInterval(interval);
            }
        }, 1000); 
    }
    
    bt.addEventListener("click", StartTimer);

    let btChange = document.querySelector(".ChangeColor");

    function ChangeColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        return `rgb(${r}, ${g}, ${b})`;
    }
    btChange.addEventListener('click', function(){
        let root = document.documentElement;
       root.style.setProperty('--bg-color', ChangeColor());
    });



    let TrTimer = document.querySelector(".circle");
    let btnStart = document.querySelector(".start");
    let btnResrt = document.querySelector(".Reset");
    let interval = null; 


    function StartTrueTimer() {
        let second = 0 ;
        let milisecond = 0;
            interval = setInterval(function() {
            milisecond++;
            if (milisecond >= 100) {
                second++;
                milisecond = 0;
            }
            if (second < 10 && milisecond < 10) {
                TrTimer.textContent = `0${second}:0${milisecond}`;
            } else if (second < 10) {
                TrTimer.textContent = `0${second}:${milisecond}`;
            } else if (milisecond < 10) {
                TrTimer.textContent = `${second}:0${milisecond}`;
            } else {
                TrTimer.textContent = `${second}:${milisecond}`;
            }            
        }, 10);
    }
    btnStart.addEventListener("click", StartTrueTimer);
    btnResrt.addEventListener("click", function () {
        clearInterval(interval);                     
        TrTimer.textContent = "00:00";  
    });
    
}