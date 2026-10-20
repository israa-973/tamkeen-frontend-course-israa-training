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