// Исправленная логика для модальных окон
document.addEventListener('DOMContentLoaded', function() {
    const callButtons = document.querySelectorAll('.btn--call, .icon--call');
    const chatButtons = document.querySelectorAll('.btn--chat, .icon--chat');
    const modalCall = document.querySelector('.modal_call');
    const modalBack = document.querySelector('.modal_back');
    const desktopModalClose = document.querySelector('.desktop-modal-close');
    const mainElement = document.querySelector('.main');

    // Функция открытия модального окна звонка
    function openCallModal() {
        console.log('Opening modal...');
        if (modalCall) {
            modalCall.classList.add('modal_open');
            
            // Показываем кнопку close для десктопа
            if (window.innerWidth >= 1336 && desktopModalClose) {
                desktopModalClose.classList.add('visible');
            }
            
            // Создаем blur overlay для фона
            const blurOverlay = document.createElement('div');
            blurOverlay.className = 'blur-overlay';
            blurOverlay.id = 'blur-overlay';
            document.body.appendChild(blurOverlay);
            
            // Для десктопа создаем отдельный blur overlay
            if (window.innerWidth >= 1336) {
                const contentBlurOverlay = document.createElement('div');
                contentBlurOverlay.className = 'content-blur-overlay';
                contentBlurOverlay.id = 'content-blur-overlay';
                contentBlurOverlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    background-color: rgba(0, 0, 0, 0.1);
                    z-index: 1500;
                    pointer-events: none;
                `;
                document.body.appendChild(contentBlurOverlay);
            }
            
            document.body.style.overflow = 'hidden';
        }
    }

    // Функция закрытия модального окна звонка
    function closeCallModal() {
        console.log('Closing modal...');
        if (modalCall) {
            modalCall.classList.remove('modal_open');
            
            // Скрываем кнопку close для десктопа
            if (desktopModalClose) {
                desktopModalClose.classList.remove('visible');
            }
            
            // Удаляем все blur overlays
            const blurOverlay = document.getElementById('blur-overlay');
            const contentBlurOverlay = document.getElementById('content-blur-overlay');
            
            if (blurOverlay) blurOverlay.remove();
            if (contentBlurOverlay) contentBlurOverlay.remove();
            
            // Принудительно удаляем все элементы с классом blur-overlay
            const allBlurOverlays = document.querySelectorAll('.blur-overlay, .content-blur-overlay');
            allBlurOverlays.forEach(overlay => overlay.remove());
            
            document.body.style.overflow = '';
        }
    }

    // Функция открытия модального окна чата
    function openChatModal() {
        console.log('Opening chat modal...');
        if (modalBack) {
            modalBack.classList.add('chat_open');
            
            // Показываем кнопку close для десктопа
            if (window.innerWidth >= 1336 && desktopModalClose) {
                desktopModalClose.classList.add('visible');
            }
            
            // Создаем blur overlay для фона
            const blurOverlay = document.createElement('div');
            blurOverlay.className = 'blur-overlay';
            blurOverlay.id = 'blur-overlay-chat';
            document.body.appendChild(blurOverlay);
            
            // Для десктопа создаем отдельный blur overlay
            if (window.innerWidth >= 1336) {
                const contentBlurOverlay = document.createElement('div');
                contentBlurOverlay.className = 'content-blur-overlay';
                contentBlurOverlay.id = 'content-blur-overlay-chat';
                contentBlurOverlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    background-color: rgba(0, 0, 0, 0.1);
                    z-index: 1500;
                    pointer-events: none;
                `;
                document.body.appendChild(contentBlurOverlay);
            }
            
            document.body.style.overflow = 'hidden';
        }
    }

    // Функция закрытия модального окна чата
    function closeChatModal() {
        console.log('Closing chat modal...');
        if (modalBack) {
            modalBack.classList.remove('chat_open');
            
            // Скрываем кнопку close для десктопа
            if (desktopModalClose) {
                desktopModalClose.classList.remove('visible');
            }
            
            // Удаляем все blur overlays
            const blurOverlay = document.getElementById('blur-overlay-chat');
            const contentBlurOverlay = document.getElementById('content-blur-overlay-chat');
            
            if (blurOverlay) blurOverlay.remove();
            if (contentBlurOverlay) contentBlurOverlay.remove();
            
            // Принудительно удаляем все элементы с классом blur-overlay
            const allBlurOverlays = document.querySelectorAll('.blur-overlay, .content-blur-overlay');
            allBlurOverlays.forEach(overlay => overlay.remove());
            
            document.body.style.overflow = '';
        }
    }

    // Обработчики для кнопок звонка
    callButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openCallModal();
        });
    });

    // Обработчики для кнопок чата
    chatButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openChatModal();
        });
    });
    
    // Дополнительные обработчики для кнопок в сайдбаре
    const sidebarCallButton = document.querySelector('.btn--feedback.icon--call');
    const sidebarChatButton = document.querySelector('.btn--feedback.icon--chat');
    
    if (sidebarCallButton) {
        sidebarCallButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openCallModal();
        });
    }
    
    if (sidebarChatButton) {
        sidebarChatButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openChatModal();
        });
    }



    // Обработчик для десктопной кнопки close
    if (desktopModalClose) {
        desktopModalClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Закрываем соответствующее модальное окно
            if (modalCall && modalCall.classList.contains('modal_open')) {
                closeCallModal();
            } else if (modalBack && modalBack.classList.contains('chat_open')) {
                closeChatModal();
            }
        });
    }
    
    // Обработчики для кнопок закрытия в планшетной версии
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Закрываем соответствующее модальное окно
            if (modalCall && modalCall.classList.contains('modal_open')) {
                closeCallModal();
            } else if (modalBack && modalBack.classList.contains('chat_open')) {
                closeChatModal();
            }
        });
    });

    // Закрытие по клику вне модального окна
    if (modalCall) {
        modalCall.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCallModal();
            }
        });
    }

    if (modalBack) {
        modalBack.addEventListener('click', function(e) {
            if (e.target === this) {
                closeChatModal();
            }
        });
    }

    // Закрытие по клику на blur overlay
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('blur-overlay') || e.target.classList.contains('content-blur-overlay')) {
            if (modalCall && modalCall.classList.contains('modal_open')) {
                closeCallModal();
            } else if (modalBack && modalBack.classList.contains('chat_open')) {
                closeChatModal();
            }
        }
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modalCall && modalCall.classList.contains('modal_open')) {
                closeCallModal();
            } else if (modalBack && modalBack.classList.contains('chat_open')) {
                closeChatModal();
            }
        }
    });

}); 