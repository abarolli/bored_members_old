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