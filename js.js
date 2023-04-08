document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll");
  
    const elementInView = (el, scrollOffset = 0) => {
      const elementTop = el.getBoundingClientRect().top;
  
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
      );
    };
  
    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };
  
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  });
  