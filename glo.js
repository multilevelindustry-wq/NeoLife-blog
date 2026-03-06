// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}


// Generate 70 services
const services = [
{id: 3001, title: "3.7Gb For 7Days Glo Data Plan", description: "Order 5Gb For 7 Days 100x per Week N17,000 Cash Gift", price: 0.65, pv: 0.52, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3002, title: "10Gb For 7Days Glo Data Plan", description: "Get started with 10Gb Weekly, Order 100x per Month Get N18,000 Cash price", price: 1.98, pv: 1.12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3003, title: "22.8Gb For 30Days Glo Data Plan", description: "Quick 30Days Data Offer, Order 100x Per month Get N17,000 Cash Reward", price: 7.86, pv: 0.11, image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3004, title: "8.4Gb For 30Days Glo Data Plan", description: "Buy 8.4Gb Data Plan Today For 30Days, Purchase 100x Per month to Win N20,000 Cash Price", price: 3.25, pv: 0.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3005, title: "5.2Gb For 30Days Glo Data Plan", description: "Fast And Reliable Data Plan Order 100x Per month Get N17000 Cash Price", price: 2.05, pv: 0.05, image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3006, title: "11.4Gb For 30Days Glo Data Plan", description: "Get Exciting 30Days Social Data Plan, Buy 100x of 11.4Gb per month, Win N11,000 Cash Price", price: 3.93, pv: 0.39, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3007, title: "3.4G For A Days Glo Data Plan", description: "Get This Amazing Offer, Order 100x per month To Earn N16,000 Cash", price: 1.35, pv: 2.41, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3008, title: "6.2Gb For 30Days Glo Data Plan", description: "Great Sales, Order 100x per Month Get N19,000 Cash", price: 2.49, pv: 3.03, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3009, title: "12.4Gb For 30Days Glo Data Plan", description: " Perfect Size Offer, Order 100x per Month, Earn N20,000 Cash", price: 5.05, pv: 1.87, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3010, title: "7.4Gb For A Day Glo Data Plan", description: "Limited Offer, Order 100x per Month Get N20,000", price: 1.51, pv: 3.13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

{id: 3011, title: "20Gb For 7Days Glo Data Plan", description: " Wonderful Pack, Order 100x per Month Get N20,000", price: 3.98, pv: 0.02, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnRQ9dY11cSgZzvwufj7p4DNzyOQDwmb4Ju1lquHVvg&s=10" },

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



