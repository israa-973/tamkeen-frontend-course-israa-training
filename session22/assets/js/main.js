
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
if (cardsFeatures) {
    cardsData.forEach(function (item) {
        cardsFeatures.innerHTML +=
            '<div class="col-12 col-lg-3">' + '<div class="card text-center">' + '<div class="content-card border-rounded">' + '<i class="' + item.icon + '">' + '</i>' + '<h5 class="mt-4">' + item.title + '</h5>' + '<p class="mt-3 mb-4">' + item.desc + '</p>' + '</div>' + '</div>' + '</div>'
    });
};

// *******************
// cardsWhyChooseUs "array of objects"
let cardsProjects = [
    {
        title: "1. Verified & Transparent Listings",
        desc: "We understand how frustrating it can be to browse through misleading property ads. That’s why every property on our platform is thoroughly verified before being published.Our dedicated verification team conducts on-site inspections, document checks, and authenticity reviews to ensure every listing is 100% genuine.",
    },
    {
        title: "2. Expert Real Estate Consultants",
        desc: "Behind every successful deal is a professional who truly understands your needs.Our team of experienced agents, property analysts, and consultants are trained to guide you through every step — from understanding the market to signing the final papers.",
    },
    {
        title: "3. Smart Search Technology",
        desc: "Finding the perfect home shouldn’t be complicated. That’s why we built our platform with smart search and AI-powered filtering tools that let you find what you need in seconds.You can filter by budget, location, property type, amenities, and lifestyle preferences, and our system instantly shows you the most relevant options.",
    },
    {
        title: "4. Professional Marketing & Media",
        desc: "Our marketing team ensures your property reaches the right audience through digital advertising, social media promotion, and featured listings on our homepage. We know how to turn views into visits, and visits into sales.",
    },
];

let cardsWhyChooseUs = document.getElementById("cardsWhyChooseUs");
if (cardsProjects) {
    cardsProjects.forEach(project => {
        cardsWhyChooseUs.innerHTML += `
    <div class="card-why-choose-us p-4 mx-5 my-4">
<h5 class="title-choose">${project.title}</h5>
<p class="desc-choose">${project.desc}</p>
    </div>
    `;
    });
};




























