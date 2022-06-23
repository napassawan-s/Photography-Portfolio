$(document).ready(function (){

  const inViewport = (es, observer) => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fadein-animation');
      }
    });
  };

  const observer = new IntersectionObserver(inViewport);
  const element_viewport = document.querySelectorAll('.imageContainer');
  const options = {};
  element_viewport.forEach(e => {
      observer.observe(e, options);
  });
})
