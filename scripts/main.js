// NAV MENU ANIMATIONS
let listItems = document.querySelectorAll(".list__item");

function showElement(element) {
    element.style.visibility = "visible";
    
    let classList = element.classList;
    if (classList.contains("hidden")) {
        classList.replace("hidden", "visible");
    }
    else {
        classList.add("visible");
    }
}

function hideElement(element) {
    let elementClassList = element.classList;
    if (elementClassList.contains("visible")) {
        elementClassList.replace("visible", "hidden");
    }
    else {
        elementClassList.add("hidden");
    }
    setTimeout(() => {
        element.style.visibility = "hidden";
    }, 150);
}


listItems.forEach(item => {
    item.onmouseover = e => {
        let dropDown = item.querySelector(".drop-down");
        showElement(dropDown);
    };

    item.onmouseleave = e => {
        let dropDown = item.querySelector(".drop-down");
        hideElement(dropDown);
    };
});