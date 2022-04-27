const elements = document.querySelectorAll(".list-group-item");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", selectItem);
}

function selectItem() {
    if (this.firstElementChild.firstElementChild.firstElementChild.checked == true) {
        this.firstElementChild.firstElementChild.firstElementChild.checked = false;
    } else
    this.firstElementChild.firstElementChild.firstElementChild.checked = true;
}