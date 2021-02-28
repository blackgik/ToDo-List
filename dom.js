const list = document.querySelector('#To-Do-list .remove-dot')
const addForm = document.forms['add-books']


// deleting books from the inventory
list.addEventListener('click', (e)=> {

    if(e.target.className = 'delete') {
        const li = e.target.parentElement
        li.parentElement.removeChild(li)
    }
})

// adding books to library
addForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    var book = addForm.querySelector('input[type="text"]').value
    
    // creating elements
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    // create book element
    bookName.textContent = book
    deleteBtn.textContent = 'del'

    // adding class to it
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')

    // appendng child
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)   
})
