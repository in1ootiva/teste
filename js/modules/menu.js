export function initializeMenu(menuData) {
    const menuContainer = document.querySelector('.menu-container');
    const categoryButtons = document.querySelectorAll('.category-button');

    function createMenuItem(item) {
        return `
            <div class="menu-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">R$ ${item.price.toFixed(2)}</span>
                        <div class="quantity-controls">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity" data-id="${item.id}">0</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderCategory(category) {
        const section = document.createElement('section');
        section.className = 'menu-section';
        section.id = category;
        
        const title = document.createElement('h2');
        title.textContent = category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        const grid = document.createElement('div');
        grid.className = 'menu-grid';
        
        menuData[category].forEach(item => {
            grid.innerHTML += createMenuItem(item);
        });
        
        section.appendChild(title);
        section.appendChild(grid);
        menuContainer.appendChild(section);
    }

    function showCategory(category) {
        const sections = document.querySelectorAll('.menu-section');
        sections.forEach(section => {
            section.style.display = section.id === category ? 'block' : 'none';
        });
        
        categoryButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.category === category);
        });
    }

    // Inicialização
    Object.keys(menuData).forEach(category => {
        renderCategory(category);
    });

    // Event Listeners
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            showCategory(button.dataset.category);
        });
    });

    // Controles de quantidade
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const itemId = e.target.dataset.id;
            const quantityElement = document.querySelector(`.quantity[data-id="${itemId}"]`);
            let quantity = parseInt(quantityElement.textContent);
            
            if (e.target.classList.contains('plus')) {
                quantity++;
            } else if (e.target.classList.contains('minus') && quantity > 0) {
                quantity--;
            }
            
            quantityElement.textContent = quantity;
            
            // Disparar evento personalizado para atualizar o carrinho
            const event = new CustomEvent('quantityChanged', {
                detail: {
                    itemId,
                    quantity,
                    item: menuData[Object.keys(menuData).find(category => 
                        menuData[category].some(item => item.id === parseInt(itemId))
                    )].find(item => item.id === parseInt(itemId))
                }
            });
            document.dispatchEvent(event);
        }
    });
} 