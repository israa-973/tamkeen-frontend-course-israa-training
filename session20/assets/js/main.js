
// dark mode
const toggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');
const toggleLabel = document.getElementById('toggleLabel');


const saved = localStorage.getItem('theme') || 'light';
body.setAttribute('data-bs-theme', saved);

if (saved === 'dark') {
    toggle.checked = true;
} else {
    toggle.checked = false;
}

toggle.addEventListener('change', function () {
    const theme = toggle.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
});



// *******************
// cards-Our Rooms "array of objects"
let cardsData = [
    {
        src: "assets/images/Image1.png",
        desc: "Junior Suite",
        price: "$150.00 / per night",
    },
    {
        src: "assets/images/Image2.png",
        desc: "Executive Suite",
        price: "$250.00 / per night",
    },
    {
        src: "assets/images/Image3.png",
        desc: "Super Deluxe",
        price: "$350.00 / per night",
    },
];
let cardsOurRooms = document.getElementById("cardsOurRooms");
cardsData.forEach(function (item) {
    cardsOurRooms.innerHTML +=
        '<div class="col-lg-4 col-12 text-center">' + '<div class="content-card border border-1 overflow-hidden">' + '<img class="w-100" src="' + item.src + '">' + '<h5 class="mt-4 text-uppercase">' + item.desc + '</h5>' + '<p class="text-muted mt-3 mb-4">' + item.price + '</p>' + '</div>' + '</div>'
});


// *********************
// Swiper Testimonial
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});


// **********************
// window.scrollY
window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

