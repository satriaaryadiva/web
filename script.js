function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
}

setInterval(displayTime, 1000);
// jumbo

const contimage = document.querySelector('.contimage');
const jumbo  = document.querySelector  ( '.jumbo');

contimage.addEventListener('click',function(e){
    if( e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('.fade');
        setTimeout(
            function(){
                    jumbo.classList.remove('.fade');
                    
            }
           
        );
        setInterval(contimage,1000);
    }

});


window.addEventListener('scroll', function() {
    const rect = cards.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        cards.style.backgroundPosition = `-${rect.top}px`;
    } else {
        cards.style.backgroundPosition = 'center';
    }
});




// scrol

const cards = document.querySelector('.cards');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollStep = 200;
let currentScroll = 0;

function scrollLeft() {
    currentScroll -= scrollStep;
    if (currentScroll < 0) {
        currentScroll = 0;
    }
    cards.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
    });
}

function scrollRight() {
    currentScroll += scrollStep;
    cards.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
    });
}

leftArrow.addEventListener('mouseover', scrollLeft);
rightArrow.addEventListener('mouseover', scrollRight);

// scroll efect



const elements = document.querySelectorAll('*'); // Select all elements within the container

function fadeInAll() {
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

window.addEventListener('scroll', fadeInAll);
window.addEventListener('load', fadeInAll); // To trigger on page load
