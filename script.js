let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk berhasil ditambahkan ke keranjang!");
}

function loadCart() {
  let table = document.getElementById("cartTable");
  let total = 0;

  cart.forEach((item, index) => {
    let row = table.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>Rp ${item.price.toLocaleString()}</td>
    `;
    total += item.price;
  });

  document.getElementById("totalHarga").innerText =
    "Rp " + total.toLocaleString();
}

// ===== LOGIN SYSTEM =====
function register() {
  let user = document.getElementById("regUsername").value;
  let pass = document.getElementById("regPassword").value;

  if (!user || !pass) {
    document.getElementById("regMsg").innerText = "Semua field wajib diisi!";
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  document.getElementById("regMsg").style.color = "green";
  document.getElementById("regMsg").innerText = "Registrasi berhasil! Silakan login.";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("loginUser", user);
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMsg").style.color = "red";
    document.getElementById("loginMsg").innerText = "Username atau password salah!";
  }
}

function logout() {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("loginUser");
  window.location.href = "login.html";
}

function cekLogin() {
  if (localStorage.getItem("isLogin") !== "true") {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.html";
  }
}

function searchProduct() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let nama = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    cards[i].style.display = nama.includes(input) ? "block" : "none";
  }
}
