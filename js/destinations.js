// ========== DESTINATIONS PAGE JAVASCRIPT ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== DESTINATIONS DATA ==========
    const destinations = [
        // Local Destinations (Nigeria)
        { name: "Lagos", location: "Lagos, Nigeria", type: "local", duration: "3-5 Days", rating: 4.7, bestTime: "Nov - Feb", badge: "💰 Budget Friendly", badgeClass: "budget", highlights: ["🌃 Vibrant nightlife", "🏖️ Beautiful beaches", "🎭 Rich culture"], whatsapp: "Lagos", image: "images/lagos.jpg" },
        { name: "Abuja", location: "Abuja, Nigeria", type: "local", duration: "3-5 Days", rating: 4.6, bestTime: "Nov - Feb", badge: "⭐ Popular", badgeClass: "popular", highlights: ["🏛️ Aso Rock", "🌳 Millennium Park", "🕌 National Mosque"], whatsapp: "Abuja", image: "images/abuja.jpg" },
        { name: "Calabar", location: "Cross River, Nigeria", type: "local", duration: "4-6 Days", rating: 4.8, bestTime: "Dec (Carnival)", badge: "🎉 Carnival Special", badgeClass: "special", highlights: ["🎭 Carnival celebration", "🏝️ Coastal paradise", "📜 Rich history"], whatsapp: "Calabar", image: "images/calabar.jpg" },
        { name: "Obudu Ranch", location: "Cross River, Nigeria", type: "local", duration: "3-5 Days", rating: 4.9, bestTime: "Nov - Feb", badge: "🔥 Trending", badgeClass: "trending", highlights: ["🏔️ Mountain resort", "🚡 Cable car ride", "🌄 Breathtaking views"], whatsapp: "Obudu Ranch", image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Ibadan", location: "Oyo, Nigeria", type: "local", duration: "2-4 Days", rating: 4.5, bestTime: "Nov - Feb", badge: "💰 Best Value", badgeClass: "budget", highlights: ["🏛️ Cocoa House", "🎭 Cultural heritage", "🍛 Local cuisine"], whatsapp: "Ibadan", image: "images/ibadan.jpg" },
        { name: "Port Harcourt", location: "Rivers, Nigeria", type: "local", duration: "3-5 Days", rating: 4.5, bestTime: "Nov - Feb", badge: "🌟 Staff Pick", badgeClass: "special", highlights: ["🌴 Garden city", "⛵ Rivers scenery", "🍽️ Local delicacies"], whatsapp: "Port Harcourt", image: "images/port-harcourt.jpg" },
        // International Destinations
        { name: "Dubai", location: "United Arab Emirates", type: "international", duration: "5-7 Days", rating: 4.9, bestTime: "Nov - Mar", badge: "⭐ Best Seller", badgeClass: "bestseller", highlights: ["🗼 Burj Khalifa", "🏜️ Desert safari", "🛍️ Luxury shopping"], whatsapp: "Dubai", image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "London", location: "United Kingdom", type: "international", duration: "5-7 Days", rating: 4.8, bestTime: "May - Sep", badge: "🏆 Top Rated", badgeClass: "popular", highlights: ["🏰 Buckingham Palace", "🎡 London Eye", "🎭 West End shows"], whatsapp: "London", image: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Maldives", location: "Indian Ocean", type: "international", duration: "7 Nights", rating: 5.0, bestTime: "Nov - Apr", badge: "🏆 Luxury Pick", badgeClass: "luxury", highlights: ["🏝️ Overwater villas", "🌊 Turquoise waters", "💆‍♀️ Spa retreat"], whatsapp: "Maldives", image: "https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Paris", location: "France", type: "international", duration: "5-7 Days", rating: 4.9, bestTime: "Apr - Oct", badge: "❤️ Romantic Choice", badgeClass: "special", highlights: ["🗼 Eiffel Tower", "🎨 Louvre Museum", "🚢 Seine cruise"], whatsapp: "Paris", image: "images/paris.jpg" },
        { name: "Istanbul", location: "Turkey", type: "international", duration: "5-7 Days", rating: 4.8, bestTime: "Apr - May / Sep - Oct", badge: "🌟 Cultural Experience", badgeClass: "special", highlights: ["🕌 Hagia Sophia", "⛵ Bosphorus cruise", "🍽️ Turkish cuisine"], whatsapp: "Istanbul", image: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Cairo", location: "Egypt", type: "international", duration: "5-7 Days", rating: 4.7, bestTime: "Oct - Apr", badge: "🏛️ Historical Gem", badgeClass: "special", highlights: ["🏜️ Pyramids of Giza", "🛶 Nile cruise", "📜 Egyptian Museum"], whatsapp: "Cairo", image: "https://images.pexels.com/photos/4189827/pexels-photo-4189827.jpeg?auto=compress&cs=tinysrgb&w=800" }
    ];

    // ========== GLOBAL VARIABLES ==========
    let currentFilter = "all";
    let currentSearch = "";
    let visibleCount = 6;

   // ========== RENDER TRENDING DESTINATIONS (Top 3) ==========
function renderTrending() {
    const trendingContainer = document.getElementById("trendingContainer");
    if (!trendingContainer) return;
    
    // Get first 3 destinations for trending section
    const trending = destinations.slice(0, 3);
    
    trendingContainer.innerHTML = trending.map(dest => `
        <div class="destination-card">
            <div class="destination-badge ${dest.badgeClass}">${dest.badge}</div>
            <img src="${dest.image}" alt="${dest.name}" loading="lazy" onerror="this.src='https://placehold.co/800x500/2C3E50/C5A059?text=' + dest.name.replace(/ /g, '+') + '&font=playfair'">
            <div class="destination-card-content">
                <div class="destination-card-header"><h3>${dest.name}</h3><div class="destination-rating"><i class="fas fa-star"></i> ${dest.rating} ★</div></div>
                <p class="destination-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
                <div class="destination-meta"><span><i class="fas fa-calendar"></i> ${dest.duration}</span><span><i class="fas fa-leaf"></i> Best time: ${dest.bestTime}</span></div>
                <div class="destination-highlights">${dest.highlights.map(h => `<span>${h}</span>`).join('')}</div>
                <a href="https://wa.me/2348026641531?text=Hello%20Stay%20In%20Motion%2C%20I'm%20interested%20in%20visiting%20${encodeURIComponent(dest.whatsapp)}.%20Please%20share%20details%20and%20pricing." class="btn-destination-check" target="_blank"> Check Price</a>
            </div>
        </div>
    `).join("");
}

    // ========== RENDER ALL DESTINATIONS (Filtered) ==========
    function renderDestinations() {
        let filtered = destinations.filter(dest => {
            const matchesFilter = currentFilter === "all" || dest.type === currentFilter;
            const matchesSearch = dest.name.toLowerCase().includes(currentSearch.toLowerCase()) || dest.location.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        const localDest = filtered.filter(d => d.type === "local");
        const intlDest = filtered.filter(d => d.type === "international");
        const ordered = [...localDest.slice(0, 3), ...intlDest.slice(0, 3), ...localDest.slice(3), ...intlDest.slice(3)];
        const toShow = ordered.slice(0, visibleCount);
        const container = document.getElementById("destinationsContainer");
        
        if (ordered.length === 0) {
            container.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>No destinations found</h3><p>Try adjusting your search or filter</p></div>`;
            document.getElementById("loadMoreWrapper").style.display = "none";
            return;
        }
        
        container.innerHTML = toShow.map(dest => `
            <div class="destination-card">
                <div class="destination-badge ${dest.badgeClass}">${dest.badge}</div>
                <img src="${dest.image}" alt="${dest.name}" loading="lazy" onerror="this.src='https://placehold.co/800x500/2C3E50/C5A059?text=' + dest.name.replace(/ /g, '+') + '&font=playfair'">
                <div class="destination-card-content">
                    <div class="destination-card-header">
                        <h3>${dest.name}</h3>
                        <div class="destination-rating">
                            <i class="fas fa-star"></i> ${dest.rating} ★
                        </div>
                    </div>
                    <p class="destination-location">
                        <i class="fas fa-map-marker-alt"></i> ${dest.location}
                    </p>
                    <div class="destination-meta">
                        <span class="duration"><i class="fas fa-calendar"></i> ${dest.duration}</span>
                        <span class="best-time"><i class="fas fa-leaf"></i> Best time: ${dest.bestTime}</span>
                    </div>
                    <div class="destination-highlights">
                        ${dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                    </div>
                    <a href="https://wa.me/2348026641531?text=Hello%20Stay%20In%20Motion%2C%20I'm%20interested%20in%20visiting%20${encodeURIComponent(dest.whatsapp)}.%20Please%20share%20details%20and%20pricing." class="btn-destination-check" target="_blank">
                         Check Price
                    </a>
                </div>
            </div>
        `).join("");

        document.getElementById("loadMoreWrapper").style.display = visibleCount >= ordered.length ? "none" : "block";
    }

    // ========== FILTER BUTTONS ==========
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            visibleCount = 6;
            renderDestinations();
        });
    });

    // ========== SEARCH FUNCTIONALITY ==========
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value;
            visibleCount = 6;
            renderDestinations();
        });
    }

    // ========== LOAD MORE BUTTON ==========
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            visibleCount += 6;
            renderDestinations();
        });
    }

    // ========== INITIAL RENDERS ==========
    renderTrending();      // Renders the Trending Destinations section
    renderDestinations();  // Renders the main destinations grid
});


