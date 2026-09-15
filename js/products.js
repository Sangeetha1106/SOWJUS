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
  "Nighties": "Nighties",
  "Co-ord Sets": "Co-ord Sets",
  "Customized Nighties": "Customized Nighties",
  "Customized Co-ord Sets": "Customized Co-ord Sets",
  "Girls' Nightwear": "Girls' Nightwear",
  "Girls' Comfort Wear": "Girls' Comfort Wear",
  "nighties": "Nighties",
  "coord-sets": "Co-ord Sets",
  "customized-nighties": "Customized Nighties",
  "customized-coord-sets": "Customized Co-ord Sets",
  "girls-nightwear": "Girls' Nightwear",
  "girls-comfort-wear": "Girls' Comfort Wear"
};

const PRODUCTS = [
  // ---------------- WOMEN — NIGHTIES ----------------
  {
    id: "floral-cotton-nighty",
    sku: "NTY-0101-FLR",
    price: "Rs. 699.00",
    image: "assets/nighties/image.png",
    images: [
      "assets/nighties/image.png",
      "assets/nighties/image copy.png",
      "assets/nighties/image copy 2.png",
      "assets/nighties/image copy 3.png"
    ],
    pattern: "floral",
    name: "Floral Cotton Nighty",
    category: "Nighties",
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
    sku: "NTY-0102-PRT",
    price: "Rs. 649.00",
    image: "assets/nighties/image copy.png",
    images: [
      "assets/nighties/image copy.png",
      "assets/nighties/image copy 2.png",
      "assets/nighties/image copy 3.png",
      "assets/nighties/image copy 5.png"
    ],
    pattern: "dots",
    name: "Printed Cotton Nighty",
    category: "Nighties",
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
    sku: "NTY-0103-SFT",
    price: "Rs. 799.00",
    image: "assets/nighties/image copy 2.png",
    images: [
      "assets/nighties/image copy 2.png",
      "assets/nighties/image copy 3.png",
      "assets/nighties/image copy 5.png",
      "assets/nighties/image copy 6.png"
    ],
    pattern: "plain",
    name: "Soft Comfort Nighty",
    category: "Nighties",
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
    sku: "NTY-0104-ELG",
    price: "Rs. 749.00",
    image: "assets/nighties/image copy 3.png",
    images: [
      "assets/nighties/image copy 3.png",
      "assets/nighties/image copy 5.png",
      "assets/nighties/image copy 6.png",
      "assets/nighties/image.png"
    ],
    pattern: "floral",
    name: "Elegant Printed Nighty",
    category: "Nighties",
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
    sku: "NTY-0105-FLD",
    price: "Rs. 899.00",
    image: "assets/nighties/image copy 6.png",
    images: [
      "assets/nighties/image copy 6.png",
      "assets/nighties/image copy 5.png",
      "assets/nighties/image copy 3.png",
      "assets/nighties/image copy 2.png"
    ],
    pattern: "floral",
    name: "Floral Night Dress",
    category: "Nighties",
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
    sku: "NTY-0106-EVD",
    price: "Rs. 599.00",
    image: "assets/nighties/image copy 5.png",
    images: [
      "assets/nighties/image copy 5.png",
      "assets/nighties/image copy 6.png",
      "assets/nighties/image copy 3.png",
      "assets/nighties/image copy.png"
    ],
    pattern: "plain",
    name: "Everyday Cotton Nightwear",
    category: "Nighties",
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
    sku: "CRD-0201-FLR",
    price: "Rs. 899.00",
    image: "assets/coord-sets/floral-coord-set.png",
    images: [
      "assets/coord-sets/floral-coord-set.png",
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/image.png",
      "assets/coord-sets/image copy.png"
    ],
    pattern: "floral",
    name: "Floral Co-ord Set",
    category: "Co-ord Sets",
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
    sku: "CRD-0202-PRT",
    price: "Rs. 849.00",
    image: "assets/coord-sets/printed-comfort-coord.png",
    images: [
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/image.png",
      "assets/coord-sets/image copy.png",
      "assets/coord-sets/casual-home-coord.png"
    ],
    pattern: "dots",
    name: "Printed Comfort Co-ord",
    category: "Co-ord Sets",
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
    sku: "CRD-0203-SFT",
    price: "Rs. 949.00",
    image: "assets/coord-sets/image.png",
    images: [
      "assets/coord-sets/image.png",
      "assets/coord-sets/image copy.png",
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/floral-coord-set.png"
    ],
    pattern: "plain",
    name: "Soft Cotton Co-ord",
    category: "Co-ord Sets",
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
    sku: "CRD-0204-LNG",
    price: "Rs. 899.00",
    image: "assets/coord-sets/image copy.png",
    images: [
      "assets/coord-sets/image copy.png",
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/floral-coord-set.png",
      "assets/coord-sets/printed-comfort-coord.png"
    ],
    pattern: "plain",
    name: "Everyday Lounge Co-ord",
    category: "Co-ord Sets",
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
    sku: "CRD-0205-CSL",
    price: "Rs. 799.00",
    image: "assets/coord-sets/casual-home-coord.png",
    images: [
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/floral-coord-set.png",
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/image.png"
    ],
    pattern: "stripes",
    name: "Casual Home Co-ord",
    category: "Co-ord Sets",
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
    sku: "CST-0301-NGT",
    price: "Rs. 999.00",
    image: "assets/customized/customized-nighty.png",
    images: [
      "assets/customized/customized-nighty.png",
      "assets/customized/customized-nighty-2.png",
      "assets/customized/customized-nighty-3.png",
      "assets/customized/banner-nighties.png"
    ],
    pattern: "plain",
    name: "Customized Nighty",
    category: "Customized Nighties",
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
    sku: "CST-0302-DSG",
    price: "Rs. 1099.00",
    image: "assets/customized/customized-nighty-2.png",
    images: [
      "assets/customized/customized-nighty-2.png",
      "assets/customized/customized-nighty-3.png",
      "assets/customized/banner-nighties.png",
      "assets/customized/customized-nighty.png"
    ],
    pattern: "floral",
    name: "Customized Designer Nighty",
    category: "Customized Nighties",
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
    sku: "CST-0303-PLT",
    price: "Rs. 949.00",
    image: "assets/customized/customized-nighty-3.png",
    images: [
      "assets/customized/customized-nighty-3.png",
      "assets/customized/banner-nighties.png",
      "assets/customized/customized-nighty.png",
      "assets/customized/customized-nighty-2.png"
    ],
    pattern: "pleated",
    name: "Customized Pleated Nighty",
    category: "Customized Nighties",
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
    sku: "CST-0401-CRD",
    price: "Rs. 1199.00",
    image: "assets/customized/customized-coord-set.png",
    images: [
      "assets/customized/customized-coord-set.png",
      "assets/customized/customized-coord-set-2.png",
      "assets/customized/customized-coord-set-3.png",
      "assets/customized/banner-coord-sets.png"
    ],
    pattern: "plain",
    name: "Customized Co-ord Set",
    category: "Customized Co-ord Sets",
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
    sku: "CST-0402-PRT",
    price: "Rs. 1149.00",
    image: "assets/customized/customized-coord-set-2.png",
    images: [
      "assets/customized/customized-coord-set-2.png",
      "assets/customized/customized-coord-set-3.png",
      "assets/customized/banner-coord-sets.png",
      "assets/customized/customized-coord-set.png"
    ],
    pattern: "dots",
    name: "Customized Printed Co-ord",
    category: "Customized Co-ord Sets",
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
    sku: "CST-0403-LNG",
    price: "Rs. 1249.00",
    image: "assets/customized/customized-coord-set-3.png",
    images: [
      "assets/customized/customized-coord-set-3.png",
      "assets/customized/banner-coord-sets.png",
      "assets/customized/customized-coord-set.png",
      "assets/customized/customized-coord-set-2.png"
    ],
    pattern: "plain",
    name: "Customized Lounge Twin-Set",
    category: "Customized Co-ord Sets",
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
    sku: "KID-0501-FLR",
    price: "Rs. 499.00",
    image: "assets/girls-kids/girls-floral-nighty.png",
    images: [
      "assets/girls-kids/girls-floral-nighty.png",
      "assets/girls-kids/girls-printed-nighty.png",
      "assets/girls-kids/banner-girls-nightwear.png",
      "assets/girls-kids/girls-comfort-set.png"
    ],
    pattern: "floral",
    name: "Girls' Floral Nighty",
    category: "Girls' Nightwear",
    section: "girls",
    art: 4, icon: "kids-dress",
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    colours: ["Soft Pink","Cream Print"],
    description: "A cute, soft nighty for little girls, made from gentle cotton that's kind to young skin.",
    features: ["Gentle, skin-friendly cotton","Playful floral print","Easy to wear design","Machine washable"],
    isNew: true
  },
  {
    id: "girls-printed-nighty",
    sku: "KID-0502-PRT",
    price: "Rs. 449.00",
    image: "assets/girls-kids/girls-printed-nighty.png",
    images: [
      "assets/girls-kids/girls-printed-nighty.png",
      "assets/girls-kids/banner-girls-nightwear.png",
      "assets/girls-kids/girls-floral-nighty.png",
      "assets/girls-kids/girls-coord-set.png"
    ],
    pattern: "floral",
    name: "Girls' Printed Nighty",
    category: "Girls' Nightwear",
    section: "girls",
    art: 2, icon: "kids-dress",
    sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"],
    colours: ["Rose Print","Cream"],
    description: "A lightweight printed nighty designed for little girls' comfortable, restful nights.",
    features: ["Lightweight cotton","Fun all-over print","Easy care fabric","Comfortable everyday fit"],
    isNew: false
  },
  {
    id: "girls-comfort-set",
    sku: "KID-0503-CMF",
    price: "Rs. 549.00",
    image: "assets/girls-kids/girls-comfort-set.png",
    images: [
      "assets/girls-kids/girls-comfort-set.png",
      "assets/girls-kids/girls-coord-set.png",
      "assets/girls-kids/banner-girls-comfort.png",
      "assets/girls-kids/girls-floral-nighty.png"
    ],
    pattern: "plain",
    name: "Girls' Comfort Set",
    category: "Girls' Comfort Wear",
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
    sku: "KID-0504-CRD",
    price: "Rs. 599.00",
    image: "assets/girls-kids/girls-coord-set.png",
    images: [
      "assets/girls-kids/girls-coord-set.png",
      "assets/girls-kids/banner-girls-comfort.png",
      "assets/girls-kids/girls-comfort-set.png",
      "assets/girls-kids/girls-printed-nighty.png"
    ],
    pattern: "dots",
    name: "Girls' Co-ord Set",
    category: "Girls' Comfort Wear",
    section: "girls",
    art: 1, icon: "kids-coord",
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y"],
    colours: ["Dusty Rose","Cream"],
    description: "A matching top-and-bottom set for little girls, made for comfortable everyday wear at home.",
    features: ["Matching two-piece set","Soft cotton blend","Easy to move in","Simple, cute styling"],
    isNew: true
  }
];

/* ---------------- helpers used across pages ---------------- */

function getProductById(id){
  if(!id) return null;
  const cleanId = String(id).trim().toLowerCase();
  return PRODUCTS.find(p => p.id.toLowerCase() === cleanId || p.id === id);
}

function getProductsByCategory(cat){
  if(!cat) return [];
  const cleanCat = String(cat).trim().toLowerCase();
  return PRODUCTS.filter(p => p.category === cat || p.category.toLowerCase() === cleanCat);
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

function searchProducts(term, cat){
  term = (term || "").trim().toLowerCase();
  let list = PRODUCTS;
  if(cat) list = list.filter(p => p.category === cat);
  if(!term) return list;
  return list.filter(p =>
    p.name.toLowerCase().includes(term) ||
    (CATEGORY_LABELS[p.category] && CATEGORY_LABELS[p.category].toLowerCase().includes(term))
  );
}

function parsePrice(priceStr){
  if(typeof priceStr === "number") return priceStr;
  if(!priceStr) return 0;
  const numStr = String(priceStr).replace(/[^0-9.]/g, "");
  const num = parseFloat(numStr);
  return isNaN(num) ? 0 : num;
}

function formatPrice(amount){
  const num = typeof amount === "number" ? amount : parsePrice(amount);
  return "Rs. " + num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

