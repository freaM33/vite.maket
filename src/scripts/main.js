import '../styles/main.scss'

document.addEventListener('DOMContentLoaded', function() {
    
    const burgerBtn = document.querySelector('.btn--burger');
    const mobileModal = document.querySelector('.mobile-modal');
    const mobileModalClose = document.querySelector('.mobile-modal__close');
    const mainContent = document.querySelector('.main');
    
    
    function openMobileModal() {
        console.log('Opening mobile modal...');
        if (mobileModal && window.innerWidth < 768) {
            mobileModal.classList.add('mobile-modal--open');
            mainContent.classList.add('main--mobile-modal-open');
            document.body.style.overflow = 'hidden';
            console.log('Mobile modal opened successfully');
        } else {
            console.log('Mobile modal not found or wrong screen size');
        }
    }
    
    
    function closeMobileModal() {
        console.log('Closing mobile modal...');
        if (mobileModal) {
            mobileModal.classList.remove('mobile-modal--open');
            mainContent.classList.remove('main--mobile-modal-open');
            document.body.style.overflow = '';
            console.log('Mobile modal closed successfully');
        } else {
            console.log('Mobile modal not found');
        }
    }
    
    
    if (burgerBtn) {
        burgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            
            if (window.innerWidth < 768) {
                
                openMobileModal();
            } else if (window.innerWidth >= 768 && window.innerWidth <= 1335) {
                
                openSidebar();
            }
        });
    }
    
    
    if (mobileModalClose) {
        console.log('Mobile modal close button found');
        mobileModalClose.addEventListener('click', function(e) {
            console.log('Mobile modal close button clicked');
            e.preventDefault();
            e.stopPropagation();
            closeMobileModal();
        });
    } else {
        console.log('Mobile modal close button not found');
    }
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileModal && mobileModal.classList.contains('mobile-modal--open')) {
            closeMobileModal();
        }
    });
    
    
    if (mobileModal) {
        mobileModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeMobileModal();
            }
        });
    }

    
    const sidebar = document.querySelector('.sidebar');
    const sidebarCloseBtn = document.querySelector('.sidebar .icon--close');
    

    function openSidebar() {
        if (sidebar && (window.innerWidth <= 767 || (window.innerWidth >= 768 && window.innerWidth <= 1335))) {
            sidebar.classList.add('sidebar--open');
            mainContent.classList.add('main--blurred');
            document.body.classList.add('sidebar-open');
            document.body.style.overflow = 'hidden';
        }
    }
    
    
    function closeSidebar() {
        if (sidebar) {
            sidebar.classList.remove('sidebar--open');
            mainContent.classList.remove('main--blurred');
            document.body.classList.remove('sidebar-open');
            document.body.style.overflow = '';
        }
    }
    

    
    
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeSidebar();
        });
    }
    
    
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            if (e.target === this) {
                closeSidebar();
            }
        });
    }
    
    
    if (mainContent) {
        mainContent.addEventListener('click', function(e) {
            if (sidebar && sidebar.classList.contains('sidebar--open')) {
                closeSidebar();
            }
        });
    }
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('sidebar--open')) {
            closeSidebar();
        }
    });

    
    const readMoreBtn = document.querySelector('.mainz__read-more');
    
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const textBlock = this.closest('.main__text-block');
            const partialParagraph = textBlock.querySelector('.main__text-paragraph--partial');
            const hiddenText = textBlock.querySelector('.main__text-paragraph--hidden');
            const icon = this.querySelector('.read-more__icon');
            const text = this.querySelector('.read-more__text');
            
            
            const isDesktop = window.innerWidth >= 1366;
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1366;
            
            if (isDesktop) {
                
                const existingLorem = textBlock.querySelector('.lorem-text-block');
                
                if (existingLorem) {
                    
                    existingLorem.remove();
                    
                    
                    const textBlock = this.closest('.main__text-block');
                    const textContent = textBlock.querySelector('.main__text');
                    textContent.appendChild(this);
                    
                    text.textContent = 'Читать далее';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    
                    const loremText = generateLoremIpsum(100);
                    const loremElement = document.createElement('div');
                    loremElement.className = 'lorem-text-block';
                    
                    
                    const paragraphs = loremText.split('. ').filter(sentence => sentence.trim().length > 0);
                    paragraphs.forEach((paragraph, index) => {
                        if (index < 3) { 
                            const p = document.createElement('p');
                            p.textContent = paragraph.trim() + (paragraph.trim().endsWith('.') ? '' : '.');
                            loremElement.appendChild(p);
                        }
                    });
                    
                    this.parentNode.insertBefore(loremElement, this.nextSibling);
                    
                    this.parentNode.appendChild(this);
                    
                    text.textContent = 'Скрыть';
                    icon.style.transform = 'rotate(180deg)';
                }
            } else if (isTablet) {
                
                console.log('Планшетная версия, размер экрана:', window.innerWidth);
                console.log('Элементы найдены:', { partialParagraph, hiddenText });
                
                if (partialParagraph.classList.contains('show')) {
                    partialParagraph.classList.remove('show');
                    hiddenText.classList.remove('show');
                    text.textContent = 'Читать далее';
                    icon.style.transform = 'rotate(0deg)';
                    console.log('Скрываем текст');
                } else {
                    partialParagraph.classList.add('show');
                    hiddenText.classList.add('show');
                    text.textContent = 'Скрыть';
                    icon.style.transform = 'rotate(180deg)';
                    console.log('Показываем текст');
                }
            } else {
                
                console.log('Мобильная версия, размер экрана:', window.innerWidth);
                console.log('Элементы найдены:', { partialParagraph, hiddenText });
                
                if (partialParagraph.classList.contains('show')) {
                    partialParagraph.classList.remove('show');
                    hiddenText.classList.remove('show');
                    text.textContent = 'Читать далее';
                    icon.style.transform = 'rotate(0deg)';
                    console.log('Скрываем текст');
                } else {
                    partialParagraph.classList.add('show');
                    hiddenText.classList.add('show');
                    text.textContent = 'Скрыть';
                    icon.style.transform = 'rotate(180deg)';
                    console.log('Показываем текст');
                }
            }
        });
    }

    
    function generateLoremIpsum(wordCount = 50) {
        const russianWords = [
            'компьютер', 'техника', 'ремонт', 'сервис', 'центр', 'обслуживание', 'клиент',
            'качество', 'гарантия', 'профессионализм', 'опыт', 'работа', 'специалист',
            'диагностика', 'неисправность', 'замена', 'деталь', 'компонент', 'система',
            'программное', 'обеспечение', 'настройка', 'конфигурация', 'оптимизация',
            'производительность', 'скорость', 'эффективность', 'результат', 'удовлетворение',
            'рекомендация', 'отзыв', 'доверие', 'надежность', 'стабильность', 'безопасность',
            'современный', 'инновационный', 'технология', 'развитие', 'прогресс', 'будущее',
            'информация', 'данные', 'файл', 'папка', 'программа', 'приложение', 'утилита',
            'интерфейс', 'пользователь', 'удобство', 'простота', 'интуитивность', 'логичность',
            'структура', 'организация', 'порядок', 'систематизация', 'классификация',
            'категория', 'группа', 'класс', 'тип', 'вид', 'формат', 'стандарт', 'норма',
            'требование', 'условие', 'параметр', 'характеристика', 'свойство', 'особенность',
            'функция', 'возможность', 'способность', 'потенциал', 'ресурс', 'мощность',
            'энергия', 'сила', 'мощь', 'потенциал', 'возможности', 'перспективы', 'планы',
            'цели', 'задачи', 'обязанности', 'ответственность', 'обязательство', 'договор',
            'соглашение', 'партнерство', 'сотрудничество', 'взаимодействие', 'коммуникация',
            'связь', 'контакт', 'общение', 'диалог', 'обсуждение', 'консультация', 'совет',
            'помощь', 'поддержка', 'содействие', 'участие', 'вклад', 'влияние', 'эффект',
            'результат', 'итог', 'вывод', 'заключение', 'решение', 'ответ', 'реакция',
            'отклик', 'обратная', 'связь', 'мнение', 'суждение', 'оценка', 'анализ',
            'исследование', 'изучение', 'рассмотрение', 'обсуждение', 'анализ', 'синтез',
            'обобщение', 'вывод', 'заключение', 'результат', 'итог', 'финал', 'конец',
            'завершение', 'окончание', 'прекращение', 'остановка', 'пауза', 'перерыв',
            'отдых', 'восстановление', 'обновление', 'модернизация', 'улучшение', 'развитие'
        ];
        
        const words = [];
        for (let i = 0; i < wordCount; i++) {
            const randomIndex = Math.floor(Math.random() * russianWords.length);
            words.push(russianWords[randomIndex]);
        }
        
        
        const text = words.join(' ');
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    

    
    
    const deviceShowAllBtn = document.querySelector('.device-show-all-btn');
    
    if (deviceShowAllBtn) {
        deviceShowAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const deviceGrid = document.querySelector('.device-grid');
            const icon = this.querySelector('.device-show-all-btn__icon');
            const text = this.querySelector('.device-show-all-btn__text');
            
            
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1366;
            
            if (isTablet && deviceGrid) {
                if (deviceGrid.classList.contains('expanded')) {
                    
                    deviceGrid.classList.remove('expanded');
                    text.textContent = 'Показать все';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    
                    deviceGrid.classList.add('expanded');
                    text.textContent = 'Скрыть';
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    }

    
    const priceShowAllBtn = document.querySelector('.price-show-all-btn');
    
    if (priceShowAllBtn) {
        priceShowAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const priceGrid = document.querySelector('.price-grid');
            const icon = this.querySelector('.price-show-all-btn__icon');
            const text = this.querySelector('.price-show-all-btn__text');
            
            
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1366;
            
            if (isTablet && priceGrid) {
                if (priceGrid.classList.contains('expanded')) {
                    
                    priceGrid.classList.remove('expanded');
                    text.textContent = 'Показать все';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    
                    priceGrid.classList.add('expanded');
                    text.textContent = 'Скрыть';
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    }


    const callButtons = document.querySelectorAll('.btn--call, .icon--call');
    const modalCall = document.querySelector('.modal_call');
    const blurElement = document.querySelector('.blure');
    const mainElement = document.querySelector('.main');

    
    function openCallModal() {
        console.log('Opening modal...');
        if (modalCall) {
            modalCall.classList.add('modal_open');
            
            
            const blurOverlay = document.createElement('div');
            blurOverlay.className = 'blur-overlay';
            blurOverlay.id = 'blur-overlay';
            document.body.appendChild(blurOverlay);
            
            
            if (window.innerWidth >= 1336) {
                mainElement.classList.add('blurred');
            }
            
            
            const brandsShowAllBtn = document.querySelector('.brands-show-all-btn');
            const deviceShowAllBtn = document.querySelector('.device-show-all-btn');
            
            if (brandsShowAllBtn) {
                brandsShowAllBtn.classList.add('blurred');
            }
            if (deviceShowAllBtn) {
                deviceShowAllBtn.classList.add('blurred');
            }
            
            document.body.style.overflow = 'hidden';
        }
    }

    
    function closeCallModal() {
        console.log('Closing modal...');
        if (modalCall) {
            modalCall.classList.remove('modal_open');
            
            
            const blurOverlay = document.getElementById('blur-overlay');
            if (blurOverlay) {
                console.log('Removing blur overlay');
                blurOverlay.remove();
            } else {
                console.log('Blur overlay not found');
            }
            
            
            const allBlurOverlays = document.querySelectorAll('.blur-overlay');
            allBlurOverlays.forEach(overlay => {
                console.log('Removing additional blur overlay');
                overlay.remove();
            });
            
            
            if (window.innerWidth >= 1336) {
                mainElement.classList.remove('blurred');
            }
            
            
            const brandsShowAllBtn = document.querySelector('.brands-show-all-btn');
            const deviceShowAllBtn = document.querySelector('.device-show-all-btn');
            
            if (brandsShowAllBtn) {
                console.log('Removing blurred class from brands button');
                brandsShowAllBtn.classList.remove('blurred');
            }
            if (deviceShowAllBtn) {
                console.log('Removing blurred class from device button');
                deviceShowAllBtn.classList.remove('blurred');
            }
            
            document.body.style.overflow = '';
        }
    }

    
    callButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openCallModal();
        });
    });
    
    
    const sidebarCallButton = document.querySelector('.btn--feedback.icon--call');
    if (sidebarCallButton) {
        sidebarCallButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openCallModal();
        });
    }



    
    if (modalCall) {
        modalCall.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCallModal();
            }
        });
    }
    
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('blur-overlay')) {
            closeCallModal();
        }
    });

    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalCall && modalCall.classList.contains('modal_open')) {
            closeCallModal();
        }
    });
    
    
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            
            if (modalCall && modalCall.classList.contains('modal_open')) {
                closeCallModal();
            } else if (modalBack && modalBack.classList.contains('chat_open')) {
                closeChatModal();
            }
        });
    });

    
    const chatButtons = document.querySelectorAll('.btn--chat, .icon--chat');
    const modalBack = document.querySelector('.modal_back');

    
    function openChatModal() {
        console.log('Opening chat modal...');
        if (modalBack) {
            modalBack.classList.add('chat_open');
            
            
            const blurOverlay = document.createElement('div');
            blurOverlay.className = 'blur-overlay';
            blurOverlay.id = 'blur-overlay-chat';
            document.body.appendChild(blurOverlay);
            
            
            if (window.innerWidth >= 1336) {
                mainElement.classList.add('blurred');
            }
            
            
            const brandsShowAllBtn = document.querySelector('.brands-show-all-btn');
            const deviceShowAllBtn = document.querySelector('.device-show-all-btn');
            
            if (brandsShowAllBtn) {
                brandsShowAllBtn.classList.add('blurred');
            }
            if (deviceShowAllBtn) {
                deviceShowAllBtn.classList.add('blurred');
            }
            
            document.body.style.overflow = 'hidden';
        }
    }

    
    function closeChatModal() {
        console.log('Closing chat modal...');
        if (modalBack) {
            modalBack.classList.remove('chat_open');
            
            
            const blurOverlay = document.getElementById('blur-overlay-chat');
            if (blurOverlay) {
                console.log('Removing chat blur overlay');
                blurOverlay.remove();
            }
            
            
            const allBlurOverlays = document.querySelectorAll('.blur-overlay');
            allBlurOverlays.forEach(overlay => {
                console.log('Removing additional blur overlay');
                overlay.remove();
            });
            
            
            if (window.innerWidth >= 1336) {
                mainElement.classList.remove('blurred');
            }
            
            
            const brandsShowAllBtn = document.querySelector('.brands-show-all-btn');
            const deviceShowAllBtn = document.querySelector('.device-show-all-btn');
            
            if (brandsShowAllBtn) {
                console.log('Removing blurred class from brands button');
                brandsShowAllBtn.classList.remove('blurred');
            }
            if (deviceShowAllBtn) {
                console.log('Removing blurred class from device button');
                deviceShowAllBtn.classList.remove('blurred');
            }
            
            document.body.style.overflow = '';
        }
    }

    
    chatButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openChatModal();
        });
    });
    
    
    const sidebarChatButton = document.querySelector('.btn--feedback.icon--chat');
    if (sidebarChatButton) {
        sidebarChatButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openChatModal();
        });
    }



    
    if (modalBack) {
        modalBack.addEventListener('click', function(e) {
            if (e.target === this) {
                closeChatModal();
            }
        });
    }
    
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('blur-overlay') && modalBack.classList.contains('chat_open')) {
            closeChatModal();
        }
    });

    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalBack && modalBack.classList.contains('chat_open')) {
            closeChatModal();
        }
    });
    
    
    window.addEventListener('resize', function() {
        
        if (window.innerWidth < 1336) {
            mainElement.classList.remove('blurred');
        }
        
        
        if (window.innerWidth >= 768 && mobileModal && mobileModal.classList.contains('mobile-modal--open')) {
            closeMobileModal();
        }
        
        
        if (window.innerWidth < 768 && sidebar && sidebar.classList.contains('sidebar--open')) {
            closeSidebar();
        }
    });
});

