// Warna tiap jurusan (dipakai pada kartu dan tombol filter)
const JURUSAN = {
  SI:  { nama: "Sistem Informasi",         warna: "#0b3a7a" },
  TI:  { nama: "Teknik Informatika",       warna: "#1b6b4f" },
  TS:  { nama: "Teknik Sipil",             warna: "#565350" },
  DKV: { nama: "Desain Komunikasi Visual", warna: "#0e0b0d" }
};

// Data contoh, GANTI dengan data alumni yang sebenarnya.
// Format satu baris: [nama, kode jurusan (SI/TI/TS/DKV), angkatan, pekerjaan]
const alumni = [
  ["Andi Prasetyo", "SI", 2019, "Web Developer di Bandung"],
  ["Siti Rahmawati", "SI", 2018, "Data Analyst di Jakarta"],
  ["Hendra Gunawan", "SI", 2017, "System Analyst di Cirebon"],
  ["Putri Handayani", "SI", 2020, "Business Analyst di Jakarta"],
  ["Wahyu Hidayat", "SI", 2016, "IT Consultant di Bandung"],
  ["Ayu Lestari", "SI", 2021, "Admin Database di Kuningan"],
  ["Gilang Ramadhan", "SI", 2019, "Product Owner di Jakarta"],
  ["Nia Kurniasih", "SI", 2018, "QA Tester di Bandung"],
  ["Taufik Hermawan", "SI", 2017, "ERP Specialist di Bekasi"],
  ["Intan Permata", "SI", 2022, "Staf IT di Kuningan"],
  ["Rendi Setiawan", "SI", 2020, "Digital Marketing di Cirebon"],
  ["Maya Anggraini", "SI", 2016, "Project Coordinator di Jakarta"],
  ["Dedi Kurniawan", "SI", 2021, "Technical Support di Kuningan"],

  ["Budi Santoso", "TI", 2017, "Software Engineer di Cirebon"],
  ["Fajar Nugraha", "TI", 2020, "Mobile Developer di Bandung"],
  ["Rina Marlina", "TI", 2018, "Network Engineer di Kuningan"],
  ["Dimas Saputra", "TI", 2019, "Backend Developer di Jakarta"],
  ["Eko Prabowo", "TI", 2016, "DevOps Engineer di Jakarta"],
  ["Tia Amelia", "TI", 2021, "Frontend Developer di Bandung"],
  ["Ilham Maulidin", "TI", 2018, "Cyber Security Analyst di Jakarta"],
  ["Yoga Pratama", "TI", 2020, "Game Developer di Yogyakarta"],
  ["Citra Dewanti", "TI", 2019, "Machine Learning Engineer di Bandung"],
  ["Rangga Wijaya", "TI", 2017, "Dosen Informatika di Kuningan"],
  ["Vina Oktaviani", "TI", 2022, "Junior Programmer di Cirebon"],
  ["Ade Firdaus", "TI", 2021, "Cloud Engineer di Jakarta"],
  ["Hilman Fauzi", "TI", 2016, "IT Support di Kuningan"],

  ["Rizky Maulana", "TS", 2016, "Site Engineer di Jakarta"],
  ["Yusuf Hidayat", "TS", 2018, "Pengawas Proyek di Kuningan"],
  ["Mega Susanti", "TS", 2019, "Drafter di Bandung"],
  ["Agus Firmansyah", "TS", 2017, "Estimator Biaya di Cirebon"],
  ["Bagus Kurniawan", "TS", 2020, "Quantity Surveyor di Bandung"],
  ["Sari Wulandari", "TS", 2018, "Perencana Jalan di Kuningan"],
  ["Hasan Basri", "TS", 2016, "Pelaksana Jembatan di Tasikmalaya"],
  ["Eka Nurhayati", "TS", 2021, "Staf Dinas PU di Kuningan"],
  ["Joko Susilo", "TS", 2017, "Kontraktor Mandiri"],
  ["Rafi Alamsyah", "TS", 2022, "Asisten Surveyor di Cirebon"],
  ["Dina Fitriani", "TS", 2019, "Konsultan Struktur di Jakarta"],
  ["Irfan Hakim", "TS", 2020, "Safety Officer di Bekasi"],

  ["Lia Kusumawati", "DKV", 2017, "Graphic Designer di Bandung"],
  ["Naufal Ramadhan", "DKV", 2019, "UI/UX Designer di Jakarta"],
  ["Salsa Nabila", "DKV", 2020, "Ilustrator Freelance"],
  ["Bayu Permana", "DKV", 2018, "Videografer di Kuningan"],
  ["Kiki Amalia", "DKV", 2021, "Motion Designer di Bandung"],
  ["Arif Budiman", "DKV", 2016, "Art Director di Jakarta"],
  ["Nadia Safitri", "DKV", 2019, "Brand Designer di Cirebon"],
  ["Reza Pahlevi", "DKV", 2018, "Fotografer Produk di Kuningan"],
  ["Mira Oktaviana", "DKV", 2022, "Desainer Kemasan di Bandung"],
  ["Alfian Nugroho", "DKV", 2017, "Content Creator di Jakarta"],
  ["Zahra Putri", "DKV", 2020, "Social Media Designer di Kuningan"],
  ["Galih Purnomo", "DKV", 2021, "Animator di Yogyakarta"]
].map(([nama, kode, angkatan, pekerjaan]) => ({
  nama, kode, angkatan, pekerjaan,
  jurusan: JURUSAN[kode].nama,
  warna: JURUSAN[kode].warna
}));

const daftar = document.getElementById("daftar");
const kolomCari = document.getElementById("cari");
const filter = document.getElementById("filter");
const jumlah = document.getElementById("jumlah");
const kosong = document.getElementById("kosong");

let kodeAktif = ""; // "" = semua jurusan

function inisial(nama) {
  const kata = nama.split(" ");
  return (kata[0][0] + (kata[1] ? kata[1][0] : "")).toUpperCase();
}

function tampilkan(data) {
  daftar.innerHTML = data.map(a => `
    <article class="alumni" style="--warna:${a.warna}">
      <div class="kepala">
        <div class="inisial" aria-hidden="true">${inisial(a.nama)}</div>
        <div>
          <h2>${a.nama}</h2>
          <p class="jurusan">${a.jurusan}</p>
        </div>
      </div>
      <div class="rincian">
        <p class="angkatan">Angkatan ${a.angkatan}</p>
        <p>${a.pekerjaan}</p>
      </div>
    </article>
  `).join("");

  jumlah.textContent = `Menampilkan ${data.length} dari ${alumni.length} alumni`;
  kosong.hidden = data.length > 0;
}

// Saring berdasarkan kata pencarian (nama atau jurusan) dan tombol jurusan
function terapkan() {
  const kata = kolomCari.value.trim().toLowerCase();
  tampilkan(alumni.filter(a =>
    (kodeAktif === "" || a.kode === kodeAktif) &&
    (a.nama.toLowerCase().includes(kata) || a.jurusan.toLowerCase().includes(kata))
  ));
}

// Tombol filter jurusan: Semua + 4 jurusan, lengkap dengan jumlahnya
function buatFilter() {
  const pilihan = [["", "Semua", null], ...Object.entries(JURUSAN).map(([k, j]) => [k, j.nama, j.warna])];
  filter.innerHTML = pilihan.map(([kode, nama, warna]) => {
    const n = kode === "" ? alumni.length : alumni.filter(a => a.kode === kode).length;
    return `<button type="button" class="chip" data-kode="${kode}" aria-pressed="${kode === kodeAktif}"
              ${warna ? `style="--warna:${warna}"` : ""}>${nama} <span class="n">${n}</span></button>`;
  }).join("");
}

filter.addEventListener("click", e => {
  const tombol = e.target.closest(".chip");
  if (!tombol) return;
  kodeAktif = tombol.dataset.kode;
  filter.querySelectorAll(".chip").forEach(c =>
    c.setAttribute("aria-pressed", c.dataset.kode === kodeAktif));
  terapkan();
});

kolomCari.addEventListener("input", terapkan);

buatFilter();
tampilkan(alumni);