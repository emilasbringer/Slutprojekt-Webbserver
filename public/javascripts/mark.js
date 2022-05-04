const elements = document.querySelectorAll(".list-group-item");
const elementList = document.querySelector(".list-container");
const addUserButton = document.querySelector("#addButton");
const updateUserButton = document.querySelector("#updateButton");
const deleteUserButton = document.querySelector("#deleteButton");
const refreshButton = document.querySelector("#refreshButton");
const addUpdateSubmitButton = document.querySelector("#mainpanel-submit");
const sidepanel = document.querySelector(".sidepanel");
const mainpanel = document.querySelector(".mainpanel");
const mainpanelCloseButton = document.querySelector("#mainpanel-closebutton");
let correspondingDBID = [];
let itemSelected = false;
let selectedItem;

document.getElementById("layout").classList.remove("pt-5r");
toggleTaskformButtons(); 
getTimeDifferenceInDaysFromToday("2022-08-14");


for (let i = 0; i < elements.length; i++) {
    correspondingDBID[i] = elements[i].firstElementChild.id;
    elements[i].addEventListener("click", selectItem);
    elements[i].firstElementChild.firstElementChild.firstElementChild.addEventListener("click", counterToggleBox);
    elements[i].firstElementChild.children[3].innerHTML = mmddyyyyToyyyymmdd(elements[i].firstElementChild.children[3].innerHTML.substring(29,40));
    if (getTimeDifferenceInDaysFromToday(elements[i].firstElementChild.children[3].innerHTML) < 180 ) {
        elements[i].classList.add("bg-danger");
    }
}

addUserButton.addEventListener("click", addUser);
updateUserButton.addEventListener("click", updateUser);
deleteUserButton.addEventListener("click", deleteUser);
mainpanelCloseButton.addEventListener("click", closePanel);


function closePanel() {
    mainpanel.style.display = "none";
}

function deleteUser() {
    saveScrollPos;
    if(itemSelected) {
        window.location.href = "/meeps/"+ selectedItem +"/delete";
    }
}

function updateUser() {
    if(itemSelected) {
        sidepanel.style.display = "none";
        mainpanel.children[1].innerHTML = "Update user";
        mainpanel.lastElementChild.lastElementChild.firstElementChild.innerHTML = "Update user";
        mainpanel.lastElementChild.setAttribute("action", "/meeps/"+selectedItem+"/update");
        mainpanel.lastElementChild.firstElementChild.children[0].value = document.getElementById(selectedItem).children[1].innerHTML.trim();
        mainpanel.lastElementChild.firstElementChild.children[1].value = document.getElementById(selectedItem).children[2].innerHTML.trim();
        mainpanel.lastElementChild.firstElementChild.children[2].value = document.getElementById(selectedItem).children[3].innerHTML;
        mainpanel.style.display = "block";
    }
}

function addUser() {
    sidepanel.style.display = "none";
    mainpanel.children[1].innerHTML = "Add user";
    mainpanel.lastElementChild.lastElementChild.firstElementChild.innerHTML = "Add user";
    mainpanel.lastElementChild.setAttribute("action", "/meeps");
    mainpanel.lastElementChild.firstElementChild.children[0].value = "";
    mainpanel.lastElementChild.firstElementChild.children[1].value = "";
    mainpanel.lastElementChild.firstElementChild.children[2].value = "";
    mainpanel.style.display = "block";
}

function unselectAllExeptCurrent(id) {
    let current = correspondingDBID.indexOf(id)
    for (let i = 0; i < elements.length; i++) {
        if (i != current) {
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
    if (inputElement.firstElementChild.firstElementChild.firstElementChild.checked == true) {
        inputElement.firstElementChild.firstElementChild.firstElementChild.checked = false;
        sidepanel.style.display = "none";
        itemSelected = false;
    } else { 
        inputElement.firstElementChild.firstElementChild.firstElementChild.checked = true;
        sidepanel.style.display = "block";
        sidepanel.firstElementChild.firstElementChild.innerHTML = inputElement.firstElementChild.children[1].innerHTML;
        sidepanel.children[1].firstElementChild.firstElementChild.innerHTML = inputElement.firstElementChild.children[2].innerHTML;
        sidepanel.children[1].children[1].firstElementChild.innerHTML = inputElement.firstElementChild.children[3].innerHTML;
        
        itemSelected = true;
    }
}

function selectItem() {
    selectedItem = this.firstElementChild.id;
    unselectAllExeptCurrent(selectedItem);
    toggleBox(this);
    toggleTaskformButtons();
}

function toggleTaskformButtons() {
    if (itemSelected) {
        updateUserButton.classList.remove("btn-disable");
        updateUserButton.classList.add("btn-primary");
        deleteUserButton.classList.remove("btn-disable");
        deleteUserButton.classList.add("btn-primary");
        updateUserButton.disabled = false;
        deleteUserButton.disabled = false;
    }
    else {
        updateUserButton.classList.add("btn-disable");
        updateUserButton.classList.remove("btn-primary");
        deleteUserButton.classList.add("btn-disable");
        deleteUserButton.classList.remove("btn-primary");
        updateUserButton.disabled = true;
        deleteUserButton.disabled = true;
    }
}

function getTimeDifferenceInDaysFromToday(yyyymmdd) {
    let today = new Date();
    let inputYear = parseInt(yyyymmdd.substring(0,4));
    let inputMonth = parseInt(yyyymmdd.substring(5,7));
    let inputDay = parseInt(yyyymmdd.substring(8));
    let compareDate = new Date().setFullYear(inputYear,inputMonth-1,inputDay);
    let differenceInSeconds = compareDate-today;
    var differenceInDays = differenceInSeconds / (1000 * 3600 * 24);
    
    return differenceInDays;
}


function mmddyyyyToyyyymmdd (inputDate) {
    let outputDate;
    const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    let year = inputDate.substring(7,11);
    let month = inputDate.substring(0,3);
    let day = inputDate.substring(4,6);
    
    month = months.indexOf(month)+1;
    
    if (month.toString.length < 2) {
        month = "0"+month;
    }
    
    outputDate = year+"-"+month+"-"+day;
    
    return outputDate;
}