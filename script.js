


//show more projects;
function toggleMoreProjects() {
  const moreProjects = document.getElementById('more-projects');
  const showMoreButton = document.getElementById('viewMoreBtn');

  const isHidden = moreProjects.style.display ==="none";

  moreProjects.style.display = isHidden ? "inline" : "none";
  showMoreButton.textContent = isHidden ? "View Less" : "View More";
  showMoreButton.classList.toggle("bg-blue-500");
};


//contact form popup

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const thankYouPopup = document.getElementById('thankYouPopup');
  const navContact = document.getElementById('nav-contact');
  const getInTouch = document.getElementById('get-in-touch');

  
  if (navContact) {
    navContact.addEventListener('click', function (e) {
      e.preventDefault();
      openContactForm();
    });
  }

  if (getInTouch) {
    getInTouch.addEventListener('click', function (e) {
      e.preventDefault();
      openContactForm();
    });
  }

  window.openContactForm = function () {
    contactForm.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  window.closeContactForm = function () {
    contactForm.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  window.submitForm = function (event) {
    event.preventDefault();
    closeContactForm();
    thankYouPopup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
  
  }

  window.closeThankYouPopup = function () {
    thankYouPopup.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
});
