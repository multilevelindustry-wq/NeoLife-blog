// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}


// Generate 70 services
const services = [
{id: 1, title: "Shopify / E-commerce Store Setup", description: "We build fully optimized, conversion-focused Shopify stores designed to turn visitors into paying customers. Complete setup, payment integration, mobile optimization and launch-ready, Starting 99.99 .", price: 99.99, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },

{id: 2, title: "Professional Business Website Creation", description: "High-performance business website built to establish authority, generate daily inquiries and increase customer trust instantly.", price: 69.96, image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d" },

{id: 3, title: "SEO-Optimized Blog Website Setup", description: "Launch a powerful blog platform optimized for traffic, speed and monetization — ready to grow your online presence. ", price: 59.49, image: "https://images.unsplash.com/photo-1718212456991-54ab241fae82" },

{id: 4, title: "Website Maintenance & Security Management", description: "Monthly updates, security monitoring, performance optimization and technical fixes — so your website runs smoothly 24/7.", price: 47.99, image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b" },

{id: 5, title: "Local Business Lead-Focused Website Design", description: "Conversion-optimized website built specifically to attract local customers and generate consistent daily leads.", price: 39.68, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },

{id: 6, title: "Roofing & Plumbing High-Intent Lead Campaign", description: "We deliver exclusive homeowner leads actively searching for roof repair and plumbing services in your area — ready to book.", price: 189.85, image: "https://images.unsplash.com/photo-1605152276897-4f618f831968" },

{id: 7, title: "Local Business Branding & Web Presence", description: "Professional design and positioning that makes your local company look trustworthy, premium and ready for customers.", price: 50.89, image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" },

{id: 8, title: "HVAC & Solar Installation Lead Generation", description: "Connect with property owners requesting HVAC repair or solar installations. High-intent prospects delivered monthly.", price: 40.78, image: "https://plus.unsplash.com/premium_photo-1671808063467-865289c2959c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SFZBQyUyMCUyNiUyMFNvbGFyJTIwSW5zdGFsbGF0aW9uJTIwTGVhZCUyMEdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D" },

{id: 9, title: "Social Media Sales & Conversion Ads", description: "Strategic ad campaigns built to generate real inquiries, booked calls and sales — not just likes and impressions.", price: 87.65, image: "https://images.unsplash.com/photo-1557838923-2985c318be48" },

{id: 10, title: "Home Services Lead Campaign (Cleaning, Garage, Windows)", description: "Homeowners requesting quotes for cleaning, repairs and installations delivered as qualified local leads.", price: 90.64, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },

{id: 11, title: "TikTok & Facebook Ads Management", description: "We create and manage high-converting ad campaigns that generate consistent leads and measurable ROI.", price: 249.76, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113" },

{id: 12, title: "Dentist & Chiropractor Patient Lead System", description: "New patients actively searching for dental and chiropractic care delivered directly to your clinic monthly.", price: 150, image: "https://images.unsplash.com/photo-1662837625427-970713d74aa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVudGlzdCUyMCUyNiUyMENoaXJvcHJhY3RvciUyMFBhdGllbnQlMjBMZWFkJTIwU3lzdGVtfGVufDB8fDB8fHww" },

{id: 13, title: "Professional WordPress Website Setup", description: "Fully customized WordPress website that is responsive, fast and easy to manage.", price: 120, image: "https://images.unsplash.com/photo-1678341859828-bfb1a2bd527a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZmVzc2lvbmFsJTIwV29yZFByZXNzJTIwV2Vic2l0ZSUyMFNldHVwfGVufDB8fDB8fHww" },

{id: 14, title: "Weight Loss & Mental Health Clinic Leads", description: "Confidential high-intent inquiries from individuals actively searching for professional treatment and consultation.", price: 222.92, image: "https://images.unsplash.com/photo-1584515933487-779824d29309" },

{id: 15, title: "Advanced SEO Domination Service", description: "Rank higher on Google and attract ready-to-buy customers consistently with strategic SEO optimization.", price: 186.65, image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4" },

{id: 16, title: "High-Converting Landing Page Design", description: "Strategic landing page engineered to convert paid traffic into leads and sales at maximum efficiency.", price: 137.80, image: "https://images.unsplash.com/photo-1559028012-481c04fa702d" },

{id: 17, title: "Painting & Fence Installation Lead Campaign", description: "Homeowners requesting painting and fence services delivered as exclusive, ready-to-book leads.", price: 132.49, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6" },

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

{ id: 39, title: "Google Ads Setup", description: "Search and display campaigns targeting ready-to-buy customers.", price: 149.99, image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd" },

{ id: 40, title: "Conversion Rate Optimization", description: "We optimize your website to turn more visitors into paying clients.", price: 119.99, image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a" },

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




  
