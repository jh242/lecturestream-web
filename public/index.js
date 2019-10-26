document.addEventListener("DOMContentLoaded", function () {
    const app = firebase.app();
});

function onSubmit() {
    let data = new FormData(document.getElementById('login'));

    let email = data.get("email");
    let password = data.get("password");

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'video.html';
        })
        .catch(() => {
            document.getElementById("messagebox").innerHTML = "Couldn't login."
        });
}

