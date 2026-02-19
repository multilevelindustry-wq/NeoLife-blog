// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}

// ===============================
// SERVICES LIST
// ===============================
const services = [
  {id: 1, title: "E-commerce Store", description: "Get A Professional E-commerce Store Personally Designed For You and Your Business At A starting Price", price: 59.99},
  {id: 2, title: "Business Website", description: "Professional website", price: 69.99},
  {id: 3, title: "Blog Website", description: "Share your content online", price: 39.99},
  {id: 4, title: "Landing Page", description: "Capture leads effectively", price: 59.99},
  {id: 5, title: "SEO Service - 1 Month", description: "Optimize for Google 1 Month", price: 39.99},
  {id: 6, title: "SEO Service - 5 Months", description: "Optimize for Google 5 Months", price: 199.99},
  {id: 7, title: "SEO Service - 1 Year", description: "Optimize for Google 1 Year", price: 499.99},
  {id: 8, title: "Professional Graphic Design (5)", description: "Create 5 stunning graphics", price: 29.99},
  {id: 9, title: "Professional Graphic Design (12)", description: "Create 12 stunning graphics", price: 99.99},
  {id: 10, title: "Logo Design", description: "Custom logos", price: 22.99},
  {id: 11, title: "Social Media Management", description: "Grow your followers", price: 150},
  {id: 12, title: "Email Marketing", description: "Boost engagement 40%", price: 69.99},
  {id: 13, title: "App Development", description: "Mobile & Web apps", price: 499.99},
  {id: 14, title: "UI/UX Design", description: "Improve user experience", price: 99.99},
  {id: 15, title: "WordPress Website", description: "Easy-to-manage website", price: 59.99},
  {id: 16, title: "Video Editing", description: "Professional video content", price: 39.99},
  {id: 17, title: "Content Writing", description: "Engaging articles", price: 80},
  {id: 18, title: "Translation Service", description: "Multi-language translation", price: 70},
  {id: 19, title: "Digital Marketing", description: "Promote your brand", price: 200},
  {id: 20, title: "PPC Advertising", description: "Google/Facebook Ads", price: 180}
];

// ===============================
// RENDER SERVICES
// ===============================



// Generate unique IDs for services (no duplicates)
services.forEach((s, i) => s.id = i + 1);

// Render services
function renderServices(serviceList){
  const container = document.getElementById("services");
  container.innerHTML = "";

  serviceList.forEach(service => {
    container.innerHTML += `
      <div class="card">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <h4>$${service.price}</h4>
        <button onclick="addToCart(${service.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Call once
renderServices(services);

// Cart function
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
  if(count) count.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
}

updateCartCount();



function renderServices(serviceList){
  const container = document.getElementById("services");
  container.innerHTML = "";

  serviceList.forEach(service => {

    container.innerHTML += `
      <div class="card">
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
  const container = document.getElementById("services");
  services.forEach(service => {
    container.innerHTML += `
  <div class="card">
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
  });
}





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
    cart.push({...product, quantity:1});
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

// ===============================
// REVIEW SYSTEM
// ===============================
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
    userName: currentUser.name || "User",
    userEmail: currentUser.email || "",
    rating: parseInt(rating),
    text: text,
    date: new Date().getTime()
  });

  localStorage.setItem("reviews", JSON.stringify(reviews));

  document.getElementById("reviewText-" + serviceID).value = "";

  renderServices(services);
}

// ===============================
// REVIEW MODAL
// ===============================
function openReviewModal(serviceID){

  let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let modal = document.getElementById("reviewModal");
  let modalContent = document.getElementById("modalReviews");

  modalContent.innerHTML = "";

  let serviceReviews = allReviews.filter(r => 
    String(r.serviceID) == String(serviceID)
  );

  if(serviceReviews.length === 0){
    modalContent.innerHTML = "<p>No reviews yet.</p>";
  } else {

    serviceReviews.forEach(r => {

      let stars = "⭐".repeat(parseInt(r.rating) || 0);

      modalContent.innerHTML += `
        <div style="border-bottom:1px solid #ddd; padding:10px 0;">
          <strong>${r.userName}</strong>
          (${r.userEmail})<br>
          ${stars}<br>
          ${r.text}
        </div>
      `;
    });
  }

  modal.style.display = "flex";
}

function closeReviewModal(){
  document.getElementById("reviewModal").style.display = "none";
}

// ===============================
// SEARCH SYSTEM
// ===============================
const searchBox = document.getElementById("searchBox");

if(searchBox){
  searchBox.addEventListener("input", function(){

    let query = this.value.toLowerCase();

    let filtered = services.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.description.toLowerCase().includes(query)
    );

    renderServices(filtered);
  });
}
