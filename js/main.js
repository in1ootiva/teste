import { initializeMenu } from './modules/menu.js';
import { initializeCart } from './modules/cart.js';
import { initializeUI } from './modules/ui.js';

// Dados de exemplo do cardápio
const menuData = {
    'pratos-principais': [
        {
            id: 1,
            name: 'Filé à Parmegiana',
            description: 'Filé empanado com molho de tomate e queijo derretido, acompanha arroz e fritas',
            price: 45.90,
            image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 2,
            name: 'Risoto de Cogumelos',
            description: 'Risoto cremoso com mix de cogumelos frescos e parmesão',
            price: 38.90,
            image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 3,
            name: 'Picanha Grelhada',
            description: 'Picanha grelhada na brasa, acompanha arroz, feijão, farofa e vinagrete',
            price: 52.90,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60'
        }
    ],
    'sobremesas': [
        {
            id: 4,
            name: 'Tiramisù',
            description: 'Sobremesa italiana com café, mascarpone e cacau em pó',
            price: 22.90,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 5,
            name: 'Cheesecake de Frutas Vermelhas',
            description: 'Cheesecake cremosa com calda de frutas vermelhas',
            price: 24.90,
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 6,
            name: 'Petit Gateau',
            description: 'Bolo quente com recheio de chocolate e sorvete de creme',
            price: 26.90,
            image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60'
        }
    ],
    'bebidas': [
        {
            id: 7,
            name: 'Limonada Suíça',
            description: 'Limonada com hortelã e gengibre',
            price: 12.90,
            image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 8,
            name: 'Mojito',
            description: 'Drink refrescante com rum, hortelã, limão e água com gás',
            price: 18.90,
            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 9,
            name: 'Caipirinha',
            description: 'Drink tradicional brasileiro com cachaça, limão e açúcar',
            price: 16.90,
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60'
        }
    ]
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu(menuData);
    initializeCart();
    initializeUI();
}); 