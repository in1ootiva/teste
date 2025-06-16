export function initializeCart() {
    const cart = new Map();
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalValue = document.querySelector('.total-value');
    const cartPopup = document.getElementById('cart-popup');

    function updateCartCount() {
        const totalItems = Array.from(cart.values()).reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function updateTotal() {
        const total = Array.from(cart.values()).reduce((sum, item) => 
            sum + (item.price * item.quantity), 0
        );
        totalValue.textContent = `R$ ${total.toFixed(2)}`;
    }

    function renderCartItem(item) {
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="cart-quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-total">
                    R$ ${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
        `;
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            cartItems.innerHTML += renderCartItem(item);
        });
        updateCartCount();
        updateTotal();
    }

    // Event Listeners
    document.addEventListener('quantityChanged', (e) => {
        const { itemId, quantity, item } = e.detail;
        
        if (quantity === 0) {
            cart.delete(itemId);
        } else {
            cart.set(itemId, {
                ...item,
                quantity
            });
        }
        
        updateCartDisplay();
    });

    // Controles de quantidade no carrinho
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-quantity-btn')) {
            const itemId = e.target.dataset.id;
            const item = cart.get(itemId);
            
            if (e.target.classList.contains('plus')) {
                item.quantity++;
            } else if (e.target.classList.contains('minus')) {
                item.quantity--;
                if (item.quantity === 0) {
                    cart.delete(itemId);
                }
            }
            
            // Atualizar quantidade no menu
            const menuQuantity = document.querySelector(`.quantity[data-id="${itemId}"]`);
            if (menuQuantity) {
                menuQuantity.textContent = item.quantity;
            }
            
            updateCartDisplay();
        }
    });

    // Botão de finalizar pedido
    document.querySelector('.checkout-button').addEventListener('click', () => {
        if (cart.size === 0) {
            alert('Adicione itens ao carrinho antes de finalizar o pedido.');
            return;
        }
        
        // Aqui você pode adicionar a lógica para finalizar o pedido
        alert('Pedido finalizado com sucesso!');
        cart.clear();
        updateCartDisplay();
        
        // Resetar quantidades no menu
        document.querySelectorAll('.quantity').forEach(el => {
            el.textContent = '0';
        });
        
        cartPopup.classList.remove('active');
    });
} 