
/*Header Script*/
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#666';
      });
      
      item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
      });
    });
  });
  /*Header Script finished*/

  /* Slider Style */

  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',]; // Replace with your image URLs
    let currentSlide = 0;
    let slideInterval;
  
    // Function to display current slide
    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    // Function to show next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % images.length;
      showSlide(currentSlide);
    }
  
    // Function to show previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + images.length) % images.length;
      showSlide(currentSlide);
    }
  
    // Start auto slide
    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    }
  
    // Stop auto slide
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
  
    // Initial display of first slide and start auto slide
    showSlide(currentSlide);
    startAutoSlide();
  
    // Event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', function() {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  
    document.querySelector('.prev').addEventListener('click', function() {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  });
  

  /* About-Us*/
  document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreInfo = document.getElementById('more-info');
  
    readMoreBtn.addEventListener('click', function() {
      if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        readMoreBtn.textContent = 'Read Less';
      } else {
        moreInfo.classList.add('hidden');
        readMoreBtn.textContent = 'Read More';
      }
    });
  });
  

  /* Services*/
  document.addEventListener("DOMContentLoaded", function() {
    const membershipCards = document.querySelectorAll('.membership-card');
  
    membershipCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)'; // Zoom effect on hover
      });
  
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; // Return to original size on mouse leave
      });
    });
  });
  
  /*Contact-Us*/
  document.addEventListener("DOMContentLoaded", function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group select');
  
    // Add event listeners for hover effect and focus
    formInputs.forEach(function(input) {
      input.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
      });
  
      input.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
  
      input.addEventListener('focus', function() {
        // Zoom the focused input
        this.style.transform = 'scale(1.1)';
        // Blur other inputs
        formInputs.forEach(function(otherInput) {
          if (otherInput !== input) {
            otherInput.style.filter = 'blur(4px)';
          }
        });
      });
  
      input.addEventListener('blur', function() {
        // Reset zoom for non-focused inputs
        formInputs.forEach(function(otherInput) {
          if (otherInput !== input) {
            otherInput.style.filter = 'blur(0)';
          }
        });
      });
    });
  });
  