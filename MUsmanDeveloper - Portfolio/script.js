


//---------------------------------------------------
// START - Current Device Screen Size                          
//---------------------------------------------------

// Function to update the screen size in the p tag
function updateScreenSize() {
const width = window.innerWidth;
const height = window.innerHeight;
document.getElementById('screen-size').textContent = 
    `Current Screen Size = ${width}x${height}px`;
}

// Update screen size on page load
updateScreenSize();

// Again Update screen size whenever the window is resized
window.addEventListener('resize', updateScreenSize);
      


//---------------------------------------------------
// START - Website Loader                            
//---------------------------------------------------

window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
});



//---------------------------------------------------
// START - Header for Mobile Devices                               
//---------------------------------------------------


function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    // Toggle 'active' class instead of directly modifying display
    menu.classList.toggle('active');  // This will toggle the visibility of the menu
}


//---------------------------------------------------
// START - Hero Slider                               
//---------------------------------------------------

const textContent = [
    {
        title: `Hi👋 I'm <span class="highlighted-text">Muhammad Usman</span><span class="prsn-occupation">, a Web Developer</span>`,
        description: "I build professional & modern websites using the latest technologies."
    },
    {
        title: `Provide <span class="highlighted-text">Innovative</span> digital <span class="highlighted-text">Solutions</span> you want`,
        description: "Passionate about creating solutions that innovate your life."
    },
    {
        title: `Turn yours <span class="highlighted-text">Ideas</span> into <span class="highlighted-text">Reality</span> `,
        description: "Get in touch to discuss your next web development project."
    }
  ];
  
  let currentIndex = 0;
  
  function changeTextContent() {
    const titleElement = document.querySelector('.animated-title');
    const descriptionElement = document.querySelector('.animated-description');
    // Use innerHTML to allow rendering of HTML tags within strings
    titleElement.innerHTML = textContent[currentIndex].title;
    descriptionElement.textContent = textContent[currentIndex].description;
    // Update the currentIndex for the next slide
    currentIndex = (currentIndex + 1) % textContent.length;
  }
  
  setInterval(changeTextContent, 2500); // Change every 3 seconds
  


//---------------------------------------------------
// START - About Profile Image                             
//---------------------------------------------------

// Open profile image popup with the clicked profile image
function openProfilePopup(imageSrc) {
    const popup = document.getElementById("profile-image-popup-modal");
    const popupImg = document.getElementById("profile-popup-img");
    popup.style.display = "flex";
    popupImg.src = imageSrc;
}

// Close the profile image popup
function closeProfilePopup() {
    const popup = document.getElementById("profile-image-popup-modal");
    popup.style.display = "none";
}



//---------------------------------------------------
// START - About Statistics Counter                               
//---------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".card h3");

  const startCounter = (element, targetValue) => {
      let count = 0;
      const speed = Math.round(targetValue / 10); // Adjust for faster or slower speeds

      const updateCounter = () => {
          if (count < targetValue) {
              count += speed;
              element.textContent = count < targetValue ? count : targetValue + "+"; // add "+" after reaching target
              requestAnimationFrame(updateCounter);
          }
      };
      requestAnimationFrame(updateCounter);
  };

  const handleScroll = () => {
      counters.forEach((counter) => {
          const targetValue = parseInt(counter.getAttribute("data-final-value"), 10);

          // Check if counter is in view
          const rect = counter.getBoundingClientRect();
          if (rect.top < window.innerHeight && !counter.classList.contains("animated")) {
              startCounter(counter, targetValue);
              counter.classList.add("animated"); // Prevent re-triggering the animation
          }
      });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run on page load in case already in view
});



//---------------------------------------------------
// START - Skills Progress bars                               
//---------------------------------------------------

// Select all progress bars
const progressBars = document.querySelectorAll('.skill-progress-fill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-percentage'); // Get percentage to fill
        
        if (entry.isIntersecting) {
            // Animate to the target width when the bar enters viewport
            bar.style.width = targetWidth;
        } else {
            // Animate back to 0% width when bar exits viewport
            bar.style.width = '0%';
        }
    });
}, {
    threshold: 0.5, // Trigger when at least 50% of element is visible
});

// Observe each progress bar
progressBars.forEach((bar) => {
    observer.observe(bar);
});



//---------------------------------------------------
// START - Education Timeline bars                               
//---------------------------------------------------

const edu_data = [
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'Web Design',
        organization: 'COMSATS University Islamabad, Wah Campus',
        description: 'Details about education 1. Details about education 1. Details about education 1. Details about education 1. Details about education 1.'
    },
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'FSc Pre-Eng',
        organization: 'FG Degree College For Men, Wah Cantt',
        description: 'Details about education 2. Details about education 2.Details about education 2. Details about education 2. Details about education 2.'
    },
    {
        year: 'Feb 2016 - Mar 2018',
        title: 'Matric Science (Biology)',
        organization: 'FG Public High School, Taxila Cantt',
        description: 'Details about education 3. Details about education 3. Details about education 3. Details about education 3. Details about education 3.'
    }
];

const edu_timeline = document.getElementById('edu-timeline');
const edu_cards = document.getElementById('edu-cards');

// Render nodes and cards
edu_data.forEach((item, index) => {
    const edu_node = document.createElement('div');
    edu_node.classList.add('edu-node');
    edu_node.setAttribute('data-index', index);
    edu_timeline.appendChild(edu_node);

    const edu_card = document.createElement('div');
    edu_card.classList.add('edu-card');
    edu_card.setAttribute('data-index', index);
    edu_card.innerHTML = 
    `
        <h5>${item.year}</h5>
        <h3>${item.title}</h3>
        <h4>${item.organization}</h4>
        <p>${item.description}</p>
    `;
    edu_cards.appendChild(edu_card);
});

const edu_nodes = document.querySelectorAll('.edu-node');
const edu_cardElements = document.querySelectorAll('.edu-card');

let edu_activeIndex = 0;
let edu_timelineAnimated = false;

// Function to set active node and card
function edu_setActive(index) {
    edu_nodes.forEach((node, i) => {
        node.classList.toggle('edu-active', i === index);
    });
    edu_cardElements.forEach((card, i) => {
        card.classList.toggle('edu-active', i === index);
    });
}

// Function to set hover node and card
function edu_setHover(index) {
    edu_nodes.forEach((node, i) => {
        node.classList.toggle('edu-hover', i === index);
    });
    edu_cardElements.forEach((card, i) => {
        card.classList.toggle('edu-hover', i === index);
    });
}

// Function to calculate and set gap between nodes
function edu_setNodeGap() {
    const edu_card = document.querySelector('.edu-card'); // Select the first element with the class "edu-card"
    const edu_cardHeight = edu_card.offsetHeight; // Get the height (including padding and border)
    const edu_gap = edu_cardHeight + 18; // Adding 20px to the height of the card container
    edu_timeline.style.gap = `${edu_gap}px`; // Dynamically setting the gap
}

// Initial animation when timeline enters viewport
function edu_animateTimeline() {
    if (!edu_timelineAnimated && edu_timeline.getBoundingClientRect().top < window.innerHeight) {
        edu_timelineAnimated = true;
        function edu_animateNodes() {
            if (edu_activeIndex < edu_nodes.length) {
                edu_setActive(edu_activeIndex);
                // Deactivate the current node and card after the 1000ms interval
                setTimeout(() => {
                    edu_setActive(-1); // Pass -1 to deactivate all nodes/cards
                }, 1000);
                edu_activeIndex++;
                setTimeout(edu_animateNodes, 1000);
            }
        }
        edu_animateNodes();
    }
}

// Add scroll event to trigger animation
window.addEventListener('scroll', edu_animateTimeline);

// Call the animation and gap setting when the page loads
window.addEventListener('load', () => {
    edu_setNodeGap(); // Set the gap when the page loads
    edu_animateTimeline(); // Trigger the initial animation
});

// Add click event for Node
edu_nodes.forEach((node) => {
    node.addEventListener('click', () => {
        const index = parseInt(node.getAttribute('data-index'));
        edu_setActive(index);
    });
});

// Add click event for Card
edu_cardElements.forEach((card) => {
    card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-index'));
        edu_setActive(index);
    });
});

// Add hover events for Node
edu_nodes.forEach((node) => {
    node.addEventListener('mouseenter', () => {
        const index = parseInt(node.getAttribute('data-index'));
        edu_setHover(index);
    });
    node.addEventListener('mouseleave', () => {
        edu_setHover(-1); // Remove hover effect when mouse leaves
    });
});

// Add hover events for Card
edu_cardElements.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        const index = parseInt(card.getAttribute('data-index'));
        edu_setHover(index);
    });
    card.addEventListener('mouseleave', () => {
        edu_setHover(-1); // Remove hover effect when mouse leaves
    });
});



//---------------------------------------------------
// START - Experience Timeline bars                               
//---------------------------------------------------

const expr_data = [
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'Internee as Web Developer',
        organization: 'ABC Company, XYZ Address',
        description: 'Details about experience 1. Details about experience 1. Details about experience 1. Details about experience 1. Details about experience 1.'
    },
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'Internee as Web Developer',
        organization: 'ABC Company, XYZ Address',
        description: 'Details about experience 2. Details about experience 2. Details about experience 2. Details about experience 2. Details about experience 2.'
    },
    {
        year: 'Feb 2024 - Mar 2024',
        title: 'Internee as Web Developer',
        organization: 'ABC Company, XYZ Address',
        description: 'Details about experience 3. Details about experience 3. Details about experience 3. Details about experience 3. Details about experience 3.'
    }
];

const expr_timeline = document.getElementById('expr-timeline');
const expr_cards = document.getElementById('expr-cards');

// Render nodes and cards
expr_data.forEach((item, index) => {
    const expr_node = document.createElement('div');
    expr_node.classList.add('expr-node');
    expr_node.setAttribute('data-index', index);
    expr_timeline.appendChild(expr_node);

    const expr_card = document.createElement('div');
    expr_card.classList.add('expr-card');
    expr_card.setAttribute('data-index', index);
    expr_card.innerHTML = 
    `
        <h5>${item.year}</h5>
        <h3>${item.title}</h3>
        <h4>${item.organization}</h4>
        <p>${item.description}</p>
    `;
    expr_cards.appendChild(expr_card);
});

const expr_nodes = document.querySelectorAll('.expr-node');
const expr_cardElements = document.querySelectorAll('.expr-card');

let expr_activeIndex = 0;
let expr_timelineAnimated = false;

// Function to set active node and card
function expr_setActive(index) {
    expr_nodes.forEach((node, i) => {
        node.classList.toggle('expr-active', i === index);
    });
    expr_cardElements.forEach((card, i) => {
        card.classList.toggle('expr-active', i === index);
    });
}

// Function to set hover node and card
function expr_setHover(index) {
    expr_nodes.forEach((node, i) => {
        node.classList.toggle('expr-hover', i === index);
    });
    expr_cardElements.forEach((card, i) => {
        card.classList.toggle('expr-hover', i === index);
    });
}

// Function to calculate and set gap between nodes
function expr_setNodeGap() {
    const card = document.querySelector('.expr-card'); // Select the first element with the class "expr_card"
    const cardHeight = card.offsetHeight; // Get the height (including padding and border)
    const gap = cardHeight + 18; // Adding 20px to the height of the card container
    expr_timeline.style.gap = `${gap}px`; // Dynamically setting the gap
}

// Initial animation when timeline enters viewport
function expr_animateTimeline() {
    if (!expr_timelineAnimated && expr_timeline.getBoundingClientRect().top < window.innerHeight) {
        expr_timelineAnimated = true;
        function expr_animateNodes() {
            if (expr_activeIndex < expr_nodes.length) {
                expr_setActive(expr_activeIndex);
                // Deactivate the current node and card after the 1000ms interval
                setTimeout(() => {
                    expr_setActive(-1); // Pass -1 to deactivate all nodes/cards
                }, 1000);
                expr_activeIndex++;
                setTimeout(expr_animateNodes, 1000);
            }
        }
        expr_animateNodes();
    }
}

// Add scroll event to trigger animation
window.addEventListener('scroll', expr_animateTimeline);

// Call the animation and gap setting when the page loads
window.addEventListener('load', () => {
    expr_setNodeGap(); // Set the gap when the page loads
    expr_animateTimeline(); // Trigger the initial animation
});

// Add click events for Node
expr_nodes.forEach((node) => {
    node.addEventListener('click', () => {
        const index = parseInt(node.getAttribute('data-index'));
        expr_setActive(index);
    });
});

// Add click events for Card
expr_cardElements.forEach((card) => {
    card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-index'));
        expr_setActive(index);
    });
});

// Add hover events for Node
expr_nodes.forEach((node) => {
    node.addEventListener('mouseenter', () => {
        const index = parseInt(node.getAttribute('data-index'));
        expr_setHover(index);
    });
    node.addEventListener('mouseleave', () => {
        expr_setHover(-1); // Remove hover effect when mouse leaves
    });
});

// Add hover events for Card
expr_cardElements.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        const index = parseInt(card.getAttribute('data-index'));
        expr_setHover(index);
    });
    card.addEventListener('mouseleave', () => {
        expr_setHover(-1); // Remove hover effect when mouse leaves
    });
});



//----------------------------------------------------------------------------------------
// START - Projects Dynamic Views Counter, Social Share Icons, Dynamic Pagination Buttons                            
//----------------------------------------------------------------------------------------

// Initialize an empty object to store each project views
const projectViews = {};

// Function to initialize views dynamically
function initializeProjectViews() {
    // Select all projects and initialize views to 0
    document.querySelectorAll('.project').forEach(project => {
        const projectId = project.dataset.card;
        projectViews[projectId] = 0; // Set initial views to 0
    });
}

// Function to format views similar to YouTube
function formatViews(views) {
    if (views >= 1e12) {
        // Trillions
        return (views % 1e12 === 0 ? (views / 1e12).toFixed(0) : (views / 1e12).toFixed(2)) + 'T';
    } else if (views >= 1e9) {
        // Billions
        return (views % 1e9 === 0 ? (views / 1e9).toFixed(0) : (views / 1e9).toFixed(2)) + 'B';
    } else if (views >= 1e6) {
        // Millions
        return (views % 1e6 === 0 ? (views / 1e6).toFixed(0) : (views / 1e6).toFixed(2)) + 'M';
    } else if (views >= 1e3) {
        // Thousands
        return (views % 1e3 === 0 ? (views / 1e3).toFixed(0) : (views / 1e3).toFixed(2)) + 'K';
    } else {
        // Below 1,000, display as integer
        return views.toFixed(0);
    }
}

// Example usage
console.log(formatViews(2));        // "2"
console.log(formatViews(1000));     // "1K"
console.log(formatViews(1560));     // "1.56K"
console.log(formatViews(1000000));  // "1M"
console.log(formatViews(1234567));  // "1.23M"
console.log(formatViews(1000000000)); // "1B

// Function to increment and display views
function incrementViews(projectId) {
    // Increment the view count for the project
    projectViews[projectId]++;

    // Get the formatted view count
    const formattedViews = formatViews(projectViews[projectId]);

    // Update the view count in the DOM
    document.querySelector(`[data-card="${projectId}"] .fa-eye`).nextSibling.textContent = ' ' + formattedViews;
}

// Event listeners for "View Live" and "View Github" links
function setupViewTracking() {
    document.querySelectorAll('.project-link-source a').forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default action for this demo (remove this line if links are live)
            event.preventDefault();

            // Get the project ID from the data-card attribute
            const projectId = this.closest('article').dataset.card;

            // Increment and update the view count for the project
            incrementViews(projectId);
        });
    });
}

// Initialize views and setup tracking when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeProjectViews();
    setupViewTracking();
});



// Function to toggle the visibility of the share dropdown
function toggleShareDropdown(event,ProjectCardId) {
    event.preventDefault();
    const dropdown = document.getElementById("share-dropdown-" + ProjectCardId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Function to handle sharing to different platforms
function shareToPlatform(platform, projectId) {
    const rootUrl = `${window.location.origin}`; // Dynamically gets the current domain
    const project = document.querySelectorAll('.project')[projectId - 1];
    const title = project.getAttribute('data-title');
    const card = project.getAttribute('data-card');
    
    // Create the project URL dynamically
    const projectUrl = `${rootUrl}/${title}/${card}`;
    // const projectUrl = `https://youtu.be/GP-F1SQT39c?si=v0SN58f6FBIpYdEq`;
    
    
    let shareUrl = '';
    switch(platform) {
        case 'Facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`;
            break;
        case 'Twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent('Check out this project!')}`;
            break;
        case 'LinkedIn':
            shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(projectUrl)}&title=${encodeURIComponent('Check out this project!')}`;
            break;
        case 'WhatsApp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent('Check out this project! ') + projectUrl}`;
            break;
    }

    // Open the share link in a new window
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Function to copy the project link to clipboard
function copyLink(projectId) {
    const rootUrl = `${window.location.origin}`; // Dynamically gets the current domain    
    const project = document.querySelectorAll('.project')[projectId - 1];
    const title = project.getAttribute('data-title');
    const card = project.getAttribute('data-card');
    
    // Create the project URL dynamically
    const projectUrl = `${rootUrl}/${title}/${card}`;
    // const projectUrl = `https://youtu.be/GP-F1SQT39c?si=v0SN58f6FBIpYdEq`;
    
    // Create a temporary input element to copy the URL
    const tempInput = document.createElement('input');
    tempInput.value = projectUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show feedback message
    const copyText = document.getElementById("copy-text-" + projectId);
    copyText.textContent = 'Copied!';
    
    // Reset feedback message after a short delay
    setTimeout(function() {
        copyText.textContent = 'Copy Link';
    }, 60000);  // Show "Copied!" for 2 seconds
}

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
    const allDropdowns = document.querySelectorAll('.share-dropdown-content');
    allDropdowns.forEach(dropdown => {
        if (!event.target.closest('.project') && dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    });

});

// Close dropdown if clicked close button
function closeShareDropdown(projectId) {
    const dropdown = document.getElementById("share-dropdown-" + projectId);
    dropdown.style.display = "none";
}

// Dynamically Render Pagination Page Buttons based on total articles

const articlesPerPage = 3;
const totalArticles = document.querySelectorAll('.projects-list .project').length;
const totalPages = Math.ceil(totalArticles / articlesPerPage);
let currentPage = 1;

function renderPagination() {
    const paginationButtons = document.getElementById('pagination-buttons');
    paginationButtons.innerHTML = '';

    const range = 1; // Number of pages to display before and after the current page
    let startPage = currentPage - range;
    let endPage = currentPage + range;

    // Adjust the start and end page if they are out of bounds
    if (startPage < 1) {
        startPage = 1;
        endPage = startPage + 2;
    }
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - 2;
    }

    // Add the 'Prev' button
    const prevButton = document.createElement('button');
    prevButton.className = 'btn';
    prevButton.innerText = 'Prev';
    prevButton.onclick = () => changePage(currentPage - 1);
    // prevButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
    if (currentPage === 1) {
        prevButton.disabled = true; // Disable if on the first page
    }
    paginationButtons.appendChild(prevButton);

    // Create the page buttons for the range
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'btn';
        pageButton.innerText = i;
        pageButton.onclick = () => changePage(i);
        if (i === currentPage) pageButton.classList.add('active');
        paginationButtons.appendChild(pageButton);
    }

    // Add the 'Next' button
    const nextButton = document.createElement('button');
    nextButton.className = 'btn';
    nextButton.innerText = 'Next';
    nextButton.onclick = () => changePage(currentPage + 1);
    // nextButton.style.display = currentPage < totalPages ? 'inline-block' : 'none';
    if (currentPage === totalPages) {
        nextButton.disabled = true; // Disable if on the last page
    }
    paginationButtons.appendChild(nextButton);
}

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderPagination();
    showCurrentPageArticles();
}

function showCurrentPageArticles() {
    const articles = document.querySelectorAll('.projects-list .project');
    articles.forEach((article, index) => {
        article.style.display = 
            index >= (currentPage - 1) * articlesPerPage && index < currentPage * articlesPerPage 
            ? 'block' 
            : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPagination();
    showCurrentPageArticles();
});



//---------------------------------------------------
// START - Testimonial Slides                              
//---------------------------------------------------

let currentTestimonialDotIndex = 0;
let autoSlideInterval;
const testimonialChangeInterval = 3000; // Slide change interval in milliseconds

// Initialize dots based on the number of testimonials
function initializeDots() {
    const testimonials = document.querySelectorAll(".testimonial");
    const dotsContainer = document.querySelector(".testimonial-dots");

    // Clear existing dots
    dotsContainer.innerHTML = "";

    // Create dots dynamically
    testimonials.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    updateTestimonial();
}

// Update testimonial display
function updateTestimonial() {
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".testimonial-dots .dot");

    // Hide all testimonials and deactivate all dots
    testimonials.forEach(testimonial => testimonial.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    // Show current testimonial and activate corresponding dot
    testimonials[currentTestimonialDotIndex].style.display = "block";
    dots[currentTestimonialDotIndex].classList.add("active");
}

// Go to specific slide
function goToSlide(index) {
    currentTestimonialDotIndex = index;
    updateTestimonial();
    resetAutoSlide();
}

// Move to the next slide in a circular manner
function nextSlide() {
    const testimonials = document.querySelectorAll(".testimonial");
    currentTestimonialDotIndex = (currentTestimonialDotIndex + 1) % testimonials.length;
    updateTestimonial();
}

// Auto slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, testimonialChangeInterval);
}

// Reset auto slide
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Initialize dots and start auto slide on page load
initializeDots();
startAutoSlide();



//---------------------------------------------------
// START - Achievements popup window                               
//---------------------------------------------------

let currentAchievementDotIndex = 0;
const visibleCards = 3;

// Initialize carousel dots based on total number of cards
function initializeCarousel() {
    const achievementCards = document.querySelectorAll(".achievement");
    const totalCards = achievementCards.length;

    // Calculate total pages (dots) required
    const totalDots = Math.ceil(totalCards / visibleCards);
    const dotsContainer = document.querySelector(".carousel-dots");

    // Clear existing dots
    dotsContainer.innerHTML = "";

    // Create new dots dynamically
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => manualSlide(i);
        dotsContainer.appendChild(dot);
    }

    updateSlide();
}

// Update slide function with wrapping
function updateSlide() {
    const track = document.querySelector(".carousel-track");
    const achievementCards = document.querySelectorAll(".achievement");
    const totalCards = achievementCards.length;

    // Calculate the start index based on current dot
    const startIndex = currentAchievementDotIndex * visibleCards;

    // Hide all cards initially
    achievementCards.forEach(card => {
        card.style.display = 'none';
    });

    // Show the cards for the current dot
    for (let i = 0; i < visibleCards; i++) {
        if (startIndex + i < totalCards) {
            achievementCards[startIndex + i].style.display = 'block';
        }
    }

    updateDots();
}

// Update dots to show active dot
function updateDots() {
    const dots = document.querySelectorAll(".carousel-dots .dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentAchievementDotIndex);
    });
}

// Manual slide control
function manualSlide(index) {
    currentAchievementDotIndex = index;
    updateSlide();
}

// Auto slide every 3 seconds with wrap-around
setInterval(() => {
    const dots = document.querySelectorAll(".carousel-dots .dot");
    currentAchievementDotIndex = (currentAchievementDotIndex + 1) % dots.length;
    updateSlide();
}, 3000);

// Initialize carousel on page load
initializeCarousel();

// Open popup with the clicked certificate image
function openPopup(imageSrc) {
    const popup = document.getElementById("achievement-popup-modal");
    const popupImg = document.getElementById("achievement-popup-img");
    popup.style.display = "flex";
    popupImg.src = imageSrc;
}

// Close the popup
function closePopup() {
    const popup = document.getElementById("achievement-popup-modal");
    popup.style.display = "none";
}



//-------------------------------------------------------------------------------------------
// START - Contact US Form for Email using EmailJS directly from code without Server Language                             
//-------------------------------------------------------------------------------------------

// // Initialize EmailJS
// emailjs.init("XJDsuBxQzzB-hjAc8"); // Your Public Key on EmailJS

// const form = document.getElementById("contact-form");
// const successMessage = document.getElementById("success-message");
// const errorMessage = document.getElementById("error-message");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;

//     emailjs
//         .send("service_ybvt4z1","template_2hugpzu", { // "YOUR_SERVICE_ID","YOUR_TEMPLATE_ID" 
//             user_name: name,
//             user_email: email,
//             subject: subject,
//             message: message,
//         })
//         .then(() => {
//             successMessage.style.display = "block";
//             errorMessage.style.display = "none";
//             form.reset();
//         })
//         .catch(() => {
//             successMessage.style.display = "none";
//             errorMessage.style.display = "block";
//         });
// });



//---------------------------------------------------
// START - Back-to-Top Button                               
//---------------------------------------------------

window.onscroll = function() {
    let topButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  
