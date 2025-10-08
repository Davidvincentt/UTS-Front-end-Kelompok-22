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
            description: 'Mengetahui jenis sesajen seperti Canangsari (paling sederhana, bunga warna-warni) dan Gebogan (persembahan hasil bumi tinggi) akan menambah apresiasi Anda terhadap budaya Bali.'
        },
        {
            type: 'do',
            title: 'DO: Tanyakan Jika Tidak Yakin',
            description: 'Jika ragu tentang area yang boleh dilewati atau tidak, jangan sungkan bertanya kepada penduduk lokal. Mereka umumnya senang membantu wisatawan yang menunjukkan rasa hormat.'
        }
    ];

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
    
    const kuilData = [
        {
            name: 'Pura Besakih',
            rating: 5.0,
            age: 700,
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Bali%2C_Pura_Besakih_6.jpg',
            description: 'Pura Besakih, yang dikenal sebagai Pura Agung atau "Mother Temple", adalah kompleks pura terbesar dan tersuci di Bali. Pura ini terletak megah di lereng barat daya Gunung Agung, gunung tertinggi dan paling sakral di pulau ini. Sejarah pembangunan Besakih diperkirakan dimulai pada abad ke-8 Masehi, menjadikannya salah satu situs keagamaan tertua. Kompleks ini terdiri dari 23 pura terpisah yang saling berkaitan, dengan Pura Penataran Agung sebagai fokus utama yang didedikasikan untuk Dewa Trimurti (Siwa, Wisnu, Brahma). Perannya sangat sentral, berfungsi sebagai pusat kegiatan keagamaan Hindu Dharma Bali secara keseluruhan. Walaupun pernah rusak akibat gempa bumi dan hampir dihantam letusan Gunung Agung pada tahun 1963, struktur puranya berhasil diselamatkan dan direstori. Arsitekturnya yang berjenjang melambangkan alam semesta dan kosmos Bali. Hingga kini, Besakih menjadi tempat pelaksanaan upacara besar seperti Eka Dasa Rudra dan Tri Bhuwana. ',
        },
        {
            name: 'Pura Tanah Lot',
            rating: 4.4,
            age: 1600,
            image: 'https://kulkulbali.co/public/uploads/posts/skiCxFEFA98Vja1WH5a926XigVkqWW-metaVGFuYWgtTG90LUJhbGkuanBn-.jpg',
            description: 'Pura Tanah Lot adalah pura laut ikonik yang terletak di atas batu karang besar di tengah perairan laut Tabanan. Pura ini didirikan pada abad ke-16 Masehi oleh seorang pendeta pengembara dari Jawa bernama Dang Hyang Nirartha. Beliau memilih lokasi ini karena merasa tempat tersebut sangat suci dan sempurna untuk meditasi dan penyebaran ajaran Hindu Dharma. Pura Tanah Lot didedikasikan untuk pemujaan Dewa Laut dan merupakan bagian dari *Kayangan Jagat*, enam pura penting yang menjaga pulau Bali dari roh-roh jahat. Keunikan paling mencolok dari pura ini adalah lokasinya yang hanya dapat diakses melalui jembatan darat saat air laut sedang surut. Menurut legenda, ular laut suci yang berbisa menjaga pura dari gangguan atau serangan dari luar. Pura ini adalah salah satu destinasi paling terkenal di Bali, khususnya saat matahari terbenam (sunset) yang spektakuler. ',
        },
        {
            name: 'Pura Uluwatu',
            rating: 4.6,
            age: 1100,
            image: 'https://nativeindonesia.com/foto/2018/08/pura-uluwatu-bali.jpg',
            description: 'Pura Uluwatu adalah pura tebing yang luar biasa, bertengger di puncak tebing karang setinggi sekitar 70 meter di atas permukaan Samudra Hindia. Pura ini terletak di ujung semenanjung Bukit Badung, Bali Selatan, menawarkan pemandangan laut yang dramatis. Meskipun ada dugaan pura kecil sudah ada sejak abad ke-10, pembangunan dan perbaikan besar dikaitkan dengan dua tokoh suci. Pendeta Empu Kuturan pada abad ke-11 dianggap berjasa dalam pembentukan pura ini, diikuti oleh Dang Hyang Nirartha pada abad ke-16. Nirartha diyakini mencapai *moksa* (penyatuan dengan Tuhan) di tempat ini. Nama \'Uluwatu\' sendiri berasal dari kata "Ulu" yang berarti ujung atau kepala, dan "Watu" yang berarti batu atau karang, menggambarkan lokasinya secara haris. Pura ini juga merupakan bagian dari *Kayangan Jagat* yang berfungsi sebagai penyeimbang spiritual. Selain keindahan alamnya, Pura Uluwatu terkenal sebagai tempat pementasan Tari Kecak yang dilakukan saat matahari terbenam. ',
        },
        {
            name: 'Pura Ulun Danu Bratan',
            rating: 4.6,
            age: 1633,
            image: 'https://mediaim.expedia.com/destination/1/4ee1e2328ed998f9e0bbc32b69946e53.jpg',
            description: 'Pura Ulun Danu Bratan, atau sering disebut sebagai "pura terapung," terletak indah di tepi Danau Bratan, kawasan Bedugul, Bali tengah. Pura ini didirikan pada tahun 1633 Masehi oleh Raja Mengwi, I Gusti Agung Putu. Pembangunan pura ini bertujuan untuk memuja Dewi Danu, dewi air, danau, dan sungai, yang dianggap sebagai sumber utama kesuburan dan irigasi di Bali. Keberadaan danau ini sangat penting bagi sistem irigasi Subak yang merupakan warisan dunia UNESCO. Lokasi pura yang berada di atas air dan sering diselimuti kabut pagi menjadikannya salah satu ikon paling populer. Pura ini memiliki empat kompleks bangunan utama yang masing-masing memiliki fungsi pemujaan yang berbeda. Arsitektur pura ini memadukan unsur Bali dan Hindu, dengan ciri khas berupa meru (atap bertingkat) yang menakjubkan. Suhu sejuk di kawasan Bedugul menambah suasana tenang dan spiritual di sekitar kompleks pura ini. ',
        },
        {
            name: 'Pura Tirta Empul',
            rating: 4.7,
            age: 962,
            image: 'https://torch.id/cdn/shop/articles/Artikel_160_-_Preview.webp?v=1710761089&width=1100',
            description: 'Pura Tirta Empul, yang berarti "Kuil Air Suci", adalah pura mata air yang terkenal di dekat Tampaksiring, Gianyar. Pura ini didirikan sekitar 962 Masehi pada masa kejayaan Dinasti Warmadewa, dengan Raja Sri Candrabhaya Singha Warmadewa sebagai tokoh penting. Situs ini terkenal karena kolam permandian sucinya (*petirtaan*) yang dialiri oleh mata air alami yang dianggap memiliki kekuatan penyucian. Menurut legenda Hindu Bali, mata air ini diciptakan oleh Dewa Indra untuk menyembuhkan pasukannya dari racun yang disebarkan oleh Raja Mayadenawa, yang tidak percaya pada Tuhan. Struktur pura terbagi menjadi tiga halaman: Jaba Pura (halaman luar), Jaba Tengah (halaman tengah dengan kolam suci), dan Jeroan (halaman dalam untuk sembahyang). Hingga hari ini, umat Hindu dari seluruh dunia datang untuk melakukan ritual melukat (pembersihan diri) di kolam suci yang mengalir dari pancuran-pancuran air. Keaslian sejarah dan nilai spiritualnya menjadikan Tirta Empul situs yang sangat dihormati. ',
        },
        {
            name: 'Pura Goa Gajah',
            rating: 4.2,
            age: 900,
            image: 'https://www.baligoldentour.com/images/bali-interest-place/goa-gajah-temple-bali-golden-tour.jpg',
            description: 'Pura Goa Gajah, atau "Gua Gajah", adalah situs arkeologi dan pura yang terletak di desa Bedulu, dekat Ubud. Pura ini diperkirakan dibangun pada abad ke-9 Masehi, menjadikannya salah satu situs keagamaan tertua yang mendahului era Majapahit di Bali. Situs ini sangat unik karena memadukan elemen arsitektur Hindu Siwa dan Buddha, yang mencerminkan masa toleransi beragama di Bali kuno. Daya tarik utamanya adalah gua buatan yang pintu masuknya diukir menyerupai wajah raksasa Boma atau Kala. Mulut gua ini dipercaya sebagai jalan masuk menuju tempat meditasi dan pemujaan. Di dalam kompleks pura juga ditemukan kolam permandian suci dengan patung-patung bidadari yang memegang wadah air, yang baru ditemukan pada tahun 1954. Pura Goa Gajah dulunya berfungsi sebagai tempat meditasi bagi para biksu Buddha dan pendeta Hindu. Situs ini diyakini oleh masyarakat lokal memiliki energi spiritual yang kuat dan sering dikunjungi untuk memohon keselamatan. ',
        },
        {
            name: 'Pura Lempuyang',
            rating: 5.0,
            age: 700,
            image: 'https://www.rentalmobilbali.net/wp-content/uploads/2023/04/Pura-Lempuyang-Feature-Image.jpg',
            description: 'Pura Lempuyang Luhur adalah salah satu dari sembilan *Sad Kahyangan Jagat* (sembilan pura penyeimbang Bali) yang terletak di puncak Gunung Lempuyang di Karangasem. Pura ini merupakan salah satu pura tertua di Bali, dengan sejarah yang konon berawal sejak abad ke-8 Masehi, bahkan sebelum berdirinya Pura Besakih. Kompleks pura ini dibagi menjadi tujuh tingkatan yang tersebar di sepanjang lereng gunung, dengan Pura Lempuyang Luhur yang paling suci berada di puncaknya. Untuk mencapai pura teratas, pengunjung harus menaiki ribuan anak tangga, yang melambangkan perjalanan spiritual menuju kesucian. Bagian yang paling terkenal adalah Pura Penataran Agung Lempuyang, yang gerbangnya, yang dikenal sebagai "Gates of Heaven", menawarkan pemandangan Gunung Agung yang menakjubkan. Pura ini didedikasikan untuk pemujaan Dewa Iswara, salah satu manifestasi Tuhan dalam konsep Hindu Dharma. Nilai spiritual dan sejarahnya menjadikannya tempat ziarah yang sangat penting. ',
        },
        {
            name: 'Pura Taman Ayun',
            rating: 4.9,
            age: 1634,
            image: 'https://www.rentalmobilbali.net/wp-content/uploads/2021/11/Pura-Taman-Ayun-Mengwi-Bali-Twitter.jpg',
            description: 'Pura Taman Ayun, yang secara harfiah berarti "Taman yang Indah" atau "Taman Air", adalah pura kerajaan yang terletak di Mengwi, Kabupaten Badung. Pura ini dibangun pada tahun 1634 Masehi oleh Raja Mengwi, I Gusti Agung Putu, dan merupakan pura keluarga kerajaan Mengwi (*Pura Kawitan*). Ciri khas utamanya adalah arsitektur yang dikelilingi oleh kolam besar yang berfungsi seperti parit, menciptakan kesan pura yang mengapung di atas air. Pura ini memiliki tiga halaman yang melambangkan tingkatan kosmos Hindu. Pura Taman Ayun berfungsi sebagai tempat pemujaan roh-roh leluhur kerajaan Mengwi. Pada tahun 2012, Pura Taman Ayun ditetapkan oleh UNESCO sebagai bagian dari situs warisan budaya dunia (Subak), karena perannya yang terkait erat dengan sistem irigasi pertanian di Bali. Keindahan taman, kolam, dan struktur *meru* bertingkatnya menjadikannya salah satu contoh terbaik dari arsitektur pura kerajaan Bali. ',
        }
    ];

    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-card');
    const kuilGridContainer = document.querySelector('.kuil-grid');
    const kuilFilter = document.getElementById('kuil-filter');

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

    function createGridItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item', item.type); 
        
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        
        return itemDiv;
    }

    const sesajenGridContainer = document.querySelector('.sesajen-grid-container');
    if (sesajenGridContainer) {
        sesajenData.forEach(item => {
            const itemElement = createGridItem(item);
            sesajenGridContainer.appendChild(itemElement);
        });
    }

    const kuilEtikaGridContainer = document.querySelector('.kuil-grid-container');
    if (kuilEtikaGridContainer) {
        templeData.forEach(item => {
            const itemElement = createGridItem(item);
            kuilEtikaGridContainer.appendChild(itemElement);
        });
    }

    function renderKuil(data) {
        if (!kuilGridContainer) return;

        kuilGridContainer.innerHTML = '';
        data.forEach(kuil => {
            const kuilItem = document.createElement('div');
            kuilItem.classList.add('kuil-item');
            kuilItem.setAttribute('onclick', 'toggleDescription(this)');
            
            let ageLabel;
            if (kuil.age <= 1000) {
                ageLabel = `Abad ke-${Math.floor(kuil.age / 100) + 1} M`; 
            } else {
                ageLabel = `${kuil.age} M`;
            }

            kuilItem.innerHTML = `
                <h4>${kuil.name} 
                    <span style="float: right; font-size: 1rem; color: #ffb74d;">
                        <span style="font-size: 1.5rem;">&#9733;</span> ${kuil.rating.toFixed(1)} 
                    </span>
                </h4>
                <p style="font-size: 0.9rem; margin-top: -10px; margin-bottom: 5px; color: #777;">
                   Didirikan: ${ageLabel}
                </p>
                <img src="${kuil.image}" alt="Foto ${kuil.name}">
                <div class="kuil-description">
                    <p>${kuil.description}</p>
                </div>
            `;
            kuilGridContainer.appendChild(kuilItem);
        });
    }
    
    function sortKuil(criteria) {
        const sortedData = [...kuilData];

        switch (criteria) {
            case 'rating-desc':
                sortedData.sort((a, b) => b.rating - a.rating);
                break;
            case 'rating-asc':
                sortedData.sort((a, b) => a.rating - b.rating);
                break;
            case 'name-asc':
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sortedData.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'age-desc':
                sortedData.sort((a, b) => a.age - b.age);
                break;
            case 'age-asc':
                sortedData.sort((a, b) => b.age - a.age);
                break;
            default:
                sortedData.sort((a, b) => b.rating - a.rating);
                break;
        }

        renderKuil(sortedData);
    }

    if (kuilFilter) {
        kuilFilter.addEventListener('change', (e) => {
            sortKuil(e.target.value);
        });
    }
    
    sortKuil('rating-desc');
    
    showSection('home');
});

const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');
const submitButton = document.getElementById('submit-button');

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('bali_comments')) || [];
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });
}

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

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('comment-name').value;
    const body = document.getElementById('comment-body').value;
    const commentId = document.getElementById('comment-id').value;

    const comments = JSON.parse(localStorage.getItem('bali_comments')) || [];

    if (commentId) {
        const index = comments.findIndex(c => c.id === commentId);
        if (index !== -1) {
            comments[index].name = name;
            comments[index].body = body;
            comments[index].date = new Date().toISOString();
        }
    } else {
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

window.deleteComment = (id) => {
    if (confirm('Apakah Anda ingin menghapus komentar ini?')) {
        let comments = JSON.parse(localStorage.getItem('bali_comments')) || [];
        comments = comments.filter(comment => comment.id !== id);
        localStorage.setItem('bali_comments', JSON.stringify(comments));
        loadComments();
    }
};

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

    document.querySelectorAll('.kuil-description').forEach(desc => {
        if (desc !== description) {
            desc.style.display = 'none';
            desc.parentElement.classList.remove('active');
        }
    });

    if (description.style.display === 'block') {
        description.style.display = 'none';
        element.classList.remove('active'); 
    } else {
        description.style.display = 'block';
        element.classList.add('active'); 
    }
}


const monyets = document.querySelectorAll('.monyet');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const startButton = document.getElementById('start-button');
const gameMessage = document.getElementById('game-message');
const REGULAR_MONKEY_SRC = 'image/monyet.png';
const SPECIAL_MONKEY_SRC = 'image/special_monyet.png';

let lastHole;
let timeUp = false;
let score = 0;
let gameTimerId;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomMonyet(monyets) {
    const idx = Math.floor(Math.random() * monyets.length);
    const monyet = monyets[idx];
    if (monyet === lastHole) {
        return randomMonyet(monyets); 
    }
    lastHole = monyet;
    return monyet;
}

function popMonyet() {
    if (timeUp) return;

    const time = randomTime(500, 1500);
    const monyet = randomMonyet(monyets);
    
    const isSpecial = (Math.floor(Math.random() * 10) + 1) === 1; 

    if (isSpecial) {
        monyet.src = SPECIAL_MONKEY_SRC;
        monyet.classList.add('special-monyet');
    } else {
        monyet.src = REGULAR_MONKEY_SRC;
        monyet.classList.remove('special-monyet');
    }
    
    monyet.classList.add('monyet-up');
    setTimeout(() => {
        monyet.classList.remove('monyet-up');
        monyet.src = REGULAR_MONKEY_SRC;
        monyet.classList.remove('special-monyet');
        
        popMonyet();
    }, time);
}

function startGame() {
    score = 0;
    timeLeftDisplay.textContent = 15;
    scoreDisplay.textContent = score;
    timeUp = false;
    startButton.disabled = true;
    gameMessage.textContent = 'Game Sedang Berlangsung...';

    let timeLeft = 15;
    gameTimerId = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameTimerId);
            timeUp = true;
            startButton.disabled = false;
            gameMessage.textContent = `Waktu Habis! Skor Akhir Anda: ${score}`;
        }
    }, 1000);

    popMonyet(); 
}

function whack(e) {
    if (!e.isTrusted) return; 
    
    if (this.classList.contains('monyet-up')) {
        let points = 1;
        if (this.classList.contains('special-monyet')) {
            points = 5; 
            gameMessage.textContent = '🎉 BONUS! +5 Poin!';
            setTimeout(() => gameMessage.textContent = 'Game Sedang Berlangsung...', 500);
        }

        score += points;
        scoreDisplay.textContent = score;
        this.classList.remove('monyet-up');
        
        this.src = REGULAR_MONKEY_SRC;
        this.classList.remove('special-monyet');
    }
}

monyets.forEach(monyet => monyet.addEventListener('click', whack));

if (startButton) {
    startButton.addEventListener('click', startGame);
}