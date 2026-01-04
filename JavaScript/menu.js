const products = {
    comidamexicana: [
        { type: "separator", title: "Tacos" },
        { name: "Taco de pierna de cerdo (ahumada, lengua)", price: 5.50, image: "tacopierna.jpeg" },
        { name: "Taco de Res", price: 4.50, image: "tacos.jpeg" },
        { name: "Taco al pastor", price: 4.50, image: "tacos.jpeg" },
        { name: "Taco de adobado", price: 4.50, image: "tacos.jpeg" },
        { name: "Taco de pollo", price: 4.50, image: "tacos.jpeg" },
        { name: "Taco de chorizo", price: 4.50, image: "tacos.jpeg" },
        { name: "Taco mixto", price: 4.50, image: "tacos.jpeg" },
        { type: "separator", title: "Tortas" },
        { name: "Torta al pastor", price: 5.00, image: "tortapastor.jpg" },
        { name: "Torta de adobado", price: 5.00, image: "tortaadobado.jpg" },
        { name: "Torta de res", price: 5.00, image: "tortares.jpg" },
        { name: "Torta de pollo", price: 5.00, image: "tortapollo.jpg" },
        { name: "Torta de chorizo", price: 5.00, image: "tortachorizo.jpg" },
        { name: "Torta mixta", price: 5.00, image: "tortamixta.jpg" },
        { type: "separator", title: "Burritos" },
        { name: "Burrito al pastor", price: 5.00, image: "burritores.jpeg" },
        { name: "Burrito de adobado", price: 5.00, image: "burritores.jpeg" },
        { name: "Burrito de pollo", price: 5.00, image: "burritores.jpeg" },
        { name: "Burrito de res", price: 5.00, image: "burritores.jpeg" },
        { name: "Burrito de chorizo", price: 5.00, image: "burritores.jpeg" },
        { name: "Burrito mixto", price: 5.00, image: "burritores.jpeg" },
        { type: "separator", title: "Gringas" },
        { name: "Gringa al pastor", price: 5.00, image: "gringapastor.jpg" },
        { name: "Gringa de adobado", price: 5.00, image: "gringaadobado.jpg" },
        { name: "Gringa de pollo", price: 5.00, image: "gringapollo.jpg" },
        { name: "Gringa de res", price: 5.00, image: "gringares.jpg" },
        { name: "Gringa de chorizo", price: 5.00, image: "gringachorizo.jpg" },
        { name: "Gringa mixta", price: 5.00, image: "gringamixta.jpg" },
        { type: "separator", title: "Nachos" },
        { name: "Nachos de carne", price: 4.00, image: "nachocarne.jpeg" },
        { name: "Nachos al pastor", price: 4.00, image: "nachospastor.jpeg" },
        { type: "separator", title: "Otros" },
        { name: "hamburguesa sencilla", price: 3.00, image: "hamburguesa.jpeg" },
        { name: "quesadilla de quesillo", price: 3.75, image: "quesadilla.jpg" },
        { name: "Sopa de tortilla", price: 3.75, image: "sopadetortilla.jpeg" },
    ],
    bebidas: [
        { type: "separator", title: "Bebidas sin alcohol" },
        { name: "Soda", price: 1.00, image: "soda.jpg" },
        { name: "Agua", price: 1.00, image: "agua.jpg" },
        { name: "Té lipton", price: 1.25, image: "té.jpg" },
        { name: "Jugo del valle", price: 1.00, image: "jugovalle.jpg" },
        { name : "Jugo de lata", price: 1.00, image: "jugolata.jpg" },
        { type: "separator", title: "Caliente" },
        { name: "Café", price: 0.75, image: "cafea.jpg" },
        { name: "Chocolate caliente", price: 1.00, image: "chocolate.jpg" },
        { name: "té de manzana", price: 1.00, image: "témanzana.jpg" },
        { name: "té de limón", price: 1.00, image: "télimon.jpg" },
        { type: "separator", title: "Natural jugos" },
        { name: "Jugo de naranja", price: 2.00, image: "jugonaranja.jpeg" },
        { name: "Limonada", price: 2.00, image: "limonada.jpg" },
        { name: "Horchata", price: 1.00, image: "horchata.jpg" },
        { name: "Jugo de piña", price: 2.00, image: "jugopiña.jpg" },
        { name: "Limonada hierva buena", price: 2.50, image: "limonadahierva.jpeg" },
        { name: "Limononada con fresa", price: 2.50, image: "limonadafresa.jpg" },
        { name: "Mix de limon y naranja", price: 2.50, image: "mix.jpeg" },
        { name: "Jugo de jamaica", price: 1.00, image: "jugojamaica.jpeg" },
        { name: "Cevada", price: 1.00, image: "cevada.jpg" },
        { type: "separator", title: "Licuados" },
        { name: "Licuado de fresa", price: 2.00, image: "licuadofresa.jpeg" },
        { name: "Licuado de coco", price: 2.00, image: "licuadococo.jpeg" },
        { name: "Licuado de zanahoria", price: 2.00, image: "licuadozanahoria.jpeg" },
        { name: "Licuado de sandia", price: 2.00, image: "licuadosandia.jpg" },
        { name: "Licuado levanta muertos", price: 3.00, image: "licuadolevantamuertos.jpeg" },
        { type : "separator", title: "Frozzen" },
        { name: "Frozzen de fresa", price: 2.50, image: "frozzenfresa.jpg" },
        { name: "Frozzen de coco", price: 2.50, image: "frozzencoco.jpg" },
        { name: "Frozzen de limon", price: 2.50, image: "frozzenlimon.jpg" },
        { name: "Frozzen de piña", price: 2.50, image: "frozzenpiña.jpg" },
        { name: "Frozzen de sandia", price: 2.50, image: "frozzensandia.jpg" },
        { name: "Frozzen de mango (por temporada)", price: 2.50, image: "frozzenmango.jpeg" },
        { type: "separator", title: "Bebidas con alcohol" },
        { name: "Pilsener botella", price: 1.70, image: "pilsenerbotella.jpg" },
        { name: "Pilsener lata", price: 1.50, image: "pilsenerlata.jpg" },
        { name: "Cerveza corona", price: 2.75, image: "cervezacorona.jpg" },
        { name: "Suprema botella", price: 2.50, image: "supremabotella.jpg" },
        { name: "Suprema lata", price: 2.50, image: "supremalata.jpg" },
        { name: "Smirnoff", price: 2.75, image: "smirnoff.jpg" },
        { type: "separator", title: "Micheladas" },
        { name: "Michelada con pilsener", price: 4.00, image: "micheladapilsener.jpg" },
        { name: "Michelada con golden", price: 4.00, image: "micheladagolden.jpg" },
        { name: "Michelada con corona", price: 4.50, image: "micheladacorona.jpeg" },
        { name: "Michelada con suprema", price: 4.50, image: "micheladasuprema.jpeg" },
    ],
    alambres: [
        { name: "Alambre al pastor", price: 5.50, image: "alambrepastor.jpg" },
        { name: "Alambre de adobado", price: 5.50, image: "alamreadobado.jpg" },
        { name: "Alambre de pollo", price: 5.50, image: "alambrepollo.jpg" },
        { name: "Alambre de res", price: 5.50, image: "alambreres.jpg" },
        { name: "Alambre de chorizo", price: 5.50, image: "alambrechorizo.jpg" },
        { name: "Alambre mixto", price: 5.50, image: "ambremixto.jpg" }
    ],
    birria: [
        { name: "Tacos de birria", price: 6.50, image: "birria.jpeg" },
        { name: "Torta de birria", price: 7.00, image: "tortabirria.jpeg" },
        { name: "Burrito de birria", price: 7.00, image: "burritos.jpeg" },
        { name: "Gringas de birria", price: 6.50, image: "gringas.jpeg" },
        { type: "separator", title: "(tacos) 4 unidades doble tortilla" },
    ],
    taquizas: [
        {type: "separator", title: "Taquizas para 3 personas"},
        { name: "16 tacos + 3 sodas", price: 20.00, image: "taquizas.jpeg" },
        {type: "separator", title: "Taquizas para 10 personas"},
        { name: "20 tacos + 4 sodas", price: 25.00, image: "taquizas.jpeg" },
        { type: "separator", title: "Taquizas para 5 personas"},
        { name: "24 tacos + 5 sodas + 1 sopa de tortilla", price: 40.00, image: "taquizas.jpeg" },
    ],
    combos: [
        { type: "separator", title: "Combo 1" },
        { name: "1 burrito + 2 tacos unidades + 1 soda", price: 8.00, image: "combo1.jpeg" },
        { type: "separator", title: "Combo 2" },
        { name: "1 torta + 2 tacos unidades + 1 soda", price: 8.0, image: "combo2.jpeg" },
        { type: "separator", title: "Combo 3"},
        { name: "4 tacos + 2 gringas cualquier especialidad + 1 soda", price: 7.50, image: "combo3.jpeg" },
        { type: "separator", title: "Combo 4"},
        { name: "4 gringas + 2 tacos unidades + 1 soda", price: 8.00, image: "combo4.jpeg" },
        { type: "separator", title: "Combo 5"},
        { name: "1 sopa de tortillas + 2 tacos unidades + 1 soda", price: 7.00, image: "combo5.jpeg" },
    ],
    cocteles: [
        { name: "Camaron natural", price: 7.00, image: "camaron.jpg" },
        { name: "Concha", price: 7.00, image: "concha.jpg" },
        { name: "Salsa rosada", price: 8.50, image: "salsa.jpg" },
        { name: "Mixto", price: 8.50, image: "mixto.jpg" },
    ],
    platosfuertes: [
        { name: "Camarones al ajillo", price: 7.50, image: "camaronesajillo.jpeg" },
        { name: "Carne a la parrilla", price: 5.00, image: "carnealaparrilla.jpeg" },
        { name: "Alitas a la barbacoa", price: 5.00, image: "alitas.jpg" },
        { name: "Pechuga asada", price: 5.00, image: "pechugaasada.jpeg" },
    ],
    cenastipicas: [
        { name: "Tamal y cafe", price: 2.50, image: "tamal.jpeg" },
        { name: "Cazamiento y chorizo (2 tortillas)", price: 3.50, image: "cazamientochorizo.jpg" },
        { name: "Cazamiento, chirmol aguacate (2 tortillas)", price: 3.50, image: "cazamientochirmol.jpg" },
        { name: "Frijoles platano y huevo (2 tortillas)", price: 3.50, image: "cena3.jpeg" },
    ],
    detox: [
        {type: "separator", title: "Jugos desintoxicantes para tu organismo "},
        { name: "Zanahoria", price: 2.50, image: "licuadozanahoria.jpeg" },
        { name: "Manzana verde", price: 2.50, image: "manzanaverde.jpeg" },
        { name: "Manzana roja", price: 2.50, image: "manzanaroja.jpg" },
        { name: "Papaya", price: 2.50, image: "papaya.jpg" },
        { name: "Pepino", price: 2.50, image: "pepino.jpg" },
    ],
    aderesos: [
        { type: "separator", title: "Aderesos para tu comida favorita" },
        { name: "Salsa de aguacate, Salsa  jalapeño picante, Salsa de tomate, Salsa  abanera picante", price: 0.00, image: "aderesos.jpeg" },
    ],
};

let cart = [];

function updateCategory(category) {
    // Actualizar botones activos
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`button[onclick*="${category}"]`);
    if (btn) btn.classList.add('active');
    
    // Mostrar productos
    showCategory(category);
}

function showCategory(category) {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    
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
            // Si no se ha intentado la ruta alternativa, probar ../IMG/
            if (this.dataset.attempt === 'primary') {
                this.dataset.attempt = 'secondary';
                this.src = `../IMG/${item.image}`;
            } else {
                // Si ya se intentó la secundaria, reemplazar con texto placeholder
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
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}

function showAddedNotification() {
    // Efecto visual de añadido al carrito
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.15)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
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

// Mostrar la primera categoría al cargar y asociar botones que existen en DOM
document.addEventListener("DOMContentLoaded", () => {
    // Usar updateCategory para que también se marque el botón como activo
    updateCategory('comidamexicana');

    // Vincular el botón del footer y el FAB al mismo comportamiento
    const footerBtn = document.getElementById("whatsapp-button");
    if (footerBtn) footerBtn.addEventListener("click", sendWhatsAppOrder);

    const fab = document.getElementById("whatsapp-fab");
    if (fab) fab.addEventListener("click", sendWhatsAppOrder);

    // Inicializar badge del FAB
    updateCartBadge();

    // Botón SUBIR: mostrar cuando el usuario baja la página
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