//initialize the page
document.addEventListener("DOMContentLoaded", function () {
    //mobile menu toggle 
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    //close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    //text typing effect
    const texts = [
        "Java Programmer",
        "Web Developer ",
        "Software Developer" 
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function type(){
        const currentText = texts[textIndex];
        const typingElement = document.querySelector(".typing-text");
        
        if(isDeleting){
            typingElement.textContent = currentText.substring(0,charIndex - 1);
            charIndex--;
            typingDelay = 50;
        }else{
            typingElement.textContent = currentText.substring(0, charIndex+1);
            charIndex++;
            typingDelay = 100;
        }
        if(!isDeleting && charIndex == currentText.length) {
            isDeleting = true;
            typingDelay = 1500;
        }else if(isDeleting && charIndex == 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }
        setTimeout(type, typingDelay);
    }
//start typing effect after a delay
setTimeout(type,1000);

//smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId == '#') return;

        const targerElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targerElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
});