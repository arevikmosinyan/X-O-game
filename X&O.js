let area = document.getElementById("area");
let move = 0;

area.addEventListener("click", function(ev){
  if(ev.target.className == "box"){
      if(!(move%2)){
          ev.target.innerHTML = "X";
      } else {
        ev.target.innerHTML = "O";
      }
      move++;
     check();
  }
  
})

function check(){
    let boxes = document.getElementsByClassName("box");
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];
    for(let i = 0; i < arr.length; i++){
        if(boxes[arr[i][0]].innerHTML == "X" && boxes[arr[i][1]].innerHTML == "X" && boxes[arr[i][2]].innerHTML == "X"){
           alert(" The 'X' player won") ;
           setTimeout(()=>{location.reload()},1000);
           
           
        } else if (boxes[arr[i][0]].innerHTML == "O" && boxes[arr[i][1]].innerHTML == "O" && boxes[arr[i][2]].innerHTML == "O"){
            alert(" The 'O' player won") ;
            setTimeout(()=>{location.reload()},1000);
        }
    
    }
    
}
