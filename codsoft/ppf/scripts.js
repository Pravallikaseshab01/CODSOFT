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

  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('#.navbar');
  let selections = document.querySelector('#section');
  let navLinks = document.querySelector('#header nav a');

  window.onscroll = () =>{
    sections.forEach(sec => {
      let top=window.scrollY;
      let offset=sec.offsetTop - 150;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
      }
    })
  }

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }