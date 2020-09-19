// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// console.log(date);

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// console.log(links);
navToggle.addEventListener('click', function () {
  //  linksContainer.classList.toggle('show-links'); - static
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // cons
  // console.log(linksHeight.height);
  if(containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
  }
  else {
      linksContainer.style.height = 0;
  }

})

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
// console.log(navbar.getBoundingClientRect());
// console.log(navbar);

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }
    // console.log(scrollHeight);
    if(scrollHeight > 380) {
        toplink.classList.add('show-link');
    }
    else {
        toplink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // prevent default
        e.preventDefault();

        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        console.log(element);

        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }
        console.log(position);
        window.scrollTo ( {
            left:0,
            top: position,

        });

        linksContainer.style.height=0;

    })
})
console.log(scrollLinks);
