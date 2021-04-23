export class Pomodoro {
    constructor(mins) {
        let container = document.createElement("div");
        let global="pomodoro";
        container.classList.add(global);
        document.body.prepend(container);
        
        let button = document.createElement("button");
        button.classList.add(global + "__btn");
        container.prepend(button);
        
        let display = document.createElement("div");
        display.classList.add(global + "__display");
        container.prepend(display);
        
        let i;
        let j;
        let min, sec;
        
        i = mins;
        j = '00';
        button.textContent = 'Start';
        
        function twoDigits(a) {
            if (a.toString().length === 1) {
                return "0"+a;
            }
            else {
                return a;
            }
        }
        
        function getDisplay() {
            min = twoDigits(i);
            sec = twoDigits(j);
            display.textContent = min + ':' + sec;
        }
        getDisplay();
        
        
        function decrementTime() {
            getDisplay();
            if (j==0) {
                j=60;
                i--;
                }
            j--;
        }
        
        
        function countdown() {
            button.classList.toggle("activated");
            i = mins;
            j = '00';
            let id = setInterval(go, 1000);
            function go() {
                if (!button.classList.contains("activated")) {
                    clearInterval(id);
                    button.textContent = 'Start';
                } else {
                    decrementTime();
                    button.textContent = 'Stop';
                }
            }
        }
        
        button.addEventListener("click", countdown);
    }
}