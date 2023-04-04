/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createListItem(){

    for (section of sections){
        sectionId = section.getAttribute('id');
        sectionName = section.getAttribute('data-nav');

        // create list item for each section
        listItem = document.createElement('li');

        // add link to li element 
        // Scroll to section on link click by using sectionId
        listItem.innerHTML = `<a class="menu__link" href="#${sectionId}" data-nav="${sectionId}">${sectionName}</a>`;

        // add li to navbar__list
        navbarList.appendChild(listItem);
    }
}

// Add class 'active' to section when near top of viewport
function makeActive(){
    for (section of sections) {
        const secPosition = section.getBoundingClientRect();
        let sectionId = section.getAttribute('id');
        if (secPosition.top <= 100 && secPosition.bottom >= 100) {
            if(!section.classList.contains('your-active-class')){

                //apply active state on current section and corresponding Nav link
                section.classList.add('your-active-class');
                document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.add('active__link');
            }
        } else {
            //Remove active state from other section and corresponding Nav link
            section.classList.remove('your-active-class');
            document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.remove('active__link');
        }
    }
}

//Smooth scroll to anchor ID
function smoothScroll(event){
    event.preventDefault();
    if(event.target.dataset.nav){
        document
            .getElementById(`${event.target.dataset.nav}`)
            .scrollIntoView({behavior:"smooth"});
        setTimeout(() => {
            location.hash = `${event.target.dataset.nav}`;
        }, 300);
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createListItem();

//Smooth scroll event
navbarList.addEventListener("click", smoothScroll);

// Set sections as active
document.addEventListener('scroll', makeActive);

