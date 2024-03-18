const input = document.querySelector('#box__input')
const btn = document.querySelector('#box__button')
const resultList = document.querySelector('#list__ul')
const delAll = document.querySelector('#delAll')

// Add event listener for the "click" event on the button
btn.addEventListener('click', (el) => {
    if (input.value === '') return
    createDeleteElement(input.value)
    input.value  = ''
})

// Add event listener for the "keydown" event on the input
input.addEventListener('keydown', (el) => {
    if (el.key === 'Enter' && input.value !== '') {
        createDeleteElement(input.value)
        input.value  = ''
    }
})

function createDeleteElement(value){
    const li = document.createElement('li');
    const delButton = document.createElement('button')
    const count = resultList.getElementsByTagName("li");
    li.className = 'li'
    li.textContent = `${count.length+1}) ${value}`
    
    delButton.className = "delButton"
    delButton.textContent = '✖'
    li.appendChild(delButton)

    delButton.addEventListener( 'click', (e)=>{
        resultList.removeChild(li)
    })

    resultList.appendChild(li)
}

delAll.addEventListener("click", (e) => {
    const listItems = resultList.getElementsByTagName("li");
    while (listItems.length > 0) {
        resultList.removeChild(listItems[0]);
    }
});