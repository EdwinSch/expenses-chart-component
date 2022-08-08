/* --- INIT --- */

const graphBars = document.querySelectorAll(".col");
const showAmounts = document.querySelectorAll(".showAmount");
const totalThisMonth = document.querySelector("span");
const fromBalance = document.querySelector("h4");
const speed = 180; // the lower the speed, the faster it counts up

/* --- FUNCTIONS--- */


// Bar Functions
for (i = 0; i < graphBars.length; i++) {
    // Fill bar height
    // graphBars[i].style.height = chartNumbers[i];
    graphBars[i].style.height = getRandomMinMix(20, 100, 1) + "%";

    // Mouse Over && show percentage
    graphBars[i].addEventListener("mouseover", function () {
        let thisHeight = this.style.height;
        this.querySelector('.showAmount').innerText = thisHeight;

        // console.log(thisHeight);
    })
    // Mouse Leave && hide percentage
    graphBars[i].addEventListener("mouseleave", function () {
        this.querySelector('.showAmount').innerText = "";

    })
}

let totalAmount = getRandomMinMix(100, 900, 2);


// Calculate and animate Total this month. And push to DOM
const updateCount = () => {
    // console.log(totalAmount);
    let initCount = +document.querySelector('span').innerText;
    // console.log(initCount);
    totalThisMonth.innerHTML = initCount
    const incrementStep = totalAmount / speed;

    if (initCount < totalAmount) {
        let calc = initCount + incrementStep;
        totalThisMonth.innerText = calc.toFixed(2)
        setTimeout(updateCount, 1);

    }
    else {
        totalThisMonth.innerText = totalAmount;
    }
}

updateCount();

// Calculate percentage from account balance and push to DOM
let sum = (100 * totalAmount) / 921.48;
fromBalance.innerHTML = `${sum.toFixed(1)}&#37;`



// Get a random min/max with fixed decimals
function getRandomMinMix(min, max, fix) {
    return (Math.random() * (max - min) + min).toFixed(fix);
}



