/* =========================================================
   PRODUCT DATA
   -----------------------------------------------------------
   This is temporary/demo data (the client has not sent the
   final catalogue yet). Replace or extend this array with the
   real products — every product card and product-details page
   is generated automatically from this file.

   category values used across the site:
     "nighties"            -> Women's Nighties
     "coord-sets"          -> Women's Co-ord Sets
     "customized-nighty"   -> Customized Nighties
     "customized-coord"    -> Customized Co-ord Sets
     "girls-nightwear"     -> Girls' Nightwear
     "girls-comfort"       -> Girls' Comfort Wear
     "girls-coord"         -> Girls' Co-ord Sets

   art values (1-5) just pick a placeholder colour/icon combo
   until real photos are supplied — see assets/README notes.
   ========================================================= */

const CATEGORY_LABELS = {
  "nighties": "Nighties",
  "coord-sets": "Co-ord Sets",
  "customized-nighties": "Customized Nighties",
  "customized-nighty": "Customized Nighties",
  "customized-coord-sets": "Customized Co-ord Sets",
  "customized-coord": "Customized Co-ord Sets",
  "girls-nightwear": "Girls' Nightwear",
  "girls-comfort-wear": "Girls' Comfort Wear",
  "girls-comfort": "Girls' Comfort Wear",
  "girls-coord": "Girls' Co-ord Sets"
};

const PRODUCTS = [
  // ---------------- WOMEN — NIGHTIES ----------------
  {
    id: "floral-cotton-nighty",
    image: "assets/nighties/image.png",
    pattern: "floral",
    name: "Floral Cotton Nighty",
    category: "nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Dusty Rose","Cream Floral","Maroon Print"],
    description: "A relaxed-fit nighty in breathable cotton, printed with a soft floral pattern. Made for easy, comfortable evenings at home.",
    features: ["100% soft cotton fabric","Relaxed, breathable fit","Half-sleeve style","Machine washable"],
    isNew: false
  },
  {
    id: "printed-cotton-nighty",
    image: "assets/nighties/image copy.png",
    pattern: "dots",
    name: "Printed Cotton Nighty",
    category: "nighties",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Beige Print","Rose Print"],
    description: "An everyday nighty with an all-over print, cut generously for free movement while you rest.",
    features: ["Lightweight cotton blend","Round neck","Side pockets","Fade-resistant print"],
    isNew: false
  },
  {
    id: "soft-comfort-nighty",
    image: "assets/nighties/image copy 2.png",
    pattern: "plain",
    name: "Soft Comfort Nighty",
    category: "nighties",
    section: "women",
    art: 3, icon: "dress",
    sizes: ["M","L","XL","XXL"],
    colours: ["Warm Brown","Soft Pink"],
    description: "Designed with extra-soft inner fabric for sensitive skin, ideal for warm nights and everyday comfort.",
    features: ["Extra-soft handfeel","Full-length hem","Breathable weave","Easy care fabric"],
    isNew: true
  },
  {
    id: "elegant-printed-nighty",
    image: "assets/nighties/image copy 3.png",
    pattern: "floral",
    name: "Elegant Printed Nighty",
    category: "nighties",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Maroon","Dusty Rose"],
    description: "A slightly fitted silhouette with delicate print detailing, for those who like a touch of elegance in everyday wear.",
    features: ["Semi-fitted silhouette","V-neck design","Soft trims","Colour-safe fabric"],
    isNew: false
  },
  {
    id: "floral-night-dress",
    image: "assets/nighties/image copy 6.png",
    pattern: "floral",
    name: "Floral Night Dress",
    category: "nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Cream","Blush Pink"],
    description: "A flowy night dress with a gentle floral motif, cut long for full coverage and comfort.",
    features: ["Flowy A-line cut","Ankle length","Lightweight fabric","Everyday comfort fit"],
    isNew: true
  },
  {
    id: "everyday-cotton-nightwear",
    image: "assets/nighties/image copy 5.png",
    pattern: "plain",
    name: "Everyday Cotton Nightwear",
    category: "nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Beige","Rose"],
    description: "Our most everyday piece — simple, soft and dependable for daily comfort wear.",
    features: ["Pure cotton","Minimal, easy styling","Durable stitching","Fits true to size"],
    isNew: false
  },

  // ---------------- WOMEN — CO-ORD SETS ----------------
  {
    id: "floral-coord-set",
    image: "assets/coord-sets/floral-coord-set.png",
    pattern: "floral",
    name: "Floral Co-ord Set",
    category: "coord-sets",
    section: "women",
    art: 2, icon: "coord",
    sizes: ["S","M","L","XL"],
    colours: ["Rose Floral","Beige Floral"],
    description: "A matching top and pant set in a light floral print, designed for relaxed days at home.",
    features: ["Matching two-piece set","Elastic waist pants","Breathable cotton blend","Relaxed fit"],
    isNew: true
  },
  {
    id: "printed-comfort-coord",
    image: "assets/coord-sets/printed-comfort-coord.png",
    pattern: "dots",
    name: "Printed Comfort Co-ord",
    category: "coord-sets",
    section: "women",
    art: 3, icon: "coord",
    sizes: ["M","L","XL","XXL"],
    colours: ["Maroon Print","Dusty Rose"],
    description: "An easy printed co-ord set that pairs comfort with a put-together look for everyday living.",
    features: ["Soft printed fabric","Full-length pants","Round neck top","Easy care"],
    isNew: false
  },
  {
    id: "soft-cotton-coord",
    image: "assets/coord-sets/image.png",
    pattern: "plain",
    name: "Soft Cotton Co-ord",
    category: "coord-sets",
    section: "women",
    art: 4, icon: "coord",
    sizes: ["S","M","L"],
    colours: ["Cream","Warm Brown"],
    description: "A softly textured cotton set, kept simple so it goes with everything in your everyday wardrobe.",
    features: ["100% cotton","Solid colour options","Relaxed silhouette","Machine washable"],
    isNew: false
  },
  {
    id: "everyday-lounge-coord",
    image: "assets/coord-sets/image copy.png",
    pattern: "plain",
    name: "Everyday Lounge Co-ord",
    category: "coord-sets",
    section: "women",
    art: 5, icon: "coord",
    sizes: ["S","M","L","XL"],
    colours: ["Beige","Soft Pink"],
    description: "Made for lounging — a breathable set that keeps its shape through everyday wear and washing.",
    features: ["Breathable knit blend","Drawstring waist","Tapered fit pants","Fade-resistant colour"],
    isNew: false
  },
  {
    id: "casual-home-coord",
    image: "assets/coord-sets/casual-home-coord.png",
    pattern: "stripes",
    name: "Casual Home Co-ord",
    category: "coord-sets",
    section: "women",
    art: 1, icon: "coord",
    sizes: ["M","L","XL","XXL"],
    colours: ["Dusty Rose","Beige"],
    description: "A casual, no-fuss set for everyday chores and downtime at home, built for repeated everyday wear.",
    features: ["Durable everyday fabric","Wide, comfortable fit","Matching set","Simple styling"],
    isNew: false
  },

  // ---------------- CUSTOMIZED NIGHTIES ----------------
  {
    id: "customized-nighty",
    image: "assets/customized/customized-nighty.png",
    pattern: "plain",
    name: "Customized Nighty",
    category: "customized-nighty",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["Made to your size"],
    colours: ["Your preferred colour"],
    description: "A nighty made around your preferred style, colour, fabric and fit. Share your requirements and we'll take it from there.",
    features: ["Your choice of colour","Your preferred fit & length","Design as per your requirement","Personal WhatsApp consultation"],
    isNew: false,
    customized: true
  },
  {
    id: "customized-designer-nighty",
    image: "assets/customized/customized-nighty-2.png",
    pattern: "floral",
    name: "Customized Designer Nighty",
    category: "customized-nighty",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["Made to your size"],
    colours: ["Custom print & pattern"],
    description: "Tailored designer nighty crafted with custom embroidery or specific neckline preferences.",
    features: ["Custom embroidery & necklines","Breathable premium fabrics","Tailored to exact measurements","WhatsApp order assistance"],
    isNew: true,
    customized: true
  },
  {
    id: "customized-pleated-nighty",
    image: "assets/customized/customized-nighty-3.png",
    pattern: "pleated",
    name: "Customized Pleated Nighty",
    category: "customized-nighty",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["Made to your size"],
    colours: ["Pastel & Solid Shades"],
    description: "Custom pleated cotton nighty designed for extra elegance and loose comfort.",
    features: ["Pleated bust style","Custom sleeve lengths","Soft cotton weave","Direct WhatsApp consultation"],
    isNew: false,
    customized: true
  },

  // ---------------- CUSTOMIZED CO-ORD SETS ----------------
  {
    id: "customized-coord-set",
    image: "assets/customized/customized-coord-set.png",
    pattern: "plain",
    name: "Customized Co-ord Set",
    category: "customized-coord",
    section: "women",
    art: 3, icon: "coord",
    sizes: ["Made to your size"],
    colours: ["Your preferred colour"],
    description: "A co-ord set designed to your preferred colour, print and fit. Tell us what you have in mind on WhatsApp.",
    features: ["Custom fit","Your preferred fabric & print","Personal styling notes welcome","Direct WhatsApp consultation"],
    isNew: false,
    customized: true
  },
  {
    id: "customized-printed-coord",
    image: "assets/customized/customized-coord-set-2.png",
    pattern: "dots",
    name: "Customized Printed Co-ord",
    category: "customized-coord",
    section: "women",
    art: 5, icon: "coord",
    sizes: ["Made to your size"],
    colours: ["Custom printed options"],
    description: "Tailored short-sleeve top and trousers set customized with your choice of print pattern.",
    features: ["Tailored top & pants","Custom print selection","Elastic waist comfort","WhatsApp styling assistance"],
    isNew: true,
    customized: true
  },
  {
    id: "customized-lounge-coord",
    image: "assets/customized/customized-coord-set-3.png",
    pattern: "plain",
    name: "Customized Lounge Twin-Set",
    category: "customized-coord",
    section: "women",
    art: 2, icon: "coord",
    sizes: ["Made to your size"],
    colours: ["Soft Pastel Tones"],
    description: "Button-up lounge shirt and wide-leg trouser set made to your exact measurements.",
    features: ["Button-down top option","Relaxed fit wide trousers","Breathable knit blend","Made to order"],
    isNew: false,
    customized: true
  },

  // ---------------- GIRLS KIDS (GIRLS ONLY) ----------------
  {
    id: "girls-floral-nighty",
    image: "assets/girls-kids/girls-floral-nighty.png",
    pattern: "floral",
    name: "Girls' Floral Nighty",
    category: "girls-nightwear",
    section: "girls",
    art: 4, icon: "kids-dress",
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    colours: ["Soft Pink","Cream Print"],
    description: "A cute, soft nighty for little girls, made from gentle cotton that's kind to young skin.",
    features: ["Gentle, skin-friendly cotton","Playful floral print","Easy to wear design","Machine washable"],
    isNew: true
  },
  {
    id: "girls-comfort-set",
    image: "assets/girls-kids/girls-comfort-set.png",
    pattern: "plain",
    name: "Girls' Comfort Set",
    category: "girls-comfort",
    section: "girls",
    art: 5, icon: "kids-dress",
    sizes: ["3-4Y","5-6Y","7-8Y","9-10Y"],
    colours: ["Blush Pink","Beige"],
    description: "An everyday comfort outfit for girls, designed for play, rest and everything in between.",
    features: ["Breathable soft fabric","Easy movement fit","Durable everyday stitching","Fun, girl-friendly prints"],
    isNew: false
  },
  {
    id: "girls-coord-set",
    image: "assets/girls-kids/girls-coord-set.png",
    pattern: "dots",
    name: "Girls' Co-ord Set",
    category: "girls-coord",
    section: "girls",
    art: 1, icon: "kids-coord",
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"],
    colours: ["Dusty Rose","Cream"],
    description: "A matching top-and-bottom set for little girls, made for comfortable everyday wear at home.",
    features: ["Matching two-piece set","Soft cotton blend","Easy to move in","Simple, cute styling"],
    isNew: true
  },
  {
    id: "girls-printed-nighty",
    image: "assets/girls-kids/girls-printed-nighty.png",
    pattern: "floral",
    name: "Girls' Printed Nighty",
    category: "girls-nightwear",
    section: "girls",
    art: 2, icon: "kids-dress",
    sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"],
    colours: ["Rose Print","Cream"],
    description: "A lightweight printed nighty designed for little girls' comfortable, restful nights.",
    features: ["Lightweight cotton","Fun all-over print","Easy care fabric","Comfortable everyday fit"],
    isNew: false
  }
];

/* ---------------- helpers used across pages ---------------- */

function getProductById(id){
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(cat){
  return PRODUCTS.filter(p => p.category === cat);
}

function getProductsBySection(section){
  return PRODUCTS.filter(p => p.section === section);
}

function getNewArrivals(section){
  return PRODUCTS.filter(p => p.isNew && (!section || p.section === section));
}

function getRelatedProducts(product, limit){
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, limit || 3);
}

function searchProducts(term){
  term = (term || "").trim().toLowerCase();
  if(!term) return [];
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(term) ||
    CATEGORY_LABELS[p.category].toLowerCase().includes(term)
  );
}
