document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        var target = this.getAttribute('href');
        var targetElement = document.querySelector(target);
  
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'mooth'
        });
      });
    });
  });