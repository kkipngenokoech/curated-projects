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

const nameInput = document.getElementById("username")
nameInput.addEventListener("input", (event)=> {
    nameInput.setCustomValidity("");
    nameInput.checkValidity()
})

nameInput.addEventListener("invalid", () => {
    if (nameInput.value === ""){
        nameInput.setCustomValidity("enter your username!")
    }
    else
    {
        nameInput.setCustomValidity("username can only contain upper case and lowercase letters only")
    }

})