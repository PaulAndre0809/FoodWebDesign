document.addEventListener('DOMContentLoaded', () => {
    const recipeFilter = document.getElementById('recipeFilter');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const recipeModal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalIngredients = document.getElementById('modalIngredients');
    const closeModal = document.querySelector('.close');

    // Filter Recipes
    recipeFilter.addEventListener('input', () => {
        const filterValue = recipeFilter.value.toLowerCase();
        recipeCards.forEach(card => {
            const recipeName = card.getAttribute('data-recipe').toLowerCase();
            if (recipeName.includes(filterValue)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Show Recipe Modal
    recipeCards.forEach(card => {
        card.querySelector('.view-recipe').addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            const ingredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']; // Example ingredients

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalIngredients.innerHTML = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');

            recipeModal.style.display = 'block';
        });
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        recipeModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
