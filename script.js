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

{id: 10, title: "1.5Gb For 7Days Social Plan Airtel Data Plan", description: "Get Exciting 7Days Social Data Plan, Buy 100x of 1.5Gb per month, Win N11,000 Cash Price", price: 0.91, image: "https://media.istockphoto.com/id/1255584061/photo/1-5-gigabytes-3d.jpg?s=612x612&w=0&k=20&c=u7g5ShDGYY4NyUs5CSoDt1jj8slaqNoyYzFZHG7CByw=" },

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
        Oerder Now 
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
// REFERRAL SYSTEM (FULL ENGINE)
// ===============================

// 8% Commission
const REF_PERCENT = 0.08;


// -------------------------------
// ENSURE USER HAS AFFILIATE DATA
// -------------------------------
let currentUserData = JSON.parse(localStorage.getItem("currentUser"));

if(currentUserData){

    if(!currentUserData.affiliateID){
        currentUserData.affiliateID = generateAffiliateID();
        currentUserData.earnings = 0;
        currentUserData.team = [];
        currentUserData.pv = 0;
        localStorage.setItem("currentUser", JSON.stringify(currentUserData));
    }

    // Save also as user_email key for admin panel
    localStorage.setItem("user_" + currentUserData.email, JSON.stringify(currentUserData));
}



// -------------------------------
// CAPTURE REFERRAL FROM URL
// -------------------------------
const urlParams = new URLSearchParams(window.location.search);
const refID = urlParams.get("ref");

if(refID){
    localStorage.setItem("referrerID", refID);
}



// -------------------------------
// MODIFY ADD TO CART COMMISSION
// -------------------------------
const originalAddToCart = addToCart;

addToCart = function(id){

    originalAddToCart(id);

    const product = services.find(s => s.id === id);
    const referrerID = localStorage.getItem("referrerID");

    if(referrerID && product){

        for(let key in localStorage){

            if(key.startsWith("user_")){

                let user = JSON.parse(localStorage.getItem(key));

                if(user.affiliateID === referrerID){

                    let commission = product.price * REF_PERCENT;

                    user.earnings = (user.earnings || 0) + commission;
                    user.pv = (user.pv || 0) + product.price;

                    // Add team member if new
                    if(currentUserData && !user.team.includes(currentUserData.email)){
                        user.team.push(currentUserData.email);
                    }

                    localStorage.setItem(key, JSON.stringify(user));
                }
            }
        }
    }
};



// -------------------------------
// GENERATE REFERRAL LINK
// -------------------------------
if(currentUserData){

    const refBox = document.createElement("div");
    refBox.style.background="#fff";
    refBox.style.padding="20px";
    refBox.style.margin="20px";
    refBox.style.borderRadius="10px";
    refBox.style.color="#000";

    refBox.innerHTML = `
        <h3>Your Affiliate Link</h3>
        <input type="text" 
        value="${window.location.origin + window.location.pathname}?ref=${currentUserData.affiliateID}" 
        style="width:100%;padding:8px;" readonly>

        <h4>Earnings: $${(currentUserData.earnings || 0).toFixed(2)}</h4>
        <h4>Total PV: $${(currentUserData.pv || 0).toFixed(2)}</h4>

        <button onclick="requestWithdrawal()">Request Withdrawal</button>
    `;

    document.body.prepend(refBox);
}



// -------------------------------
// WITHDRAWAL SYSTEM
// -------------------------------
function requestWithdrawal(){

    let user = JSON.parse(localStorage.getItem("currentUser"));

    if(!user || user.earnings <= 0){
        alert("No earnings available.");
        return;
    }

    let withdrawals = JSON.parse(localStorage.getItem("withdrawals")) || [];

    withdrawals.push({
        affiliateID: user.affiliateID,
        email: user.email,
        amount: user.earnings,
        status: "pending",
        date: new Date().toLocaleString()
    });

    localStorage.setItem("withdrawals", JSON.stringify(withdrawals));

    alert("Withdrawal request submitted to admin.");
      }


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




  
