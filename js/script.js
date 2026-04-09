// ========== GLOBAL JAVASCRIPT - WORKS ON ALL PAGES ==========

document.addEventListener('DOMContentLoaded', function() {

    // ========== 1. LOADER ==========
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.classList.add('hidden');
    }, 1000);

    // ========== 2. NAVBAR SCROLL EFFECT ==========
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('show');
        }
    });

  // ========== MOBILE MENU ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeMenuBtn = document.querySelector('.close-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking close button (X)
if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target) && navMenu?.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
    // ========== 4. BACK TO TOP ==========
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========== 5. ACTIVE NAV LINK ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // ========== 6. SEARCH TABS (ON HOMEPAGE) - THIS FIXES YOUR ISSUE ==========
    const tabBtns = document.querySelectorAll('.tab-btn');
    const searchForms = document.querySelectorAll('.search-form');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all tabs
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked tab
                btn.classList.add('active');
                
                // Get which tab was clicked
                const tabId = btn.getAttribute('data-tab');
                
                // Hide all forms
                searchForms.forEach(form => {
                    form.classList.remove('active');
                    form.style.display = 'none';
                });
                
                // Show the selected form
                const targetForm = document.getElementById(`${tabId}-form`);
                if (targetForm) {
                    targetForm.classList.add('active');
                    targetForm.style.display = 'block';
                }
            });
        });
    }

    // ========== 7. TESTIMONIAL SLIDER (Homepage only) ==========
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    if (testimonialCards.length > 0) {
        function showSlide(index) {
            testimonialCards.forEach(card => card.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonialCards[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialCards.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // ========== 8. ANIMATED COUNTERS ==========
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length > 0) {
        const startCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (counter.getAttribute('data-target') === '98') {
                        counter.textContent = Math.ceil(current) + '%';
                    } else if (counter.getAttribute('data-target') === '5000') {
                        counter.textContent = Math.ceil(current).toLocaleString();
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                    setTimeout(updateCounter, 20);
                } else {
                    if (counter.getAttribute('data-target') === '98') {
                        counter.textContent = '98%';
                    } else if (counter.getAttribute('data-target') === '5000') {
                        counter.textContent = '5,000+';
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            updateCounter();
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ========== 9. FAQ ACCORDION ==========
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });
                
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });
    }

    // ========== 10. CIRCLE PROGRESS (Visa section on homepage) ==========
    const circles = document.querySelectorAll('.circle-progress');
    if (circles.length > 0) {
        circles.forEach(circle => {
            const value = circle.getAttribute('data-value');
            const degrees = (value / 100) * 360;
            circle.style.background = `conic-gradient(var(--primary) 0deg ${degrees}deg, rgba(255,255,255,0.1) ${degrees}deg 360deg)`;
        });
    }

    // ========== 11. SCROLL REVEAL ANIMATION ==========
    const revealElements = document.querySelectorAll('.destination-card, .package-card, .stat-item, .feature-item, .info-card, .map-card, .value-card, .service-card, .why-item, .step, .region-card, .requirement-card, .office-card');
    
    if (revealElements.length > 0) {
        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
        });
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(el => revealObserver.observe(el));
    }
});