/* Add your JavaScript to this file */

const name = document.getElementById('email')
const form = document.getElementById('form')
const error = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Please enter a valid email address.')

    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }


})