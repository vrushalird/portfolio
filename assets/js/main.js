/**
* Template Name: iPortfolio
* Updated: Jan 29 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Loading function 
   */
  var loader = document.querySelector(".loader-wrapper");
  
  window.addEventListener("load", vanish);

  function vanish() {
    loader.classList.add("disappear");
  }

  /**
   * Function to toggle between dark and light mode
   */
  document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const elementsToToggle = document.querySelectorAll('.dark-mode-toggle');

    darkModeToggle.addEventListener('change', function () {
      // Toggle dark mode class on body
      document.body.classList.toggle('dark-mode');

      // Toggle dark mode styles for specific elements
      elementsToToggle.forEach(function (element) {
        element.classList.toggle('dark-mode');
      });

      // Update other styles based on dark mode
      updateStylesForDarkMode(document.body.classList.contains('dark-mode'));
    });

    // Check if dark mode is set in local storage
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      elementsToToggle.forEach(function (element) {
        element.classList.add('dark-mode');
      });
      updateStylesForDarkMode(true);
    }
  });

  function updateStylesForDarkMode(isDarkMode) {
    const header = document.getElementById('header');
    //const underline = document.querySelectorAll('.typed');
    //const sections = document.querySelectorAll('section');
    const about = document.getElementById('about');
    const stats = document.getElementById('stats');
    const skills = document.getElementById('skills');
    const resume = document.getElementById('resume');
    const portfolio = document.getElementById('portfolio');
    const services = document.getElementById('services');
    const contact = document.getElementById('contact');
    
    const textElements = document.querySelectorAll('.text-dark-mode');
    console.log(textElements);
    const tagline = document.getElementById('tagline');
    
    const countBoxes = document.querySelectorAll('.count-box');

    if (isDarkMode) {
      // Update styles for dark mode header
      header.style.backgroundColor = '#0C1313'; // Example background color
      
      // Update styles for different sections
      about.style.backgroundColor = '#151E1E';
      stats.style.backgroundColor = '#0C1313'; 
      skills.style.backgroundColor = '#151E1E';
      resume.style.backgroundColor = '#0C1313';
      portfolio.style.backgroundColor = '#151E1E';
      services.style.backgroundColor = '#0C1313';
      contact.style.backgroundColor = '#151E1E';

      textElements.forEach(function (element) {
        element.style.color = '#B1C0C2'; // Example text color
      });

      tagline.style.color = '#000';

      countBoxes.forEach(function(box) {
        box.classList.remove('light-mode');
        box.classList.add('dark-mode');
        // Set background color for count boxes with !important
        box.style.setProperty('background-color', 'linear-gradient(to right, #185B64, #0C1313)', 'important');
      });


    } else {
      // Reset styles for light mode
      header.style.backgroundColor = ''; // Reset background color
      

      // Reset styles for different sections
      about.style.backgroundColor = '#FFF';
      stats.style.backgroundColor = '#f5fbfd'; 
      skills.style.backgroundColor = '#FFF';
      resume.style.backgroundColor = '#f5fbfd';
      portfolio.style.backgroundColor = '#FFF';
      services.style.backgroundColor = '#f5fbfd';
      contact.style.backgroundColor = '#FFF';

      textElements.forEach(function (element) {
        element.style.color = ''; // Reset text color
      });

      tagline.style.color = '';

      countBoxes.forEach(function(box) {
        box.classList.remove('dark-mode');
        box.classList.add('light-mode');
      });
  
    }
  }



  /**
   * Function to change background image
   *
  const changeBackgroundImage = () => {
    var backgroundImages = [
      "../img/hero-bg1.jpg",
      "../img/hero-bg2.jpg",
      "../img/hero-bg3.jpg",
      "../img/hero-bg4.jpg",
      "../img/hero-bg5.jpg",
    ];
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var selectedImage = backgroundImages[randomIndex];
    document.getElementById("hero").style.backgroundImage = "url('" + selectedImage + "')";
  }

  // Call changeBackgroundImage initially and then every 5 seconds
  changeBackgroundImage();
  setInterval(changeBackgroundImage, 5000);*/

  /**
   * Function to calculate number of years for Work Experience
   */
  var startDate = new Date("2019-07-29");

  function calculateWorkExperience(date) 
  {
    var currentDate = new Date();
    var yearsExperience = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25); // in years
    return yearsExperience.toFixed(1); // round to 1 decimal place
  }
  // Function to display work experience
  function displayWorkExperience() 
  {
    var workExperienceElements = document.querySelectorAll("#work_experience");  //to select all elements with given ID
    var experience = calculateWorkExperience();
    workExperienceElements.forEach(function(element) {
        element.textContent = experience + " years";
    });
  }
  window.onload = displayWorkExperience;

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Navbar links active state on scroll - NOT WORKING
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 400
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  });
 
  /**
   * Scroll with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (!body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.progress').forEach(progress => {
      progress.addEventListener('mouseenter', function() {
        const tooltipContent = this.getAttribute('tooltip');
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipContent;
        this.appendChild(tooltip);
      });
    
      progress.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
          this.removeChild(tooltip);
        }
      });
    });
    //displayToolTip();
  });


  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

 
      

  // Function to display portfolio type
  /*function displayPortfolioType() {
    // Load the HTML content of the other file
    loadHTML("../../index.html", function(htmlContent) {
        // Extract class names from the loaded HTML content
        var classNames = extractClassNames(htmlContent);

        window.onload = function() {
        // Redirect to portfolio.html after the page has loaded
        window.location.href = "../../portfolio.html";
      };
        // Display class names or perform further processing
        var portfolioTypeElement = document.getElementById("portfolio-info-display");
        portfolioTypeElement.textContent = classNames.join(", ");
    });
  }
  window.onload = displayPortfolioType;
 
  function getPortfolioType() 
  {
    var elements = document.getElementsByClassName("portfolio-item");
    var portfolioType = "Unknown"; // Default value if no matching class is found
    
    // Loop through the elements and get the approprate portfolio type
    for (var i = 0; i < elements.length; i++) 
    {
      // Get the class names of the element
      var classNames = elements[i].className.split(" ");
      // Loop through the class names
      for (var j = 0; j < classNames.length; j++)
      {
        switch(classNames[j])
        {
          case "filter-certificates": portfolioType = "Certificates";
                                      break;
          case "filter-awards": portfolioType = "Awards";
                                break;
          case "filter-projects": portfolioType = "Projects";
                                  break;
        }
      }
    }
    return portfolioType;
  }
  


  // Function to display portfolio-item
  function displayPortfolioType() 
  {
    var portfolioTypeElement = document.getElementById("portfolio-info-display"); 
    var portfolioType = getPortfolioType();
    portfolioTypeElement.textContent = portfolioType + " ";
  }*/
  

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
