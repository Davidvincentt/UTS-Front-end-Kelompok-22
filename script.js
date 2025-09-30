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