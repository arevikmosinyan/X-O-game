let area = document.getElementById("area");
let player = "X";

area.addEventListener("click", function(ev) {
  if (ev.target.className == "box") {
    if (player === "X") {
      ev.target.innerHTML = "X";
      player = "O";
    } else {
      ev.target.innerHTML = "O";
      player = "X";
    }

    check();
  }

})



function check() {
  let boxes = document.getElementsByClassName("box");
  if ((boxes[0].outerText === "X" && boxes[1].outerText === "X" && boxes[2].outerText === "X") 
  || (boxes[3].outerText === "X" && boxes[4].outerText === "X" && boxes[5].outerText === "X") 
  || (boxes[6].outerText === "X" && boxes[7].outerText === "X" && boxes[8].outerText === "X") 
  || (boxes[6].outerText === "X" && boxes[7].outerText === "X" && boxes[8].outerText === "X") 
  || (boxes[0].outerText === "X" && boxes[3].outerText === "X" && boxes[6].outerText === "X") 
  || (boxes[1].outerText === "X" && boxes[4].outerText === "X" && boxes[7].outerText === "X")
  || (boxes[2].outerText === "X" && boxes[5].outerText === "X" && boxes[8].outerText === "X")
  || (boxes[0].outerText === "X" && boxes[4].outerText === "X" && boxes[8].outerText === "X") 
  || (boxes[2].outerText === "X" && boxes[4].outerText === "X" && boxes[6].outerText === "X")) {
    alert(" The 'X' player won");
    setTimeout(() => {
      location.reload()
    }, 1000);

  } else if((boxes[0].outerText === "O" && boxes[1].outerText === "O" && boxes[2].outerText === "O") 
  || (boxes[3].outerText === "O" && boxes[4].outerText === "O" && boxes[5].outerText === "O") 
  || (boxes[6].outerText === "O" && boxes[7].outerText === "O" && boxes[8].outerText === "O") 
  || (boxes[6].outerText === "O" && boxes[7].outerText === "O" && boxes[8].outerText === "O") 
  || (boxes[0].outerText === "O" && boxes[3].outerText === "O" && boxes[6].outerText === "O") 
  || (boxes[1].outerText === "O" && boxes[4].outerText === "O" && boxes[7].outerText === "O")
  || (boxes[2].outerText === "O" && boxes[5].outerText === "O" && boxes[8].outerText === "O")
  || (boxes[0].outerText === "O" && boxes[4].outerText === "O" && boxes[8].outerText === "O") 
  || (boxes[2].outerText === "O" && boxes[4].outerText === "O" && boxes[6].outerText === "O")){
    alert(" The 'O' player won");
    setTimeout(() => {
      location.reload()
    }, 1000);
  } else {
    let isfull = true;
    for(let i = 0; i < 8; i++){
      if(boxes[i].outerText === ""){
        isfull = false
        
      }
     
    }
    if(isfull === true){
      alert(" Draw");
      setTimeout(() => {
      location.reload()
    }, 1000);
    }
    
  }
  
}
