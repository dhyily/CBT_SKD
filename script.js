// --- Data Soal ---
const questions = [
    {
        question: "1. Arti Bipartride adalah?",
        options: [
            "Dualisme sumber hukum",
            "Batalnya suatu putusan pengadilan", 
            "Dilanggarnya suatu kedaulatan negara",
            "Direbutnya kekuasaan yang sah dalam suatu negara",
            "Kewarga negara ganda"
        ],
        answer: 4
    },
    {
        question: "2. Efek tarif yang menyebabkan terjadinya transfer kesejahteraan dari konsumen dalam negeri ke produsen dalam negeri disebut?",
        options: [
            "Efek Kuota",
            "Efek Retribusi",
            "Efek Redistribusi",
            "Efek Penerimaan", 
            "Efek Protektif"
        ],
        answer: 2
    },
    {
        question: "3. Menurut Hatta, tujuan politik luar negeri Indonesia adalah?",
        options: [
            "Mempertahankan kemerdekaan dan menjaga keselamatan negara",
            "Membertuk negara kesatuan Republik Indonesia",
            "Membertuk masyarakat yang adil dan makmur",
            "Mencerdaskan kehidupan bangsa",
            "Menguatkan perekonomian Indonesia dengan menjalin kerja sama luar negeri"
        ],
        answer: 0
    },
    {
        question: "4. Di bawah ini yang termasuk ke dalam PNBP adalah?",
        options: [
            "Pendapatan bea masuk",
            "Pendapatan cukai", 
            "Pendapatan bea keluar",
            "Pendapatan PPN",
            "Pendapatan jasa"
        ],
        answer: 4
    },
    {
        question: "5. Berdasarkan UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman, pengawasan dalam lembaga peradilan dilakukan oleh dua lembaga. Pengawasan secara internal dilakukan oleh?",
        options: [
            "Menteri Hukum dan HAM",
            "Mahkamah Konstitusi",
            "Komisi Yudisial", 
            "Presiden",
            "Mahkamah Agung"
        ],
        answer: 4
    },
    {
        question: "6. Berikut Undang-Undang tentang Pemerintah Daerah yang pernah berlaku di Indonesia, kecuali?",
        options: [
            "UU No. 1 Tahun 1957",
            "UU No. 5 Tahun 1975",
            "UU No. 18 Tahun 1965", 
            "UU No. 25 Tahun 1999",
            "UU No. 22 Tahun 1948"
        ],
        answer: 1
    },
    {
        question: "7. Salah satu peristiwa yang membuka kemungkinan bangsa Eropa meluaskan kolonialisme di Nusantara adalah?",
        options: [
            "Jatuhnya Malaka oleh Portugis pada tahun 1511",
            "Penaklukan Banten oleh VOC pada tahun 1602",
            "Pengambilalihan kekuasaan Belanda oleh Inggris pada tahun 1814",
            "Perang antara Mataram dan VOC pada tahun 1645", 
            "Perjanjian antara Mataram dan VOC pada tahun 1678"
        ],
        answer: 0
    },
    {
        question: "8. Indonesia resmi menjadi anggota PBB ke-60 pada 28 September 1950 dengan dukungan suara bulat dari negara anggota. Hal tersebut terjadi kurang dari setahun setelah pengakuan kedaulatan oleh Belanda melalui?",
        options: [
            "Perjanjian Roem-Royen",
            "Konferensi Meja Bundar", 
            "Perjanjian Renville",
            "Perjanjian Linggariati",
            "Konferensi Postdam"
        ],
        answer: 1
    },
    {
        question: "9. Salah satu perbedaan prinsipil antara Orde Reformasi dengan Orde Baru dan Orde Lama adalah?",
        options: [
            "DPR bersidang sekurang-kurangnya sekali dalam setahun",
            "President dipilih secara langsung oleh rakyat", 
            "President dibantu oleh badan nondepartemen",
            "President dibantu oleh menteri negara",
            "DPR dan MPR bersifat dua kamar"
        ],
        answer: 1
    },
    {
        question: "10. Gerakan yang dilatarbelakangi oleh Konferensi Asia Afrika di Bandung tahun 1955 adalah?",
        options: [
            "Gerakan Non Blok (GNB)", 
            "ASEAN",
            "MEA",
            "PBB",
            "OPEC"
        ],
        answer: 0
    },
    {
        question: "11. Gula : Manis = Garam : __",
        options: [
            "Tawar",
            "Asin", 
            "Pedas",
            "Masam", 
            "Madu"
        ],
        answer: 1
    },
    {
        question: "12. Mata : Melihat = Telinga : __",
        options: [
            "Menyentuh",
            "Mendengar", 
            "Mengucapkan",
            "Mengendus",
            "Merasa"
        ],
        answer: 1
    },
    {
        question: "13. Daur =",
        options: [
            "Berlangsung",
            "Berulang", 
            "Terbaur",
            "Mengulang",
            "Langsungan"
        ],
        answer: 1
    },
    {
        question: "14. 765, 531, 297, ..., -171, -450, ...",
        options: [
            "86, -734",
            "72, -345", 
            "67, -132",
            "63, -639",
            "36, -63"
        ],
        answer: 3
    },
    {
        question: "15. 2, 6, 12, 20, 30, ...",
        options: [
            "36",
            "40",
            "42", 
            "44",
            "46"
        ],
        answer: 2
    },
    {
        question: "16. Jika 5 pekerja dapat menyelesaikan 1 proyek dalam 12 hari, maka berapa hari dibutuhkan oleh 8 pekerja (dengan efisiensi sama)?",
        options: [
            "9 hari",
            "7,5 hari", 
            "8 hari",
            "10 hari", 
            "6 hari"
        ],
        answer: 1
    },
    {
        question: "17. Harga sebuah barang setelah diskon 20% adalah Rp160.000,00. Berapa harga semua barang tersebut?",
        options: [
            "Rp180.000,00",
            "Rp190.000,00", 
            "Rp200.000,00",
            "Rp210.000,00",
            "Rp220.000,00"
        ],
        answer: 2
    },
    {
        question: "18. XLIII + XLI = …",
        options: [
            "LXXXIV", 
            "LXXVI",
            "XXCIV",
            "XCIV",
            "LXXXVII"
        ],
        answer: 0
    },
    {
        question: "19. Lanjutkan barisan bilangan berikut: 71586, 59241, 46896, …, …",
        options: [
            "24551, 12206",
            "34551, 22206", 
            "36781, 33856",
            "37521, 24306",
            "40731, 36746"
        ],
        answer: 1
    },
    {
        question: "20. Huruf : Kata = …",
        options: [
            "Klub : Orang",
            "Halaman : Buku", 
            "Gambar : Krayon",
            "Pekerjaan rumah : Sekolah", 
            "Barang : Pabrik"
        ],
        answer: 1
    },
    {
        question: "21. Jika orang tua tidak mendukung pekerjaan Anda, bagaimana sebaiknya Anda bersikap?",
        options: [
            "Bertanya kepada mereka mengapa mereka kurang menyukai pekerjaan tersebut",
            "Menjelaskan bahwa Anda merasa senang dengan pekerjaan yang Anda pilih",
            "Berhenti bekerja dan mencari pekerjaan lain",
            "Tetap melanjutkan pekerjaan sambil memberikan penjelasan kepada mereka", 
            "Menninta mereka menilai pekerjaan Anda sebelum membuat kesimpulan"
        ],
        answer: 3
    },
    {
        question: "22. Ketika sedang berbelanja, Anda menyaksikan kasir berbuat curang kepada pembeli lanjut usia. Bagaimana tindakan Anda?",
        options: [
            "Mengabaikannya",
            "Menegur kasir tersebut agar berhenti", 
            "Memberi tahu pembeli bahwa ia dicurangi",
            "Melaporkan kejadian tersebut kepada atasan",
            "Memilih diam"
        ],
        answer: 1
    },
    {
        question: "23. Anda memiliki rekan kerja magang yang tidak sopan kepada rekan lainnya. Bagaimana Anda menanggapinya?",
        options: [
            "Membalas sikapnya dengan tidak ramah",
            "Mengingatkannya agar lebih sopan", 
            "Tidak mempedulikan sikapnya",
            "Melaporkan perilakunya kepada atasan",
            "Pasrah dan diam saja"
        ],
        answer: 1
    },
    {
        question: "24. Menurut Anda, ASN yang kreatif adalah seseorang yang...",
        options: [
            "Bersikap tidak biasa",
            "Bekerja dengan cepat dan efektif", 
            "Menikmati pekerjaannya sepenuh hati",
            "Selalu ramah dan mudah bergaul", 
            "Bekerja setengah-setengah"
        ],
        answer: 1
    },
    {
        question: "25. Sahabat Anda mengalami kecelakaan dan anaknya masuk rumah sakit. Bagaimana reaksi Anda?",
        options: [
            "Yakin dokter sudah menanganinya dengan baik",
            "Menjenguk hanya jika tidak sibuk",
            "Segera menjenguk tanga menunda",
            "Menanyakan kondisi levat telepon", 
            "Mendoakan kesembuhan anaknya"
        ],
        answer: 3
    },
    {
        question: "26. Rekan kerja yang rumahnya searah meminta ikut menumpang di mobil Anda. Apa yang Anda lakukan?",
        options: [
            "Memberinya tumpangan", 
            "Memberi tumpangan dengan syarat membayar parkir",
            "Menolak karena harus menjemput istri",
            "Memberikan uang agar ia naik taksi",
            "Pulang diam-diam"
        ],
        answer: 0
    },
    {
        question: "27. Bagaimana cara Anda berkomunikasi dengan orang lain?",
        options: [
            "Menggunakan argumentasi",
            "Memberikan himbauan",
            "Mengajukan pertanyaan", 
            "Mengadakan diskusi",
            "Memberikan perintah"
        ],
        answer: 2
    },
    {
        question: "28. Rekan kerja mengajak Anda berbuat curang demi keuntungan proyek. Bagaimana sikap Anda?",
        options: [
            "Menolaknya dengan tegas",
            "Menjelaskan alasan tidak boleh curang", 
            "Mengikuti satu kali saja",
            "Takur tapi tetap ikut",
            "Mempertimbangkan risiko"
        ],
        answer: 1
    },
    {
        question: "29. Ketika rekan kerja sering membicarakan orang lain, apa yang Anda lakukan?",
        options: [
            "Diam dan mendengarkan",
            "Ikut serta dalam obrolan",
            "Menyuruhnya fokus bekerja",
            "Meminta dia berhenti membicarakan orang lain", 
            "Tidak menghiraukannya"
        ],
        answer: 3
    },
    {
        question: "30. Daerah tempat tinggal Anda terkena banjir bandang. Bagaimana Anda merespons situasi tersebut?",
        options: [
            "Menyumbangkan seluruh gaji bulan ini",
            "Menyumbangkan sebagian gaji",
            "Mengajak orang lain ikut menyumbang sesuai kemampuan", 
            "Melaporkan ke atasan agar bantuan disalurkan",
            "Mempercayakan kepada pemerintah"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
let timerInterval;
let timeRemaining = 90 * 60; // 90 menit

// --- Fitur Enter untuk Login ---
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan event listener untuk input password
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });
    }
    
    // Juga untuk input username
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('password').focus();
            }
        });
    }
});

// --- Login ---
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username) return alert("Masukkan nama anda!");
    if (password !== "ctarsaskh") return alert("Password salah!");

    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("guide-page").classList.remove("hidden");
}

// --- Mulai Ujian ---
function startExam() {
    document.getElementById("guide-page").classList.add("hidden");
    document.getElementById("exam-page").classList.remove("hidden");
    renderQuestion();
    renderNavigation();
    startTimer();
}

// --- Render Soal ---
function renderQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option" + (userAnswers[currentQuestion] === i ? " selected" : "");
        div.innerText = opt;
        div.onclick = () => selectOption(i);
        optionsContainer.appendChild(div);
    });

    document.getElementById("back-btn").style.display = currentQuestion === 0 ? "none" : "inline-block";
    document.getElementById("next-btn").classList.toggle("hidden", currentQuestion === questions.length - 1);
    document.getElementById("submit-btn").classList.toggle("hidden", currentQuestion !== questions.length - 1);
}

// --- Pilih Jawaban ---
function selectOption(i) {
    userAnswers[currentQuestion] = i;
    renderQuestion();
    renderNavigation();
}

// --- Navigasi Soal ---
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    }
}
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// --- Navigasi Nomor Soal ---
function renderNavigation() {
    const nav = document.getElementById("question-nav");
    nav.innerHTML = "";
    questions.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.className = "nav-btn";
        btn.innerText = i + 1;
        
        // Tambah class berdasarkan status
        if (userAnswers[i] !== null) {
            btn.classList.add("answered");
        }
        if (i === currentQuestion) {
            btn.classList.add("current");
        }
        
        btn.onclick = () => {
            currentQuestion = i;
            renderQuestion();
        };
        nav.appendChild(btn);
    });
}

// --- Timer ---
function startTimer() {
    const timerDisplay = document.getElementById("timer");
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
        timeRemaining--;
    }, 1000);
}

// --- Submit ---
function submitExam() {
    clearInterval(timerInterval);
    document.getElementById("exam-page").classList.add("hidden");
    document.getElementById("result-page").classList.remove("hidden");

    let correct = 0;
    let empty = 0;
    
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            correct++;
        }
        if (userAnswers[i] === null) {
            empty++;
        }
    });

    const wrong = questions.length - correct - empty;
    
    // Hitung skor dengan sistem 18 poin per soal benar, maksimal 550
    const rawScore = correct * 18;
    const finalScore = Math.min(rawScore, 550);
    
    // Hitung persentase untuk progress circle
    const percentage = (finalScore / 550) * 100;
    const circumference = 2 * Math.PI * 90;
    const strokeDasharray = `${(circumference * percentage) / 100} ${circumference}`;

    // Tampilkan hasil dengan progress circle
    document.getElementById("score").innerHTML = `
        <div class="progress-circle">
            <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#64ffda" />
                        <stop offset="100%" stop-color="#8892b0" />
                    </linearGradient>
                </defs>
                <circle class="progress-circle-bg" cx="100" cy="100" r="90"></circle>
                <circle class="progress-circle-fill progress-animate" cx="100" cy="100" r="90" 
                        stroke-dasharray="${strokeDasharray}"></circle>
            </svg>
            <div class="progress-circle-text">
                <span class="progress-score score-pop">${finalScore}</span>
                <span class="progress-max">/ 550</span>
            </div>
        </div>
        
        <div class="result-stats">
            <div class="stat-item stat-correct">
                <span class="stat-number">${correct}</span>
                <span class="stat-label">Jawaban Benar</span>
            </div>
            <div class="stat-item stat-wrong">
                <span class="stat-number">${wrong}</span>
                <span class="stat-label">Jawaban Salah</span>
            </div>
            <div class="stat-item stat-empty">
                <span class="stat-number">${empty}</span>
                <span class="stat-label">Tidak Dijawab</span>
            </div>
        </div>
        
        <div class="result-actions">
            <button onclick="logout()">Selesai</button>
        </div>
    `;

    // Hapus bagian pembahasan
    const expDiv = document.getElementById("explanations");
    expDiv.innerHTML = "";
}

// --- Logout ---
function logout() {
    location.reload();
}