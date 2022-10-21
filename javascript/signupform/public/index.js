const email = document.getElementById('email')
email.addEventListener("input", (event) => {
    // check for validity
    if (email.validity.typeMismatch)
    {
        email.setCustomValidity("enter Valid email")
        email.reportValidity()
    }
    else
    {
        email.setCustomValidity("")
    }
})

//username validation
const username = document.getElementById('username')
username.addEventListener("input", (event) => {
    // check for validity
    if (username.validity.patternMismatch)
    {
        username.setCustomValidity("enter Valid username")
        username.reportValidity()
    }
    else
    {
        username.setCustomValidity("")
    }
})