// Filter Title Tour
// Mengambil text yang ada di dalam card dan akan otomatis tampil nama
// tour yang akan di cari
// --KEKURANGAN--
// yang terambil masih semua bagian dari title waktu hingga text dalam tombol sehingga pencarian tidak maksimal
// sehingga search bar cari pembelian bisa untuk mencari tanggal dan hari
const filterTitle = document.querySelector("#filter-search");
// filterTitle.addEventListener("keyup", filterTour);

function filterTour(e) {
  const inputTour = e.target.value.toLowerCase();
  const card = document.querySelectorAll("#card-item");

  console.log(card.length);
  card.forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.indexOf(inputTour) != -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important; ");
    }
  });
}

// active menu in profile menu
const profilemenu = document.getElementsByClassName("profile");

for (var i = 0; i < profilemenu.length; i++) {
  profilemenu[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Untuk feature sort card melalui waktu belum bisa dibuat setau saya menggunakan database

// see password
$(document).ready(function () {
  $("#icon-click1").click(function () {
    var input = $("#passLama");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $("#icon1").toggleClass("fa-eye-slash");
    } else {
      input.attr("type", "password");
      $("#icon1").toggleClass("fa-eye");
    }
  });
  $("#icon-click2").click(function () {
    var input = $("#passBaru");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $("#icon2").toggleClass("fa-eye-slash");
    } else {
      input.attr("type", "password");
      $("#icon2").toggleClass("fa-eye");
    }
  });
  $("#icon-click3").click(function () {
    var input = $("#konfirmasiPass");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $("#icon3").toggleClass("fa-eye-slash");
    } else {
      input.attr("type", "password");
      $("#icon3").toggleClass("fa-eye");
    }
  });
});
