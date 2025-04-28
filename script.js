// Ambil posisi pengguna
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  alert("Geolocation tidak didukung browser ini.");
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Inisialisasi map
  const map = L.map('map').setView([lat, lon], 15);

  // Tambah layer OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Tambah marker di posisi pengguna
  L.marker([lat, lon]).addTo(map)
    .bindPopup("Lokasi Anda")
    .openPopup();
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User menolak permintaan Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Informasi lokasi tidak tersedia.");
      break;
    case error.TIMEOUT:
      alert("Permintaan lokasi melebihi batas waktu.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Terjadi error tidak dikenal.");
      break;
  }
}
