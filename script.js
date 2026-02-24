// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}


// Generate 70 services
const services = [
{id: 1, title: "5Gb For 7Days Airtel Data Plan", description: "Order 5Gb For 7 Days 50x per Week N13,000 Cash Gift", price: 1.29, image: "https://media.istockphoto.com/id/1225346066/photo/5-gb-3d.jpg?s=612x612&w=0&k=20&c=2rN-wLWIsGq-MnaGk5sRY207YbELm-ZoXfkY8zH8CmA=" },

{id: 2, title: "10Gb For 30Days Airtel Data Plan", description: "Get started with 10Gb monthly, Order 65x per Month Get N25,000 Cash price", price: 2.40, image: "https://media.istockphoto.com/id/514221206/photo/cloud-storage-10gb-concept.jpg?s=612x612&w=0&k=20&c=zEhvwNiEOCrCZ2yfq95MLEi4NWuZVMFq6K1NfaI09WQ=" },

{id: 3, title: "3Gb For 2Days Airtel Data Plan", description: "Quick 2Days Data Offer, Order 70x Per month Get N17,000 Cash Reward", price: 0.87, image: " https://media.istockphoto.com/id/1208250906/photo/3gb-3d.jpg?s=612x612&w=0&k=20&c=s-Z_wo7Q2BBfxwXNrju-QpG_73dTr9k3_ErQt53Itt0=" },

{id: 4, title: "2Gb For 30Days Airtel Data Plan", description: "Buy 2Gb Data Plan Today For 30Days, Purchase 100x Per month to Win N20,000 Cash Price", price: 1.21, image: "https://media.istockphoto.com/id/1208250910/photo/2gb-3d.jpg?s=612x612&w=0&k=20&c=hY6m2hmx5YGABRjg99Rd71qdR1Q_LZ7Z-lZWIyY8d3E=" },

{id: 5, title: "600Mb For 2Days Airtel Data Plan", description: "Fast And Reliable Data Plan Order 100x Per month Get N7000 Cash Price", price: 0.21, image: " https://media.istockphoto.com/id/1182685030/photo/600-mbps-3d.jpg?s=612x612&w=0&k=20&c=-yG7lOcUjYPSRWFx1Ffe8RY0jrAkQ3d8WNqNs58E_5I=" },

{id: 6, title: "60Gb For 30Days Mtn Data Plan", description: "Enjoy Exclusive Data Offer For A Month, Order 60x per month Earn N60,000 Cash ", price: 12.11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 7, title: "7Gb For 2Days Mtn Data Plan", description: "Order 85x 7Gb per Month Earn N18,000 Cash", price: 1.55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 8, title: "3.2Gb For 2Days Mtn Data Plan", description: "Enjoy 3.2Gb 2Days Offer, Order 100x per Month Earn N26,000 Cash Out", price: 1.02, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 9, title: "30Gb For 30Days Mtb Data Plan", description: "Get started with 30Days Monthly Offer, Order 40x per month N52,000 Cash Token", price: 8.59, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 10, title: "1.5Gb For 7Days Social Plan Airtel Data Plan", description: "Get Exciting 7Days Social Data Plan, Buy 100x of 1.5Gb per month, Win N10,000 Cash Price", price: 90.64, image: "https://media.istockphoto.com/id/1255584061/photo/1-5-gigabytes-3d.jpg?s=612x612&w=0&k=20&c=u7g5ShDGYY4NyUs5CSoDt1jj8slaqNoyYzFZHG7CByw=" },

{id: 11, title: "4Gb For 2Days Mtn Data Plan", description: "Quick Offer Of the Day, Order 75x Per Month For N17,000 Cash Price", price: 1.23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 12, title: "5.5Gb For 2Days Mtn Data Plan", description: "Best Choice Offer, Order 80x Earn N18,000 Cash Price", price: 1.39, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 13, title: "120Gb For 30Days Mtn Data Plan", description: "Amazon Offer, Order 100x in 3 Months to Receive N280,000 Cash Price", price: 21.62, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 14, title: "2.5Gb For A Day Mtn Data Plan", description: "Best Daily Offer, Order 65x monthly to get N15,000 Cash Price ", price: 0.80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 15, title: "2.5Gb For 2Days Mtn Data Plan", description: "Great Product Offer, Order 100x Monthly to Receive N20,000 Cash Price ", price: 0.96, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 16, title: "High-Converting Landing Page Design", description: "Strategic landing page engineered to convert paid traffic into leads and sales at maximum efficiency.", price: 137.80, image: "https://images.unsplash.com/photo-1559028012-481c04fa702d" },

{id: 17, title: "Painting & Fence Installation Lead Campaign", description: "Homeowners requesting painting and fence services delivered as exclusive, ready-to-book leads.", price: 132.49, image: "https://media.istockphoto.com/id/1215222296/photo/call-18-for-emergency-3d-rendering-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=G38zf0BwBzd36Z_YNLqzHVyKNB8I4wl_9pHNJ412BwE=" },

{id: 18, title: "Eye Clinic & Hearing Center Patient Leads", description: "Qualified patients searching for eye care and hearing services delivered consistently every month.", price: 90.99, image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" },

{id: 19, title: "Professional Video Editing Service", description: "High-impact promotional videos designed to increase engagement and drive conversions.", price: 120.97, image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d" },

{id: 20, title: "Urgent Care & Orthodontist Patient Ads", description: "We generate urgent medical inquiries and orthodontic consultations ready to book appointments.", price: 80.85, image: "https://media.istockphoto.com/id/1293534212/photo/orthodontist-placing-rubber-bands-on-female-patient-braces.webp?a=1&b=1&s=612x612&w=0&k=20&c=9gQVBip8U-7QScwFJmO1_NwH4KgAQV0X_UHM-NFZeTU=" },

{id: 21, title: "Content Writing Service", description: "Engaging, SEO-optimized content that builds authority and converts readers into customers.", price: 68.79, image: "https://images.unsplash.com/photo-1455390582262-044cdead277a" },

{id: 22, title: "Professional Translation Services", description: "Accurate multi-language translation helping businesses expand globally and connect with new markets.", price: 72.89, image: "https://media.istockphoto.com/id/1793552915/photo/translation-services-concept-the-meeting-at-the-white-office-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=R7moEY1Iw8WPwFlxKVPO8YfjnPwRL0BxFRKTuRbaqUY=" },

{id: 23, title: "Immigration & Divorce Lawyer Lead Campaign", description: "Urgent, high-value legal prospects actively searching for representation delivered directly to your firm.", price: 170.53, image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f" },

{id: 24, title: "Gutter & Moving Company Lead Generation", description: "Property owners actively requesting installation and moving services delivered monthly.", price: 80.89, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa" },

{id: 25, title: "Online Tutors & Music Teachers Lead System", description: "Students and parents searching for trusted tutors and music instructors delivered as direct inquiries.", price: 60.67, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b" },

{id: 26, title: "Real Estate & Home Inspection Lead Pipeline", description: "Motivated buyers, sellers and homeowners actively requesting inspections and consultations.", price: 64.99, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },

{id: 27, title: "Professional Resume / CV Design", description: "Modern, attention-grabbing resumes designed to help professionals stand out and get hired.", price: 40, image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4" },

{id: 28, title: "Corporate Presentation Design", description: "High-impact, persuasive slide decks that impress investors, clients and stakeholders.", price: 70.79, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7" },

{id: 29, title: "E-Book Design & Publishing Setup", description: "Professionally structured and designed eBooks ready for publishing and monetization.", price: 80, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },

{id: 30, title: "Online Course Content Development", description: "Structured, high-value educational content designed to attract students and maximize enrollments.", price: 150, image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8" },

{ id: 31, title: "Sales Funnel Design", description: "We craft strategic funnels that guide visitors step-by-step into becoming paying customers.", price: 129.99, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },

{ id: 32, title: "High-Converting Landing Page", description: "Conversion-focused landing pages built to capture leads and maximize ROI.", price: 79.99, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },

{ id: 33, title: "Lead Generation Campaign Setup", description: "Complete setup of powerful campaigns designed to attract serious buyers daily.", price: 149.99, image: "https://images.unsplash.com/photo-1557838923-2985c318be48" },

{ id: 34, title: "Email Marketing Automation", description: "Automated email sequences that nurture leads and turn prospects into loyal clients.", price: 119.99, image: "https://images.unsplash.com/photo-1556155092-490a1ba16284" },

{ id: 35, title: "Sales Copywriting", description: "Persuasive, high-impact copy that builds trust and drives instant action.", price: 89.99, image: "https://images.unsplash.com/photo-1455390582262-044cdead277a" },

{ id: 36, title: "Facebook Ads Setup", description: "Strategic ad campaigns optimized to generate qualified leads at lower costs.", price: 139.99, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113" },

{ id: 37, title: "Instagram Ads Campaign", description: "Targeted Instagram ads designed to boost engagement and real conversions.", price: 129.99, image: "https://images.unsplash.com/photo-1611262588019-db6cc2032da3" },

{ id: 38, title: "TikTok Ads Management", description: "Creative TikTok ads that capture attention and convert fast.", price: 139.99, image: "https://images.unsplash.com/photo-1611605698335-8b1569810432" },

{ id: 39, title: "Google Ads Setup", description: "Search and display campaigns targeting ready-to-buy customers.", price: 149.99, image: "https://media.istockphoto.com/id/1177549487/photo/16gb-is-a-storage-capacity-of-sd-cards-usb-stick-and-digital-media-white-background-isolated.jpg?s=612x612&w=0&k=20&c=hKLBZbEGqQ0w7L8OO2jcKBk_REN68b9VVbgCFLd9fCE=" },

{ id: 40, title: "Conversion Rate Optimization", description: "We optimize your website to turn more visitors into paying clients.", price: 119.99, image: "https://media.istockphoto.com/id/1494593118/photo/300-mbps-green-3d.jpg?s=612x612&w=0&k=20&c=KrdUFHymJrac1Qneffk0KAob3aftd1u-2fF0r7pbIHU=" },

{ id: 41, title: "CRM Setup & Integration", description: "Professional CRM setup to manage leads, automate follow-ups, and close more sales.", price: 149.99, image: "https://images.unsplash.com/photo-1553877522-43269d4ea984" },

{ id: 42, title: "Affiliate Marketing System", description: "Launch a profitable affiliate system that grows your revenue automatically.", price: 159.99, image: "https://images.unsplash.com/photo-1559526324-593bc073d938" },

{ id: 43, title: "Marketing Strategy Blueprint", description: "Custom step-by-step marketing plan designed for predictable growth.", price: 179.99, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" },

{ id: 44, title: "Brand Identity Design", description: "Premium brand visuals that build trust and authority instantly.", price: 99.99, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },

{ id: 45, title: "Logo Design Premium", description: "Modern, memorable logo crafted to position your brand for success.", price: 69.99, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d" },

{ id: 46, title: "Website Redesign", description: "Transform your outdated site into a high-converting sales machine.", price: 199.99, image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },

{ id: 47, title: "E-commerce Optimization", description: "Optimize your store for faster checkout and higher conversion rates.", price: 149.99, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },

{ id: 48, title: "Product Page Optimization", description: "Strategically designed product pages that increase buyer confidence.", price: 89.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },

{ id: 49, title: "Live Chat Integration", description: "Add instant customer support to capture and convert visitors in real-time.", price: 59.99, image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a" },

{ id: 50, title: "Payment Gateway Integration", description: "Secure and seamless payment setup to ensure smooth transactions.", price: 79.99, image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df" },

{ id: 51, title: "Mobile Optimization", description: "Fully responsive design to convert mobile traffic into paying customers.", price: 99.99, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },

{ id: 52, title: "Speed Optimization", description: "Lightning-fast website performance to improve SEO and user experience.", price: 89.99, image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd" },

{ id: 53, title: "SEO Optimization Package", description: "Advanced SEO strategies to rank higher and attract organic buyers.", price: 179.99, image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1" },

{ id: 54, title: "Local SEO Setup", description: "Dominate your local market and attract customers near you.", price: 119.99, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216" },

{ id: 55, title: "Content Marketing Strategy", description: "High-value content plan that builds authority and drives inbound leads.", price: 149.99, image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643" },

{ id: 56, title: "Blog Setup & Optimization", description: "Professional blog creation designed to attract traffic and build trust.", price: 89.99, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },

{ id: 57, title: "Social Media Management", description: "Engaging content and growth strategies to convert followers into clients.", price: 199.99, image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf" },

{ id: 58, title: "Influencer Marketing Setup", description: "Connect your brand with influencers that drive real sales impact.", price: 139.69, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" },

{ id: 59, title: "YouTube Channel Setup", description: "Professional YouTube branding optimized for growth and monetization.", price: 100.23, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0" },

{ id: 60, title: "Video Sales Letter Creation", description: "Compelling video scripts that persuade viewers to buy instantly.", price: 129.75, image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },


];





// ===============================
// SERVICES AUTO-ID FIX
// ===============================
services.forEach((s, i) => s.id = i + 1);


// ===============================
// ULTRA FAST RENDER SERVICES
// ===============================
function renderServices(serviceList){

  const container = document.getElementById("services");
  if(!container) return;

  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Fast review count map
  const reviewMap = {};
  for (let r of reviews) {
    reviewMap[r.serviceID] = (reviewMap[r.serviceID] || 0) + 1;
  }

  serviceList.forEach(service => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img 
        src="${service.image || 'https://via.placeholder.com/300x160'}"
        loading="lazy"
        decoding="async"
        style="width:100%; height:160px; object-fit:cover; border-radius:10px; margin-bottom:10px;">

      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <h4>$${service.price}</h4>

      <button class="add-cart-btn" data-id="${service.id}">
        Start My Lead Campaign
      </button>

      <hr>
      <p>
        <span class="review-count" data-id="${service.id}"
          style="color:#ff7300; cursor:pointer; font-weight:bold;">
          (${reviewMap[service.id] || 0} Reviews)
        </span>
      </p>

      <select class="rating-select" data-id="${service.id}">
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>

      <input type="text" class="review-input" data-id="${service.id}" placeholder="Write review">
      <button class="submit-review-btn" data-id="${service.id}">
        Submit Review
      </button>
    `;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}


// ===============================
// INITIAL RENDER
// ===============================
if(document.getElementById("services")){
  renderServices(services);
}


// ===============================
// EVENT DELEGATION (FAST)
// ===============================
document.addEventListener("click", function(e){

  // Add To Cart
  if(e.target.classList.contains("add-cart-btn")){
    const id = parseInt(e.target.dataset.id);
    addToCart(id);
  }

  // Submit Review
  if(e.target.classList.contains("submit-review-btn")){
    const id = parseInt(e.target.dataset.id);

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser){
      alert("Please login first.");
      return;
    }

    const input = document.querySelector(`.review-input[data-id="${id}"]`);
    const rating = document.querySelector(`.rating-select[data-id="${id}"]`).value;

    if(!input.value){
      alert("Write a review first.");
      return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
      serviceID: id,
      userName: currentUser.name,
      userEmail: currentUser.email,
      rating: parseInt(rating),
      text: input.value,
      date: Date.now()
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    input.value = "";
    renderServices(services);
  }

  // Open Review Modal
  if(e.target.classList.contains("review-count")){
    const id = parseInt(e.target.dataset.id);
    openReviewModal(id);
  }

});


// ===============================
// CART SYSTEM
// ===============================
function addToCart(id){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = services.find(s => s.id === id);

  let existing = cart.find(item => item.id === id);

  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");
  if(count) count.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

updateCartCount();


// ===============================
// REVIEW MODAL
// ===============================
function openReviewModal(serviceID){

  let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  let modal = document.getElementById("reviewModal");
  let modalContent = document.getElementById("modalReviews");

  if(!modal || !modalContent) return;

  modalContent.innerHTML = "";

  let serviceReviews = allReviews.filter(r => 
    String(r.serviceID) == String(serviceID)
  );

  if(serviceReviews.length === 0){
    modalContent.innerHTML = "<p>No reviews for this product yet.</p>";
  } else {

    serviceReviews.forEach(function(r){

      let stars = "⭐".repeat(parseInt(r.rating) || 0);

      modalContent.innerHTML += `
        <div style="border-bottom:1px solid #ddd; padding:10px 0;">
          <strong>${r.userName || "Anonymous"}</strong>
          (${r.userEmail || "No Email"})<br>
          ${stars}<br>
          ${r.text || ""}
        </div>
      `;
    });

  }

  modal.style.display = "flex";
}

function closeReviewModal(){
  const modal = document.getElementById("reviewModal");
  if(modal) modal.style.display = "none";
}


// ===============================
// ROTATING HEADLINES
// ===============================
const headlines = [
  "We Deliver High-Quality Leads That Turn Into Paying Customers.",
  "Predictable Sales. Consistent Growth. Real Results.",
  "Stop Chasing Clients — Start Attracting Them.",
  "Turn Traffic Into Revenue Every Single Month.",
  "Your Business Deserves More Qualified Buyers.",
  "Scale Faster With Our Proven Lead System.",
  "More Bookings. More Calls. More Sales.",
  "We Build Systems That Bring Customers Daily.",
  "Ready-To-Buy Prospects Sent Directly To You.",
  "Grow Smarter With Data-Driven Advertising."
];

const textElement = document.getElementById("rotatingText");

if (textElement) {

  let index = 0;

  function rotateText() {
    textElement.style.opacity = 0;

    setTimeout(() => {
      textElement.innerText = headlines[index];
      textElement.style.opacity = 1;
      index = (index + 1) % headlines.length;
    }, 400);
  }

  rotateText();
  setInterval(rotateText, 6000);
}


// ===============================
// DEBOUNCED SEARCH (FAST)
// ===============================
const searchBox = document.getElementById("searchBox");

if (searchBox) {

  let timeout;

  searchBox.addEventListener("input", function(){

    clearTimeout(timeout);

    timeout = setTimeout(() => {

      let query = this.value.toLowerCase();

      let filtered = services.filter(s => 
        s.title.toLowerCase().includes(query) || 
        s.description.toLowerCase().includes(query)
      );

      renderServices(filtered);

    }, 300);

  });

}




  
