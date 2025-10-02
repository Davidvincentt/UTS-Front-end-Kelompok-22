document.addEventListener('DOMContentLoaded', () => {
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
            description: 'Mengetahui jenis sesajen seperti **Canangsari** (paling sederhana, bunga warna-warni) dan **Gebogan** (persembahan hasil bumi tinggi) akan menambah apresiasi Anda terhadap budaya Bali.'
        },
        {
            type: 'do',
            title: 'DO: Tanyakan Jika Tidak Yakin',
            description: 'Jika ragu tentang area yang boleh dilewati atau tidak, jangan sungkan bertanya kepada penduduk lokal. Mereka umumnya senang membantu wisatawan yang menunjukkan rasa hormat.'
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

    function createSesajenItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item', item.type); 
        
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        
        return itemDiv;
    }

    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
        sesajenData.forEach(item => {
            const itemElement = createSesajenItem(item);
            gridContainer.appendChild(itemElement);
        });
    }

    showSection('home');
});

// Tambahkan kode ini ke bagian bawah file script.js Anda
// (di dalam document.addEventListener('DOMContentLoaded', ... ))

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

window.toggleDescription = function(element) {
    const description = element.querySelector('.kuil-description');

    if (description.style.display === 'block') {
        description.style.display = 'none';
        element.classList.remove('active'); 
    } else {
        document.querySelectorAll('.kuil-description').forEach(desc => {
            desc.style.display = 'none';
            desc.parentElement.classList.remove('active');
        });
        description.style.display = 'block';
        element.classList.add('active'); 
    }
}