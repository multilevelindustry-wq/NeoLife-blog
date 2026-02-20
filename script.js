// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}

// Generate 70 services
const services = [
  {id: 1, title: "Shopify/E-commerce Store setup 0212", description: "Create an Online E-commerce Store Today For Your Business ", price: 80, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
  {id: 2, title: "Professional Business Website creation 3154", description: "Professional website", price: 120, image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d" },
  {id: 3, title: "Blog Website Setup", description: "Share your content online", price: 100},
  {id: 4, title: "Best Website Maintenance Services", description: " Write", price: 80},
  {id: 5, title: "Website Design for Local Businesses", description: "Capture leads effectively", price: 50},
  {id: 6, title: "Roofing companies and Plumbing services Ads", description: "Optimize for Google", price: 200},
  {id: 7, title: "Website Design for Local Businesses", description: "Create stunning graphics", price: 70},
  {id: 8, title: "HVAC companies and Solar panel installers Ads", description: "Custom logos", price: 40},
  {id: 9, title: "Social Media Boost Ads", description: "Grow your followers", price: 150},
  {id: 10, title: "Cleaning services (home), Garage door repair and Window replacement", description: "Boost engagement", price: 100},
  {id: 11, title: "TikTok & Facebook Ads Management", description: "Mobile & Web apps", price: 500},
  {id: 12, title: "Dentist and Chiropractos Leads", description: "Improve user experience", price: 150},
  {id: 13, title: "WordPress Website Setup ", description: "Easy-to-manage website", price: 120},
  {id: 14, title: "Weight loss clinics and Mental health clinics", description: "Create online courses", price: 400},
  {id: 15, title: "High SEO Services", description: "Secure member area", price: 250},
  {id: 16, title: "Landing Store and Business Page", description: "Connect your apps", price: 200},
  {id: 17, title: "Painting contractors and Fence installation", description: "Manage customers effectively", price: 180},
  {id: 18, title: "Eye clinics and Hearing aid centers", description: "Automate messaging", price: 150},
  {id: 19, title: "Professional Video Editing Services", description: "Professional video content", price: 120},
  {id: 20, title: "Urgent care clinics and Orthodontists", description: "High-quality images", price: 100},
  {id: 21, title: "Content Writing", description: "Engaging articles & blogs", price: 80},
  {id: 22, title: "Translation Service", description: "Multi-language translation", price: 70},
  {id: 23, title: "Immigration lawyers and Divorce lawyers", description: "2D/3D animations", price: 200},
  {id: 24, title: "Gutter installation and Moving companies", description: "Clear audio production", price: 90},
  {id: 25, title: "Garage door repair and Window replacement", description: "Professional voice recording", price: 60},
  {id: 26, title: "Real estate developers and Home inspection services", description: "Visual data graphics", price: 50},
  {id: 27, title: "Resume/CV Design", description: "Stand out to employers", price: 40},
  {id: 28, title: "Presentation Design", description: "Engaging slides", price: 70},
  {id: 29, title: "E-book Creation", description: "Professional e-books", price: 80},
  {id: 30, title: "Online Course Content", description: "Educational materials", price: 150},
  {id: 31, title: "Digital Marketing", description: "Promote your brand online", price: 200},
  {id: 32, title: "PPC Advertising", description: "Google/Facebook Ads", price: 180},
  {id: 33, title: "Pest control companies and Landscaping services", description: "Targeted ads campaigns", price: 150},
  {id: 34, title: "ccounting firms and Credit repair agencies", description: "Build your brand identity", price: 250},
  {id: 35, title: "Coaching businesses and Event planners", description: "Analyze your market", price: 200},
  {id: 36, title: "Addiction rehab centers and IVF clinics", description: "Expert business advice", price: 300},
  {id: 37, title: "Software development agencies and SaaS companies", description: "Manage your finances", price: 250},
  {id: 38, title: "Insurance agencies and Mortgage brokers", description: "Expert legal advice", price: 200},
  {id: 39, title: "Water damage restoration, Fire damage restoration and Home remodeling contractors", description: "Human resources strategy", price: 150},
  {id: 40, title: "Towing companies and Car dealerships", description: "Tech support for business", price: 100},
  {id: 41, title: "Auto repair shops, Auto body repair ", description: "Protect your business", price: 200},
  {id: 42, title: "Mobile mechanics and Car detailing services", description: "Keep your site running", price: 80},
  {id: 43, title: "Lawn care companies and Pool cleaning services", description: "Protect data securely", price: 100},
  {id: 44, title: "Recruitment agencies Business consultants", description: "Store your files safely", price: 120},
  {id: 45, title: "Marketing agencies and Web design agencies", description: "Staff technical training", price: 150},
  {id: 46, title: "Used car dealers, Car rental companies and Truck repair services", description: "Optimize your website", price: 100},
  {id: 47, title: "Printing companies and IT support companies", description: "Analyze your competitors", price: 120},
  {id: 48, title: "Sports therapy centers and Boxing gyms", description: "Boost search rankings", price: 90},
  {id: 49, title: "CrossFit gyms and Pilates studios", description: "Create engaging emails", price: 60},
  {id: 50, title: "Makeup artists and Skincare clinics", description: "Find potential clients", price: 150},
  {id: 51, title: "Event Management", description: "Organize events effectively", price: 200},
  {id: 52, title: "Tattoo studios and Massage therapy centers", description: "Improve your public image", price: 180},
  {id: 53, title: "Affiliate Marketing Ads", description: "Earn with referrals", price: 120},
  {id: 54, title: "Beauty salons and Nail salons", description: "Publish your podcasts", price: 80},
  {id: 55, title: "Video Marketing", description: "Promote with video", price: 150},
  {id: 56, title: "App Store Optimization", description: "Get more downloads", price: 120},
  {id: 57, title: "Barbershops and Lash technicians", description: "Improve user experience", price: 100},
  {id: 58, title: "Website Customer Support Setup", description: "Support system for clients", price: 150},
  {id: 59, title: "Private schools and Online course creators", description: "Insights from your data", price: 200},
  {id: 60, title: "Gyms and Personal trainers", description: "Bug-free software", price: 180},
  {id: 61, title: "Study abroad agencies and Skill training institutes", description: "High-quality product images", price: 100},
  {id: 62, title: "Coding bootcamps and Tutoring centers", description: "3D product designs", price: 250},
  {id: 63, title: "Animation Video", description: "Promotional animation", price: 200},
  {id: 64, title: "Yoga studios and Martial arts schools", description: "Content for video/audio", price: 70},
  {id: 65, title: "Bridal stylists and Spa centers", description: "Professional voice work", price: 60},
  {id: 66, title: "Translation & Localization", description: "Reach global audience", price: 100},
  {id: 67, title: "Criminal defense lawyers and Bankruptcy lawyers", description: "Visual content marketing", price: 150},
  {id: 68, title: "Professional Newsletter Design", description: "Email newsletter templates", price: 50},
  {id: 69, title: "Language schools and Driving schools", description: "Persuasive marketing content", price: 80},
  {id: 70, title: "Online fitness coaches and Nutrition coaches", description: "Unique web functionalities", price: 300},
  {id: 71, title: "Property management companies and Real estate investors", description: "Bug-free software", price: 180},
  {id: 72, title: "Airbnb property managers and Commercial real estate brokers", description: "High-quality product images", price: 100},
  {id: 73, title: "Shipping companies and Amazon FBA agencies", description: "3D product designs", price: 250},
  {id: 74, title: "Shopify development agencies and Product sourcing companies", description: "Promotional animation", price: 200},
  {id: 75, title: "Print-on-demand companies and Wholesale suppliers", description: "Content for video/audio", price: 70},
  {id: 76, title: "Dropshipping agents and Packaging companies", description: "Professional voice work", price: 60},
  {id: 77, title: "Logistics companies and Freight forwarding companies", description: "Reach global audience", price: 100},
  {id: 78, title: "Videography services and Luxury car rental services", description: "Visual content marketing", price: 150},
  {id: 79, title: "Corporate event planners and Conference organizers", description: "Email newsletter templates", price: 50},
  {id: 80, title: "DJ services and Photography studios", description: "Persuasive marketing content", price: 80},
  {id: 81, title: "Wedding planners and Catering companies", description: "Unique web functionalities", price: 300},
  {id: 82, title: "Party rental companies and Event venues", description: "Unique web functionalities", price: 300},
  {id: 83, title: " Travel agencies and Visa consulting firms", description: "Unique web functionalities", price: 300},
  {id: 84, title: " Shopify development agencies and Product sourcing companies", description: "Unique web functionalities", price: 300}
  
];



// Generate unique IDs for services (no duplicates)
services.forEach((s, i) => s.id = i + 1);

function renderServices(serviceList){
  const container = document.getElementById("services");
  container.innerHTML = "";

  serviceList.forEach(service => {

    container.innerHTML += `
      <div class="card">

        <img src="${service.image || 'https://via.placeholder.com/300x160'}" 
             style="width:100%; height:160px; object-fit:cover; border-radius:10px; margin-bottom:10px;">

        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <h4>$${service.price}</h4>
        <button onclick="addToCart(${service.id})">Add to Cart</button>

        <hr>
        <div id="reviews-${service.id}"></div>

        <select id="rating-${service.id}">
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <input type="text" id="reviewText-${service.id}" placeholder="Write review">
        <button onclick="submitReview(${service.id})">Submit Review</button>

      </div>
    `;

    displayReviews(service.id);
  });
}

if(document.getElementById("services")){
  renderServices(services);
}


// Cart System
function addToCart(id){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = services.find(s => s.id === id);

  let existing = cart.find(item => item.id === id);

  if(existing){
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");
  if(count) count.innerText = cart.length;
}

updateCartCount();


function submitReview(serviceID){

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if(!currentUser){
    alert("Please login first.");
    return;
  }

  let rating = document.getElementById("rating-" + serviceID).value;
  let text = document.getElementById("reviewText-" + serviceID).value;

  if(!text){
    alert("Write a review first.");
    return;
  }

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.push({
    serviceID: serviceID,
    userName: currentUser.name,
    userEmail: currentUser.email,
    rating: parseInt(rating),
    text: text,
    date: new Date().getTime()
  });

  localStorage.setItem("reviews", JSON.stringify(reviews));

  document.getElementById("reviewText-" + serviceID).value = "";

  displayReviews(serviceID);
}


function displayReviews(serviceID){

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let container = document.getElementById("reviews-" + serviceID);

  let serviceReviews = reviews.filter(r => String(r.serviceID) == String(serviceID));

  container.innerHTML = `
    <p>
      <span onclick="goToAllReviews(${serviceID})"
        style="color:#ff7300; cursor:pointer; font-weight:bold;">
        (${serviceReviews.length} Reviews)
      </span>
    </p>
  `;
}




function goToAllReviews(serviceID){

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  let serviceReviews = reviews.filter(r => String(r.serviceID) == String(serviceID));

  let container = document.getElementById("allReviewsContent");
  container.innerHTML = "";

  if(serviceReviews.length === 0){
    container.innerHTML = "<p>No reviews yet for this product.</p>";
  } else {

    serviceReviews.forEach(r => {

      let stars = "⭐".repeat(parseInt(r.rating) || 0);

      container.innerHTML += `
        <div style="border-bottom:1px solid #ddd; padding:10px 0;">
          <strong>${r.userName || "Anonymous"}</strong>
          (${r.userEmail || "No Email"})<br>
          ${stars}<br>
          ${r.text || ""}
        </div>
      `;
    });

  }
  


function goToAllReviews(serviceID){

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  let serviceReviews = reviews.filter(r => String(r.serviceID) == String(serviceID));

  let container = document.getElementById("allReviewsContent");
  container.innerHTML = "";

  if(serviceReviews.length === 0){
    container.innerHTML = "<p>No reviews yet for this product.</p>";
  } else {

    serviceReviews.forEach(r => {

      let stars = "⭐".repeat(parseInt(r.rating) || 0);

      container.innerHTML += `
        <div style="border-bottom:1px solid #ddd; padding:10px 0;">
          <strong>${r.userName || "Anonymous"}</strong>
          (${r.userEmail || "No Email"})<br>
          ${stars}<br>
          ${r.text || ""}
        </div>
      `;
    });

  }



  document.getElementById("allReviewsSection").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function closeAllReviews(){
  document.getElementById("allReviewsSection").style.display = "none";
}



  document.getElementById("allReviewsSection").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function closeAllReviews(){
  document.getElementById("allReviewsSection").style.display = "none";
}







if(document.getElementById("services")){
  services.forEach(service => {
    displayReviews(service.id);
  });
}

function editReview(index, serviceID){
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let r = reviews[index];

  let newText = prompt("Edit your review:", r.text);
  if(newText === null) return;

  let newRating = prompt("Edit rating (1-5):", r.rating);
  if(newRating === null || newRating <1 || newRating>5) return;

  r.text = newText;
  r.rating = newRating;

  reviews[index] = r;
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews(serviceID);
   }
   function deleteReview(index, serviceID){
  if(!confirm("Delete this review?")) return;

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews(serviceID);
}

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", function(){

  let query = this.value.toLowerCase();

  let filtered = services.filter(s => 
    s.title.toLowerCase().includes(query) || 
    s.description.toLowerCase().includes(query)
  );

  renderServices(filtered);
});



function openReviewModal(serviceID){

  let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  let modal = document.getElementById("reviewModal");
  let modalContent = document.getElementById("modalReviews");

  modalContent.innerHTML = "";

  if(allReviews.length === 0){
    modalContent.innerHTML = "<p>No reviews found.</p>";
    modal.style.display = "flex";
    return;
  }

  // Safe filter (handles string or number IDs)
  let serviceReviews = allReviews.filter(function(r){
    return String(r.serviceID) == String(serviceID);
  });

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
  document.getElementById("reviewModal").style.display = "none";
   }
