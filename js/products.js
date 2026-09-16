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

var CATEGORY_LABELS = {
  "Nighties": "Nighties",
  "Co-ord Sets": "Co-ord Sets",
  "Customized Nighties": "Customized Nighties",
  "Customized Co-ord Sets": "Customized Co-ord Sets",
  "Girls' Nightwear": "Girls' Nightwear",
  "Girls' Comfort Wear": "Girls' Comfort Wear",
  "nighties": "Nighties",
  "nighty": "Nighties",
  "co-ord-sets": "Co-ord Sets",
  "coord-sets": "Co-ord Sets",
  "coord-set": "Co-ord Sets",
  "co-ord": "Co-ord Sets",
  "coord": "Co-ord Sets",
  "customized-nighties": "Customized Nighties",
  "customized-nighty": "Customized Nighties",
  "customized-co-ord-sets": "Customized Co-ord Sets",
  "customized-coord-sets": "Customized Co-ord Sets",
  "customized-coord": "Customized Co-ord Sets",
  "girls-nightwear": "Girls' Nightwear",
  "girls-comfort-wear": "Girls' Comfort Wear"
};
if (typeof window !== "undefined") { window.CATEGORY_LABELS = CATEGORY_LABELS; }

var PRODUCTS = [
  // ---------------- WOMEN — NIGHTIES ----------------
  {
    id: "floral-cotton-nighty",
    sku: "NTY-0101-FLR",
    price: 399,
    image: "assets/nighties/image.png",
    images: [
      "assets/nighties/image.png"
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
    price: 349,
    image: "assets/nighties/image copy.png",
    images: [
      "assets/nighties/image copy.png"
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
    price: 449,
    image: "assets/nighties/image copy 2.png",
    images: [
      "assets/nighties/image copy 2.png"
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
    price: 429,
    image: "assets/nighties/image copy 3.png",
    images: [
      "assets/nighties/image copy 3.png"
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
    id: "casual-floral-nighty",
    sku: "NTY-0105-CSL",
    price: 379,
    image: "assets/nighties/image copy 4.png",
    images: [
      "assets/nighties/image copy 4.png"
    ],
    pattern: "floral",
    name: "Casual Floral Nighty",
    category: "Nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Lavender Print","Soft Blue"],
    description: "A light, breezy floral print nighty with an easy A-line fit and comfortable round neckline.",
    features: ["Breezy cotton blend","Easy A-line fit","Durable stitching","Soft neck binding"],
    isNew: true
  },
  {
    id: "floral-night-dress",
    sku: "NTY-0106-FLD",
    price: 479,
    image: "assets/nighties/image copy 5.png",
    images: [
      "assets/nighties/image copy 5.png"
    ],
    pattern: "floral",
    name: "Floral Night Dress",
    category: "Nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Cream","Blush Pink"],
    description: "A flowy night dress with a gentle floral motif, cut long for full coverage and comfort.",
    features: ["Flowy A-line cut","Ankle length","Lightweight fabric","Everyday comfort fit"],
    isNew: true
  },
  {
    id: "everyday-cotton-nightwear",
    sku: "NTY-0107-EVD",
    price: 329,
    image: "assets/nighties/image copy 6.png",
    images: [
      "assets/nighties/image copy 6.png"
    ],
    pattern: "plain",
    name: "Everyday Cotton Nightwear",
    category: "Nighties",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Beige","Rose"],
    description: "Our most everyday piece — simple, soft and dependable for daily comfort wear.",
    features: ["Pure cotton","Minimal, easy styling","Durable stitching","Fits true to size"],
    isNew: false
  },
  {
    id: "printed-home-nighty",
    sku: "NTY-0108-HOM",
    price: 399,
    image: "assets/nighties/image copy 7.png",
    images: [
      "assets/nighties/image copy 7.png"
    ],
    pattern: "dots",
    name: "Printed Home Nighty",
    category: "Nighties",
    section: "women",
    art: 3, icon: "dress",
    sizes: ["M","L","XL","XXL"],
    colours: ["Navy Print","Teal Pattern"],
    description: "Stay relaxed all day in this charming printed home nighty designed for maximum ventilation.",
    features: ["Soft printed weave","Deep side pocket","Wrinkle-resistant","Comfort neckline"],
    isNew: true
  },
  {
    id: "comfort-fit-nighty",
    sku: "NTY-0109-CMF",
    price: 449,
    image: "assets/nighties/image copy 8.png",
    images: [
      "assets/nighties/image copy 8.png"
    ],
    pattern: "plain",
    name: "Comfort Fit Nighty",
    category: "Nighties",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Olive Green","Dusty Pink"],
    description: "Ergonomically cut for complete freedom of movement during sleep or afternoon relaxation.",
    features: ["Ergonomic fit","Ultra-soft fabric","Non-restrictive sleeves","Easy washing"],
    isNew: false
  },
  {
    id: "floral-printed-nighty",
    sku: "NTY-0110-FPR",
    price: 419,
    image: "assets/nighties/image copy 9.png",
    images: [
      "assets/nighties/image copy 9.png"
    ],
    pattern: "floral",
    name: "Floral Printed Nighty",
    category: "Nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Peach Floral","Sky Blue"],
    description: "Featuring a vibrant floral pattern on soft cotton knit, perfect for summer nights.",
    features: ["Vibrant print","Breathable knit cotton","Short flutter sleeve","Color-fast dye"],
    isNew: true
  },
  {
    id: "rose-pattern-nighty",
    sku: "NTY-0111-RSE",
    price: 459,
    image: "assets/nighties/image copy 10.png",
    images: [
      "assets/nighties/image copy 10.png"
    ],
    pattern: "floral",
    name: "Rose Pattern Nighty",
    category: "Nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["M","L","XL","XXL"],
    colours: ["Rose Red","Ivory"],
    description: "Classic rose motifs printed over lightweight fabric with delicate neckline piping.",
    features: ["Delicate piping trim","High grade cotton","Gentle drape","Pocket included"],
    isNew: false
  },
  {
    id: "classic-cotton-nighty",
    sku: "NTY-0112-CLS",
    price: 369,
    image: "assets/nighties/image copy 11.png",
    images: [
      "assets/nighties/image copy 11.png"
    ],
    pattern: "plain",
    name: "Classic Cotton Nighty",
    category: "Nighties",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Aqua Blue","Light Gray"],
    description: "Timeless design with traditional neck detail and effortless everyday comfort.",
    features: ["Pure breathable cotton","Classic fit","Reinforced seams","Cool handfeel"],
    isNew: false
  },
  {
    id: "soft-floral-nighty",
    sku: "NTY-0113-SFL",
    price: 439,
    image: "assets/nighties/image copy 12.png",
    images: [
      "assets/nighties/image copy 12.png"
    ],
    pattern: "floral",
    name: "Soft Floral Nighty",
    category: "Nighties",
    section: "women",
    art: 3, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Lilac","Mint Green"],
    description: "Subtle pastel floral prints give this comfortable nighty a serene, peaceful aesthetic.",
    features: ["Pastel palette","Ultra-gentle texture","Ankle length","Shrink resistant"],
    isNew: true
  },
  {
    id: "breeze-comfort-nighty",
    sku: "NTY-0114-BRZ",
    price: 489,
    image: "assets/nighties/image copy 13.png",
    images: [
      "assets/nighties/image copy 13.png"
    ],
    pattern: "plain",
    name: "Breeze Comfort Nighty",
    category: "Nighties",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["M","L","XL","XXL"],
    colours: ["Sky Blue","Coral Pink"],
    description: "Ultra-light fabric designed to keep you feeling fresh and comfortable all night long.",
    features: ["Airflow weave","Featherweight feel","Smooth inner seam","Quick dry"],
    isNew: false
  },
  {
    id: "pastel-printed-nighty",
    sku: "NTY-0115-PST",
    price: 389,
    image: "assets/nighties/image copy 14.png",
    images: [
      "assets/nighties/image copy 14.png"
    ],
    pattern: "dots",
    name: "Pastel Printed Nighty",
    category: "Nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Soft Yellow","Blush"],
    description: "Delicate micro-prints on soft pastel cotton, styled for simple loungewear charm.",
    features: ["Micro-dot print","Soft neckline","Standard length","Easy care"],
    isNew: false
  },
  {
    id: "traditional-floral-nighty",
    sku: "NTY-0116-TRD",
    price: 469,
    image: "assets/nighties/image copy 15.png",
    images: [
      "assets/nighties/image copy 15.png"
    ],
    pattern: "floral",
    name: "Traditional Floral Nighty",
    category: "Nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Deep Red","Gold Pattern"],
    description: "Rich traditional floral prints crafted into a comfortable, full-flared nighty.",
    features: ["Full flare cut","Traditional print","Sturdy fabric","Side pocket"],
    isNew: true
  },
  {
    id: "cozy-cotton-nighty",
    sku: "NTY-0117-CZY",
    price: 359,
    image: "assets/nighties/image copy 16.png",
    images: [
      "assets/nighties/image copy 16.png"
    ],
    pattern: "plain",
    name: "Cozy Cotton Nighty",
    category: "Nighties",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["M","L","XL"],
    colours: ["Warm Beige","Powder Blue"],
    description: "Cozy and relaxed fit made with 100% natural cotton fibers for sensitive skin.",
    features: ["Natural cotton","Zero irritation","Soft collar neck","Machine wash safe"],
    isNew: false
  },
  {
    id: "designer-printed-nighty",
    sku: "NTY-0118-DSG",
    price: 499,
    image: "assets/nighties/image copy 17.png",
    images: [
      "assets/nighties/image copy 17.png"
    ],
    pattern: "floral",
    name: "Designer Printed Nighty",
    category: "Nighties",
    section: "women",
    art: 3, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Navy Blue","Magenta"],
    description: "Contemporary designer print featuring contrast neck borders and relaxed side slits.",
    features: ["Contrast neck piping","Relaxed side slits","Premium cotton weave","Vibrant colors"],
    isNew: true
  },
  {
    id: "daily-comfort-nighty",
    sku: "NTY-0119-DLY",
    price: 349,
    image: "assets/nighties/image copy 18.png",
    images: [
      "assets/nighties/image copy 18.png"
    ],
    pattern: "plain",
    name: "Daily Comfort Nighty",
    category: "Nighties",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Soft Purple","Cream"],
    description: "Simple, soft, and easy to maintain — your go-to nighty for every evening.",
    features: ["Lightweight feel","Easy slip-on design","Color stay fabric","Breathable"],
    isNew: false
  },
  {
    id: "blossom-floral-nighty",
    sku: "NTY-0120-BLS",
    price: 429,
    image: "assets/nighties/image copy 19.png",
    images: [
      "assets/nighties/image copy 19.png"
    ],
    pattern: "floral",
    name: "Blossom Floral Nighty",
    category: "Nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Blossom Pink","White Floral"],
    description: "Beautiful blossom flowers across soft cotton, combining graceful style with nighttime comfort.",
    features: ["Floral print","Relaxed shoulder cut","Pocket detail","Durable cotton"],
    isNew: true
  },
  {
    id: "serene-cotton-nighty",
    sku: "NTY-0121-SRN",
    price: 479,
    image: "assets/nighties/image copy 20.png",
    images: [
      "assets/nighties/image copy 20.png"
    ],
    pattern: "plain",
    name: "Serene Cotton Nighty",
    category: "Nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["M","L","XL","XXL"],
    colours: ["Sea Green","Lavender"],
    description: "Peaceful solid and printed tones for calm, comfortable sleep throughout the night.",
    features: ["Calming color tones","Loose silhouette","Extra durability","Pre-shrunk fabric"],
    isNew: false
  },
  {
    id: "maroon-bloom-nighty",
    sku: "NTY-0122-MRN",
    price: 439,
    image: "assets/nighties/image copy 21.png",
    images: [
      "assets/nighties/image copy 21.png"
    ],
    pattern: "floral",
    name: "Maroon Bloom Nighty",
    category: "Nighties",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Maroon","Wine Floral"],
    description: "Deep maroon print with elegant leaf details and a comfortable wide neckline.",
    features: ["Rich maroon shade","Wide neck comfort","Side pocket","Soft texture"],
    isNew: true
  },
  {
    id: "royal-printed-nighty",
    sku: "NTY-0123-RYL",
    price: 489,
    image: "assets/nighties/image copy 22.png",
    images: [
      "assets/nighties/image copy 22.png"
    ],
    pattern: "dots",
    name: "Royal Printed Nighty",
    category: "Nighties",
    section: "women",
    art: 3, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Royal Blue","Navy Dot"],
    description: "Regal prints crafted on dark hues for a sleek yet cozy nightwear option.",
    features: ["Royal blue palette","High tensile stitching","Breathable weave","Non-fading"],
    isNew: false
  },
  {
    id: "botanical-cotton-nighty",
    sku: "NTY-0124-BTN",
    price: 419,
    image: "assets/nighties/image copy 23.png",
    images: [
      "assets/nighties/image copy 23.png"
    ],
    pattern: "floral",
    name: "Botanical Cotton Nighty",
    category: "Nighties",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["M","L","XL"],
    colours: ["Sage Green","Olive Floral"],
    description: "Nature-inspired leaf and botanical motifs printed on soft, light cotton fabric.",
    features: ["Botanical print","Natural feel","Standard size fit","Smooth finish"],
    isNew: true
  },
  {
    id: "lounge-comfort-nighty",
    sku: "NTY-0125-LNG",
    price: 369,
    image: "assets/nighties/image copy 24.png",
    images: [
      "assets/nighties/image copy 24.png"
    ],
    pattern: "plain",
    name: "Lounge Comfort Nighty",
    category: "Nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Dusty Blue","Charcoal"],
    description: "Perfect for morning coffee and late night reading, combining lounging ease with soft fabric.",
    features: ["Loungewear cut","Free flowing sleeves","Lightweight fabric","Easy maintenance"],
    isNew: false
  },
  {
    id: "charming-floral-nighty",
    sku: "NTY-0126-CHM",
    price: 449,
    image: "assets/nighties/image copy 25.png",
    images: [
      "assets/nighties/image copy 25.png"
    ],
    pattern: "floral",
    name: "Charming Floral Nighty",
    category: "Nighties",
    section: "women",
    art: 1, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Pink Charm","Peach"],
    description: "Charming floral patterns on skin-friendly cotton, styled for ultimate nighttime relaxation.",
    features: ["Charming aesthetic","Skin-friendly weave","Side slit for motion","Machine wash"],
    isNew: true
  },
  {
    id: "graceful-cotton-nighty",
    sku: "NTY-0127-GRC",
    price: 399,
    image: "assets/nighties/image copy 26.png",
    images: [
      "assets/nighties/image copy 26.png"
    ],
    pattern: "plain",
    name: "Graceful Cotton Nighty",
    category: "Nighties",
    section: "women",
    art: 2, icon: "dress",
    sizes: ["M","L","XL","XXL"],
    colours: ["Beige","Warm Taupe"],
    description: "Graceful design with subtle contrast hem and comfortable round collar.",
    features: ["Graceful drape","Contrast hem detail","100% cotton","Durable wear"],
    isNew: false
  },
  {
    id: "vintage-print-nighty",
    sku: "NTY-0128-VNT",
    price: 459,
    image: "assets/nighties/image copy 27.png",
    images: [
      "assets/nighties/image copy 27.png"
    ],
    pattern: "dots",
    name: "Vintage Print Nighty",
    category: "Nighties",
    section: "women",
    art: 3, icon: "dress",
    sizes: ["S","M","L","XL"],
    colours: ["Vintage Rust","Ivory Print"],
    description: "Vintage-inspired print pattern offering classic beauty and all-night breathability.",
    features: ["Vintage motif","Breathable weave","Sturdy neck border","Pocket included"],
    isNew: true
  },
  {
    id: "relax-fit-nighty",
    sku: "NTY-0129-RLX",
    price: 359,
    image: "assets/nighties/image copy 28.png",
    images: [
      "assets/nighties/image copy 28.png"
    ],
    pattern: "plain",
    name: "Relax Fit Nighty",
    category: "Nighties",
    section: "women",
    art: 4, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Soft Lilac","Slate Gray"],
    description: "Unrestricted loose fit designed to maximize comfort during sleep.",
    features: ["Loose relax fit","Light cotton blend","Easy wash and dry","Soft armhole seam"],
    isNew: false
  },
  {
    id: "delicate-floral-nighty",
    sku: "NTY-0130-DLC",
    price: 489,
    image: "assets/nighties/image copy 29.png",
    images: [
      "assets/nighties/image copy 29.png"
    ],
    pattern: "floral",
    name: "Delicate Floral Nighty",
    category: "Nighties",
    section: "women",
    art: 5, icon: "dress",
    sizes: ["S","M","L","XL","XXL"],
    colours: ["Rose Gold","Soft Cream"],
    description: "Finely detailed floral prints on premium cotton fabric for a luxurious touch at bedtime.",
    features: ["Delicate print detail","Premium cotton touch","Ankle length flare","Color fastness guaranteed"],
    isNew: true
  },

  // ---------------- WOMEN — CO-ORD SETS ----------------
  {
    id: "floral-coord-set",
    sku: "CRD-0201-FLR",
    price: 899,
    image: "assets/coord-sets/floral-coord-set.png",
    images: [
      "assets/coord-sets/floral-coord-set.png",
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/image.png"
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
    price: 849,
    image: "assets/coord-sets/printed-comfort-coord.png",
    images: [
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/floral-coord-set.png",
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/image copy.png"
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
    price: 949,
    image: "assets/coord-sets/casual-home-coord.png",
    images: [
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/floral-coord-set.png",
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/image.png"
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
    price: 899,
    image: "assets/coord-sets/image.png",
    images: [
      "assets/coord-sets/image.png",
      "assets/coord-sets/image copy.png",
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
    price: 799,
    image: "assets/coord-sets/image copy.png",
    images: [
      "assets/coord-sets/image copy.png",
      "assets/coord-sets/casual-home-coord.png",
      "assets/coord-sets/printed-comfort-coord.png",
      "assets/coord-sets/floral-coord-set.png"
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
    price: 999,
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
    price: 1099,
    image: "assets/customized/customized-nighty-2.png",
    images: [
      "assets/customized/customized-nighty-2.png",
      "assets/customized/customized-nighty-3.png",
      "assets/customized/customized-nighty.png",
      "assets/customized/banner-nighties.png"
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
    price: 949,
    image: "assets/customized/customized-nighty-3.png",
    images: [
      "assets/customized/customized-nighty-3.png",
      "assets/customized/customized-nighty.png",
      "assets/customized/customized-nighty-2.png",
      "assets/customized/banner-nighties.png"
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
    price: 1199,
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
    price: 1149,
    image: "assets/customized/customized-coord-set-2.png",
    images: [
      "assets/customized/customized-coord-set-2.png",
      "assets/customized/customized-coord-set-3.png",
      "assets/customized/customized-coord-set.png",
      "assets/customized/banner-coord-sets.png"
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
    price: 1249,
    image: "assets/customized/customized-coord-set-3.png",
    images: [
      "assets/customized/customized-coord-set-3.png",
      "assets/customized/customized-coord-set.png",
      "assets/customized/customized-coord-set-2.png",
      "assets/customized/banner-coord-sets.png"
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
    price: 499,
    image: "assets/girls-kids/girls-floral-nighty.png",
    images: [
      "assets/girls-kids/girls-floral-nighty.png",
      "assets/girls-kids/girls-printed-nighty.png",
      "assets/girls-kids/girls-comfort-set.png",
      "assets/girls-kids/girls-coord-set.png"
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
    price: 449,
    image: "assets/girls-kids/girls-printed-nighty.png",
    images: [
      "assets/girls-kids/girls-printed-nighty.png",
      "assets/girls-kids/girls-floral-nighty.png",
      "assets/girls-kids/girls-comfort-set.png",
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
    price: 549,
    image: "assets/girls-kids/girls-comfort-set.png",
    images: [
      "assets/girls-kids/girls-comfort-set.png",
      "assets/girls-kids/girls-coord-set.png",
      "assets/girls-kids/girls-floral-nighty.png",
      "assets/girls-kids/girls-printed-nighty.png"
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
    price: 599,
    image: "assets/girls-kids/girls-coord-set.png",
    images: [
      "assets/girls-kids/girls-coord-set.png",
      "assets/girls-kids/girls-comfort-set.png",
      "assets/girls-kids/girls-floral-nighty.png",
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
  
  // 1. Match exact or lowercased id
  let found = PRODUCTS.find(p => String(p.id).trim().toLowerCase() === cleanId);
  if(found) return found;

  // 2. Match SKU
  found = PRODUCTS.find(p => p.sku && String(p.sku).trim().toLowerCase() === cleanId);
  if(found) return found;

  // 3. Match nighty-001 / product-001 style IDs if passed
  if(cleanId.startsWith("nighty-") || cleanId.startsWith("product-")){
    const numPart = parseInt(cleanId.replace(/[^0-9]/g, ""), 10);
    if(!isNaN(numPart) && numPart > 0 && numPart <= PRODUCTS.length){
      return PRODUCTS[numPart - 1];
    }
  }

  // 4. Match 0-indexed or 1-indexed pure numeric ID
  const index = parseInt(cleanId, 10);
  if(!isNaN(index) && String(index) === cleanId){
    if(index >= 0 && index < PRODUCTS.length) return PRODUCTS[index];
    if(index > 0 && index <= PRODUCTS.length) return PRODUCTS[index - 1];
  }

  return null;
}

function getProductsByCategory(cat){
  if(!cat) return [];
  const cleanCat = String(cat).trim().toLowerCase();
  const targetCategory = CATEGORY_LABELS[cat] || CATEGORY_LABELS[cleanCat] || cat;
  return PRODUCTS.filter(p => p.category === targetCategory || p.category === cat || p.category.toLowerCase() === cleanCat);
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
  if(amount === undefined || amount === null || amount === "" || amount === 0) return "Price on Enquiry";
  if(typeof amount === "number"){
    return `₹${amount}`;
  }
  if(typeof amount === "string"){
    const trimmed = amount.trim();
    if(!trimmed) return "Price on Enquiry";
    if(trimmed.startsWith("₹")) return trimmed;
    if(trimmed.startsWith("Rs.")) return trimmed.replace(/^Rs\.\s*/i, "₹");
    const num = parseFloat(trimmed.replace(/[^0-9.]/g, ""));
    return isNaN(num) || num <= 0 ? "Price on Enquiry" : `₹${num}`;
  }
  return "Price on Enquiry";
}

if (typeof window !== "undefined") { window.PRODUCTS = PRODUCTS; }


