window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")
    console.log("読み込みました")
})

document.addEventListener('click',function(){
    const mouseOverButton = document.getElementById('lists')
    console.log("クリックされた")
})


document.addEventListener('mouseover',function(){
    const mouseOverButton = document.getElementById('lists')
    console.log("乗った")
})

document.addEventListener('mouseout',function(){
    const mouseOutButton = document.getElementById("list")
    console.log("離れた")
})