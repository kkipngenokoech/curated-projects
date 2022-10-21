const email = document.getElementById('mail')
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch)
    {
        email.setCustomValidity("please enter an valid email address")// displaying a custom message
        email.reportValidity()// this displays the custom message we alluded.
    }
    else {
        email.setCustomValidity("")
    }
})