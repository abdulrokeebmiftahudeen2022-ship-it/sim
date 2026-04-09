// ========== VISA PAGE JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // STATS DATA
    const statsData = [
        { icon: "fas fa-passport", number: "98", label: "Success Rate", suffix: "%" },
        { icon: "fas fa-globe-africa", number: "45", label: "Countries Covered", suffix: "+" },
        { icon: "fas fa-smile", number: "5000", label: "Happy Travelers", suffix: "+" },
        { icon: "fas fa-clock", number: "24", label: "Hour Support", suffix: "" }
    ];

    // VISA SERVICES DATA
    const visaServices = [
        { icon: "fas fa-umbrella-beach", name: "Tourist Visa", desc: "For vacations, sightseeing, and family visits.", time: "5-15 days", whatsapp: "Tourist Visa" },
        { icon: "fas fa-briefcase", name: "Business Visa", desc: "For conferences, meetings, and business trips.", time: "7-15 days", whatsapp: "Business Visa" },
        { icon: "fas fa-graduation-cap", name: "Student Visa", desc: "For studying abroad. Documentation and interview prep.", time: "15-45 days", whatsapp: "Student Visa" },
        { icon: "fas fa-plane", name: "Transit Visa", desc: "For stopovers and connecting flights.", time: "3-7 days", whatsapp: "Transit Visa" },
        { icon: "fas fa-users", name: "Family Visa", desc: "For joining family abroad. Complex documentation handled.", time: "15-60 days", whatsapp: "Family Visa" },
        { icon: "fas fa-briefcase-medical", name: "Work Visa", desc: "For employment opportunities abroad.", time: "20-90 days", whatsapp: "Work Visa" },
        { icon: "fas fa-chart-line", name: "💰 Proof of Fund Assistance", desc: "Expert guidance on bank statements and financial documentation.", time: "3-7 days", whatsapp: "Proof of Fund Assistance" }
    ];

    // COUNTRIES DATA
    const countriesData = [
        { region: "🇪🇺 Europe", flag: "fas fa-flag", countries: ["United Kingdom", "France", "Germany", "Italy", "Spain", "Netherlands", "Switzerland", "Belgium", "Portugal", "Greece"], time: "5-20 days" },
        { region: "🌎 North America", flag: "fas fa-flag", countries: ["United States (USA)", "Canada", "Mexico"], time: "10-45 days" },
        { region: "🕌 Middle East", flag: "fas fa-flag", countries: ["United Arab Emirates (UAE)", "Saudi Arabia (KSA)", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan"], time: "3-10 days" },
        { region: "🏯 Asia", flag: "fas fa-flag", countries: ["China", "Japan", "Singapore", "Malaysia", "Thailand", "India", "South Korea", "Vietnam", "Indonesia"], time: "5-15 days" },
        { region: "🌍 Africa", flag: "fas fa-flag", countries: ["South Africa", "Kenya", "Ghana", "Rwanda", "Egypt", "Morocco", "Tanzania", "Mauritius"], time: "5-15 days" },
        { region: "🦘 Oceania", flag: "fas fa-flag", countries: ["Australia", "New Zealand"], time: "15-45 days" }
    ];

    // REQUIREMENTS DATA
    const requirements = [
        { icon: "fas fa-passport", title: "Valid Passport", desc: "Minimum 6 months validity from travel date" },
        { icon: "fas fa-camera", title: "Passport Photos", desc: "2 recent white background photos" },
        { icon: "fas fa-chart-line", title: "Bank Statements", desc: "3-6 months statement showing sufficient funds" },
        { icon: "fas fa-plane-departure", title: "Flight Itinerary", desc: "Confirmed round-trip booking" },
        { icon: "fas fa-hotel", title: "Accommodation", desc: "Hotel booking or invitation letter" },
        { icon: "fas fa-file-alt", title: "Cover Letter", desc: "Purpose of travel statement" },
        { icon: "fas fa-briefcase", title: "Employment Letter", desc: "For employed applicants" },
        { icon: "fas fa-file-invoice", title: "Application Form", desc: "Completed and signed" }
    ];

    // WHY CHOOSE DATA
    const whyChooseData = [
        { icon: "fas fa-chart-line", title: "98% Success Rate", desc: "Proven track record across 45+ countries" },
        { icon: "fas fa-file-signature", title: "Expert Document Review", desc: "Every document checked by visa professionals" },
        { icon: "fas fa-chalkboard-user", title: "Interview Preparation", desc: "Coaching for embassy interviews" },
        { icon: "fas fa-rocket", title: "Fast Processing", desc: "Expedited services available" },
        { icon: "fas fa-tag", title: "Transparent Pricing", desc: "No hidden fees, clear breakdown" },
        { icon: "fab fa-whatsapp", title: "5-15 Min Response", desc: "Quick answers to your questions" }
    ];

    // STEPS DATA
    const stepsData = [
        { number: "1", icon: "fas fa-headset", title: "Consultation", desc: "Contact us via WhatsApp or visit our office. Tell us your travel plans." },
        { number: "2", icon: "fas fa-file-alt", title: "Document Review", desc: "Our experts review your documents and prepare your application." },
        { number: "3", icon: "fas fa-paper-plane", title: "Submission & Follow-up", desc: "We submit your application and track until approval." }
    ];

    // FAQ DATA
    const faqData = [
        { q: "How long does visa processing take?", a: "Processing times vary by country and visa type. Generally: Tourist visas: 5-15 days, Business visas: 7-15 days, Student visas: 15-45 days, Work visas: 20-90 days. Express options available for some countries." },
        { q: "Can you guarantee visa approval?", a: "No agency can guarantee visa approval as the final decision is made by the embassy. However, our 98% success rate comes from thorough document review and expert guidance." },
        { q: "What happens if my visa is rejected?", a: "If rejected, we review the refusal letter, identify the reason, and advise on reapplying. We can help prepare a stronger application." },
        { q: "Do I need to attend an embassy interview?", a: "It depends on the country and visa type. For USA, Schengen, and UK, interviews are often required. We provide comprehensive interview preparation." },
        { q: "How much does visa assistance cost?", a: "Our service fees vary by country and visa type. Contact us for a personalized quote with transparent pricing." },
        { q: "Do you offer express/emergency processing?", a: "Yes, for many countries we offer expedited processing. Contact us with your travel dates for available options." }
    ];

    // Render Stats
    const statsContainer = document.getElementById("visaStatsContainer");
    if (statsContainer) {
        statsContainer.innerHTML = statsData.map(stat => `
            <div class="stat-item">
                <div class="stat-icon"><i class="${stat.icon}"></i></div>
                <div><span class="stat-number" data-target="${stat.number}">0</span><div class="stat-label">${stat.label}</div></div>
            </div>
        `).join("");
    }

    // Render Visa Services
    const servicesContainer = document.getElementById("visaServicesContainer");
    if (servicesContainer) {
        servicesContainer.innerHTML = visaServices.map(service => `
            <div class="service-card">
                <i class="${service.icon}"></i>
                <h3>${service.name}</h3>
                <p>${service.desc}</p>
                <div class="service-time"><i class="fas fa-hourglass-half"></i> ${service.time}</div>
                <a href="https://wa.me/2348026641531?text=Hello%20Stay%20In%20Motion%2C%20I%20need%20assistance%20with%20${encodeURIComponent(service.whatsapp)}." class="btn-service" target="_blank"><i class="fab fa-whatsapp"></i> Inquire Now</a>
            </div>
        `).join("");
    }

    // Render Countries
    const countriesContainer = document.getElementById("countriesContainer");
    if (countriesContainer) {
        countriesContainer.innerHTML = countriesData.map(region => `
            <div class="region-card">
                <div class="region-header"><i class="${region.flag}"></i><h3>${region.region}</h3></div>
                <div class="country-list">${region.countries.map(c => `<span>${c}</span>`).join('')}</div>
                <div class="region-time"><i class="fas fa-hourglass-half"></i> Processing: ${region.time}</div>
            </div>
        `).join("");
    }

    // Render Requirements
    const requirementsContainer = document.getElementById("requirementsContainer");
    if (requirementsContainer) {
        requirementsContainer.innerHTML = requirements.map(req => `
            <div class="requirement-card">
                <i class="${req.icon}"></i>
                <h3>${req.title}</h3>
                <p>${req.desc}</p>
            </div>
        `).join("");
    }

    // Render Steps
    const stepsContainer = document.getElementById("stepsContainer");
    if (stepsContainer) {
        stepsContainer.innerHTML = stepsData.map(step => `
            <div class="step">
                <div class="step-number">${step.number}</div>
                <i class="${step.icon}"></i>
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
            </div>
        `).join("");
    }

    // Render Why Choose Us
    const whyChooseContainer = document.getElementById("whyChooseContainer");
    if (whyChooseContainer) {
        whyChooseContainer.innerHTML = whyChooseData.map(item => `
            <div class="why-item">
                <i class="${item.icon}"></i>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        `).join("");
    }

    // Render FAQ
    const faqContainer = document.getElementById("faqContainer");
    if (faqContainer) {
        faqContainer.innerHTML = faqData.map((item, index) => `
            <div class="faq-item">
                <button class="faq-question">${item.q}<i class="fas fa-chevron-down"></i></button>
                <div class="faq-answer"><p>${item.a}</p></div>
            </div>
        `).join("");
    }

    // Animated Counters
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

    // FAQ Accordion
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
});