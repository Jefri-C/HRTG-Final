var elem = document.getElementsByClassName('imgColors')

for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', (e) => {

        let elementId = e.target.src;

        let cardId = e.target.parentNode.parentNode;

        let shoesId = cardId.firstElementChild.id;

        let finalId = "#" + shoesId;

        $(finalId).attr('src', elementId)
    }
    );
}