let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const winpatterns = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O"
            turnO = false;

        } else {
            box.innerText = "X"
            turnO = true
        }

        box.disabled = true;

        count++;
        console.log(count)

        let isWinner = checkpattern();

        if (count === 9 && !isWinner) {
            gameDraw();
        }


    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkpattern = () => {

    for (let pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }

}

const showwinner = (winner) => {
    msgcontainer.classList.remove("hide");
    msg.innerText = (`Congratulation, winner is ${winner} `)
    disableboxes();
}

const showDraw = (draw) => {
    msgcontainer.classList.remove("hide");
    msg.innerText = (`Game is draw ${draw} `)
    disableboxes();
}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide")
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}

newgamebtn.addEventListener("click", (resetgame));
resetbtn.addEventListener("click", (resetgame));


