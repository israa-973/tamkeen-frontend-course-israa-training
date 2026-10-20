        // header "burger menu"
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            mobileMenuBtn.classList.toggle('toggle-effect');
        });



        // Team Work "array of objects"
        let cardsData = [
            {
                src: "fa-solid fa-people-group",
                category: "Great team work",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. ",
            },
            {
                src: "fa-solid fa-rocket",
                category: "Our vision",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. ",
            },
            {
                src: "fa-solid fa-chart-line",
                category: "Our mision",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. ",
            },
        ];
        let cardsTeamWork = document.getElementById("cardsTeamWork");
        cardsData.forEach(function (item) {
           cardsTeamWork.innerHTML +=
                '<div class="card d-flex">' + '<div class="img-team-work">'
                + '<i class="' + item.src + '"></i>' + '</div>' + '<div class="category-team-work">'
                + '<h3>' + item.category + '</h3>' + '</div>' + '<div class="description-team-work">'
                + '<p>' + item.title + '</p>' + '</div>' + '</div>'
        });


// cardsTeamWork photos
        const swiper = new Swiper('.swiper', {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },
                1080: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }
        });




// swiperCarousel
        const swiperCarousel = new Swiper('.swiperCarousel', {
            navigation: {
                nextEl: ".swiperCarousel .swiper-button-next",
                prevEl: ".swiperCarousel .swiper-button-prev"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1080: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }
        });



        // cardsBenefits
          let cardData = [
            {
                src: "assets/images/Group 31.png",
                category: "Best Service",
                title: "our service is reliable and convenient, our service is quality.",
                href: "#",
                buttonText: "Learn more",
                icon: "http://www.w3.org/2000/svg"
            },
            {
                src: "assets/images/Group 32.png",
                category: "Best Service",
                title: "our service is reliable and convenient, our service is quality.",
                href: "#",
                buttonText: "Learn more",
                icon: "http://www.w3.org/2000/svg"
            },
            {
                src: "assets/images/Group 33.png",
                category: "Best Service",
                title: "our service is reliable and convenient, our service is quality.",
                href: "#",
                buttonText: "Learn more",
                icon: "fa-solid fa-arrow-right"
            }
        ];

        let cardsBenefits = document.getElementById("cardsBenefits");

        if (cardsBenefits) {
            cardData.forEach(function (item) {
                cardsBenefits.innerHTML +=
                    '<div class="cards-item">' + '<div class="card">' + '<div class="card-body">' + '<img src="'+ item.src +'">' + '<h5>' + item.category + '</h5>' + '<p class="card-text">' + item.title + '</p>' + '<a href="' + item.href + '">' + item.buttonText + '<i class="fa-solid fa-arrow-right">'+'</i>'+'</a>' + '</div>' + '</div>' + '</div>'
            });
        }
        


// Dark-Mode
const themeButton = document.getElementById("theme-toggle");
const pageBody = document.body;

const savedTheme = localStorage.getItem("theme");

function updateIcon() {
  if (pageBody.classList.contains("dark")) {
    themeButton.textContent = "☀️";  
  } else {
    themeButton.textContent = "🌙"; 
  }
}

if (savedTheme === "dark") {
  pageBody.classList.add("dark");
}

updateIcon(); 

themeButton.addEventListener("click", function () {
  pageBody.classList.toggle("dark");

  if (pageBody.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  updateIcon();
});

