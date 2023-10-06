let barsArray = document.querySelectorAll(".bar_colored");
let amountsArray = [];

const func = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        amountsArray.push(data[i].amount)
    }

    let maximumNum = Math.max(...amountsArray);
    let indexofMax = amountsArray.indexOf(maximumNum);

    barsArray[indexofMax].style.height = "80%"


    for (let i = 0; i < barsArray.length; i++) {
        let barHeight = amountsArray[i] / maximumNum * 80;

        barsArray[i].style.height = barHeight + "%";
    }
}

func();

const arr = [0];
let arr2 = "";
let money = document.createElement("div");

for (let i = 0; i < barsArray.length; i++) {
    barsArray[i].addEventListener("click", function () {
        for (let z = 0; z < barsArray.length; z++) {
            barsArray[z].classList.remove("clicked")
        }
        barsArray[i].classList.add("clicked");
        money.classList.add("show");
        money.innerText = "$" + amountsArray[i]
        barsArray[i].appendChild(money);
        arr[0] = money
        arr2 = barsArray[i];
    })
}

let css = 'table td:hover{ background-color: #00ff00 }';
let style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

barsArray[0].appendChild(style);
