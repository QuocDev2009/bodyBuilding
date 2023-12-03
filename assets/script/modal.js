Element.prototype.showModal = function(queryModal, queryBtn, queryHeading, queryTexts ,heading, texts){
    var modal = document.querySelector(queryModal);
    var btn = document.querySelector(queryBtn);
    var headingElement = document.querySelector(queryHeading);
    var textsElement = document.querySelector(queryTexts)
    modal.style.display = 'flex';
    btn.addEventListener('click',function(e){
        modal.style.display = 'none'
    })
    headingElement.textContent = heading
    textsElement.innerHTML = ''
    texts.forEach(function(value){
        textsElement.innerHTML += ' - ' + value + '<br>'
    })
}