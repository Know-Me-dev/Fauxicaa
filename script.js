


const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

// Toggle mobile menu
menu_btn.addEventListener('click', function(){
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', function(event) {
  const target = event.target;
  const isClickInside = mobile_menu.contains(target) || menu_btn.contains(target);
  if (!isClickInside) {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
  }
});





// Select all FAQ elements
const faqs = document.querySelectorAll('.faq');

// Loop through each FAQ
faqs.forEach(faq => {

  // Get the toggle button for each FAQ
  const toggleBtn = faq.querySelector('.faq-toggle');
  
  // Toggle click event
  toggleBtn.addEventListener('click', () => {

    // Toggle open class on FAQ
    faq.classList.toggle('open');

    // Change icon on toggle button
    toggleBtn.innerHTML = faq.classList.contains('open') ? '-' : '+';

  });

});




// Initialize variables
let reviewIndex = 0; // Current review card index
const reviewCards = document.getElementsByClassName("review-card"); // Get all review cards
const dots = document.getElementsByClassName("dot"); // Get all dots

// Function to update the active dot based on the current review index
function updateActiveDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[reviewIndex].classList.add("active");
}

// Function to show the review card at a given index
function showReview(index) {
  // Hide all review cards
  for (let i = 0; i < reviewCards.length; i++) {
    reviewCards[i].classList.remove("active", "prev", "next");
  }

  // Determine the appropriate classes for the review cards
  reviewCards[index].classList.add("active");
  reviewCards[(index - 1 + reviewCards.length) % reviewCards.length].classList.add("prev");
  reviewCards[(index + 1) % reviewCards.length].classList.add("next");

  reviewIndex = index; // Update the current review index
  updateActiveDot(); // Update the active dot
}

// Function to handle the button click and change the review card
function changeReview(direction) {
  // Update the reviewIndex based on the direction (-1 for previous, 1 for next)
  reviewIndex = (reviewIndex + direction + reviewCards.length) % reviewCards.length;
  showReview(reviewIndex);
}

// Add event listeners to the previous and next buttons

const nextButton = document.querySelector(".nav-button.next");
const prevButton = document.querySelector(".nav-button.prev");



// nextButton.addEventListener("click", function () {
//   changeReview(1); // Call the changeReview function with direction 1
// });

// prevButton.addEventListener("click", function () {
//   changeReview(-1); // Call the changeReview function with direction -1
// });

// Add event listeners to the dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    showReview(i);
  });
}

// Show the initial review card and active dot
showReview(reviewIndex);





// Add this JavaScript either inside <script> tags or a separate .js file
function openImageModal(src, title, description) {
  const imageModal = document.getElementById('imageModal');
  const enlargedImg = document.getElementById('enlargedImg');
  

  enlargedImg.src = src;
  

  imageModal.classList.add('show');

  // Add event listener to close the modal when clicking outside its content
  document.addEventListener('mousedown', closeModalOnClickOutside);
}

function closeImageModal() {
  const imageModal = document.getElementById('imageModal');
  imageModal.classList.remove('show');
}

function closeModalOnClickOutside(event) {
  const imageModal = document.getElementById('imageModal');
  const modalContent = document.querySelector('.modal-content');

  if (!modalContent.contains(event.target)) {
    imageModal.classList.remove('show');
    document.removeEventListener('mousedown', closeModalOnClickOutside);
  }
}

// Prevent click event propagation inside the modal content
// const modalContent = document.querySelector('.modal-content');
// modalContent.addEventListener('mousedown', function (event) {
//   event.stopPropagation();
// });



