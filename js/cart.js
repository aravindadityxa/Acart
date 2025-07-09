// Cart functionality
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity
        });
    }
    
    saveCart(cart);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCart(productId, quantity) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            existingItem.quantity = quantity;
            saveCart(cart);
        }
    }
}

function clearCart() {
    localStorage.removeItem('cart');
}

function getCartItemsWithDetails() {
    const cart = getCart();
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    return cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return {
            ...item,
            ...product
        };
    });
}

function calculateCartTotal() {
    const cartItems = getCartItemsWithDetails();
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryCharge = subtotal > 1000 ? 0 : 50;
    const total = subtotal + deliveryCharge;
    
    return {
        subtotal,
        deliveryCharge,
        total
    };
}