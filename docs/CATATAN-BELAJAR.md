# Catatan Belajar

Catatan pribadi tentang cara kerja repo ini. Pelajaran baru ditambahkan di bagian [Riwayat belajar](#riwayat-belajar).

## Apa isi proyek ini

Legal Ed Agent Skills Hub adalah kumpulan skill AI untuk pendidikan hukum. Sebuah skill adalah file markdown (`SKILL.md`) yang mengatur cara AI membantu pengguna.

| Lokasi | Fungsi |
|---|---|
| `skills/<peran>/<nama-skill>/SKILL.md` | Instruksi tiap skill |
| `skills/<peran>/<nama-skill>/_hub/rubric.yaml` | Kriteria dan skenario tes skill |
| `skills/<peran>/group.yaml` | Pengaturan tiap peran |
| `website/` | Tampilan situs (HTML, CSS, JavaScript) |
| `templates/` | Bahan meta-skill dan ekstensi Claude Desktop |
| `traces/` | Hasil tes yang tersimpan |
| `hub.yaml` | Pengaturan situs |
| `eval.yaml` | Pengaturan model untuk tes |
| `_site/` | Hasil build. Tidak masuk git dan aman dihapus |

Saat ini ada 19 skill: 14 skill khusus dan 5 meta-skill.

## Build dan lihat situs

Pasang `uv` sekali saja, lalu tutup dan buka lagi Terminal:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Build situs:

```bash
cd ~/lawskills-hub
uvx --from "git+https://github.com/harvard-lil/skills-hub#subdirectory=packages/skills-hub-builder" skills-hub-builder build --repo-url https://github.com/zulfaaqilla94-del/lawskills-hub/
```

Jalankan situs, lalu buka http://localhost:8000. Tekan `Ctrl+C` untuk berhenti:

```bash
python3 -m http.server 8000 -d _site
```

Setelah mengubah `website/` atau `skills/`, build ulang lalu muat ulang halaman.

Tulisan `Built 14 skills across 5 groups` itu normal, karena angkanya belum termasuk 5 meta-skill.

## Menambah skill

1. Buat folder `skills/<peran>/<nama-skill>/`.
2. Buat `SKILL.md` dengan `name`, `description`, dan `status` di bagian atas, lalu tulis instruksinya.
3. Build ulang. Skill baru otomatis masuk katalog.

Panduan lengkapnya ada di `CONTRIBUTING.md`.

## Menyimpan pekerjaan dengan Git

- **Commit** menyimpan perubahan di komputer ini.
- **Push** mengirim commit ke GitHub. Selama belum di-push, cadangannya hanya ada di Mac ini.
- **Branch** adalah jalur kerja terpisah. Pekerjaan baru dibuat di branch, bukan langsung di `main`.
- **Merge** menggabungkan branch ke `main`.

```bash
git status
git add <file>
git commit -m "Pesan singkat"
git push -u origin <nama-branch>
```

Saat push pertama, GitHub meminta username dan password. Isi password dengan Personal Access Token dari https://github.com/settings/tokens (centang `repo`), bukan password akun. Jangan menulis token di file ini atau mengirimkannya ke chat.

## Menayangkan situs

1. Push branch ke GitHub.
2. Buat pull request, lalu merge ke `main`. Deploy hanya berjalan dari `main`.
3. Di GitHub, buka **Settings → Pages**, lalu pilih **GitHub Actions** sebagai sumbernya.

Alamat situsnya biasanya `https://zulfaaqilla94-del.github.io/lawskills-hub/`. Deploy ini belum pernah diuji di repo ini.

## Riwayat belajar

### 2026-11-01

- Membersihkan repo: hanya `tests/test_config.yaml` yang dihapus, karena sama dengan `eval.yaml`.
- Mengganti tampilan website dan membuat panduan instalasi per platform.
- Belajar build situs dan cara kerja commit, branch, serta push.
- Push pertama gagal karena Mac ini belum login ke GitHub (`could not read Username`). Solusinya memakai Personal Access Token.
