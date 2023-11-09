let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let lapsCompleted = 0;
function increment() { 
  lapsCompleted = lapsCompleted + 1
  countEl.textContent = lapsCompleted
}


function save(){
  let countStr = lapsCompleted + " - "
  saveEl.textContent += countStr
  lapsCompleted = 0
  countEl.textContent = 0
}