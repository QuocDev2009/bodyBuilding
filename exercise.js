function exercises(arg){
    var form = document.querySelector(arg.form)
    var exerName = document.querySelector(arg.exerName)
    var exerTime = document.querySelector(arg.exerTime)
    var exerImg = form.querySelector('img')
    var controlsBtn = document.querySelector(arg.controlsBtn)
    var exerList = []
    const restForm = {
        name : arg.restHeading,
        time : arg.timeRest,
        img: arg.imgRest
    }
    // append elements to exerList
    for (var exer of arg.exerList){
        for (var timesRange = 0; timesRange < (exer.times || 1); timesRange++){
            exerList.push(exer, restForm)
        }
    }
    exerList.pop()
    // loop
    var isFirstElement = true
    function loop(index){
        var exer =  exerList[index]
        if (exer){
            var timeRange = exer.time
            exerTime.textContent = timeRange
            exerName.textContent = exer.name
            exerImg.src = exer.img
            // count down
            function countDown(){
                var tmp = setInterval(function(){
                    exerTime.textContent = --timeRange
                    if (timeRange <= 0){
                        clearInterval(tmp)
                        isFirstElement = false
                        loop(index+1)
                    }
                },1000)
                return tmp
            }
            if (!isFirstElement) var auto = countDown()
            var previous;
            controlsBtn.onclick = function(){
                if (controlsBtn.classList.contains(arg.runBtn)){
                    controlsBtn.classList.remove(arg.runBtn)
                    controlsBtn.classList.add(arg.stopBtn)
                    previous = countDown()
                }
                else if (controlsBtn.classList.contains(arg.stopBtn)){
                    controlsBtn.classList.remove(arg.stopBtn)
                    controlsBtn.classList.add(arg.runBtn)
                    clearInterval(previous)
                    clearInterval(auto)
                }
            }
        }
        return
    }
    loop(0)
}