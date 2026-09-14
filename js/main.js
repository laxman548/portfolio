/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");


/* Open / close mobile menu */

if (mobileMenuButton && mobileNav) {

    mobileMenuButton.addEventListener("click", function () {

        const isOpen =
            mobileNav.classList.toggle("open");


        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );


        if (isOpen) {

            mobileMenuButton.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            mobileMenuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });


    /* Close menu when a link is clicked */

    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}