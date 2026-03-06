// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}

// ===============================
// SERVICES
// ===============================
const services = [

{id: 101, category:"9mobile", title: "4.5Gb For 30Days 9mobile Data Plan", description: "Order 4.5Gb For 30Days 175x per Week N23,000 Cash Gift", price: 1.88, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 102, category:"9mobile", title: "7.5Gb For 30Days 9mobile Data Plan", description: "Get started with 7.5Gb monthly, Order 100x per Month Get N22,000 Cash price", price: 2.95, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 103, category:"9mobile", title: "11Gb For 30Days 9mobile Data Plan", description: "Quick 30Days Data Offer, Order 100x Per month Get N17,000 Cash Reward", price: 4.28, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 104, category:"9mobile", title: "10Gb For 30Days 9mobile Data Plan", description: "Buy 10Gb Data Plan Today For 30Days, Purchase 100x Per month to Win N20,000 Cash Price", price: 3.83, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 105, category:"9mobile", title: "3Gb For 30Days 9mobile Data Plan", description: "Fast And Reliable Data Plan Order 190x Per month Get N29,000 Cash Price", price: 1.17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 106, category:"9mobile", title: "20Gb For 30Days 9mobile Data Plan", description: "Enjoy Exclusive Data Offer For A Month, Order 120x per month Earn N30,000 Cash ", price: 4.63, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 107, category:"9mobile", title: "15Gb For 30Days 9mobile Data Plan", description: "Order 130x 15Gb per Month Earn N25,000 Cash", price: 3.76, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 108, category:"9mobile", title: "22Gb For 30Days 9mobile Data Plan", description: "Enjoy 22Gb 30Days Offer, Order 100x per Month Earn N18,000 Cash Out", price: 8.59, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 109, category:"9mobile", title: "1.5Gb For 30Days 9mobile Data Plan", description: "Get started with 30Days Monthly Offer, Order 162x per Month Get N20,000 Cash Token", price: 0.88, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 110, category:"9mobile", title: "1Gb For 30Days 9mobile Data Plan", description: "Get Exciting 30Days Data Plan, Buy 190x of 1Gb per Month, Win N18,000 Cash Price", price: 0.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

{id: 111, category:"9mobile", title: "2Gb For 30Days 9mobile Data Plan", description: "Quick Offer Of the Day, Order 160x Per Month For N25,000 Cash Price", price: 0.64, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY9erChYdnTiPa3T6G5c3E1W3FhKKl-uNWPVgGczN_w&s=10" },

];

// ===============================
// SERVICES AUTO-ID FIX
// ===============================
services.forEach((s, i) => s.id = i + 1);


// ===============================
// ADD PV
// ===============================
services.forEach(s=>{
  if(!s.pv){
    s.pv = 20;
  }
});


// ===============================
// ULTRA FAST RENDER SERVICES
// ===============================
function renderServices(serviceList){

  const container = document.getElementById("services");
  if(!container) return;

  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  const reviewMap = {};
  for (let r of reviews) {
    reviewMap[r.serviceID] = (reviewMap[r.serviceID] || 0) + 1;
  }

  serviceList.forEach(service => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${service.image || 'https://via.placeholder.com/300x160'}"
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
// PAGE FILTER SYSTEM (NEW)
// ===============================
if(document.getElementById("services")){

  let page = document.body.getAttribute("data-page");

  if(page){
    let filtered = services.filter(s => s.category === page);
    renderServices(filtered);
  }else{
    renderServices(services);
  }

  }








   
