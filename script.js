
const btn = document.querySelector('.btn-clicker');
const formField = document.querySelector('input');
const message = document.querySelector('small');
const errorIcon = document.querySelector('.error-icon');

btn.addEventListener('click', () => {
    if (formField.value == "") {
        errorIcon.style.display = 'block';
        message.style.color = 'hsl(0, 93%, 68%)';
        message.innerHTML = 'Form cannot be left empty';
        message.style.display = 'block';
    }
    else if (formField.value.match(/[!-\-]|[:-\?]|[\[-`]|[{-~}]]/)) {
        errorIcon.style.display = 'block';
        message.style.color = 'hsl(0, 93%, 68%)';
        message.innerHTML = 'Special characters not allowed';
        message.style.display = 'block';
    }
    else if (!formField.value.match(/[a-zA-Z][0-9]@gmail.com/) && !formField.value.match(/[a-zA-Z]@gmail.com/)) {
        errorIcon.style.display = 'block';
        message.style.color = 'hsl(0, 93%, 68%)';
        message.innerHTML = 'Please provide a valid email';
        message.style.display = 'block';
    }
    else if (formField.value.match(/[a-zA-Z][0-9]@gmail.com/)) {
        errorIcon.style.display = 'none';
        message.style.color = 'green';
        message.innerHTML = "successfully filled";
        message.style.display = 'block';
        formField.value = ""
    }
    else if (formField.value.match(/[a-zA-Z]@gmail.com/)) {
        errorIcon.style.display = 'none';
        message.style.color = 'green';
        message.innerHTML = "successfully filled";
        message.style.display = 'block';
        formField.value = ""
    }
})

