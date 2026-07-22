// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Select Subject function (from subject cards to form)
function selectSubject(subjectName) {
    const subjectSelect = document.getElementById('subject');
    
    // Find the option that matches the subjectName
    for(let i = 0; i < subjectSelect.options.length; i++) {
        if(subjectSelect.options[i].value === subjectName) {
            subjectSelect.selectedIndex = i;
            break;
        }
    }
}

// Form Submission Handling
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Basic validation
    if(name && phone && subject && date && time) {
        // Show success message
        formMessage.textContent = 'تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً.';
        formMessage.className = 'form-message success';
        
        // Reset form
        bookingForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
        }, 5000);
    } else {
        // Show error message
        formMessage.textContent = 'يرجى ملء جميع الحقول المطلوبة.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
