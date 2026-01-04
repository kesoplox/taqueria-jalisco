// Sistema dual: Firebase + localStorage como respaldo
class ReviewSystem {
    constructor() {
        this.useFirebase = false;
        this.reviewList = document.getElementById("reviewList");
        this.reviewForm = document.getElementById("reviewForm");
        this.starContainer = document.getElementById("starContainer");
        this.selectedRating = 0;

        this.initializeSystem();
    }

    initializeSystem() {
        // Crear estrellas
        this.createStars();

        // Verificar Firebase
        this.checkFirebase();

        // Configurar evento del formulario
        this.setupFormListener();

        // Cargar reseñas iniciales
        this.loadReviews();
    }

    checkFirebase() {
        if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
            console.log("✓ Firebase disponible - usando Firebase Realtime Database");
            this.useFirebase = true;
            this.setupFirebaseListener();
        } else {
            console.log("⚠ Firebase no disponible - usando localStorage como respaldo");
            this.useFirebase = false;
        }
    }

    createStars() {
        if (!this.starContainer) return;

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.classList.add("star");
            star.innerHTML = "★";
            star.dataset.value = i;

            star.addEventListener("click", () => {
                this.selectedRating = i;
                this.updateStars();
            });

            this.starContainer.appendChild(star);
        }
    }

    updateStars() {
        const stars = document.querySelectorAll(".star");
        stars.forEach(star => {
            star.classList.toggle("selected", star.dataset.value <= this.selectedRating);
        });
    }

    setupFormListener() {
        if (!this.reviewForm) return;

        this.reviewForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const comment = document.getElementById("comment").value.trim();

            if (!name || !comment || this.selectedRating === 0) {
                alert("Completa todos los campos y selecciona una calificación.");
                return;
            }

            const review = {
                nombre: name,
                comentario: comment,
                estrellas: this.selectedRating,
                fecha: Date.now(),
                id: Math.random().toString(36).substr(2, 9)
            };

            if (this.useFirebase) {
                this.saveToFirebase(review);
            } else {
                this.saveToLocalStorage(review);
            }

            alert(`¡Reseña enviada! Tu código para eliminar esta reseña es: ${deleteCode}. Guárdalo para poder borrarla después.`);
        });
    }

    saveToFirebase(review) {
        console.log("Guardando en Firebase...");
        try {
            firebase.database().ref("resenas").push({
                nombre: review.nombre,
                comentario: review.comentario,
                estrellas: review.estrellas,
                fecha: review.fecha
            }).then(() => {
                console.log("✓ Reseña guardada en Firebase");
                alert("¡Reseña enviada con éxito!");
            }).catch(error => {
                console.error("✗ Error en Firebase:", error);
                // Respaldo a localStorage
                this.saveToLocalStorage(review);
                alert("Reseña guardada localmente (sin conexión a Firebase)");
            });
        } catch (error) {
            console.error("Error:", error);
            this.saveToLocalStorage(review);
        }
    }

    saveToLocalStorage(review) {
        console.log("Guardando en localStorage...");
        try {
            let reviews = JSON.parse(localStorage.getItem("resenas")) || [];
            reviews.push(review);
            localStorage.setItem("resenas", JSON.stringify(reviews));
            console.log("✓ Reseña guardada en localStorage");
            alert("¡Reseña guardada!");
            this.loadReviews();
        } catch (error) {
            console.error("Error al guardar en localStorage:", error);
            alert("Error al guardar la reseña");
        }
    }

    setupFirebaseListener() {
        if (!this.useFirebase) return;

        try {
            firebase.database().ref("resenas").on("value", (snapshot) => {
                console.log("✓ Datos actualizados desde Firebase");
                const reviews = [];
                snapshot.forEach(child => {
                    const data = child.val();
                    if (data) {
                        reviews.push({
                            id: child.key,
                            ...data
                        });
                    }
                });
                this.displayReviews(reviews);
            }, error => {
                console.error("Error de Firebase:", error);
                this.useFirebase = false;
                this.loadReviews();
            });
        } catch (error) {
            console.error("Error al configurar listener:", error);
            this.useFirebase = false;
            this.loadReviews();
        }
    }

    loadReviews() {
        if (this.useFirebase) {
            // Firebase se encarga del listener
            return;
        }

        // Cargar desde localStorage
        try {
            const reviews = JSON.parse(localStorage.getItem("resenas")) || [];
            this.displayReviews(reviews);
        } catch (error) {
            console.error("Error al cargar reseñas:", error);
            this.displayReviews([]);
        }
    }

    displayReviews(reviews) {
        if (!this.reviewList) return;

        this.reviewList.innerHTML = "";

        // Ordenar por fecha (más nuevas primero)
        const sorted = reviews.sort((a, b) => b.fecha - a.fecha);

        if (sorted.length === 0) {
            this.reviewList.innerHTML = '<p style="text-align: center; color: #000;">No hay reseñas aún. ¡Sé el primero!</p>';
            return;
        }

        sorted.forEach((data, index) => {
            const review = document.createElement("div");
            review.classList.add("review");

            const fecha = new Date(data.fecha);
            const fechaFormato = fecha.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            const tiempoTranscurrido = Date.now() - data.fecha;
            const puedeEliminar = tiempoTranscurrido < 10000; // 10 segundos

            const botonEliminar = puedeEliminar ? `<button class="btn-eliminar" data-id="${data.id || index}" title="Eliminar esta reseña (disponible por 10 segundos)">🗑️ Eliminar</button>` : '';

            review.innerHTML = `
                <div class="review-header">
                    <div>
                        <h4>${this.escapeHtml(data.nombre)}</h4>
                        <p class="fecha">${fechaFormato}</p>
                    </div>
                    ${botonEliminar}
                </div>
                <p>${this.escapeHtml(data.comentario)}</p>
                <p class="estrellas">${"★".repeat(data.estrellas)}${"☆".repeat(5 - data.estrellas)}</p>
            `;
            this.reviewList.appendChild(review);

            // Agregar evento al botón de eliminar solo si está disponible
            if (puedeEliminar) {
                const btnEliminar = review.querySelector(".btn-eliminar");
                const identifier = btnEliminar.getAttribute('data-id');
                btnEliminar.addEventListener("click", () => {
                    this.deleteReview(identifier);
                });
            }
        });
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    deleteReview(idOrIndex) {
        if (!confirm("¿Estás seguro de que quieres eliminar esta reseña?")) {
            return;
        }

        // Si estamos usando Firebase y el identificador parece una key de Firebase, borramos en la base
        if (this.useFirebase) {
            const id = idOrIndex; // debería ser la key de Firebase
            if (!id) {
                alert('Identificador inválido para eliminar en Firebase');
                return;
            }
            try {
                firebase.database().ref('resenas').child(id).remove()
                    .then(() => {
                        console.log('✓ Reseña eliminada en Firebase');
                        alert('Reseña eliminada correctamente');
                        // El listener de Firebase actualizará la lista automáticamente
                    })
                    .catch(error => {
                        console.error('Error al eliminar en Firebase:', error);
                        alert('Error al eliminar la reseña en Firebase');
                    });
            } catch (error) {
                console.error('Error al intentar eliminar en Firebase:', error);
                alert('Error al eliminar la reseña');
            }
            return;
        }

        // Si no usamos Firebase, idOrIndex es el índice en localStorage
        const index = parseInt(idOrIndex, 10);
        if (isNaN(index)) {
            alert('Identificador inválido para eliminar localmente');
            return;
        }

        try {
            const reviews = JSON.parse(localStorage.getItem("resenas")) || [];
            reviews.splice(index, 1);
            localStorage.setItem("resenas", JSON.stringify(reviews));
            console.log("✓ Reseña eliminada");
            alert("Reseña eliminada correctamente");
            this.loadReviews();
        } catch (error) {
            console.error("Error al eliminar reseña:", error);
            alert("Error al eliminar la reseña");
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ReviewSystem();
    });
} else {
    new ReviewSystem();
}