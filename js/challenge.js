const counter = document.getElementById('counter')

let counterNum = parseInt(counter.innerText) 

let intervalId = setInterval( () => {
    counterNum++
    counter.innerText = counterNum
}, 1000);

document.getElementById('plus').addEventListener("click", () =>{
    counterNum++
    counter.innerText = counterNum
});

document.getElementById('minus').addEventListener("click", () => {
    counterNum--
    counter.innerText = counterNum
});

const likedNumbers = [];

document.getElementById('heart').addEventListener("click", () =>{
    likedNumbers.push(counterNum)
    const filteredNums = likedNumbers.filter(num => num === counterNum)
    if (filteredNums.length === 1) {
        const li = document.createElement("li")
        li.id = counterNum
        li.innerText = `${counterNum} has been liked 1 time.`
        document.querySelector("ul").appendChild(li)
    } else {
        document.getElementById(counterNum).innerText = `${counterNum} has been liked ${filteredNums.length} times.`
    }
});

const disableToggle = {
    true: false,
    false: true
};

const pauseTextToggle = {
    "pause": "resume",
    "resume": "pause"
};

document.getElementById("pause").addEventListener("click", () => {
    const btns = Array.from(document.querySelectorAll("button"))
    const toBeDisabled = btns.filter(btn => btn !== document.getElementById("pause"))
    toBeDisabled.forEach( btn => btn.disabled = disableToggle[btn.disabled])

    const pause = document.getElementById("pause")
    pause.innerText = pauseTextToggle[pause.innerText]

    if (pause.innerText === "resume") {
        clearInterval(intervalId)
    } else {
        intervalId = setInterval(() =>{
            counterNum++
            counter.innerText = counterNum
        }, 1000)
    }
});

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = document.getElementById("comment-input").value
    document.getElementById("list").appendChild(p)
    document.getElementById("comment-input").value = ""
});
