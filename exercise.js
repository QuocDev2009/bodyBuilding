function exercises(arg){
    var form = document.querySelector(arg.form)
    var exerName = document.querySelector(arg.exerName)
    var exerTime = document.querySelector(arg.exerTime)
    var audio = form.querySelector('audio')
    var exerImg = form.querySelector('img')
    var exerList = []
    const restForm = {
        name : arg.restHeading,
        time : arg.timeRest,
        img: arg.imgRest
    }
    for (var exer of arg.exerList){
        for (var timesRange = 0; timesRange < (exer.times || 1); timesRange++){
            exerList.push(exer, restForm)
        }
    }
    exerList.pop()
    function loop(index){
        var exer =  exerList[index]
        if (exer){
            var promise = Promise.resolve()
            exerName.textContent = exer.name
            exerTime.textContent = exer.time
            exerImg.src = exer.img
            promise
                .then(function(){
                    return new Promise(function(resolve){
                        var i = exer.time - 1
                        var tmp = setInterval(function(){
                            exerTime.textContent = i--
                        }
                        , 1000)
                        setTimeout(resolve, exer.time*1000)
                        setTimeout(function(){
                            clearInterval(tmp)
                        },exer.time*1000)
                    })
                })
                .then(function(){
                    // code
                    audio.play()
                    setTimeout(function(){
                        audio.pause()
                    }, 5000)
                    loop(index+1)
                })
        }
        return
    }
    loop(0)
}