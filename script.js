document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Do's & Don'ts Sesajen (EXISTING) ---
    const sesajenData = [
        {
            type: 'do',
            title: 'DO: Perhatikan Langkah Kaki Anda',
            description: 'Berjalanlah dengan hati-hati. Ingat bahwa sesajen (Canang) yang diletakkan di tanah memiliki makna spiritual. Hindari menginjaknya di tempat umum, terutama di persimpangan jalan atau depan toko.',
        },
        {
            type: 'dont',
            title: 'DON\'T: Menginjak Sesajen yang Utuh',
            description: 'JANGAN PERNAH sengaja menginjak sesajen yang masih lengkap. Hal ini adalah bentuk tidak hormat, karena persembahan tersebut melambangkan Dewa atau Dewata, bahkan yang kecil sekalipun.',
        },
        {
            type: 'do',
            title: 'DO: Hargai Prosesi Sembahyang',
            description: 'Jika Anda melihat seseorang sedang meletakkan atau menyalakan dupa di sesajen, berdirilah menjauh dan tunggu sampai prosesi selesai. Jangan memotong jalan di depan mereka.',
        },
        {
            type: 'dont',
            title: 'DON\'T: Menyentuh atau Memindahkan',
            description: 'Jangan menyentuh, mengambil, atau memindahkan sesajen yang sedang diletakkan. Biarkan persembahan tersebut menyelesaikan tujuannya secara spiritual.',
        },
        {
            type: 'do',
            title: 'DO: Cari Tahu Jenis Sesajen',
            description: 'Mengetahui jenis sesajen seperti Canangsari (paling sederhana, bunga warna-warni) dan Gebogan (persembahan hasil bumi tinggi) akan menambah apresiasi Anda terhadap budaya Bali.'
        },
        {
            type: 'do',
            title: 'DO: Tanyakan Jika Tidak Yakin',
            description: 'Jika ragu tentang area yang boleh dilewati atau tidak, jangan sungkan bertanya kepada penduduk lokal. Mereka umumnya senang membantu wisatawan yang menunjukkan rasa hormat.'
        }
    ];

    // --- Data Do's & Don'ts Kuil/Pura (NEW) ---
    const templeData = [
        {
            type: 'do',
            title: 'DO: Berpakaian Sopan dan Pantas',
            description: 'Kenakan pakaian yang sopan yang menutupi bahu dan lutut Anda sebagai tanda penghormatan terhadap kesucian pura (kuil). Seringkali sarung dan selendang disediakan di pintu masuk.'
        },
        {
            type: 'do',
            title: 'DO: Jaga Ketenangan dan Keheningan',
            description: 'Pertahankan sikap damai dan penuh hormat di dalam area pura. Hindari suara yang tidak perlu, tawa keras, atau perilaku yang mengganggu ketenangan spiritual.'
        },
        {
            type: 'do',
            title: 'DO: Ikuti Praktik Ritual (Jika Diizinkan)',
            description: 'Jika Anda diizinkan berpartisipasi dalam ritual atau upacara, lakukan dengan hormat dan ikuti petunjuk dari pemangku (pendeta) atau umat lokal.'
        },
        {
            type: 'do',
            title: 'DO: Selalu Periksa Barang Bawaan Anda',
            description: 'Saat mengunjungi kuil yang terdapat banyak hewan liar seperti monyet atau burung (misalnya Pura Uluwatu), selalu periksa kembali barang bawaan dan pegang erat agar tidak terlupakan atau diambil oleh hewan liar.'
        },
        {
            type: 'dont',
            title: 'DON\'T: Menyentuh Benda Suci',
            description: 'Hindari menyentuh atau mengganggu sesajen, patung, atau benda suci lainnya di dalam kompleks pura. Benda-benda ini murni untuk tujuan spiritual.'
        },
        {
            type: 'dont',
            title: 'DON\'T: Menggunakan Flash Kamera',
            description: 'Hormati kesucian pura dengan menahan diri menggunakan flash pada kamera Anda, karena dapat mengganggu persembahyangan dan merusak suasana suci.'
        },
        {
            type: 'dont',
            title: 'DON\'T: Mengganggu Upacara',
            description: 'Jangan pernah mengganggu upacara atau ritual yang sedang berlangsung. Jaga jarak yang hormat, amati dengan tenang, dan jangan mengambil foto/video kecuali diizinkan.'
        }
    ];
    
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-card');

    function showSection(targetSection) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const sectionToShow = document.getElementById(targetSection + '-section');
        if (sectionToShow) {
            sectionToShow.classList.add('active');
        }

        const activeLink = document.querySelector(`a[href="#${targetSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const targetSection = href.substring(1);
            showSection(targetSection);
        });
    });

    // Fungsi universal untuk membuat item grid
    function createGridItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item', item.type); 
        
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        
        return itemDiv;
    }

    // Memuat data Sesajen ke kontainer baru
    const sesajenGridContainer = document.querySelector('.sesajen-grid-container');
    if (sesajenGridContainer) {
        sesajenData.forEach(item => {
            const itemElement = createGridItem(item);
            sesajenGridContainer.appendChild(itemElement);
        });
    }

    // Memuat data Kuil/Pura ke kontainer baru
    const kuilGridContainer = document.querySelector('.kuil-grid-container');
    if (kuilGridContainer) {
        templeData.forEach(item => {
            const itemElement = createGridItem(item);
            kuilGridContainer.appendChild(itemElement);
        });
    }

    showSection('home');
});

const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');
const submitButton = document.getElementById('submit-button');

// Fungsi untuk memuat komentar dari localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('bali_comments')) || [];
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });
}

// Fungsi untuk membuat elemen HTML komentar
function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-item');
    commentDiv.setAttribute('data-id', comment.id);

    const formattedDate = new Date(comment.date).toLocaleString('id-ID', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    commentDiv.innerHTML = `
        <strong>${comment.name}</strong> 
        <span class="comment-date">(${formattedDate})</span>
        <p>${comment.body}</p>
        <div class="comment-actions">
            <button onclick="editComment('${comment.id}')">Edit</button>
            <button onclick="deleteComment('${comment.id}')">Hapus</button>
        </div>
    `;

    return commentDiv;
}

// Fungsi section komentar
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('comment-name').value;
    const body = document.getElementById('comment-body').value;
    const commentId = document.getElementById('comment-id').value;

    const comments = JSON.parse(localStorage.getItem('bali_comments')) || [];

    if (commentId) {
        // Update
        const index = comments.findIndex(c => c.id === commentId);
        if (index !== -1) {
            comments[index].name = name;
            comments[index].body = body;
            comments[index].date = new Date().toISOString();
        }
    } else {
        // Create
        const newComment = {
            id: Date.now().toString(),
            name: name,
            body: body,
            date: new Date().toISOString()
        };
        comments.unshift(newComment); 
    }

    localStorage.setItem('bali_comments', JSON.stringify(comments));
    commentForm.reset();
    document.getElementById('comment-id').value = '';
    submitButton.textContent = 'UPLOAD';
    loadComments();
});

// Fungsi Delete
window.deleteComment = (id) => {
    if (confirm('Apakah Anda ingin menghapus komentar ini?')) {
        let comments = JSON.parse(localStorage.getItem('bali_comments')) || [];
        comments = comments.filter(comment => comment.id !== id);
        localStorage.setItem('bali_comments', JSON.stringify(comments));
        loadComments();
    }
};

// Fungsi Edit/ Update
window.editComment = (id) => {
    const comments = JSON.parse(localStorage.getItem('bali_comments')) || [];
    const commentToEdit = comments.find(c => c.id === id);

    if (commentToEdit) {
        document.getElementById('comment-name').value = commentToEdit.name;
        document.getElementById('comment-body').value = commentToEdit.body;
        document.getElementById('comment-id').value = commentToEdit.id;
        submitButton.textContent = 'Edit Komentar';
        document.getElementById('comment-form').scrollIntoView({ behavior: 'smooth' });
    }
};

loadComments();

// FUNGSI INI SUDAH DIPERBAIKI (Toggle Kuil)
window.toggleDescription = function(element) {
    const description = element.querySelector('.kuil-description');

    // Tutup semua deskripsi kuil yang saat ini terbuka, KECUALI yang baru saja diklik
    document.querySelectorAll('.kuil-description').forEach(desc => {
        if (desc !== description) {
            desc.style.display = 'none';
            desc.parentElement.classList.remove('active');
        }
    });

    // Toggle deskripsi kuil yang sedang diklik
    if (description.style.display === 'block') {
        // Jika sudah terbuka, tutup
        description.style.display = 'none';
        element.classList.remove('active'); 
    } else {
        // Jika tertutup, buka
        description.style.display = 'block';
        element.classList.add('active'); 
    }
}