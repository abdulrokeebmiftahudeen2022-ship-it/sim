// ========== PACKAGES PAGE JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // PACKAGES DATA
    const packages = [
        // Local Packages
        { name: "Obudu Mountain Retreat", location: "Obudu Ranch, Cross River, Nigeria", type: "local", category: "local", duration: "3 Nights / 4 Days", rating: 4.9, badge: "🔥 Trending", badgeClass: "trending", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🚡 Cable Car"], tip: "Perfect for nature lovers seeking cool mountain air", whatsapp: "Obudu Mountain Retreat", image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Calabar Carnival Special", location: "Calabar, Cross River, Nigeria", type: "local", category: "local", duration: "5 Nights / 6 Days", rating: 4.8, badge: "🎉 Carnival Special", badgeClass: "special", inclusions: ["✈️ Flight", "🏨 Hotel", "🍽️ All Meals", "🎭 Carnival Access"], tip: "Best during December Carnival season", whatsapp: "Calabar Carnival Special", image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Lagos City Explorer", location: "Lagos, Nigeria", type: "local", category: "budget", duration: "3 Nights / 4 Days", rating: 4.5, badge: "💰 Budget Friendly", badgeClass: "budget", inclusions: ["🏨 Hotel", "🍳 Breakfast", "🏙️ City Tour", "🏖️ Beach Visit"], tip: "Perfect for first-time visitors to Lagos", whatsapp: "Lagos City Explorer", image: "images/lagos.jpg" },
        { name: "Abuja Serenity Escape", location: "Abuja, Nigeria", type: "local", category: "local", duration: "3 Nights / 4 Days", rating: 4.6, badge: "⭐ Popular", badgeClass: "popular", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🏙️ City Tour"], tip: "Ideal for business travelers and relaxation", whatsapp: "Abuja Serenity Escape", image: "https://images.pexels.com/photos/18683244/pexels-photo-18683244.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Ibadan Cultural Tour", location: "Ibadan, Oyo State, Nigeria", type: "local", category: "budget", duration: "2 Nights / 3 Days", rating: 4.5, badge: "💰 Best Value", badgeClass: "budget", inclusions: ["🏨 Hotel", "🍳 Breakfast", "🎭 Cultural Tour", "👨‍🏫 Local Guide"], tip: "Immerse yourself in Yoruba culture and history", whatsapp: "Ibadan Cultural Tour", image: "https://images.pexels.com/photos/13363591/pexels-photo-13363591.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Port Harcourt Getaway", location: "Port Harcourt, Rivers, Nigeria", type: "local", category: "local", duration: "3 Nights / 4 Days", rating: 4.5, badge: "🌟 Staff Pick", badgeClass: "special", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🏙️ City Tour"], tip: "Explore the Garden City's hidden gems", whatsapp: "Port Harcourt Getaway", image: "https://images.pexels.com/photos/158507/pexels-photo-158507.jpeg?auto=compress&cs=tinysrgb&w=800" },
        // International Packages
        { name: "Dubai Luxury Experience", location: "Dubai, United Arab Emirates", type: "international", category: "luxury", duration: "5 Nights / 6 Days", rating: 4.9, badge: "⭐ Best Seller", badgeClass: "bestseller", inclusions: ["✈️ Flight", "🏨 5-Star Hotel", "🍳 Breakfast", "🏜️ Desert Safari", "🗼 Burj Khalifa", "📋 Visa Assistance"], tip: "Ideal for winter sun and luxury shopping", whatsapp: "Dubai Luxury Experience", image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Maldives Paradise Escape", location: "Maldives, Indian Ocean", type: "international", category: "luxury", duration: "7 Nights / 8 Days", rating: 5.0, badge: "🏆 Luxury Pick", badgeClass: "luxury", inclusions: ["✈️ Flight", "🏝️ Overwater Villa", "🍽️ All Meals", "💆 Spa Access", "🌅 Sunset Cruise", "📋 Visa Assistance"], tip: "Perfect for honeymooners and couples", whatsapp: "Maldives Paradise Escape", image: "https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "London Royal Tour", location: "London, United Kingdom", type: "international", category: "luxury", duration: "6 Nights / 7 Days", rating: 4.8, badge: "🏆 Top Rated", badgeClass: "popular", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🏙️ City Tour", "🎡 London Eye", "📋 Visa Assistance"], tip: "Great for history and culture enthusiasts", whatsapp: "London Royal Tour", image: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Paris Romantic Getaway", location: "Paris, France", type: "international", category: "luxury", duration: "5 Nights / 6 Days", rating: 4.9, badge: "❤️ Romantic Choice", badgeClass: "special", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🚢 Seine Cruise", "🗼 Eiffel Tower", "📋 Visa Assistance"], tip: "Ideal for romantic getaways and honeymoons", whatsapp: "Paris Romantic Getaway", image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Istanbul Cultural Journey", location: "Istanbul, Turkey", type: "international", category: "international", duration: "5 Nights / 6 Days", rating: 4.8, badge: "🌟 Cultural Experience", badgeClass: "special", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🏛️ Guided Tours", "⛵ Bosphorus Cruise", "📋 Visa Assistance"], tip: "Where East meets West - rich history and cuisine", whatsapp: "Istanbul Cultural Journey", image: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Cairo Pyramids Adventure", location: "Cairo, Egypt", type: "international", category: "international", duration: "5 Nights / 6 Days", rating: 4.7, badge: "🏛️ Historical Gem", badgeClass: "special", inclusions: ["✈️ Flight", "🏨 Hotel", "🍳 Breakfast", "🏜️ Pyramids Tour", "🛶 Nile Cruise", "📋 Visa Assistance"], tip: "Explore ancient wonders and rich history", whatsapp: "Cairo Pyramids Adventure", image: "https://images.pexels.com/photos/4189827/pexels-photo-4189827.jpeg?auto=compress&cs=tinysrgb&w=800" }
    ];

    let currentFilter = "all";
    let currentSearch = "";
    let visibleCount = 6;

    function renderPackages() {
        let filtered = packages.filter(pkg => {
            let matchesFilter = false;
            if (currentFilter === "all") matchesFilter = true;
            else if (currentFilter === "local") matchesFilter = pkg.type === "local";
            else if (currentFilter === "international") matchesFilter = pkg.type === "international";
            else if (currentFilter === "luxury") matchesFilter = pkg.category === "luxury";
            else if (currentFilter === "budget") matchesFilter = pkg.category === "budget";
            else matchesFilter = true;
            const matchesSearch = pkg.name.toLowerCase().includes(currentSearch.toLowerCase()) || pkg.location.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        const localPackages = filtered.filter(p => p.type === "local");
        const intlPackages = filtered.filter(p => p.type === "international");
        const ordered = [...localPackages.slice(0, 3), ...intlPackages.slice(0, 3), ...localPackages.slice(3), ...intlPackages.slice(3)];
        const toShow = ordered.slice(0, visibleCount);
        const container = document.getElementById("packagesContainer");
        
        if (ordered.length === 0) {
            container.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>No packages found</h3><p>Try adjusting your search or filter</p></div>`;
            document.getElementById("loadMoreWrapper").style.display = "none";
            return;
        }

        container.innerHTML = toShow.map(pkg => `
            <div class="package-card">
                <div class="package-badge ${pkg.badgeClass}">${pkg.badge}</div>
                <img src="${pkg.image}" alt="${pkg.name}" loading="lazy" onerror="this.src='https://placehold.co/800x500/2C3E50/C5A059?text=${pkg.name.replace(/ /g, '+')}&font=playfair'">
                <div class="package-content">
                    <div class="package-header"><h3>${pkg.name}</h3><div class="package-rating"><i class="fas fa-star"></i> ${pkg.rating} ★</div></div>
                    <p class="package-location"><i class="fas fa-map-marker-alt"></i> ${pkg.location}</p>
                    <div class="package-duration"><i class="fas fa-calendar"></i> ${pkg.duration}</div>
                    <div class="package-inclusions">${pkg.inclusions.map(inc => `<span>${inc}</span>`).join('')}</div>
                    <div class="package-tip"><i class="fas fa-lightbulb"></i> ${pkg.tip}</div>
                    <a href="https://wa.me/2348026641531?text=Hello%20Stay%20In%20Motion%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.whatsapp)}%20package%20(${pkg.duration}).%20Please%20share%20details%20and%20availability." class="btn-package-book" target="_blank"><i class="fab fa-whatsapp"></i> Check Availability</a>
                </div>
            </div>
        `).join("");

        document.getElementById("loadMoreWrapper").style.display = visibleCount >= ordered.length ? "none" : "block";
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            visibleCount = 6;
            renderPackages();
        });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value;
            visibleCount = 6;
            renderPackages();
        });
    }

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            visibleCount += 6;
            renderPackages();
        });
    }

    renderPackages();
});