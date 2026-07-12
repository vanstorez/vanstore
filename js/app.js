// Product Data
// All images stored in the images/ folder.
// To change a photo, replace the file or update the path below.
// Set image: null to show a colored gradient placeholder.

const products = [
    // ===== CARS COLLECTION - ₹399 =====
    {
        id: 1,
        name: "Ferrari New Design",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: "new",
        color: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        icon: "fa-tshirt",
        image: "images/ferrari-1.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium Ferrari-inspired t-shirt. Bold motorsport design for the speed lovers."
    },
    {
        id: 2,
        name: "Ferrari New Design",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: "hot",
        color: "linear-gradient(135deg, #0f3460 0%, #533483 100%)",
        icon: "fa-tshirt",
        image: "images/ferrari-2.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium Ferrari-inspired t-shirt. Bold motorsport design for the speed lovers."
    },
    {
        id: 3,
        name: "Ferrari New Design",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)",
        icon: "fa-tshirt",
        image: "images/ferrari-3.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium Ferrari-inspired t-shirt. Bold motorsport design for the speed lovers."
    },
    {
        id: 4,
        name: "Ferrari New Design",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: "new",
        color: "linear-gradient(135deg, #533483 0%, #0f3460 100%)",
        icon: "fa-tshirt",
        image: "images/ferrari-4.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium Ferrari-inspired t-shirt. Bold motorsport design for the speed lovers."
    },
    {
        id: 5,
        name: "Aadivasi T-Shirt Design",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: "new",
        color: "linear-gradient(135deg, #0f3460 0%, #533483 100%)",
        icon: "fa-tshirt",
        image: "images/shopify-t.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Authentic Aadivasi tribal design t-shirt. Heritage meets modern streetwear."
    },
    {
        id: 6,
        name: "Aadivasi Logo & Warli Art Design",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: "hot",
        color: "linear-gradient(135deg, #1b1b2f 0%, #162447 100%)",
        icon: "fa-tshirt",
        image: "images/shopify-r.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Warli art meets modern typography. Aadivasi logo design on premium cotton."
    },

    // ===== T-SHIRT DESIGNS - ₹399 =====
    {
        id: 7,
        name: "BMW M4",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #162447 0%, #1f4068 100%)",
        icon: "fa-tshirt",
        image: "images/tshirt-1.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium quality t-shirt. Comfortable fit for everyday style."
    },
    {
        id: 8,
        name: "BMW M4",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #162447 0%, #1f4068 100%)",
        icon: "fa-tshirt",
        image: "images/tshirt-2.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium quality t-shirt. Comfortable fit for everyday style."
    },
    {
        id: 9,
        name: "BMW M4",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #1a1a2e 0%, #2d132c 100%)",
        icon: "fa-tshirt",
        image: "images/tshirt-3.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium quality t-shirt. Comfortable fit for everyday style."
    },
    {
        id: 10,
        name: "BMW M4",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #162447 0%, #1f4068 100%)",
        icon: "fa-tshirt",
        image: "images/tshirt-4.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium quality t-shirt. Comfortable fit for everyday style."
    },
    {
        id: 11,
        name: "BMW M4",
        category: "tshirts",
        price: 399,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #2d132c 0%, #801336 100%)",
        icon: "fa-tshirt",
        image: "images/tshirt-5.jpg",
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Premium quality t-shirt. Comfortable fit for everyday style."
    },
    {
        id: 12,
        name: "Tribal Stitch Chinos",
        category: "pants",
        price: 299,
        originalPrice: null,
        badge: "new",
        color: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
        icon: "fa-male",
        image: null,
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Slim chinos with signature tribal stitch detailing along the seams."
    },
    {
        id: 13,
        name: "Tribal Harem Pants",
        category: "pants",
        price: 299,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #162447 0%, #1a1a2e 100%)",
        icon: "fa-male",
        image: null,
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Wide-leg harem pants with hand-dyed tribal patterns. One of a kind."
    },
    {
        id: 14,
        name: "Ritual Cardigan",
        category: "jackets",
        price: 299,
        originalPrice: 399,
        badge: "sale",
        color: "linear-gradient(135deg, #801336 0%, #2d132c 100%)",
        icon: "fa-vest-patches",
        image: null,
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Vintage cardigan with ritualistic patterned buttons and tribal weave."
    },
    {
        id: 15,
        name: "Beaded Wrist Cuff",
        category: "accessories",
        price: 299,
        originalPrice: null,
        badge: null,
        color: "linear-gradient(135deg, #8b4513 0%, #cd853f 100%)",
        icon: "fa-ring",
        image: null,
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Hand-beaded leather cuff with traditional tribal motifs."
    },
    {
        id: 16,
        name: "Moon Phase Watch",
        category: "accessories",
        price: 299,
        originalPrice: null,
        badge: "new",
        color: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        icon: "fa-clock",
        image: null,
        inventory: 50,
        sizes: ["S", "M", "L", "XL"],
        description: "Minimalist timepiece with moon phase dial. Ancient wisdom, modern craft."
    }
];

// State
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let visibleProducts = 8;
let dbImages = {}; // Stores images loaded from IndexedDB
let adminClickCount = 0;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartItemCount = document.getElementById('cartItemCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearchModal = document.getElementById('closeSearchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const wishlistCount = document.getElementById('wishlistCount');
const newsletterForm = document.getElementById('newsletterForm');
const pageLoader = document.getElementById('pageLoader');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const successModal = document.getElementById('successModal');
const continueShopBtn = document.getElementById('continueShopBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    loadImagesFromDB().then(() => {
        renderProducts();
    });
    setupEventListeners();
    loadCartFromStorage();
    initScrollAnimations();
    initSmoothScroll();
    setupAdminPanel();
});

// Render Products
function renderProducts() {
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    const productsToShow = filteredProducts.slice(0, visibleProducts);
    
    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Show/hide load more button
    if (visibleProducts >= filteredProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Create Product Card
function getProductImage(product) {
    if (dbImages[product.id]) {
        return `<img src="${dbImages[product.id]}" alt="${product.name}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">`;
    }
    if (product.image) {
        return `<img src="${product.image}" alt="${product.name}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">`;
    }
    return `<div class="product-image-bg" style="background: ${product.color};">
                <i class="fas ${product.icon}"></i>
            </div>`;
}

function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : null;
    const cartQty = cart.filter(item => item.id === product.id).reduce((sum, item) => sum + item.quantity, 0);
    const available = product.inventory - cartQty;
    const outOfStock = available <= 0;
    
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                ${getProductImage(product)}
                <div class="product-badges">
                    ${product.badge === 'new' ? '<span class="product-badge badge-new">New</span>' : ''}
                    ${product.badge === 'sale' ? '<span class="product-badge badge-sale">Sale</span>' : ''}
                    ${product.badge === 'hot' ? '<span class="product-badge badge-hot">Hot</span>' : ''}
                    ${discount ? `<span class="product-badge badge-sale">${discount}% Off</span>` : ''}
                    ${outOfStock ? '<span class="product-badge badge-sold">Sold Out</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn" onclick="openQuickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="toggleWishlist(${product.id})" title="Wishlist">
                        <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    ${outOfStock ? '' : `<button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>`}
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-stock ${outOfStock ? 'out' : available <= 10 ? 'low' : ''}">
                    ${outOfStock ? 'Sold Out' : available <= 10 ? `Only ${available} left` : 'In Stock'}
                </div>
            </div>
        </div>
    `;
}

// Preloader
function initPreloader() {
    setTimeout(() => {
        pageLoader.classList.add('hidden');
    }, 800);
}

// Scroll Animations
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            visibleProducts = 8;
            renderProducts();
        });
    });

    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Search
    searchBtn.addEventListener('click', () => searchModal.classList.add('active'));
    closeSearchModal.addEventListener('click', () => searchModal.classList.remove('active'));
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) searchModal.classList.remove('active');
    });

    // Quick View
    closeQuickView.addEventListener('click', () => quickViewModal.classList.remove('active'));
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) quickViewModal.classList.remove('active');
    });

    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
    closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('active'));
    });

    // Load More
    loadMoreBtn.addEventListener('click', () => {
        visibleProducts += 4;
        renderProducts();
    });

    // Size buttons in quick view
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Color buttons in quick view
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Quick View Add to Cart
    document.getElementById('quickViewAddToCart').addEventListener('click', () => {
        const productId = parseInt(quickViewModal.dataset.productId);
        addToCart(productId);
        quickViewModal.classList.remove('active');
    });

    // Quick View Wishlist
    document.getElementById('quickViewWishlist').addEventListener('click', () => {
        const productId = parseInt(quickViewModal.dataset.productId);
        toggleWishlist(productId);
    });

    // Newsletter
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thanks for subscribing!');
        newsletterForm.reset();
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
        if (filtered.length > 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = filtered.map(p => {
                const imgSrc = dbImages[p.id] || p.image;
                return `
                <div class="search-result-item" onclick="handleSearchSelect(${p.id})">
                    <div class="search-result-icon" style="background: ${imgSrc ? `url(${imgSrc}) center/cover no-repeat` : p.color}; border-radius: 4px;">
                        ${imgSrc ? '' : `<i class="fas ${p.icon}"></i>`}
                    </div>
                    <div class="search-result-info">
                        <h4>${p.name}</h4>
                        <span>${p.category}</span>
                    </div>
                    <span class="search-result-price">₹${p.price}</span>
                </div>
            `}).join('');
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<p style="padding: 20px; color: var(--text-light); text-align: center;">No products found</p>';
        }
    });

    // Search tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            searchInput.value = tag.textContent;
            searchInput.dispatchEvent(new Event('input'));
        });
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.querySelectorAll('.filter-tab').forEach(t => {
                t.classList.remove('active');
                if (t.dataset.filter === category) t.classList.add('active');
            });
            currentFilter = category;
            visibleProducts = 8;
            renderProducts();
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchModal.classList.remove('active');
            quickViewModal.classList.remove('active');
            closeCart();
            mobileMenu.classList.remove('active');
        }
    });

    // Scroll animations
    window.addEventListener('scroll', handleScroll);

    // Checkout
    checkoutBtn.addEventListener('click', openCheckout);
    closeCheckout.addEventListener('click', closeCheckoutModal);
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckoutModal();
    });
    continueShopBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        closeCheckoutModal();
        closeCart();
    });

    // Payment method switching
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            const method = opt.dataset.method;
            document.getElementById('upiForm').style.display = method === 'upi' ? 'block' : 'none';
            document.getElementById('cardForm').style.display = method === 'card' ? 'block' : 'none';
            document.getElementById('codForm').style.display = method === 'cod' ? 'block' : 'none';
        });
    });

    // Pay buttons
    document.getElementById('payBtn').addEventListener('click', processUPIPayment);
    document.getElementById('payCardBtn').addEventListener('click', processCardPayment);
    document.getElementById('placeOrderBtn').addEventListener('click', processCODPayment);
}

// Cart Functions
function getAvailableStock(productId) {
    const product = products.find(p => p.id === productId);
    const cartQty = cart.filter(item => item.id === productId).reduce((sum, item) => sum + item.quantity, 0);
    return product.inventory - cartQty;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const available = getAvailableStock(productId);
    
    if (available <= 0) {
        showToast(`${product.name} is sold out!`);
        renderProducts();
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity >= product.inventory) {
            showToast(`Only ${product.inventory} available for ${product.name}`);
            return;
        }
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            size: document.querySelector('.size-btn.active')?.textContent || product.sizes[1]
        });
    }
    
    updateCart();
    showToast(`${product.name} added to cart!`);
    saveCartToStorage();
    renderProducts();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToStorage();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const newQty = item.quantity + change;
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (newQty > product.inventory) {
        showToast(`Only ${product.inventory} available`);
        return;
    }
    
    item.quantity = newQty;
    updateCart();
    saveCartToStorage();
    renderProducts();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartItemCount.textContent = totalItems;
    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    cartTotal.textContent = `₹${subtotal.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="#shop" class="btn btn-primary" onclick="closeCart()">Start Shopping</a>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => createCartItem(item)).join('');
        cartFooter.style.display = 'block';
    }
}

function createCartItem(item) {
    const imgSrc = dbImages[item.id] || item.image;
    const imageHtml = imgSrc
        ? `<img src="${imgSrc}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">`
        : `<i class="fas ${item.icon}" style="color: rgba(255,255,255,0.5); font-size: 30px;"></i>`;
    
    return `
        <div class="cart-item">
            <div class="cart-item-image" style="background: ${imgSrc ? '#f0f0f0' : item.color}; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                ${imageHtml}
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-meta">Size: ${item.size}</p>
                <p class="cart-item-price">₹${item.price}</p>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = products.find(p => p.id === productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showToast(`${product.name} added to wishlist!`);
    } else {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`);
    }
    
    wishlistCount.textContent = wishlist.length;
    renderProducts();
}

// Quick View
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const imgSrc = dbImages[product.id] || product.image;
    
    const imageHtml = imgSrc
        ? `<img src="${imgSrc}" alt="${product.name}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">`
        : `<i class="fas ${product.icon}" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 80px; color: rgba(255,255,255,0.3);"></i>`;
    
    document.getElementById('quickViewImage').style.background = imgSrc ? `url(${imgSrc}) center/cover no-repeat` : product.color;
    document.getElementById('quickViewImage').innerHTML = imageHtml;
    document.getElementById('quickViewImage').style.position = 'relative';
    document.getElementById('quickViewCategory').textContent = product.category;
    document.getElementById('quickViewName').textContent = product.name;
    document.getElementById('quickViewPrice').textContent = `₹${product.price}`;
    document.getElementById('quickViewOriginalPrice').textContent = product.originalPrice ? `₹${product.originalPrice}` : '';
    document.getElementById('quickViewDesc').textContent = product.description;
    
    const available = getAvailableStock(product.id);
    const stockEl = document.getElementById('quickViewStock');
    if (available <= 0) {
        stockEl.textContent = 'Sold Out';
        stockEl.className = 'stock-status out';
        document.getElementById('quickViewAddToCart').disabled = true;
        document.getElementById('quickViewAddToCart').style.opacity = '0.5';
    } else {
        stockEl.textContent = available <= 10 ? `Only ${available} left` : 'In Stock';
        stockEl.className = 'stock-status';
        document.getElementById('quickViewAddToCart').disabled = false;
        document.getElementById('quickViewAddToCart').style.opacity = '1';
    }
    
    document.getElementById('quickViewSizeGuide').onclick = (e) => {
        e.preventDefault();
        showToast('S = 38, M = 40, L = 42, XL = 44 (Chest in inches)');
    };
    
    quickViewModal.dataset.productId = productId;
    quickViewModal.classList.add('active');
}

// Search Select
function handleSearchSelect(productId) {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.classList.remove('active');
    openQuickView(productId);
}

// Toast Notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Storage
function saveCartToStorage() {
    localStorage.setItem('vanstore_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('vanstore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Scroll Handler
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}

// ==============================
// CHECKOUT
// ==============================

function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    closeCart();
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = `₹${subtotal}`;
    document.getElementById('payAmount').textContent = `₹${subtotal}`;
    document.getElementById('payCardAmount').textContent = `₹${subtotal}`;
    
    const itemsHtml = cart.map(item => `
        <div class="checkout-item-line">
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    document.getElementById('checkoutItems').innerHTML = itemsHtml;
    
    checkoutModal.classList.add('active');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
}

function processUPIPayment() {
    const upiId = document.getElementById('upiInput').value.trim();
    if (!upiId) {
        showToast('Please enter your UPI ID');
        return;
    }
    if (!upiId.includes('@')) {
        showToast('Invalid UPI ID (e.g., name@upi)');
        return;
    }
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showOrderSuccess('UPI', subtotal);
}

function processCardPayment() {
    const cardNum = document.querySelector('#cardForm input[placeholder="Card Number"]').value.trim();
    if (!cardNum || cardNum.replace(/\s/g, '').length < 16) {
        showToast('Please enter a valid card number');
        return;
    }
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showOrderSuccess('Card', subtotal);
}

function processCODPayment() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showOrderSuccess('COD', subtotal);
}

function showOrderSuccess(method, total) {
    checkoutModal.classList.remove('active');
    
    const orderId = `VAN-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(1000 + Math.random() * 9000)}`;
    document.getElementById('orderId').textContent = orderId;
    document.getElementById('orderPayment').textContent = method;
    document.getElementById('orderTotal').textContent = `₹${total}`;
    
    // Update inventory
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) product.inventory -= item.quantity;
    });
    
    // Clear cart
    cart = [];
    updateCart();
    saveCartToStorage();
    renderProducts();
    
    successModal.classList.add('active');
}

// ==============================
// INDEXED DB - Image Storage
// ==============================

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('vanstore_images', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('product_images')) {
                db.createObjectStore('product_images', { keyPath: 'id' });
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

function saveImageToDB(productId, dataUrl) {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('product_images', 'readwrite');
            const store = tx.objectStore('product_images');
            store.put({ id: productId, dataUrl });
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e.target.error);
        });
    });
}

function loadImagesFromDB() {
    return openDB().then(db => {
        return new Promise((resolve) => {
            const tx = db.transaction('product_images', 'readonly');
            const store = tx.objectStore('product_images');
            const request = store.getAll();
            request.onsuccess = (e) => {
                const results = e.target.result || [];
                results.forEach(item => {
                    dbImages[item.id] = item.dataUrl;
                });
                resolve();
            };
            request.onerror = () => resolve();
        });
    }).catch(() => {});
}

function deleteImageFromDB(productId) {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('product_images', 'readwrite');
            const store = tx.objectStore('product_images');
            store.delete(productId);
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e.target.error);
        });
    });
}

// ==============================
// ADMIN PANEL
// ==============================

function setupAdminPanel() {
    const logo = document.querySelector('.logo');
    const adminPanel = document.getElementById('adminPanel');
    const adminOverlay = document.getElementById('adminOverlay');
    const closeBtn = document.getElementById('closeAdminPanel');
    const exportBtn = document.getElementById('exportAdminBtn');
    
    // Open admin: click logo 5 times rapidly
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        adminClickCount++;
        const remaining = 5 - adminClickCount;
        if (remaining > 0 && remaining <= 3) {
            showToast(`${remaining} more click${remaining > 1 ? 's' : ''} for admin panel`);
        }
        if (adminClickCount >= 5) {
            adminClickCount = 0;
            openAdminPanel();
        }
        setTimeout(() => { adminClickCount = 0; }, 2000);
    });
    
    // Close admin
    closeBtn.addEventListener('click', closeAdminPanel);
    adminOverlay.addEventListener('click', closeAdminPanel);
    
    // Export images
    exportBtn.addEventListener('click', exportAdminData);
    
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAdminPanel();
    });
}

function openAdminPanel() {
    document.getElementById('adminPanel').classList.add('active');
    document.getElementById('adminOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderAdminProducts();
}

function closeAdminPanel() {
    document.getElementById('adminPanel').classList.remove('active');
    document.getElementById('adminOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function renderAdminProducts() {
    const container = document.getElementById('adminProducts');
    container.innerHTML = products.map(p => {
        const hasImage = !!dbImages[p.id];
        const previewSrc = dbImages[p.id] || p.image;
        return `
            <div class="admin-product-item" data-id="${p.id}">
                <div class="admin-product-preview" style="background: ${p.color};">
                    ${previewSrc 
                        ? `<img src="${previewSrc}" alt="${p.name}">` 
                        : `<div class="no-image"><i class="fas ${p.icon}"></i></div>`
                    }
                </div>
                <div class="admin-product-info">
                    <h4>${p.name}</h4>
                    <span class="admin-category">${p.category} — ₹${p.price}</span>
                </div>
                <div class="admin-upload-area">
                    <input type="file" accept="image/*" onchange="handleAdminUpload(${p.id}, this)">
                    <button class="admin-upload-btn"><i class="fas fa-cloud-upload-alt"></i> Upload</button>
                </div>
                <div class="admin-product-status ${hasImage ? 'uploaded' : 'pending'}"></div>
            </div>
        `;
    }).join('');
}

function handleAdminUpload(productId, input) {
    const file = input.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        saveImageToDB(productId, dataUrl).then(() => {
            dbImages[productId] = dataUrl;
            renderAdminProducts();
            renderProducts();
            showToast(`Image uploaded for ${products.find(p => p.id === productId).name}`);
        });
    };
    reader.readAsDataURL(file);
    input.value = '';
}

function exportAdminData() {
    const data = products.map(p => ({
        id: p.id,
        name: p.name,
        hasImage: !!dbImages[p.id],
        imageSize: dbImages[p.id] ? Math.round((dbImages[p.id].length * 3) / 4 / 1024) + 'KB' : 'N/A'
    }));
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vanstore-admin-export.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Export downloaded!');
}