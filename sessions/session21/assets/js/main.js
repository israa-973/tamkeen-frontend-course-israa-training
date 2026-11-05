
// dark mode
const toggle = document.getElementById('darkModeToggleNav');
const body = document.querySelector('body');


const saved = localStorage.getItem('theme') || 'light';
body.setAttribute('data-bs-theme', saved);

toggle.checked = saved === 'dark';

toggle.addEventListener('change', function () {
    const theme = toggle.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
});





// swipper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// *******************
// cards-features "array of objects"
let cardsData = [
    {
        icon: "fa-solid fa-house",
        title: "Wide Selection",
        desc: "Browse through thousands of <br> verified properties",
    },
    {
        icon: "fa-solid fa-building",
        title: "Trusted Agents",
        desc: "Work with certified real estate <br> professionals",
    },
    {
        icon: "fa-solid fa-key",
        title: "Easy Process",
        desc: "Simplified buying and renting <br> experience",
    },
    {
        icon: "fa-solid fa-arrow-trend-up",
        title: "Best Prices",
        desc: "Competitive pricing and great <br> deals",
    },
];
let cardsFeatures = document.getElementById("cardsFeatures");
cardsData.forEach(function (item) {
    cardsFeatures.innerHTML +=
        '<div class="col-12 col-lg-3">' + '<div class="card text-center">' + '<div class="content-card border-rounded">' + '<i class="' + item.icon + '">' + '</i>' + '<h5 class="mt-4">' + item.title + '</h5>' + '<p class="mt-3 mb-4">' + item.desc + '</p>' + '</div>' + '</div>' + '</div>'
});


























