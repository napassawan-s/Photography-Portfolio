$(document).ready(function (){
  const observer = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('movein-animation');
      }
    });
});
observer.observe(document.querySelector('img.aboutus'));
observer.observe(document.querySelector('p.abouttext'));
observer.observe(document.querySelector('a.abouttext'));
observer.observe(document.querySelector('#abouttitle'));
observer.observe(document.querySelector('#h1Home'));
observer.observe(document.querySelector('p.titletext'));
observer.observe(document.querySelector('p.quote'));
observer.observe(document.querySelector('#homeLandscapes'));
observer.observe(document.querySelector('#homePortraits'));
observer.observe(document.querySelector('img.landscapes'));
observer.observe(document.querySelector('img.portraits'));
observer.observe(document.querySelector('button.shop'));
observer.observe(document.querySelector('h2.shoptext'));
})
