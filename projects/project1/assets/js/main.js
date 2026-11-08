
// dark mode
const toggle = document.getElementById('darkModeToggleNav');
const body = document.body;

const saved = localStorage.getItem('theme') || 'light';
body.dataset.bsTheme = saved;

toggle.checked = saved === 'dark';

toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
});


// Benefits "array of objects"
const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
let cardsData = [
    {
        number: {
            en: "01",
            ar: "01",
        },
        title: {
            en: "Flexible Learning Schedule",
            ar: "جدول تعليمي مرن",
        },
        desc: {
            en: "Fit your coursework around your existing commitments and obligations.",
            ar: "قم بتوفيق واجباتك الدراسية مع التزاماتك وواجباتك الحالية.",
        },
    },
    {
        number: {
            en: "02",
            ar: "02",
        },
        title: {
            en: "Expert Instruction",
            ar: "تعليم على أيدي خبراء",
        },
        desc: {
            en: "Learn from industry experts who have hands-on experience in design and development.",
            ar: "تعلم من خبراء الصناعة الذين يمتلكون خبرة عملية في التصميم والتطوير.",
        },
    },
    {
        number: {
            en: "03",
            ar: "03",
        },
        title: {
            en: "Diverse Course Offerings",
            ar: "عروض دورات متنوعة",
        },
        desc: {
            en: "Explore a wide range of design and development courses covering various topics.",
            ar: "استكشف مجموعة واسعة من دورات التصميم والتطوير التي تغطي مواضيع مختلفة.",
        },
    },
    {
        number: {
            en: "04",
            ar: "04",
        },
        title: {
            en: "Updated Curriculum",
            ar: "منهج دراسي محدث",
        },
        desc: {
            en: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
            ar: "الوصول إلى دورات بمحتوى محدث يعكس أحدث الاتجاهات والممارسات في الصناعة.",
        },
    },
    {
        number: {
            en: "05",
            ar: "05",
        },
        title: {
            en: "Practical Projects and Assignments",
            ar: "مشاريع وتكليفات عملية",
        },
        desc: {
            en: "Develop a portfolio showcasing your skills and abilities to potential employers.",
            ar: "قم ببناء معرض أعمال (Portfolio) يعرض مهاراتك وقدراتك لأصحاب العمل المحتملين.",
        },
    },
    {
        number: {
            en: "06",
            ar: "06",
        },
        title: {
            en: "Interactive Learning Environment",
            ar: "بيئة تعليمية تفاعلية",
        },
        desc: {
            en: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
            ar: "تعاون مع زملائك المتعلمين، وتبادل الأفكار والملاحظات لتعزيز فهمك.",
        },
    },
];



let cardsBenefits = document.getElementById("cardsBenefits");
if (cardsBenefits) {
    cardsData.forEach(item => {
        cardsBenefits.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12"><div class="card-number h-100 p-lg-4 p-3">
<h2 class="number direction fw-bold">${item.number[lang]}</h2>
<p class="fw-bold">${item.title[lang]}</p>
<p>${item.desc[lang]}</p>
<div class="direction"><a class="benefit-link rounded" href="#"><i class="fa-solid fa-arrow-right"></i></a></div>
    </div></div>
    `;
    });
};



const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1400: {
            slidesPerView: 2,
            grid: {
                rows: 1,
            },
        },
    },
});



function playNativeVideo() {
    var video = document.getElementById("myVideo");
    var overlay = document.querySelector(".video-overlay");
    video.play();
    overlay.classList.add("hide-overlay");
}
var myVideo = document.getElementById("myVideo");
var videoOverlay = document.querySelector(".video-overlay");

myVideo.addEventListener("ended", function () {
    videoOverlay.classList.remove("hide-overlay");
    myVideo.load();
});



