const xiala = document.querySelector('.xiala .xiala-btn')
const x = document.querySelector('.xiala-1')
const tab = document.querySelectorAll('.tab')
const nav_1 = document.querySelector('.nav-1')
const nav__1 = document.querySelectorAll('.nav--1')
const nav = document.querySelector('.nav')
const div = document.querySelectorAll('.xiala-2 .ff')
const rad = document.querySelectorAll('[type=radio]')
const search = document.querySelector('[type=search]')
let timer = 0
xiala.addEventListener('click',() => {
    x.classList.toggle('none')
})
nav_1.addEventListener('mouseover',e => {
    clearTimeout(timer)
        if(e.target.tagName === 'A'){
            for(let i = 0;i < nav__1.length;i++){
                nav__1[i].querySelector('a').style = "color:gray"
            }
            for(let i = 0;i < tab.length;i++){
                if(!tab[i].classList.contains('none')){
                    tab[i].classList.add('none')
                }
            }
            e.target.style = "color:black"
        }
        if(e.target.tagName === 'A' && e.target.dataset.id){
        tab[e.target.dataset.id - 1].classList.remove('none')
        }
})
nav_1.addEventListener('mouseleave',() => {
    timer = setTimeout(() => {
        for(let i = 0;i < tab.length;i++){
            if(!tab[i].classList.contains('none')){
                tab[i].classList.add('none')
            }
        }
        for(let i = 0;i < nav__1.length;i++){
            nav__1[i].querySelector('a').style = "color:black"
        }
    },100)
})
for(let i = 0;i < tab.length;i++){
    tab[i].addEventListener('mouseover',() => {
        clearTimeout(timer)
    })
    tab[i].addEventListener('mouseleave',() => {
        if(!tab[i].classList.contains('none')){
            tab[i].classList.add('none')
        }
        for(let i = 0;i < nav__1.length;i++){
            nav__1[i].querySelector('a').style = "color:black"
        }
    })
}
x.addEventListener('click',e => {
    for(let i = 0;i < rad.length;i++){
        if(rad[i].checked){
            rad[i].checked = false
        }
    }
    if(e.target.tagName === 'DIV' || e.target.tagName === 'INPUT'){
        rad[e.target.dataset.s - 1].checked = true
        xiala.innerHTML = div[e.target.dataset.s - 1].innerHTML
        search.placeholder = `Search ${div[e.target.dataset.s - 1].innerHTML}`
        x.classList.toggle('none')
    }
})
const ad_time = document.querySelectorAll('.ad--2')
const now = +new Date()
const fur = +new Date('2024-5-20 00:00:00')
const count = (fur - now) / 1000
let d = parseInt(count / 60 / 60 / 24)
d = d < 10? '0' + d : d
let h = parseInt(count / 60 / 60 % 24)
h = h < 10? '0' + h : h
let m = parseInt(count / 60 % 60)
m = m < 10? '0' + m : m
let s = parseInt(count % 60)
s = s < 10? '0' + s : s
ad_time[0].innerHTML = d
ad_time[1].innerHTML = h
ad_time[2].innerHTML = m
ad_time[3].innerHTML = s
setInterval(() => {
    const now = +new Date()
    const fur = +new Date('2024-5-20 00:00:00')
    const count = (fur - now) / 1000
    let d = parseInt(count / 60 / 60 / 24)
    d = d < 10? '0' + d : d
    let h = parseInt(count / 60 / 60 % 24)
    h = h < 10? '0' + h : h
    let m = parseInt(count / 60 % 60)
    m = m < 10? '0' + m : m
    let s = parseInt(count % 60)
    s = s < 10? '0' + s : s
    ad_time[0].innerHTML = d
    ad_time[1].innerHTML = h
    ad_time[2].innerHTML = m
    ad_time[3].innerHTML = s
}, 1000);
const close = document.querySelector('.ad-f')
const ad = document.querySelector('.ad')
close.addEventListener('click',() => {
    ad.style = "opacity:0;transform: translateY(200px);"
    close.style = "transform: translateY(200px);"
})