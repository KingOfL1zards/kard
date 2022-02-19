let dragItem = null
const boardzone = document.querySelector('.boardzone')
const createboardbtn = document.querySelector('.createboard')
const createcardbtn = document.querySelector('.createcard')
const cardzone = document.querySelector('.card-zone')
let boardArr 



// !localStorage.boardArr ? boardArr = [] : boardArr = JSON.parse(localStorage.getItem('boardArr  '))

// const addLocal = () => {
//     localStorage.setItem('boardArr', JSON.stringify(boardArr))
// }

// const fillboard = () => {
//     boardzone.innerHTML =''
//     if (boardArr.length>0){
//         boardArr.forEach(item => {
//             boardArr.innerHTML += createboard(item)
//         });
//     }

// }


// function boardAdd (){
//     this.name = 'Новая доска'
// }


createcardbtn.addEventListener('click' , () =>{
 cardzone.innerHTML += createcard()
})

const createcard = () => {
    return `
    <div class="card" draggable="true">
    <h2 class="card-title">Имя1</h2>
    <p class="card-text">Текст</p>
</div>
    `
}


createboardbtn.addEventListener('click' , () =>{
    boardzone.innerHTML += createboard()
    
    dragNdrog()

})


const createboard = () => {
    return `
    <section class="board">
    <h2 class="board-title">Done</h2>
    <div class="card-zone"></div>
</section>
    `
}


const dragNdrog = () => {
 const card = document.querySelectorAll(".card")
 const board = document.querySelectorAll(".card-zone")
 for (let index = 0; index < card.length; index++) {
     const item = card[index];

item.addEventListener('dragstart', () =>{
    dragItem = item
    setTimeout(() => {
     item.style.display = 'none'   
    }, 0);
})
item.addEventListener('dragend', () => {
    setTimeout(() => {
       item.style.display = 'block'
       dragItem = null 
    }, 0);
})

for (let j = 0; j < board.length; j++) {
    const element = board[j];
    element.addEventListener('dragover', e => e.preventDefault() )

    element.addEventListener('dragenter', function (e) {
        e.preventDefault()
        this.style.backgroundColor = 'rgba(0,0,0, .3)'
    })
    element.addEventListener('drop', function (e) {
        this.style.backgroundColor = 'rgba(255,255,255, .0)'
        this.append(dragItem)
    })
}

 }
}






dragNdrog()


