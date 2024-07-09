let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset-btn");
let newbtn= document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turn1 = true // plyr1 
const winpattrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGm=()=>{
    turn1=true;
    enableBoxes();
    msgContainer.classList.add("hide");


}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("boxed was cliked")
        if (turn1) {  //ply1
            box.innerText = "O";
            turn1 = false;

        }
        else {  //ply2
            box.innerText = "X";
            turn1 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const disibleBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Bhawa Apan jinklo --The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disibleBoxes();

}
const checkwinner = () => {
    for (let pattern of winpattrn) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;  

      if(pos1 !="" && pos2 !="" && pos3 !=""){
       if(pos1==pos2 && pos2==pos3){
        console.log("Winner",pos1);
    
        showwinner(pos1);
       }
      }
    }
};
newbtn.addEventListener("click",resetGm);
rstbtn.addEventListener("click",resetGm)



