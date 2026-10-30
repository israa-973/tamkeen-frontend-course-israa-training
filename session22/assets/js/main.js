
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
const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
let cardsData = [
    {
        icon: "fa-solid fa-house",
        title: {
            en: "Wide Selection",
            ar: "تشكيلة واسعة",
        },
        desc: {
            en: "Browse through thousands of <br> verified properties",
            ar: "تصفح آلاف العقارات <br> الموثوقة",
        },
    },
    {
        icon: "fa-solid fa-building",
        title: {
            en: "Trusted Agents",
            ar: "وكلاء موثوقون",
        },
        desc: {
            en: "Work with certified real estate <br> professionals",
            ar: "تعامل مع خبراء عقاريين <br> معتمدين",
        },
    },
    {
        icon: "fa-solid fa-key",
        title: {
            en: "Easy Process",
            ar: "إجراءات سهلة",
        },
        desc: {
            en: "Simplified buying and renting <br> experience",
            ar: "تجربة بيع واستئجار <br> سهلة",
        },
    },
    {
        icon: "fa-solid fa-arrow-trend-up",
        title: {
            en: "Best Prices",
            ar: "أفضل الأسعار",
        },
        desc: {
            en: "Competitive pricing and great <br> deals",
            ar: "أسعار تنافسية <br> وعروض رائعة",
        },
    },
];

let cardsFeatures = document.getElementById("cardsFeatures");
if (cardsFeatures) {
    cardsData.forEach(function (item) {
        cardsFeatures.innerHTML +=
            '<div class="col-12 col-lg-3">' + '<div class="card text-center">' + '<div class="content-card border-rounded">' + '<i class="' + item.icon + '">' + '</i>' + '<h5 class="mt-4">' + item.title[lang] + '</h5>' + '<p class="mt-3 mb-4">' + item.desc[lang] + '</p>' + '</div>' + '</div>' + '</div>'
    });
};


// *******************
// cardsWhyChooseUs "array of objects"
let cardsProjects = [
    {
        title: {
            en: "1. Verified & Transparent Listings",
            ar: "1. عقارات موثّقة وشفافة",
        },
        desc: {
            en: "We understand how frustrating it can be to browse through misleading property ads. That’s why every property on our platform is thoroughly verified before being published. Our dedicated verification team conducts on-site inspections, document checks, and authenticity reviews to ensure every listing is 100% genuine.",
            ar: "نعلم مدى الإحباط الذي يسببه تصفح إعلانات عقارية مضللة. لذلك يخضع كل عقار على منصتنا لتحقق دقيق قبل نشره. يجري فريق التحقق لدينا معاينات ميدانية وفحصًا للمستندات ومراجعات للمصداقية لضمان أن كل إعلان حقيقي بنسبة 100%.",
        },
    },
    {
        title: {
            en: "2. Expert Real Estate Consultants",
            ar: "2. مستشارون عقاريون خبراء",
        },
        desc: {
            en: "Behind every successful deal is a professional who truly understands your needs. Our team of experienced agents, property analysts, and consultants are trained to guide you through every step — from understanding the market to signing the final papers.",
            ar: "وراء كل صفقة ناجحة محترف يفهم احتياجاتك حقًا. فريقنا من الوكلاء والمحللين العقاريين والمستشارين ذوي الخبرة مدرّب على إرشادك في كل خطوة، من فهم السوق حتى توقيع الأوراق النهائية.",
        },
    },
    {
        title: {
            en: "3. Smart Search Technology",
            ar: "3. تقنية بحث ذكية",
        },
        desc: {
            en: "Finding the perfect home shouldn’t be complicated. That’s why we built our platform with smart search and AI-powered filtering tools that let you find what you need in seconds. You can filter by budget, location, property type, amenities, and lifestyle preferences, and our system instantly shows you the most relevant options.",
            ar: "العثور على المنزل المثالي لا يجب أن يكون معقدًا. لذلك بنينا منصتنا بأدوات بحث وتصفية ذكية مدعومة بالذكاء الاصطناعي تتيح لك إيجاد ما تريد في ثوانٍ. يمكنك التصفية حسب الميزانية والموقع ونوع العقار والمرافق وأسلوب الحياة، ويعرض لك النظام فورًا الخيارات الأنسب.",
        },
    },
    {
        title: {
            en: "4. Professional Marketing & Media",
            ar: "4. تسويق وإعلام احترافي",
        },
        desc: {
            en: "Our marketing team ensures your property reaches the right audience through digital advertising, social media promotion, and featured listings on our homepage. We know how to turn views into visits, and visits into sales.",
            ar: "يضمن فريق التسويق لدينا وصول عقارك إلى الجمهور المناسب عبر الإعلانات الرقمية والترويج على وسائل التواصل والإعلانات المميزة في صفحتنا الرئيسية. نعرف كيف نحوّل المشاهدات إلى زيارات، والزيارات إلى مبيعات.",
        },
    },
];

let cardsWhyChooseUs = document.getElementById("cardsWhyChooseUs");
if (cardsWhyChooseUs) {
    cardsProjects.forEach(project => {
        cardsWhyChooseUs.innerHTML += `
    <div class="card-why-choose-us p-4 mx-5 my-4">
        <h5 class="title-choose">${project.title[lang]}</h5>
        <p class="desc-choose">${project.desc[lang]}</p>
    </div>
    `;
    });
};




























