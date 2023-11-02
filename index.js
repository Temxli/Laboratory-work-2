function validateForm() {
    const itemInput = document.getElementById("item-input");
    const descriptionInput = document.getElementById("description-input");
    const itemList = document.getElementById("item-list");
    const newItemText = itemInput.value.trim();
    const descriptionText = descriptionInput.value.trim();

    if (newItemText === "") {
        alert("Please enter an item.");
        return false;
    }

    if (descriptionText === "") {
        alert("Please enter a description.");
        return false;
    }

    const newItem = document.createElement("p");
    newItem.innerHTML = `${newItemText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${descriptionText}`;
    itemList.appendChild(newItem);

    itemInput.value = "";
    descriptionInput.value = "";

    return false; 
}

function clearList() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
}
