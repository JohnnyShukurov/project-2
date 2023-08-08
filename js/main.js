










let table=document.getElementById('table')
let amountOfBox=1814
for(let i=0;i<=amountOfBox;i++){
    let square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseleave', () => delColor(square))
    table.append(square)

}

function setColor(el) {
    el.style.background=`rgb(${giveRandom()},${giveRandom()},${giveRandom()})`
}
function delColor(el) {
    el.style.background=''
}

function giveRandom(){
    return Math.floor(Math.random()*257)
}