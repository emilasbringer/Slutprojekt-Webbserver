const elements = document.querySelectorAll(".list-group-item");
const addUserButton = document.querySelector("#addButton");
const updateUserButton = document.querySelector("#updateButton");
const deleteUserButton = document.querySelector("#deleteButton");
const refreshButton = document.querySelector("#refreshButton");
const sidepanel = document.querySelector(".sidepanel");
const mainpanel = document.querySelector(".mainpanel");
const mainpanelCloseButton = document.querySelector("#mainpanel-closebutton");
let itemSelected = false;
let selectedItem;

toggleTaskformButtons(); 

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", selectItem);
    elements[i].setAttribute('id', i);
    elements[i].firstElementChild.firstElementChild.firstElementChild.addEventListener("click", counterToggleBox);
}

addUserButton.addEventListener("click", addUser);
updateUserButton.addEventListener("click", updateUser);
mainpanelCloseButton.addEventListener("click", closePanel);

function closePanel() {
    mainpanel.style.display = "none";
}

function updateUser() {
    if(itemSelected) {
        sidepanel.style.display = "none";
        mainpanel.children[1].innerHTML = "Update user";
        mainpanel.style.display = "block";
    }
}

function addUser() {
    sidepanel.style.display = "none";
    mainpanel.children[1].innerHTML = "Add user";
    mainpanel.style.display = "block";
}

function unselectAll() {
    for (let i = 0; i < elements.length; i++) {
        if(i != selectedItem) {
            elements[i].firstElementChild.firstElementChild.firstElementChild.checked = false;
        }
    }
}

function counterToggleBox() {
    if (this.checked == true) {
        this.checked = false;
    } else { 
        this.checked = true;
    }
}

function toggleBox(inputElement) {
    console.log("toggling box");
    if (inputElement.firstElementChild.firstElementChild.firstElementChild.checked == true) {
        inputElement.firstElementChild.firstElementChild.firstElementChild.checked = false;
        sidepanel.style.display = "none";
        itemSelected = false;
    } else { 
        inputElement.firstElementChild.firstElementChild.firstElementChild.checked = true;
        sidepanel.style.display = "block";
        sidepanel.firstElementChild.firstElementChild.innerHTML = inputElement.firstElementChild.children[1].innerHTML;
        itemSelected = true;
    }
}

function selectItem() {
    selectedItem = this.id;
    toggleBox(this);
    unselectAll();
    toggleTaskformButtons();    
}

function toggleTaskformButtons() {
    console.log("Itemselected = "+itemSelected);
    if (itemSelected) {
        updateUserButton.classList.remove("btn-disable");
        updateUserButton.classList.add("btn-primary");
        deleteUserButton.classList.remove("btn-disable");
        deleteUserButton.classList.add("btn-primary");
    }
    else {
        updateUserButton.classList.add("btn-disable");
        updateUserButton.classList.remove("btn-primary");
        deleteUserButton.classList.add("btn-disable");
        deleteUserButton.classList.remove("btn-primary");
    }
}
