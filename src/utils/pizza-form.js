export function pizzaForm(element) {
    // Crea il form
    const form = document.createElement('form');
    form.id = 'pizza-order-form';

    // Crea il select per la dimensione
    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Size:';
    sizeLabel.setAttribute('for', 'size');

    const sizeSelect = document.createElement('select');
    sizeSelect.id = 'size';

    const sizes = ['small', 'medium', 'large'];
    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size.charAt(0).toUpperCase() + size.slice(1);
        sizeSelect.appendChild(option);
    });

    //Crea container per gli ingredienti
    const divContainer = document.createElement('div');
    divContainer.className = 'input-ingredients-container'

    // Crea la sezione degli ingredienti
    const ingredientsLabel = document.createElement('label');
    ingredientsLabel.textContent = 'Ingredients:';

    const inputIngredients = document.createElement('input');
    inputIngredients.className = 'input-ingredients';

    const addIngredientButton = document.createElement('button');
    addIngredientButton.className = 'add-ingredient-button';
    addIngredientButton.textContent = 'Add Ingredient';
    addIngredientButton.type = 'button';
    addIngredientButton.onclick = () => onAddIngrendients(divContainer, inputIngredients);
    addIngredientButton.onkeydown = (event) => {
        console.log('kwy premuta');
        
        if (event.key === 'Enter') {
        console.log('enter premuta');

            onAddIngrendients(divContainer, inputIngredients);
        }
    }
    // Crea il pulsante di invio
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Order Pizza';
    submitButton.className = 'submit-button-order';

    // Aggiungi tutti gli elementi al form
    form.appendChild(sizeLabel);
    form.appendChild(sizeSelect);
    form.appendChild(ingredientsLabel);

    form.appendChild(divContainer);
    divContainer.appendChild(inputIngredients);
    divContainer.appendChild(addIngredientButton);
    // checkboxes.forEach(checkbox => form.appendChild(checkbox));
    form.appendChild(submitButton);

    // Pulisci l'elemento contenitore e aggiungi il nuovo form
    element.innerHTML = '';
    element.appendChild(form);
}

function onAddIngrendients(appendTo, ingredientInputValue) {
    //Se l'input è vuoto
    const ingredient = ingredientInputValue.value;
    if (!ingredient) return;
    
    let ingredientContainer = document.querySelector('.ingredient-container-list');
    
    //Crea container degli ingredineti se non esiste
    if (!ingredientContainer) {        
        ingredientContainer = document.createElement('div');
        ingredientContainer.className = 'ingredient-container-list';
        if (appendTo) appendTo.appendChild(ingredientContainer);
    }

    //Crea l'elemento se non esiste
    let itemsAlreadyIn = [];
    itemsAlreadyIn = getListItemValue(ingredientContainer);

    if (!itemsAlreadyIn.includes(ingredient)) {
        const ingredientElement = document.createElement('div');
        ingredientElement.className = 'ingredient-list-' + ingredient;
        ingredientElement.textContent = ingredient;
        ingredientContainer.appendChild(ingredientElement);
    } else console.log("Prodotto già presente");

}

function getListItemValue(listContainer) {
    if (!listContainer) return [];

    const listItems = listContainer.children;
    const itemsValues = [];

    Array.from(listItems).forEach(listItem => {

        itemsValues.push(listItem.textContent.trim());
    });

    return itemsValues;
}