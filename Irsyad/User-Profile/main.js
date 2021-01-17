let toggle = document.querySelector(".toggle-visible");
let passLama = document.getElementById("passwordLama");
let icon = document.querySelector(".fa");

toggle.addEventListener("click", function () {
  if (passLama.type === "password") {
    passLama.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passLama.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

let toggleBaru = document.querySelector(".toggle-visible-baru");
let passBaru = document.getElementById("passwordBaru");
let iconBaru = document.querySelector(".fa-baru");

toggleBaru.addEventListener("click", function () {
  if (passBaru.type === "password") {
    passBaru.type = "text";
    iconBaru.classList.remove("fa-eye");
    iconBaru.classList.add("fa-eye-slash");
  } else {
    passBaru.type = "password";
    iconBaru.classList.remove("fa-eye-slash");
    iconBaru.classList.add("fa-eye");
  }
});

let toggleKonfirmasi = document.querySelector(".toggle-visible-konfirmasi");
let passKonfirmasi = document.getElementById("passwordKonfirmasi");
let iconKonfirmasi = document.querySelector(".fa-konfirmasi");

toggleKonfirmasi.addEventListener("click", function () {
  if (passKonfirmasi.type === "password") {
    passKonfirmasi.type = "text";
    iconKonfirmasi.classList.remove("fa-eye");
    iconKonfirmasi.classList.add("fa-eye-slash");
  } else {
    passKonfirmasi.type = "password";

    iconKonfirmasi.classList.remove("fa-eye-slash");
    iconKonfirmasi.classList.add("fa-eye");
  }
});
