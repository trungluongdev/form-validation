function usernameValidation(username) {
    if (!username) return "Username Required";
    return true;
}

function emailValidation(email) {
    if (!email) return "Email Required";
    const re = /@gmail\.com$/ ;
    if (!re.test(email)) return "Email is not valid";
    return true;
   }

function passwordValidation(password) {
    if (!password) return "Password Required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return true;
   }

   function confirmpasswordValidation(confirmPassword, password) {
    if (!confirmPassword) return "Password Confirmation Required";
    if (confirmPassword !== password) return "Password Confirmation is not correct";
    return true;
   }

  function fieldsValidation(input) {
    let message;
    switch (input.id) {
        case "username":
            message = usernameValidation(input.value.trim());
            break;
        case "email":
            message = emailValidation(input.value.trim());
            break;     
        case "password":
            message = passwordValidation(input.value.trim());
            break;
        case "confirm-password":
            const password = document.querySelector("#password").value.trim();
            message = confirmpasswordValidation(input.value.trim(),password);
            break;
        default:
        break;     
                   }
        if ( message === true) {
            displayIconsValidation(input, "", "success");

        } else {
            displayIconsValidation(input, message, "error");
        }
}

function displayIconsValidation(input, message, type) {
    const successIcon = input.parentNode.querySelector('.icon-success');
    const errorIcon = input.parentNode.querySelector('.icon-error');
    const errorMassage = input.parentNode.querySelector('.error-message');
    if ( type === "success") {
        successIcon.classList.remove("hidden");
        errorIcon.classList.add("hidden");
        errorMassage.textContent = "";
    } else {
        successIcon.classList.add("hidden");
        errorIcon.classList.remove("hidden");
        errorMassage.textContent = message;
    }
   }


   const form = document.querySelector(".form");
   const fields = ["username", "email", "password", "confirm-password"];
   const inputs = fields.map(field => document.querySelector(`#${field}`));
   
   inputs.forEach(input => {
    input.addEventListener("input", () => {
        fieldsValidation(input);
    });
   })

   form.addEventListener("submit", (event) => {
        event.preventDefault();
        inputs.forEach(input => fieldsValidation(input));
   })