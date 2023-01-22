window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")
    console.log("読み込みました")

    pullDownButton.addEventListener('click',function(){
        console.log("クリックされた")
    })

    pullDownButton.addEventListener('mouseover',function(){
        console.log("乗った")
        pullDownButton.setAttribute("style","background-color:blue;")
    })

    pullDownButton.addEventListener('mouseout',function(){
        console.log("離れた")
    })
    
})