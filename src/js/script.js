$(document).ready(() => {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(direction => {
        if (direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    })

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(() => {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top}, 1000)
    })
    
    $('.js--scroll-to-features').click(() => {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top}, 1000)
    })

    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(e => {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == e.currentTarget.pathname.replace(/^\//, '')
                &&
                location.hostname == e.currentTarget.hostname
            ) {
                // Figure out element to scroll to
                var target = $(e.currentTarget.hash)
                target = target.length ? target : $('[name=' + e.currentTarget.hash.slice(1) + ']')
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault()
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, () => {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target)
                        $target.focus()
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false
                        } else {
                            $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
                            $target.focus() // Set focus again
                        }
                    })
                }
            }
        })
    
    /*  Animations on scroll */
    $('.js--wp-1').waypoint(direction => {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(direction => {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(direction => {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(direction => {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '50%'
    })

    /*  Mobile nav */
    $('.js--nav-icon').click(() => {
        const nav = $('.js--main-nav')
        const icon = $('.js--nav-icon ion-icon')

        nav.slideToggle(200)
        if (icon.hasClass('ion-navicon-round')) {
            $('.js--nav-icon').append('<ion-icon name="close" class="ion-close-round"></ion-icon>')
            $('.ion-navicon-round').remove()
        } else {
            $('.js--nav-icon').append('<ion-icon name="menu" class="ion-navicon-round"></ion-icon>')
            $('.ion-close-round').remove()
        }
    })
})