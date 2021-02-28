const list = document.querySelector('#To-Do-list .remove-dot')
const addForm = document.forms['add-boks']


// deleting books from the inventory
list.addEventListener('click', (e)=> {
    e.preventDefault()

    if(e.target.className = 'delete') {
        const li = e.target.parentElement
        li.parentElement.removeChild(li)
    }
})


