
const btn = document.querySelector('.btn-clicker');
const formField = document.querySelector('input');

btn.addEventListener('click', () => {
    if (formField.value == "") alert("Wrong validation, please fill form appropriately");
    else if (formField.value.match(/[!-\-]|[:-\?]|[\[-`]|[{-~}]]/)) alert("Special characters not allowed");
    else if (!formField.value.match(/[a-zA-Z][0-9]@gmail.com/) && !formField.value.match(/[a-zA-Z]@gmail.com/)) {
        alert("Wrong validation, please fill form appropriately");
    }
    else if (formField.value.match(/[a-zA-Z][0-9]@gmail.com/)) {
        alert("successfully filled")
        formField.value = ""
    }
    else if (formField.value.match(/[a-zA-Z]@gmail.com/)) {
        alert("successfully filled")
        formField.value = ""
    }
})

