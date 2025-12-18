function login() {
    const passwordValid = [
        "ai2025",
        "sekolahAI",
        "digitaledu",
        "futureclass"
    ];

    const password = document.getElementById("password").value;

    if (passwordValid.includes(password)) {
        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Password salah! Akses AI ditolak.";
    }
}

function logout() {
    location.reload();
}
