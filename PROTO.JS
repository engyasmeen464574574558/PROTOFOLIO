// لما ننزل بالسكرول يخلي العناصر تظهر بـ animation
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Animation للأيكونز (نبض/rotation)
const skills = document.querySelectorAll(".skill i");

skills.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2) rotate(15deg)";
    icon.style.transition = "all 0.3s ease";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1) rotate(0deg)";
  });
});
