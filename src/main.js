$(document).ready(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.header').removeClass('bg-transparent');
            $('.header').addClass('bg-white/80');
        } else {
            $('.header').addClass('bg-transparent');
            $('.header').removeClass('bg-white/80');
        }
    });


    // project carousel
    $(".project-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
    // countup
    $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo,
            },

            {
                duration: 8000,
                easing: "linear",
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                },
            }
        );
    });

    $(".popmenutoggle.burger").click(function () {
        $(".popmenu").toggleClass('hidden');
        $(".popmenutoggle.burger").toggleClass('hidden inline-flex');
    });
    $(".popmenutoggle.cross").click(function () {
        $(".popmenu").toggleClass('hidden');
        $(".popmenutoggle.burger").toggleClass('hidden inline-flex');
    });

    // $(document).click(function (event) {
    //     if (!$(event.target).closest('.popmenu').length && !$(event.target).is('.popmenu')) {
    //         $('.popmenu').addClass('hidden');
    //     }
    // });


    // contact pop
    $(".contact-poptoggle").click(function () {
        $(".contac").toggleClass('hidden');
    });






});



