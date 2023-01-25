window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")
    console.log("読み込みました")

    pullDownButton.addEventListener('click',function(){
        if(pullDownParents.getAttribute("style")=="display:block;"){
            pullDownParents.removeAttribute("style","display:block;")
            console.log("非表示")
        }else{
            pullDownParents.setAttribute("style","display:block;")
            console.log("表示")
        }
    })

    pullDownButton.addEventListener('mouseover',function(){
        this.setAttribute("style","background-color:blue;")
        console.log("乗ったときは青色")
    })

    pullDownButton.addEventListener('mouseout',function(){
        this.removeAttribute("style","background-color:red;")
        console.log("外れたときは赤色")
    })
    
})