import Swiper from 'swiper';
import 'swiper/css';

let deviceSwiper;
let priceSwiper;
let brandsSwiper;
let init = false;

function initSwiper() {
    destroySwipers();
    
    const brandsSwiperElement = document.querySelector('.brands-swiper');
    if (brandsSwiperElement) {
        brandsSwiper = new Swiper('.brands-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.brands-swiper .swiper-pagination',
                clickable: true,
            },
            allowTouchMove: true,
            touchRatio: 1,
            touchAngle: 45,
            grabCursor: true,
            freeMode: true,
            freeModeSticky: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.3,
                    spaceBetween: 8,
                },
                480: {
                    slidesPerView: 1.8,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 24,
                },
                1366: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                }
            }
        });
    }
    
    deviceSwiper = new Swiper('.device-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.device-swiper .swiper-pagination',
            clickable: true,
        },
        allowTouchMove: true,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        freeMode: true,
        freeModeSticky: true,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 8,
            },
            480: {
                slidesPerView: 1.8,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
            1366: {
                slidesPerView: 'auto',
                spaceBetween: 32,
            }
        }
    });

    const priceSwiperElement = document.querySelector('.price-swiper');
    if (priceSwiperElement) {
        priceSwiper = new Swiper('.price-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.price-swiper .swiper-pagination',
                clickable: true,
            },
            allowTouchMove: true,
            touchRatio: 1,
            touchAngle: 45,
            grabCursor: true,
            freeMode: true,
            freeModeSticky: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.3,
                    spaceBetween: 8,
                },
                480: {
                    slidesPerView: 1.8,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 24,
                },
                1366: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                }
            }
        });
    }
}

function destroySwipers() {
    if (deviceSwiper) {
        deviceSwiper.destroy(true, true);
        deviceSwiper = null;
    }
    if (priceSwiper) {
        priceSwiper.destroy(true, true);
        priceSwiper = null;
    }
    if (brandsSwiper) {
        brandsSwiper.destroy(true, true);
        brandsSwiper = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initSwiper();

    const isMobile = window.innerWidth < 768;

    const brandsBtn = document.querySelector('.brands-show-all-btn');
    const brandsGrid = document.querySelector('.brands-grid');
    
    if (brandsBtn && brandsGrid && !isMobile) {
        const brandsBtnText = brandsBtn.querySelector('.brands-show-all-btn__text');
        const brandsBtnIcon = brandsBtn.querySelector('.brands-show-all-btn__icon');
        let brandsOpened = false;
        
        brandsBtn.addEventListener('click', function() {
            brandsOpened = !brandsOpened;
            brandsGrid.classList.toggle('expanded', brandsOpened);
            brandsBtnText.textContent = brandsOpened ? 'Скрыть' : 'Показать все';
            brandsBtnIcon.style.transform = brandsOpened ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    const deviceSection = document.querySelector('.device-slider-section');
    const deviceBtn = document.querySelector('.device-show-all-btn');
    
    if (deviceBtn && deviceSection && !isMobile) {
        const deviceBtnText = deviceBtn.querySelector('.device-show-all-btn__text');
        const deviceBtnIcon = deviceBtn.querySelector('.device-show-all-btn__icon');
        let deviceOpened = false;
        
        deviceBtn.addEventListener('click', function() {
            deviceOpened = !deviceOpened;
            const deviceGrid = deviceSection.querySelector('.device-grid');
            if (deviceGrid) {
                deviceGrid.classList.toggle('expanded', deviceOpened);
            }
            deviceBtnText.textContent = deviceOpened ? 'Скрыть' : 'Показать все';
            deviceBtnIcon.style.transform = deviceOpened ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }
});

window.addEventListener('resize', function() {
    setTimeout(() => {
        initSwiper();
        
        const isMobile = window.innerWidth < 768;
        
        const brandsBtn = document.querySelector('.brands-show-all-btn');
        const deviceBtn = document.querySelector('.device-show-all-btn');
        
        if (brandsBtn) {
            brandsBtn.replaceWith(brandsBtn.cloneNode(true));
        }
        if (deviceBtn) {
            deviceBtn.replaceWith(deviceBtn.cloneNode(true));
        }
        
        if (!isMobile) {
            const newBrandsBtn = document.querySelector('.brands-show-all-btn');
            const brandsGrid = document.querySelector('.brands-grid');
            
            if (newBrandsBtn && brandsGrid) {
                const brandsBtnText = newBrandsBtn.querySelector('.brands-show-all-btn__text');
                const brandsBtnIcon = newBrandsBtn.querySelector('.brands-show-all-btn__icon');
                let brandsOpened = false;
                
                newBrandsBtn.addEventListener('click', function() {
                    brandsOpened = !brandsOpened;
                    brandsGrid.classList.toggle('expanded', brandsOpened);
                    brandsBtnText.textContent = brandsOpened ? 'Скрыть' : 'Показать все';
                    brandsBtnIcon.style.transform = brandsOpened ? 'rotate(180deg)' : 'rotate(0deg)';
                });
            }
            
            const deviceSection = document.querySelector('.device-slider-section');
            const newDeviceBtn = document.querySelector('.device-show-all-btn');
            
            if (newDeviceBtn && deviceSection) {
                const deviceBtnText = newDeviceBtn.querySelector('.device-show-all-btn__text');
                const deviceBtnIcon = newDeviceBtn.querySelector('.device-show-all-btn__icon');
                let deviceOpened = false;
                
                newDeviceBtn.addEventListener('click', function() {
                    deviceOpened = !deviceOpened;
                    const deviceGrid = deviceSection.querySelector('.device-grid');
                    if (deviceGrid) {
                        deviceGrid.classList.toggle('expanded', deviceOpened);
                    }
                    deviceBtnText.textContent = deviceOpened ? 'Скрыть' : 'Показать все';
                    deviceBtnIcon.style.transform = deviceOpened ? 'rotate(180deg)' : 'rotate(0deg)';
                });
            }
        }
    }, 100);
});


