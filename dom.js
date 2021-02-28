const btns = document.querySelectorAll('#To-Do-list .delete')

btns.forEach(element => {
    element.addEventListener('click', (e)=> {
        var li = e.target.parentElement
        li.parentNode.removeChild(li)
    })
});