document.addEventListener("DOMContentLoaded", function() {
    let screen = document.querySelector(".screen");
    let normalButtons = document.querySelectorAll(".nrml-btn");
    let operatorButtons = document.querySelectorAll(".optr-btn");
    let clear = document.querySelector(".clr-btn");
    let equal = document.querySelector(".eql-btn");
    let allclear = document.querySelector(".Aclr-btn");
    
    normalButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });
    
    operatorButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });
    
    equal.addEventListener('click', function() {
        if (screen.value === '') {
            screen.value = "Please enter the value";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });
    
    allclear.addEventListener('click', function() {
        screen.value = '';
    });
    clear.addEventListener('click', function() {
        // Get the current value from the screen
        let currentValue = screen.value;
    
        // Remove the last character from the current value
        let newValue = currentValue.slice(0, -1);
    
        // Update the screen with the new value
        screen.value = newValue;
    });
    
        
});
