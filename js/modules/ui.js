export function initializeUI() {
    const menuToggle = document.getElementById('menu-toggle');
    const cartToggle = document.getElementById('cart-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartPopup = document.getElementById('cart-popup');
    const closeMenu = document.querySelector('.close-menu');
    const closeCart = document.querySelector('.close-cart');

    // Toggle do menu
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Toggle do carrinho
    cartToggle.addEventListener('click', () => {
        cartOverlay.classList.add('active');
        cartPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', () => {
        closeCartPopup();
    });

    // Fechar menu e carrinho ao clicar fora
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fechar carrinho ao clicar no overlay
    cartOverlay.addEventListener('click', () => {
        closeCartPopup();
    });

    function closeCartPopup() {
        cartOverlay.classList.remove('active');
        cartPopup.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Adicionar estilos dinâmicos para o menu flutuante
    const floatingMenu = document.querySelector('.floating-menu');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
            // Rolando para baixo
            floatingMenu.style.transform = 'translate(-50%, 100%)';
        } else {
            // Rolando para cima
            floatingMenu.style.transform = 'translate(-50%, 0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Adicionar animação suave ao menu flutuante
    floatingMenu.style.transition = 'transform 0.3s ease';

    // Adicionar feedback tátil aos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 100);
        });
    });
} 