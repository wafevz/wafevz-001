let i = 0
const focus = document.querySelector('.search')
const btn = document.querySelector('.btn')
btn.addEventListener('click',() => {
    i++
    if(i === 1){
    btn.previousElementSibling.style = "width:200px"
    focus.focused === true
    }
    if(i === 2){
        btn.previousElementSibling.style = "width:0px"
    }
    if(i === 3){
        i = 1
        btn.previousElementSibling.style = "width:200px"
    }
})