// function main() {
//     let btn = document.getElementsByName(".button-group button");

//     btn.click(function(e) {
//         btn.removeClass("active");
//         e.target.classList.add("active");

//         let selector = e.target.attr("data-filter");
//         document.getElementsByClassName("gallery-row").isotope({
//             filter: selector,
//         });

//         return false;
//     });
// }

$(document).ready(function() {
    let $btns = $(".button-group button");

    $btns.click(function(e) {
        $(".button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".gallery-row").isotope({
            filter: selector,
        });

        return false;
    });

    // Banner Carousel
    // var myCarousel = document.querySelector("#myCarousel");
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //     interval: 2000,
    //     wrap: false,
    // });

    //Owl-Carousel
    //
    //
    //     document.querySelector(".owl-carousel").owlCarousel({
    //         loop: true,
    //         autoplay: true,
    //         dots: true,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //             },
    //             544: {
    //                 items: 2,
    //             },
    //         },
    //     });
    // });
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            loop: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                544: {
                    items: 2,
                },
            },
        });
    });
    //
    //
    //

    //Magnific Pop-UP
    $(".container .gallery-row .all .test-popup-link").magnificPopup({
        type: "image",
        gallery: { enabled: true },
        // other options
    });

    //
    //
    //
    //
});