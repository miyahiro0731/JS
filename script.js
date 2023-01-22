window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")
    console.log("読み込みました")

    pullDownButton.addEventListener('click',function(){
        console.log("クリックしたときは緑色")
        pullDownButton.setAttribute("style","background-color:green;")
    })

    pullDownButton.addEventListener('mouseover',function(){
        console.log("乗ったときは青色")
        pullDownButton.setAttribute("style","background-color:blue;")
    })

    pullDownButton.addEventListener('mouseout',function(){
        console.log("はずれたときは赤色")
        pullDownButton.removeAttribute("style","background-color:red;")
    })
    
})