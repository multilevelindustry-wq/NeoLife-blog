// ===============================
// AFFILIATE ID GENERATOR
// ===============================
function generateAffiliateID(){
  return "AFF" + Date.now() + Math.floor(Math.random() * 1000);
}

// Generate 70 services
const services = [
  {id: 1, title: "Shopify/E-commerce Store setup ", description: "Create an Online E-commerce Store Today For Your Business ", price: 80, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
  {id: 2, title: "Professional Business Website creation ", description: "Professional website", price: 120, image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d" },
  {id: 3, title: "Blog Website Setup", description: "Share your content online", price: 100, image: "https://images.unsplash.com/photo-1718212456991-54ab241fae82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmxvZyUyMFdlYnNpdGUlMjBTZXR1cHxlbnwwfHwwfHx8MA%3D%3D" },
  {id: 4, title: "Best Website Maintenance Services", description: " Write", price: 80, image: "https://plus.unsplash.com/premium_photo-1732730224574-d05fc344b03c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmxvZyUyMFdlYnNpdGUlMjBTZXR1cHxlbnwwfHwwfHx8MA%3D%3D" },
  {id: 5, title: "Website Design for Local Businesses", description: "Capture leads effectively", price: 50, image: "https://images.unsplash.com/photo-1770368787779-8472da646193?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2Vic2l0ZSUyMERlc2lnbiUyMGZvciUyMExvY2FsJTIwQnVzaW5lc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 6, title: "Roofing companies and Plumbing services Ads", description: "Optimize for Google", price: 200, image: "https://media.istockphoto.com/id/183302442/photo/hard-working-men-on-roof.jpg?s=612x612&w=0&k=20&c=usct-EW5dvpA5dH2TV2vjOLS4qkM0GAHPvbG_lSCsuY=" },
  {id: 7, title: "Website Design for Local Businesses", description: "Create stunning graphics", price: 70, image: "https://media.istockphoto.com/id/1201169760/photo/responsive-devices-with-travel-website-on-blue-studio.jpg?s=612x612&w=0&k=20&c=z89AmxvufWfdeMxSZ1G7BY9BneVdDBChTgw0VPTNLj0=" },
  {id: 8, title: "HVAC companies and Solar panel installers Ads", description: "Custom logos", price: 40, image: "https://plus.unsplash.com/premium_photo-1663091710776-df12d9c39bd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SFZBQyUyMGNvbXBhbmllcyUyMGFuZCUyMFNvbGFyJTIwcGFuZWwlMjBpbnN0YWxsZXJzJTIwQWRzfGVufDB8fDB8fHww" },
  {id: 9, title: "Social Media Boost Ads", description: "Grow your followers", price: 150, image: "https://media.istockphoto.com/id/2149346649/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.jpg?s=612x612&w=0&k=20&c=5lgGobdIWKIlACuLaA7GxE46iWbm20Pqcb63oxgUZuM=" },
  {id: 10, title: "Cleaning services (home), Garage door repair and Window replacement Leads", description: "Boost engagement", price: 100, image: "https://plus.unsplash.com/premium_photo-1683141446538-267aa6d40210?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xlYW5pbmclMjBzZXJ2aWNlcyUyMChob21lKSUyQyUyMEdhcmFnZSUyMGRvb3IlMjByZXBhaXIlMjBhbmQlMjBXaW5kb3clMjByZXBsYWNlbWVudCUyMExlYWRzfGVufDB8fDB8fHww" },
  {id: 11, title: "TikTok & Facebook Ads Management", description: "Mobile & Web apps", price: 500, image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlrVG9rJTIwJTI2JTIwRmFjZWJvb2slMjBBZHMlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww" },
  {id: 12, title: "Dentist and Chiropractos Leads", description: "Improve user experience", price: 150, image: "https://images.unsplash.com/photo-1758205308181-d52b41e00cef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERlbnRpc3QlMjBhbmQlMjBDaGlyb3ByYWN0b3MlMjBMZWFkc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 13, title: "WordPress Website Setup ", description: "Easy-to-manage website", price: 120, image: "https://images.unsplash.com/photo-1586856635346-78823330b49f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V29yZFByZXNzJTIwV2Vic2l0ZSUyMFNldHVwfGVufDB8fDB8fHww"},
  {id: 14, title: "Weight loss clinics and Mental health clinics Leads", description: "Create online courses", price: 400, image: "https://images.unsplash.com/photo-1641236475922-4537ef0b974e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2VpZ2h0JTIwbG9zcyUyMGNsaW5pY3MlMjBhbmQlMjBNZW50YWwlMjBoZWFsdGglMjBjbGluaWNzJTIwTGVhZHN8ZW58MHx8MHx8fDA%3D" },
  {id: 15, title: "High SEO Services", description: "Secure member area", price: 250, image: "https://media.istockphoto.com/id/1438708715/photo/the-seo-search-engine-optimization-seo-concept-3d-render.jpg?s=612x612&w=0&k=20&c=oeFfrn-1kmS0Akv6KiOYh3xB9EDse8XUd8oAXH2lveE=" },
  {id: 16, title: "Professional Landing Page For Store and Business", description: "Connect your apps", price: 200, image: "https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZmVzc2lvbmFsJTIwTGFuZGluZyUyMFBhZ2UlMjBGb3IlMjBTdG9yZSUyMGFuZCUyMEJ1c2luZXNzfGVufDB8fDB8fHww" },
  {id: 17, title: "Painting contractors and Fence installation Ads", description: "Manage customers effectively", price: 180, image: "https://images.unsplash.com/photo-1766961980272-921bba4240bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBhaW50aW5nJTIwY29udHJhY3RvcnMlMjBhbmQlMjBGZW5jZSUyMGluc3RhbGxhdGlvbiUyMEFkc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 18, title: "Eye clinics and Hearing aid centers Leads", description: "Automate messaging", price: 150, image: "https://media.istockphoto.com/id/678548054/photo/the-doctor-examines-the-eyes-conjunctival-very-old-woman.jpg?s=612x612&w=0&k=20&c=e83gzMeOh24-Q1ySNaLl0dE83ETczNbJkH-BYG_3tyw=" },
  {id: 19, title: "Professional Video Editing Services", description: "Professional video content", price: 120, image: "https://images.unsplash.com/photo-1645548979753-8fd5fd389aa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZmVzc2lvbmFsJTIwVmlkZW8lMjBFZGl0aW5nJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D" },
  {id: 20, title: "Urgent care clinics and Orthodontists Ads", description: "High-quality images", price: 100, image: "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXJnZW50JTIwY2FyZSUyMGNsaW5pY3MlMjBhbmQlMjBPcnRob2RvbnRpc3RzJTIwQWRzfGVufDB8fDB8fHww" },
  {id: 21, title: "Content Writing Leads", description: "Engaging articles & blogs", price: 80, image: "https://plus.unsplash.com/premium_photo-1683491155621-cd42e847d646?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29udGVudCUyMFdyaXRpbmclMjBMZWFkc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 22, title: "Translation Service Leads", description: "Multi-language translation", price: 70, image: "https://plus.unsplash.com/premium_photo-1661596558877-dac536b361a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJhbnNsYXRpb24lMjBTZXJ2aWNlJTIwTGVhZHN8ZW58MHx8MHx8fDA%3D" },
  {id: 23, title: "Immigration lawyers and Divorce lawyers", description: "2D/3D animations", price: 200, image: "https://images.unsplash.com/photo-1624638299925-6966fac6914f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW1taWdyYXRpb24lMjBsYXd5ZXJzJTIwYW5kJTIwRGl2b3JjZSUyMGxhd3llcnN8ZW58MHx8MHx8fDA%3D" },
  {id: 24, title: "Gutter installation and Moving companies", description: "Clear audio production", price: 90, image: "https://images.unsplash.com/photo-1694715669993-ea0022b470f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEd1dHRlciUyMGluc3RhbGxhdGlvbiUyMGFuZCUyME1vdmluZyUyMGNvbXBhbmllc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 25, title: "Online tutors and Music teachers", description: "Professional voice recording", price: 60, image: "https://images.unsplash.com/photo-1626134334400-454bdd9b78d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE9ubGluZSUyMHR1dG9ycyUyMGFuZCUyME11c2ljJTIwdGVhY2hlcnN8ZW58MHx8MHx8fDA%3D" },
  {id: 26, title: "Real estate developers and Home inspection services", description: "Visual data graphics", price: 50, image: "https://plus.unsplash.com/premium_photo-1681823749585-7dedb5a91dc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVhbCUyMGVzdGF0ZSUyMGRldmVsb3BlcnMlMjBhbmQlMjBIb21lJTIwaW5zcGVjdGlvbiUyMHNlcnZpY2VzfGVufDB8fDB8fHww" },
  {id: 27, title: "Resume/CV Design", description: "Stand out to employers", price: 40, image: "https://plus.unsplash.com/premium_photo-1771416746839-ca8cd813c7f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVzdW1lJTJGQ1YlMjBEZXNpZ258ZW58MHx8MHx8fDA%3D" },
  {id: 28, title: "Presentation Design", description: "Engaging slides", price: 70, image: "https://plus.unsplash.com/premium_photo-1721225465014-cba692ada75c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHJlc2VudGF0aW9uJTIwRGVzaWdufGVufDB8fDB8fHww" },
  {id: 29, title: "E-book Creation", description: "Professional e-books", price: 80, image: "https://images.unsplash.com/photo-1686517120992-bfc74e4ee0c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RS1ib29rJTIwQ3JlYXRpb258ZW58MHx8MHx8fDA%3D" },
  {id: 30, title: "Online Course Content", description: "Educational materials", price: 150, image: "https://plus.unsplash.com/premium_photo-1684017835103-e8cd0fd1cef4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8T25saW5lJTIwQ291cnNlJTIwQ29udGVudHxlbnwwfHwwfHx8MA%3D%3D" },
  {id: 31, title: "Digital Marketing Ads", description: "Promote your brand online", price: 200, image: "https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlnaXRhbCUyME1hcmtldGluZyUyMEFkc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 32, title: "PPC Advertising", description: "Google/Facebook Ads", price: 180, image: "https://media.istockphoto.com/id/2200814218/vector/ppc-advertisement-campaigns-running-on-multiple-devices-concept-with-target-goals-and.jpg?s=612x612&w=0&k=20&c=LyLHDromwes6tbtu0ZZIgiaZdE3P-4jNN9X9kNedvYg=" },
  {id: 33, title: "Pest control companies and Landscaping services", description: "Targeted ads campaigns", price: 150, image: "https://plus.unsplash.com/premium_photo-1661816388301-f6324e6f4848?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVzdCUyMGNvbnRyb2wlMjBjb21wYW5pZXMlMjBhbmQlMjBMYW5kc2NhcGluZyUyMHNlcnZpY2VzfGVufDB8fDB8fHww" },
  {id: 34, title: "accounting firms and Credit repair agencies", description: "Build your brand identity", price: 250, image: "https://images.unsplash.com/photo-1725258080098-727051947997?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjb3VudGluZyUyMGZpcm1zJTIwYW5kJTIwQ3JlZGl0JTIwcmVwYWlyJTIwYWdlbmNpZXN8ZW58MHx8MHx8fDA%3D" },
  {id: 35, title: "Coaching businesses and Event planners", description: "Analyze your market", price: 200, image: "https://media.istockphoto.com/id/2260129557/photo/confident-female-speaker-delivers-engaging-conference-talk-to-an-attentive-audience.jpg?s=612x612&w=0&k=20&c=m083R2a376D3SmgP_NuDifiwSrjzdzw3Uc7ED18E5I8=" },
  {id: 36, title: "Addiction rehab centers and IVF clinics", description: "Expert business advice", price: 300, image: "https://images.unsplash.com/photo-1681911046053-1d2fdce39ea0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" },
  {id: 37, title: "Software development agencies and SaaS companies", description: "Manage your finances", price: 250, image: "https://plus.unsplash.com/premium_photo-1676150789916-2c7d1fdda6b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29mdHdhcmUlMjBkZXZlbG9wbWVudCUyMGFnZW5jaWVzJTIwYW5kJTIwU2FhUyUyMGNvbXBhbmllc3xlbnwwfHwwfHx8MA%3D%3D" },
  {id: 38, title: "Insurance agencies and Mortgage brokers", description: "Expert legal advice", price: 200, image: ""},
  {id: 39, title: "Water damage restoration, Fire damage restoration and Home remodeling contractors", description: "Human resources strategy", price: 150, image: "" },
  {id: 40, title: "Towing companies and Car dealerships", description: "Tech support for business", price: 100,image: "" },
{id: 41, title: "Auto Repair & Collision Shop High-Intent Lead System", description: "We deliver ready-to-book vehicle owners actively searching for repairs, body work, and emergency services in your area — turning searches into scheduled appointments.", price: 200},

{id: 42, title: "Mobile Mechanic & Car Detailing Client Acquisition System", description: "Connect with car owners who need immediate on-site repair or premium detailing services and are ready to pay.", price: 80},

{id: 43, title: "Lawn Care & Pool Service Recurring Customer Engine", description: "Attract homeowners looking for ongoing lawn maintenance and pool cleaning services to generate predictable monthly income.", price: 100},

{id: 44, title: "Recruitment & Business Consulting Lead Generation System", description: "We bring businesses actively seeking hiring solutions and professional consulting expertise straight to your inbox.", price: 120},

{id: 45, title: "Marketing & Web Design Agency Client Growth System", description: "High-ticket businesses looking for branding, websites, and digital growth strategies delivered consistently.", price: 150},

{id: 46, title: "Auto Dealer, Rental & Truck Repair Buyer Pipeline", description: "Connect with serious vehicle buyers and commercial clients ready to inquire and purchase.", price: 100},

{id: 47, title: "Printing & IT Support Business Lead Booster", description: "Businesses actively searching for printing services and reliable tech support solutions.", price: 120},

{id: 48, title: "Sports Therapy & Performance Gym Client Funnel", description: "Athletes and fitness enthusiasts looking for injury recovery and performance training programs.", price: 90},

{id: 49, title: "CrossFit & Pilates Membership Growth Campaign", description: "Health-focused individuals ready to enroll in premium fitness memberships and transformation programs.", price: 60},

{id: 50, title: "Beauty Clinic & Makeup Artist Appointment Engine", description: "High-value beauty clients actively booking premium skincare, makeup, and cosmetic services.", price: 150},

{id: 51, title: "Event Management Client Acquisition Campaign", description: "Corporate and private clients planning weddings, parties, and conferences searching for reliable organizers.", price: 200},

{id: 52, title: "Tattoo & Wellness Therapy Booking System", description: "Bring in customers ready to schedule tattoo sessions and therapeutic wellness treatments.", price: 180},

{id: 53, title: "Affiliate Marketing Performance Ad System", description: "Scalable campaigns designed to generate consistent commissions and referral-based revenue.", price: 120},

{id: 54, title: "Salon & Nail Studio Appointment Booster", description: "Local beauty clients searching daily for hair, nail, and grooming appointments.", price: 80},

{id: 55, title: "High-Converting Video Marketing Campaigns", description: "Strategic video ads that increase brand awareness, engagement, and direct conversions.", price: 150},

{id: 56, title: "App Store Growth & Visibility Optimization System", description: "Increase downloads, rankings, and app visibility using proven optimization strategies.", price: 120},

{id: 57, title: "Barbershop & Lash Studio Client Growth System", description: "Daily appointment-ready customers searching for grooming and lash services.", price: 100},

{id: 58, title: "Website Customer Support Automation Setup", description: "Professional chat, automation, and support systems that increase retention and customer satisfaction.", price: 150},

{id: 59, title: "Private School & Online Course Enrollment System", description: "Parents and students actively seeking trusted education and skill training programs.", price: 200},

{id: 60, title: "Gym & Personal Trainer Membership Generator", description: "Fitness-ready prospects looking to start personal training and monthly memberships.", price: 180},

{id: 61, title: "Study Abroad & Training Institute Lead Funnel", description: "Students ready to apply for international education and career skill programs.", price: 100},

{id: 62, title: "Coding Bootcamp & Tutoring Enrollment Campaign", description: "Learners searching for practical tech skills and academic improvement programs.", price: 250},

{id: 63, title: "Professional Animated Video Production Service", description: "High-quality animated videos that simplify complex messages and boost conversions.", price: 200},

{id: 64, title: "Yoga & Martial Arts Student Acquisition System", description: "Health-conscious individuals ready to enroll in wellness, yoga, and self-defense classes.", price: 70},

{id: 65, title: "Bridal & Spa Premium Booking Campaign", description: "Brides and luxury clients looking for professional styling and relaxation services.", price: 60},

{id: 66, title: "Global Translation & Localization Client Generator", description: "Businesses expanding internationally and seeking accurate multilingual solutions.", price: 100},

{id: 67, title: "High-Value Legal Lead Generation System", description: "Urgent, serious prospects searching for criminal defense and bankruptcy legal services.", price: 150},

{id: 68, title: "High-Converting Newsletter & Email Design Service", description: "Professionally designed email campaigns that increase open rates and drive sales.", price: 50},

{id: 69, title: "Language & Driving School Enrollment Campaign", description: "Students actively searching for language courses and driving certifications.", price: 80},

{id: 70, title: "Online Fitness & Nutrition Coaching Client Engine", description: "Health-driven clients ready to invest in premium coaching and transformation programs.", price: 300},

{id: 71, title: "Property Management & Investor Lead Pipeline", description: "Property owners and investors actively seeking management and acquisition services.", price: 180},

{id: 72, title: "Airbnb & Commercial Real Estate Client Acquisition Ads", description: "Serious property clients looking to rent, lease, and invest in profitable real estate.", price: 100},

{id: 73, title: "E-commerce Logistics & FBA Client Funnel Ads", description: "Online sellers searching for reliable shipping and fulfillment partners.", price: 250},

{id: 74, title: "Shopify & Product Sourcing Business Growth System Ads", description: "Ambitious store owners ready to scale with expert development and sourcing support.", price: 200},

{id: 75, title: "Print-on-Demand & Wholesale Business Client Engine Ads", description: "Entrepreneurs launching product-based businesses and seeking reliable suppliers.", price: 70},

{id: 76, title: "Dropshipping & Packaging Service Growth Campaign Ads", description: "Fast-scaling e-commerce brands looking for trusted sourcing and packaging partners.", price: 60},

{id: 77, title: "Freight & Logistics Company Lead Generator", description: "Businesses needing dependable shipping and freight forwarding solutions.", price: 100},

{id: 78, title: "Luxury Service & Videography Client Acquisition", description: "Premium clients ready to book high-end experiences and professional media services.", price: 150},

{id: 79, title: "Corporate Event & Conference Booking System", description: "Companies planning large-scale events actively searching for experienced organizers.", price: 50},

{id: 80, title: "DJ & Photography Event Booking Engine", description: "Event clients looking to secure professional entertainment and photography services.", price: 80},

{id: 81, title: "Wedding & Catering Premium Client Campaign", description: "Brides and corporate clients ready to secure full-service planning and catering.", price: 300},

{id: 82, title: "Event Venue & Party Rental Booking Funnel", description: "Customers actively searching for venues and rental equipment for upcoming events.", price: 300},

{id: 83, title: "Travel & Visa Consulting Lead System", description: "Travelers urgently seeking visa processing and international travel support.", price: 300},

{id: 84, title: "Advanced Shopify Growth & Sourcing System", description: "Serious e-commerce entrepreneurs ready to scale aggressively with expert systems.", price: 300}
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

    serviceReviews.forEach((r) => {

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
  if(newRating === null || newRating < 1 || newRating > 5) return;

  r.text = newText;
  r.rating = newRating;

  reviews[index] = r;  // ✅ FIXED

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
    }, 500);
  }

  rotateText();
  setInterval(rotateText, 6500);
}




const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("input", function(){

    let query = this.value.toLowerCase();

    let filtered = services.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.description.toLowerCase().includes(query)
    );

    renderServices(filtered);
  });
}
