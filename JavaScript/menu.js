// ID extraído de tu Google Sheet
const SHEET_ID = '1cA0z43ZBx6BoQBlPxPt_VmBWODmRLriOJTsPl2R9gsU';
const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/Hoja1`;

let products = {};
let cart = [];
let currentCategory = 'comidamexicana';

// Función para cargar los productos dinámicamente desde Google Sheets
async function loadProductsFromSheets() {
    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();

        // Limpiar el objeto de productos
        products = {};

        data.forEach(item => {
            const seccion = (item.seccion || '').trim();
            if (!seccion) return;

            if (!products[seccion]) {
                products[seccion] = [];
            }

            const subcat = (item.subcategoria || '').trim();

            // Si hay subcategoría/separador y no se ha agregado aún en esta sección, se agrega
            const existeSeparador = products[seccion].some(
                p => p.type === 'separator' && p.title === subcat
            );

            if (subcat && subcat !== 'General' && !existeSeparador) {
                products[seccion].push({
                    type: "separator",
                    title: subcat
                });
            }

            // Agregar el producto a la sección
            products[seccion].push({
                name: item.nombre || '',
                price: parseFloat(item.precio) || 0.00,
                image: item.imagen || ''
            });
        });

        // Cargar la categoría activa una vez obtenidos los datos
        updateCategory(currentCategory);

    } catch (error) {
        console.error("Error al cargar los datos desde Google Sheets:", error);
    }
}

function updateCategory(category) {
    currentCategory = category;

    // Actualizar botones activos
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`button[onclick*="${category}"]`);
    if (btn) btn.classList.add('active');
    
    // Mostrar productos
    showCategory(category);
}

function showCategory(category) {
    const menu = document.getElementById("menu");
    if (!menu) return;
    
    menu.innerHTML = "";

    if (!products[category] || products[category].length === 0) {
        menu.innerHTML = "<p style='text-align:center;'>Cargando menú o no hay productos en esta sección...</p>";
        return;
    }
    
    products[category].forEach((item, index) => {
        // Si es un separador, crear un div con título centrado
        if (item.type === "separator") {
            const separator = document.createElement("div");
            separator.className = "category-separator";
            separator.innerHTML = `<h2>${item.title}</h2>`;
            menu.appendChild(separator);
            return; // Saltar al siguiente item
        }
        
        const div = document.createElement("div");
        div.className = "product";

        // Imagen: intentar ../img/, si falla probar ../IMG/, y finalmente mostrar texto placeholder
        const imgEl = document.createElement('img');
        imgEl.alt = item.name || '';
        imgEl.src = `../img/${item.image}`;
        imgEl.dataset.attempt = 'primary';
        imgEl.onerror = function() {
            if (this.dataset.attempt === 'primary') {
                this.dataset.attempt = 'secondary';
                this.src = `../IMG/${item.image}`;
            } else {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.textContent = 'Imagen próximamente';
                this.parentNode.replaceChild(placeholder, this);
            }
        };

        const title = document.createElement('h3');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.className = 'product-price';
        price.textContent = `$${item.price.toFixed(2)}`;

        div.appendChild(imgEl);
        div.appendChild(title);
        div.appendChild(price);

        if (item.name !== "Salsa de aguacate, Salsa  jalapeño picante, Salsa de tomate, Salsa  abanera picante") {
            const btn = document.createElement('button');
            btn.textContent = 'Agregar al carrito';
            btn.addEventListener('click', () => addToCart(category, index));
            div.appendChild(btn);
        }

        menu.appendChild(div);
    });
}

function addToCart(category, index) {
    const item = products[category][index];
    cart.push(item);
    updateCartTotal();
    showAddedNotification();
    updateCartBadge();
}

function updateCartTotal() {
    const totalEl = document.getElementById("cart-total");
    if (totalEl) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalEl.textContent = `$${total.toFixed(2)}`;
    }
}

function showAddedNotification() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.15)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);
    }
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const items = cart.map(item => `${item.name} ($${item.price.toFixed(2)})`).join("\n");
    const message = `Hola, quisiera hacer un pedido:\n\n${items}\n\nTotal: $${total.toFixed(2)}`;
    const whatsappNumber = "503 7743 0037";
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", () => {
    // Cargar productos desde Google Sheets automáticamente
    loadProductsFromSheets();

    // Vincular botones de WhatsApp
    const footerBtn = document.getElementById("whatsapp-button");
    if (footerBtn) footerBtn.addEventListener("click", sendWhatsAppOrder);

    const fab = document.getElementById("whatsapp-fab");
    if (fab) fab.addEventListener("click", sendWhatsAppOrder);

    // Inicializar badge del FAB
    updateCartBadge();

    // Botón SUBIR
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    function updateScrollTopVisibility() {
        if (!scrollTopBtn) return;
        if (window.pageYOffset > 250) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
    updateScrollTopVisibility();
    window.addEventListener('scroll', updateScrollTopVisibility);
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Actualiza el contador visual del FAB
function updateCartBadge() {
    const badge = document.getElementById('fab-badge');
    const fab = document.getElementById('whatsapp-fab');
    if (!badge || !fab) return;
    const count = cart.length;
    badge.textContent = count;
    if (count > 0) {
        fab.classList.add('has-items');
        fab.classList.remove('pulse');
    } else {
        const whatsappBtn = document.getElementById("whatsapp-button");
        if (whatsappBtn) {
            whatsappBtn.addEventListener("click", sendWhatsAppOrder);
        }
    }
}