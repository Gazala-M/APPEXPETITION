burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
    
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


   
				
  // JavaScript code for slideshow functionality
/*  var slides = document.getElementsByClassName('slick-slide');
  var currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[currentIndex].style.display = 'block';
  }

  // Initial slide display
  showSlide(currentIndex);

  // Automatic slide change every 3 seconds
  setInterval(function() {
    currentIndex++;
    showSlide(currentIndex);
  }, 5000);     */

// Project slide
$(".student-feedback").slick({
  centerMode: false,
 // centerPadding: "60px",
  arrows: false,
  dots: true,
  slidesToShow: 1,
 
});

   
// contact section 

      const form = document.getElementById("form");
      const firstname = document.getElementById("first");
      const lastname = document.getElementById("last");
      const email = document.getElementById("email");
      const description = document.getElementById("description");
      const category = document.getElementById("category");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        validateInputs();
//        printFormData();
      });

      const setError = (element, message) => {
        const formfield = element.parentElement;
        const errorDisplay = formfield.querySelector('.error');

        errorDisplay.innerText = message;
        formfield.classList.add('error');
      }  

      const validateInputs = () => {
        const firstnameValue = firstname.value.trim();
        const lastnameValue = lastname.value.trim();
        const emailValue = email.value.trim();
        const descriptionValue = description.value.trim();
        const categoryValue = category.value.trim();

     
      if (firstnameValue === '') {
       setError(firstname, 'Firstname is required');
      } else
      {
        console.log('First Name: ' + firstnameValue);
      }
      
      if (lastnameValue === "") {
        setError(lastname, 'Lastname is required');
      }
      else
      {
        console.log('Last Name: ' + lastnameValue);
      }

      if (emailValue === "") {
        setError(email, 'Email is required');
      }
      else
      {
        console.log('Email: ' + emailValue);
      }
      
      if (descriptionValue === "") {
        setError(description, 'Description is required');
      }
      else
      {
        console.log('Description: ' + descriptionValue);
      }

      if (categoryValue === "") {
        setError(category, 'Category is required');
      }
      else
      {
        console.log('Category: ' + categoryValue);
      }
      
    };      

    // aos animation
    
     AOS.init();

  
    AOS.init({
      duration: 800,  // Animation duration in milliseconds
      offset: 200     // Offset (in pixels) from the original trigger point
    });

    AOS.init({
      useClassNames: true,  // Enables the use of classes for animation targets
      initClassName: 'aos-animate', // Class name to be animated
     
    });    