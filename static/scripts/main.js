function animateOnIntersection(entry, animationName) {
  const target = entry.target;
  console.log(target);
  if (entry.isIntersecting) {
      target.classList.add(animationName);
      return;
  }
  target.classList.remove(animationName);
}

const pinkObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    animateOnIntersection(entry, "slide-left-animate");
  });
});

const purpleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    animateOnIntersection(entry, "slide-right-animate");
  })
})

let mrPinks = document.querySelectorAll(".mr-pink");
let mrPurple = document.querySelector(".final-landing .mr-purple");

mrPinks.forEach(pink => pinkObserver.observe(pink));
purpleObserver.observe(mrPurple);



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