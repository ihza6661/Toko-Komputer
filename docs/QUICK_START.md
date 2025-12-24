# 🚀 Quick Start Guide - Test Website

## Cara Melihat Website dengan Security Features Baru

### Step 1: Masuk ke Folder Project
```bash
cd Computer-Landing-Site
```

### Step 2: Install Dependencies (Kalau Belum Pernah)
```bash
npm install
```

### Step 3: Jalankan Development Server
```bash
npm run dev
```

### Step 4: Buka Browser
Setelah server jalan, buka:
```
http://localhost:5173
```

---

## 🎯 Yang Baru di Homepage:

### 1. **SecurityBanner** (Langsung Setelah Hero)
- Banner besar dengan background biru
- Menampilkan kontak resmi (WA, Email, Phone)
- Warning penipuan yang jelas
- Icon shield yang prominent

### 2. **TrustBadges** (Setelah SecurityBanner)
- 4 badge utama: Verified, Secure Payment, Trusted, Anti-Fraud
- 3 indicator tambahan: Original, Fast Response, After Sales
- SSL badge di bawah

### 3. **VerificationGuide** (Di Tengah, Sebelum FAQ)
- 4 langkah verifikasi admin asli
- 6 red flags penipuan
- Background abu-abu (section besar)
- Cards dengan warna berbeda untuk setiap step

---

## 📸 Screenshot untuk Presentasi

Setelah website jalan, ambil screenshot bagian ini:

1. **SecurityBanner** (full width)
   - Tunjukkan ini PERTAMA saat demo
   - Explain: "Ini benteng terakhir untuk verifikasi kontak"

2. **VerificationGuide Section**
   - Tunjukkan 4 steps
   - Explain: "Panduan untuk pelanggan yang ragu"

3. **Mobile View**
   - Buka DevTools → Toggle Device Toolbar
   - Screenshot tampilan mobile
   - Prove: "Responsive di semua device"

---

## 🛠️ Troubleshooting

### Error: "npm: command not found"
Install Node.js dulu:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Check version
node --version
npm --version
```

### Error: Port 5173 sudah dipakai
Kill process yang pakai port itu:
```bash
# Linux
lsof -ti:5173 | xargs kill -9

# Atau pakai port lain
npm run dev -- --port 3000
```

### Website tidak muncul perubahan
Clear cache browser:
- Ctrl + Shift + R (hard refresh)
- Atau Ctrl + F5

---

## ✅ Build Production (Opsional)

Untuk build production-ready:
```bash
npm run build
```

Hasil build ada di folder `dist/`.

Preview build:
```bash
npm run preview
```

---

## 📝 Notes untuk Demo

Saat tunjukkan ke owner:
1. **Jangan scroll terlalu cepat** - Biarkan dia lihat detail
2. **Pause di SecurityBanner** - Ini most important feature
3. **Tunjukkan mobile view** - Prove responsive
4. **Explain security features** - Focus pada "protection from fraud"

Good luck! 🚀
