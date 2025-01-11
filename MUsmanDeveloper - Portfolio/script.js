


/**********************/
/* START - Pre-Loader
/**********************/

/* PreLoader overlay */
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; 
}

/* PreLoader styles */
.loader {
    --c1: #673b14;
    --c2: #f8b13b;
    width: 40px;
    height: 80px;
    border-top: 4px solid var(--c1);
    border-bottom: 4px solid var(--c1);
    background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px, var(--c1) 0) 50%/7px 8px no-repeat;
    display: grid;
    overflow: hidden;
    animation: l5-0 2s infinite linear;
}

.loader::before, .loader::after {
    content: "";
    grid-area: 1/1;
    width: 75%;
    height: calc(50% - 4px);
    margin: 0 auto;
    border: 2px solid var(--c1);
    border-top: 0;
    box-sizing: content-box;
    border-radius: 0 0 40% 40%;
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude;
    background: linear-gradient(var(--d,0deg),var(--c2) 50%,#0000 0) bottom /100% 205%, linear-gradient(var(--c2) 0 0) center/0 100%;
    background-repeat: no-repeat;
    animation: inherit;
    animation-name: l5-1;
}

.loader::after {
    transform-origin: 50% calc(100% + 2px);
    transform: scaleY(-1);
    --s: 3px;
    --d: 180deg;
}

@keyframes l5-0 {
    80% { transform: rotate(0) }
    100% { transform: rotate(0.5turn) }
}

@keyframes l5-1 {
    10%, 70% { background-size: 100% 205%, var(--s,0) 100% }
    70%, 100% { background-position: top, center }
}


/*************************/
/* START - CSS Variables
/*************************/

:root {
    /* Color Variables */
    --header-bg-color: #FFFFFF;
    --header-bottom-border-color: #007BFF;
    --primary-color: #007BFF;
    --secondary-color:  #000000;
    --hover-primary-color: #144A7C;
    --hover-secondary-color: #89B0DA;
    --section-heading-bg-color: #f7f9fc;
    --section-content-bg-color: #f7f9fc;
    --text-color:  #000000;
    --meta-text-color: #888888;
    --footer-bg-color: #222222;
    --footer-heading-color: #000000;
    --footer-text-color: #BBBBBB;
    --external-link-color: #007BFF;
    /* Font Variables */
    --font-family: 'Arial', sans-serif;
    --heading-font-size: 24px;
    --paragraph-font-size: 16px;
    --button-font-size: 14px;
    --icon-size: 18px;
    /* Spacing Variables */
    --section-content-padding: #40px;
    --padding-small: 10px;
    --padding-medium: 20px;
    --padding-large: 30px;
    --margin-small: 10px;
    --margin-medium: 20px;
    --margin-large: 30px;
    /* Border Variables */
    --border-color-light: #eee;
    --border-radius: 5px;
}


/**********************/
/* START - Global CSS
/**********************/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/************************/
/* START - Body Section
/************************/

body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: Arial, sans-serif;
}


/**************************/
/* START - Header Section
/**************************/




/************************/
/* START - main Section
/************************/

main {
    background-color: var(--background-color);
}


/************************/
/* START - Hero Section
/************************/

.slider-bg-img-container {
    background-image:url('assets/hero_section/New Hero image LightBG with ProfileAvatar Size 1535x2080px .png');
    background-size: cover;
    background-position: center;  
}

.animated-title {
    color: #000;
    animation: text-fade-in-out 8s infinite;
}

.highlighted-text {
    color: #007BFF;
}

.prsn-occupation {
    color: #000;   
}

.animated-description {
    color: #000;
    animation: text-fade-in-out 8s infinite;
}

.social-links {
    width: 100%;
}

.social-links a {
    color: #000;
    text-decoration: none;
}

.social-links a:hover {
    color: #1A76D1;
}

.first-btn, .second-btn {
    border-radius: 5px;
}

.first-btn {
    background-color: #007BFF;
    border: 1px solid  #007BFF;
}

.second-btn {
    background-color: #000; 
    border: 1px solid  #000;
}

.first-btn:hover {
    background-color: #fff;
    a {
        color: #007BFF;
    }
}  

.second-btn:hover {
    background-color:  #fff;
    a {
        color: #000;
    }
}  

.first-btn a, .second-btn a {
    font-size: 14px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s;
}

@keyframes text-fade-in-out {
    0%, 20%, 100% { opacity: 0; transform: translateY(-30px); }
    30%, 80% { opacity: 1; transform: translateY(0); }
}


/*************************/
/* START - About Section
/*************************/

.about-section {
    width: 100%;
    background-color: #fff; 
    margin-top: 50px;
}

.about-header {
    width: 100%;
    background-color: #f7f9fc;
    margin: 20px 0px;
    border: none;
}

.about-header h2 {
    color: #000; 
    font-weight: 600;
    text-align: center;
    margin: 0px 0px;
}

.about-content {
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: #f7f9fc;        
}

.personal-profile {
    background-color: #fff;
    padding: 10px 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.personal-profile:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.personal-profile img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Keeps the aspect ratio */
}

.profile-image-popup-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* background color when alert-box opened */
    justify-content: center;
    align-items: center;
}

.profile-popup-content {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: #ff6347;
    cursor: pointer;
    transition: color 0.3s ease;
}

.personal-bio-data {
    width: 100%;
    height: auto;
}

.key-point {
    display: flex;
    flex-direction: row;
    gap: 5px; /* Space between label and value */
}

.key-point span {
    color: #007BFF;
    font-weight: bold;
}

.key-point p {
    text-align: left;
}

.description {
    line-height: 1.5;
    text-align: justify;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
    /*transform: translateY(-8px);*/
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    .stats-value {
      color: #000; 
    }
    .stats-name {
      color: #007BFF; 
    }
}

.stats-value {
    color: #007BFF; 
    transition: color 0.3s;
}

.stats-name {
    color: #000; 
    margin-top: 5px;
}


/****************************/
/* START - Services Section
/***************************/

.services-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}

.services-header {
    width: 100%;
    background-color: #f7f9fc;
    margin: 20px 0px;
    border: none;
}

.services-header h2 {
    color: #000; 
    font-weight: 600;
    text-align: center;
}

.services-content {
    width: 100%;
    height: auto;
    margin: 20px 0px;
    background-color: #f7f9fc;
    padding: 40px;
    border-radius: 10px;
}

.services-list {
    width: 100%;
    height: auto;
}

.serv-tile-box {
    height: auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 25px 15px;
    text-align: justify;
    transition: transform 0.3s, box-shadow 0.3s;
}

.serv-tile-box:hover {
    transform: translateY(-8px);
    /*box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);*/
    .serv-tile-box-avatar {
        background-color: #000;
    }
    .serv-tile-box-title {
        color: #1A76D1;
    }
}

.serv-tile-box-avatar {
    background-color: #1A76D1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
}

.serv-tile-box-avatar i {
    color: #fff;
}

.serv-tile-box-title {
    color: #333;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px; 
}

.serv-tile-box-meta {
    color: #666;
    line-height: 1.6;
}


/****************************/
/* START - Skills Section
/***************************/

.skills-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}

.skills-header {
    width: 100%;
    background-color: #f7f9fc;
    margin: 20px 0px;
    border: none;
}

.skills-header h2 {
    color: #000;
    font-weight: 600;
    text-align: center;
}

.skills-content {
    width: 100%;
    height: auto;
    background-color: #f7f9fc;
    padding: 20px 10px;
    border-radius: 10px;
}

.skill {
    height: auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease; /* Smooth transition */
}

.skill:hover {
    /*transform: translateY(-4px);*/
    transform: scale(1.05);
}

.skill-info {
    display: flex;
    justify-content: space-between;
}

.skill-name {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    float: left;
}

.skill-percentage {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    float: right; /* Float percentage to the right */
    top: 10px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
}

.skill-progress-bar {
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
}

.skill-progress-fill {
    height: 100%;
    /* background-color: #6244C5; */
    background-color: var(--accent-color);
    border-radius: 10px;
    width: 0; /* Initially zero width */
    transition: width 1.5s ease-in-out; /* Smooth transition animation */
}

/* Different filling colors for different skills Progress-bars */
.first-skill-progress-bar .skill-progress-fill {
    background-color: #6244C5; /* Purple */
}

.second-skill-progress-bar .skill-progress-fill {
    background-color: #FFC448; /* Yellow */
}

.third-skill-progress-bar .skill-progress-fill {
    background-color: #DC3545; /* Red */
}

.fourth-skill-progress-bar .skill-progress-fill {
    background-color: #0dcaf0; /* Cyan */
}

.fifth-skill-progress-bar .skill-progress-fill {
    background-color: #05bb66; /* Cyan */
}




/******************************************/
/* START - Education & Experience Section
/*****************************************/

.edu-expr-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
    padding: 0px;
}

.edu-expr-header {
    width: 100%;
    margin: 20px 0px;
    background-color: #f7f9fc;
    border: none;
}

.edu-expr-header h2 {
    color: #333;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin: 0px 0px;
}

/* Education and Experience Timelines Combine Container */
.edu-expr-content {
    width: 100%;
    margin: 20px 0px;
    background-color: #f7f9fc;
    padding: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
}

.education-timeline, .experience-timeline {
    max-width: 600px;
    width: 510px;
    margin-right: 20px;
    background-color: #f7f9fc;
    border-radius: 8px;
}

.education-header, .experience-header{
    width: 100%;
    margin: 20px 0px 40px;
    border: none;
}

.education-header h3, .experience-header h3 {
    color: #333;
    font-size: 24px;
    text-align: center;
}

.edu-timeline-container, .expr-timeline-container  {
    display: flex;
    gap: 30px;
    width: 100%;
}

.edu-timeline, .expr-timeline {
    position: relative;
    max-width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: transparent;
}

.edu-timeline::before, .expr-timeline::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: #007BFF;
    z-index: 0;
}

.edu-node, .expr-node {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: transparent; /* Initially transparent */
    border: 5px solid #007BFF; /* Consistent border size */
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
}

.edu-node::before, .expr-node::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px; /* Smaller circle to hide line */
    height: 10px;
    background-color: #f4f4f9; /* Matches background to hide the line */
    border-radius: 50%;
    z-index: 1;
}

.edu-node.edu-active, .expr-node.expr-active {
    background-color: black;
    border-color: black;
}

.edu-node.edu-hover, .expr-node.expr-hover {
    background-color: black;
    border-color: black;
}

.edu-cards, .expr-cards {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.edu-card, .expr-card {
    width: 460px;
    height: 170px;
    padding: 15px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.edu-card.edu-active, .expr-card.expr-active  {
    background-color: lightblue;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.edu-card.edu-hover, .expr-card.expr-hover {
    background-color: lightblue;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}  

.edu-card h5, .expr-card h5  {
    margin: 0px 0px 10px;
    text-align: left;
    color: #007BFF;
    font-size: 14px;
}

.edu-card h3, .expr-card h3  {
    margin: 10px 0px;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
}

.edu-card h4, .expr-card h4  {
    margin: 10px 0px;
    text-align: left;
    color: #007BFF;
    font-size: 16px;
}

.edu-card p, .expr-card p {
    margin: 10px 0px 0px;
    text-align: justify;
    color: #666;
    font-size: 16px;
}


/****************************/
/* START - Projects Section
/****************************/

.projects-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}

.projects-header {
    width: 100%;
    margin: 20px 0px;
    background-color: #f7f9fc;
    border: none;
}

.projects-header h2 {
    color: #000; 
    font-weight: 600;
    text-align: center;
    margin: 0px 0px;
}

.projects-content {
    width: 100%;
    background-color: #f7f9fc;
    border-radius: 10px;
}

.project {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    text-align: center;
    position: relative; /* relative positioning make social share dropdown position correctly */
}

.project:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.project img {
    width: 100%;
    height: auto;
}

.project .project-title-container {
    height: 50px;
    margin: 15px;
}

.project .project-title {
    font-weight: 600;
    color: #333;
}

.project .project-link-source {
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 15px;
}

.project .project-link-source p {
    font-size: 14px;
    color: #777;
    text-align: left;
}

.project .project-link-source p a {
    text-decoration: none;
    color: #777;
}

.project .project-link-source p a:hover {
    text-decoration: none;
    color: #007BFF;
}

.project .project-meta-info {
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 15px;
}

.project .project-meta-info p {
    font-size: 14px;
    color: #777;
    text-align: left;
}

.project .project-meta-info p a {
    text-decoration: none;
    color: #777;
}

.project .project-meta-info p a:hover {
    text-decoration: none;
    color: #007BFF;
}

.share-dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    width: 170px;
    min-width: 170px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 1;
    padding: 15px;
    text-align: left;
    top: 20%; /* Adjust top to position the dropdown correctly */
    left: 50%;
    transform: translateX(-50%);
}

.share-dropdown-header {
    display: flex;
    gap: 25px;
    justify-content: space-between;
    align-items: center;
}

.share-dropdown-close-icon {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #e67676;
    margin-right: 5px;
}

.share-dropdown-close-icon:hover {
    color: #f10707;
}

.share-dropdown-content a {
    display: block;
    margin-top: 10px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.share-dropdown-content a i {
    color: #1A76D1;
    margin-right: 10px;
}

.share-dropdown-content a:hover {
    color: #1A76D1;
    .share-dropdown-content a i {
        color: #1A76D1;
    }
}

/* Toggle visibility when the parent of share-dropdown-items is clicked */
.share-icon-text:hover .share-dropdown-content {
    display: block;
}

.projects-pagination {
    margin-top: 40px;
}

.projects-pagination .btn {
    background-color: #007BFF; 
    color: #fff; 
    padding: 8px 12px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.projects-pagination .btn:hover {
    background-color: #000; 
    .projects-pagination .btn a {
        color: #fff;
    }
}

.projects-pagination .btn.active {
    color: #fff;
    background-color: #000; 
}

.projects-pagination .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}


/*********************************/
/* START - Testimonials  Section
/*********************************/

.testimonials-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}

.testimonials-header {
    width: 100%;
    margin: 20px 0px;
    background-color: #f7f9fc;
    border: none;
}

.testimonials-header h2 {
    color: #333;
    font-weight: 600;
    text-align: center;
    margin: 0px;
}

.testimonials-content {
    width: 100%;
    background-color: #f7f9fc;
    border-radius: 10px;
}

.testimonial {
    width: 100%;
    transition: opacity 0.5s ease;
}

.starting-quotation-mark {
    color: #1A76D1; 
    text-align: left;
    margin: 0 5px;
}

.testimonial-text {
    position: relative;
    color: #333;
    font-style: italic;
    text-align: justify;
    line-height: 1.6;
}

.closing-quotation-mark {
    color: #1A76D1; 
    text-align: right;
    margin: 0 5px;
}

.author-avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.author-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
}

.author-name {
    color: #000;
}

.author-designation {
    color: #777;
}

.author-social-links a {
    color: #777; 
    transition: color 0.3s;
}

.author-social-links a:hover {
    color: #007BFF;
}

.testimonial-dots {
    text-align: center;
    padding-top: 40px;
}

.testimonial-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ddd;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.testimonial-dots .dot.active {
    background-color: #007bff;
}


/*********************************/
/* START - Achievements Section
/*********************************/

.achievements-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}    
    
.achievements-header {
    width: 100%;
    background-color: #f7f9fc;
    margin: 20px 0px;
    border: none;
}

.achievements-header h2 {
    color: #000; 
    font-weight: 600;
    text-align: center;
    margin: 0px 0px;
}

.achievements-carousel {
    width: 100%;
    margin: 20px 0px;
    background-color: #f7f9fc;
    border-radius: 10px;
    overflow: hidden; 
}

.carousel-track {
    transition: transform 0.5s ease-in-out;
    width: fit-content;
}

.achievement {
    background-color: #fff;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.achievement:hover {
    transform: scale(1.10); 
    cursor: pointer;
}

.achievement-card {
    margin: 10px 10px;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center-aligns the title under the image */
}

.achievement-card img {
    border: 1px solid #007BFF; /* Add a solid border */
    margin-bottom: 5px;
}

.achievement-card h3 {
    color: #000;
    font-weight: 600;
    text-align: center;
}

.carousel-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ddd;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.carousel-dots .dot.active {
    background-color: #007BFF;
}

.achievement-popup-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.achievement-popup-content {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: #ff6347;
    cursor: pointer;
    transition: color 0.3s ease;
}


/***************************/
/* START - Contact Section
/***************************/

.contact-section {
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}

.contact-header {
    width: 100%;
    margin: 20px 0px;
    background-color: #f7f9fc;
    border: none;
}

.contact-header h2 {
    color: #333;
    font-weight: 600;
    text-align: center;
    margin: 0px;
}

.contact-content {
    width: 100%;
    background-color: #f7f9fc;
    border-radius: 10px;
}

.contact-form {
    width: 100%;
}

.contact-form label {
    color: #333;
    text-align: left;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #000;
    outline: none;
}

.submit-btn {    
    font-weight: 400;
    background-color: #007BFF;
    color: #fff;
    text-align: center;
    margin-top: 30px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-btn:hover {
    background-color: #000;
}


/***************************/
/* START - Footer Section
/***************************/

.footer-section {
    width: 100%;
    background-color: #f9f9f9;
    margin-top: 50px;
}

.footer-columns {
    width: 100%;
}

.footer-column-1 h3, .footer-column-3 h3, .footer-column-2 h3 {
    color: #000;
    text-align: left;
    margin: 20px 0px 30px;
}

.footer-column-1 .footer-about-content {
    display: block;
    /* In display:block case there is no gap property to give 25px space between each item */
    /* So you need to use margin-bottom:25px with display:block child elements/tags/class */
}

.footer-column-1 .footer-about-content .footer-about-description {
    color: #000;
    font-size: 16px;
    text-align: justify;
    line-height: 1.5;
    margin-bottom: 35px; /* Adds 20px space between each item */
}

.footer-column-1 .footer-about-content .footer-about-social-links {
    margin-bottom: 0px; /* Adds 20px space between each item */
    list-style-type: none;
    display: flex;
    gap: 25px;
}

.footer-column-1 .footer-about-content .footer-about-social-links li a {
    text-decoration: none;
    color: #000;
}

.footer-column-1 .footer-about-content .footer-about-social-links li a:hover {
    color: #007BFF;
}

.footer-column-2 .footer-pages-links {
    list-style-type: none;
    display: block;
    /* In display:block case there is no gap property to give 25px space between each item */
    /* So you need to use margin-bottom:25px with display:block child elements/tags/class */
}

.footer-column-2 .footer-pages-links li {
    margin-bottom: 25px; /* Adds 20px space between each item */
}

.footer-column-2 .footer-pages-links li a {
    text-decoration: none;
    color: #000;
}

.footer-column-2 .footer-pages-links li a:hover {
    color: #007BFF;
}

.footer-column-3 .footer-contact-details {
    list-style-type: none;
    display: block;
    /* In display:block case there is no gap property to give 25px space between each item */
    /* So you need to use margin-bottom:25px with display:block child elements/tags/class */
}

.footer-column-3 .footer-contact-details li {
    margin-bottom: 25px; /* Adds 20px space between each item */
}

.footer-column-3 .footer-contact-details li div {
    display: flex;
    gap: 15px;
}

.footer-column-3 .footer-contact-details li div:hover {
    a span {
        color: #007bff;
    };
    a p {
        color: #007bff;
    };
}

.footer-column-3 .footer-contact-details li div a {
    text-decoration: none;
    display: flex;
    gap: 15px;
}

.footer-column-3 .footer-contact-details li div a span {
    color: #000;
}

.footer-column-3 .footer-contact-details li div a p {
    color: #000;
    font-size: 16px;
    text-align: justify;
}

.footer-copyright {
    color: #000;
    text-align: center;
}

.footer-copyright a {
    color: #1A76D1; 
    text-decoration: none;
}

.footer-copyright a:hover {
    color: #1A76D1; 
    text-decoration: underline;
}



/*****************************/
/* START - Back-to-Top Button
/*****************************/
    
.back-to-top {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background-color: #0268ee;
    color: white;
    padding: 5px 5px;
    border: none;
    cursor: pointer;
    display: none; /* Initially not display until user not scroll little to bottom*/
}

.back-to-top:hover {
    background-color: #000;
}



/* This Screen Size of my Laptop Device during development 769-1366px */

/* @media screen and (min-width: 769px) and (max-width: 1366px) {
    
}   */




