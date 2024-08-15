function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let closeButtonSuccess = document.getElementById("success")
closeButtonSuccess.addEventListener("click", function() {
    document.getElementById("alert-success").classList.remove("show");
});

let closeButtonError = document.getElementById("error")
closeButtonError.addEventListener("click", function() {
    document.getElementById("alert-danger").classList.remove("show");
});

document.getElementById("regBtn").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();
    let terminos = document.getElementById("terminos").checked;
    
    if (nombre === "" || apellido === "" || email === "" || 
        password1 === "" || password2 === "") {
        showAlertError();
        closeButtonError;
        return;
    } else if (password1.length < 6) {
        showAlertError();
        closeButtonError;
        return;
    } else if (password1 !== password2) {
        showAlertError();
        return;
    } else if (!terminos) {
        showAlertError();
        closeButtonError;
        return;
    }
    showAlertSuccess();
    closeButtonSuccess;
});