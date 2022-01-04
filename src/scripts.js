import React from 'react'

export default function scripts() {
    return (
        <>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                crossorigin="anonymous"></script>

            <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

            <script>
                const swiperProjections = new Swiper('#swiper-container-projections', {
                    direction: 'horizontal',
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
            },
                autoplay: {
                    delay: 5000
            },

                pagination: {
                    el: '#swiper-pagination-projections',
                clickable: true,
            },

                navigation: {
                    prevEl: '#swiper-prev-projections',
                nextEl: '#swiper-next-projections',
            },

                breakpoints: {
                    375: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2,
                spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                spaceBetween: 15
                },
                1080: {
                    slidesPerView: 3,
                spaceBetween: 30
                }
            }
        });

                const swiperBilleterie = new Swiper('#swiper-container-billeterie', {
                    direction: 'horizontal',
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
            },
                autoplay: {
                    delay: 7500
            },

                pagination: {
                    el: '#swiper-pagination-billeterie',
                clickable: true,
            },

                navigation: {
                    prevEl: '#swiper-prev-billeterie',
                nextEl: '#swiper-next-billeterie',
            },

                breakpoints: {
                    375: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2,
                spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                spaceBetween: 15
                },
                1080: {
                    slidesPerView: 3,
                spaceBetween: 30
                }
            }
        });

                const swiperActualites = new Swiper('#swiper-container-actualites', {
                    direction: 'horizontal',
                loop: true,
                slidesPerView: 2,
                spaceBetween: 30,
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
            },
                autoplay: {
                    delay: 5000
            },

                pagination: {
                    el: '#swiper-pagination-actualites',
                clickable: true,
            },

                navigation: {
                    prevEl: '#swiper-prev-actualites',
                nextEl: '#swiper-next-actualites',
            },

                breakpoints: {
                    375: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2,
                spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                spaceBetween: 15
                }
            }
        });
            </script>
        </>
    )
}
