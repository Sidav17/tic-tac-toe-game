let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;
let print = "O";
let change = print.style.color = "green"



let winpattern = [[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]
];

const resetgame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach ( (box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner(); 
    }) 
})

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""; 
    }
}

const showwinner = (winner) =>{
    msg.innerText =`congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disabledBoxes();
}

const checkWinner = () => {
    for(pattern of winpattern){ 
    //    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
    
       let ps1val = boxes[pattern[0]].innerText;
       let ps1va2 = boxes[pattern[1]].innerText;
       let ps1va3 = boxes[pattern[2]].innerText;

       if (ps1val != "" && ps1va2 != "" && ps1va3 != "") {
        if (ps1val === ps1va2 && ps1va2 === ps1va3) {
            console.log("winner " + ps1val)

            showwinner(ps1val);
        }
       }
    }
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

