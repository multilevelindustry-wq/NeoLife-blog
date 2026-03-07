// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}


// Generate 70 services
const services = [
{id: 4001, title: "60Gb For 30Days Mtn Data Plan", description: "Enjoy Exclusive Data Offer For A Month, Order 60x per month Earn N60,000 Cash ", price: 12.11, pv: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4002, title: "7Gb For 2Days Mtn Data Plan", description: "Order 85x 7Gb per Month Earn N18,000 Cash", price: 1.55, pv: 0.51, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4003, title: "3.2Gb For 2Days Mtn Data Plan", description: "Enjoy 3.2Gb 2Days Offer, Order 100x per Month Earn N26,000 Cash Out", price: 1.02, pv: 0.21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4004, title: "30Gb For 30Days Mtb Data Plan", description: "Get started with 30Days Monthly Offer, Order 40x per month N52,000 Cash Token", price: 8.59, pv: 2.65, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10"},

{id: 4005, title: "4Gb For 2Days Mtn Data Plan", description: "Quick Offer Of the Day, Order 75x Per Month For N17,000 Cash Price", price: 1.23, pv: 0.32, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4006, title: "5.5Gb For 2Days Mtn Data Plan", description: "Best Choice Offer, Order 80x Earn N18,000 Cash Price", price: 1.39, pv: 0.33, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4007, title: "120Gb For 30Days Mtn Data Plan", description: "Amazon Offer, Order 100x in 3 Months to Receive N280,000 Cash Price", price: 21.62, pv: 8.97, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4008, title: "2.5Gb For A Day Mtn Data Plan", description: "Best Daily Offer, Order 65x monthly to get N15,000 Cash Price ", price: 0.80, pv: 0.11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4009, title: "2.5Gb For 2Days Mtn Data Plan", description: "Great Product Offer, Order 100x Monthly to Receive N20,000 Cash Price ", price: 0.96, pv: 0.13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4010, title: "11Gb For 2Days Mtn Data Plan", description: "Smart Data Plan, Order 100x Monthly N24,000 Cash", price: 2.78, pv: 0.98, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4011, title: "5Gb For 2Days Mtn Data Plan", description: "Fast Data Plan, Order 120x Monthly, For N26,000 Cash", price: 1.92, pv: 0.87, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4012, title: "5Gb For A Day Mtn Data Plan", description: "Just Getting Better, Order 120x Monthly To win N25,000 Cash Transfer.", price: 1.61, pv: 0.43, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4013, title: "7Gb For A Day Mtn Data Plan", description: "Double Offer, Order 110x Monthly For N23,000 Cash Prize", price: 1.94, pv: 0.72, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4014, title: "3Gb For 2Days Mtn Data Plan", description: "Combo Offer, Order 130x Monthly For N26,000 Cash ", price: 1.27, pv: 0.62, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4015, title: "3.5Gb For A Days Mtn Data Plan", description: "Cool Data Offer, Order 190x Monthly Win N30,000 Cash Transfer ", price: 0.98, pv: 0.21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },

{id: 4016, title: "1.5Gb For 2Days Mtn Data Plan", description: "Quick Plan Offer, Order 250x Monthly For N24,000", price: 0.62, pv: 0.06, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nem03Gk-GDVdWa6tJ4ggWw5t5efnT4S7wUv10yNxyg&s=10" },
  


];


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


// ===============================
// ADD PV TO SERVICES
// ===============================
services.forEach(s=>{
  if(!s.pv){
    s.pv = 20;
  }
});

// ===============================
// COMMISSION PROCESS
// ===============================
function processCommission(buyerEmail, orderTotal, orderPV){

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let buyer = users.find(u => u.email === buyerEmail);
  if(!buyer) return;

  // ADD PERSONAL PV
  buyer.personalPV = (buyer.personalPV || 0) + orderPV;

  if(!buyer.sponsor){
    localStorage.setItem("users", JSON.stringify(users));
    return;
  }

  let sponsorEmail = buyer.sponsor;

  while(sponsorEmail){

    let sponsor = users.find(u => u.email === sponsorEmail);
    if(!sponsor) break;

    sponsor.totalPV = (sponsor.totalPV || 0) + orderPV;

    let percent = 0;
    if(sponsor.totalPV >= 100000) percent = 20;
    else if(sponsor.totalPV >= 50000) percent = 18;
    else if(sponsor.totalPV >= 20000) percent = 15;
    else if(sponsor.totalPV >= 5000) percent = 12;
    else if(sponsor.totalPV >= 500) percent = 10;
    else if(sponsor.totalPV >= 30) percent = 8;

    let commission = (orderTotal * percent) / 100;

    sponsor.earnings = (sponsor.earnings || 0) + commission;

    // ONLY UNLOCK IF PERSONAL PV >= 30
    if((sponsor.personalPV || 0) >= 30){
      sponsor.withdrawable = (sponsor.withdrawable || 0) + commission;
    }

    sponsorEmail = sponsor.sponsor;
  }

  localStorage.setItem("users", JSON.stringify(users));
        }




