# Sowju's Comfort Wear — Website

A premium fashion **catalogue + enquiry** website. There is no cart, checkout,
or online payment anywhere on the site — every product and form sends an
enquiry to WhatsApp instead.

---

## 1. How to open the website

This is a plain HTML/CSS/JavaScript site — no installation, build step, or
server is required.

- Double-click `index.html` to open it in your browser, **or**
- Right-click `index.html` → Open with → your browser.

If you want to preview it the way it will behave once it's hosted (some
browsers restrict local files slightly), you can also run a simple local
server from this folder:

```
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

To publish it live, upload the whole folder to any standard web hosting
(cPanel, Hostinger, GitHub Pages, Netlify, etc.) — no database or backend is
needed.

---

## 2. Where to replace the logo

Put your final logo file in:

```
assets/logo/
```

Then open `css/style.css` and, if you want the logo image instead of the "S"
monogram circle, replace the `.brand-mark` span in every page's navbar with
an `<img>` tag pointing to your logo, e.g.:

```html
<img src="assets/logo/your-logo.png" alt="Sowju's Comfort Wear" style="height:40px;">
```

(The navbar markup is repeated at the top of every HTML file — search for
`class="navbar"` in each file.)

---

## 3. Where to replace images with real photos

Every product now ships with its **own generated illustration** — a
distinct colored, patterned SVG "image" per product (not a shared icon),
stored as a real file and loaded with a normal `<img>` tag, e.g.:

```
assets/nighties/floral-cotton-nighty.svg
assets/coord-sets/floral-coord-set.svg
assets/girls-kids/girls-floral-nighty.svg
```

Real product photos have not been supplied yet, so these illustrated
placeholders (each with its own colour and pattern taken from that
product's own colour list and description) stand in until you have
photos — this was done deliberately so every card looks finished and
distinct rather than reusing one generic icon everywhere.

**To swap a placeholder for a real photo:** each product in `js/products.js`
has an `image` field pointing to its SVG file. Once you have a real photo,
just:

1. Save the photo into the matching folder (e.g. `assets/nighties/floral-cotton-nighty.jpg`)
2. Update that product's `image` field in `js/products.js` to point to the new file:

```js
image: "assets/nighties/floral-cotton-nighty.jpg",
```

That's it — every card, category tile, and the product-details page all
read from this one field, so the change shows up everywhere that product
appears automatically. No HTML editing needed.

Folders are organised by category:

```
assets/logo/         → your logo
assets/hero/          → homepage hero photo (optional — hero currently reuses a nighty image)
assets/nighties/      → nighty product images
assets/coord-sets/    → co-ord set product images
assets/customized/    → customized wear images
assets/girls-kids/    → girls' kids collection images
assets/women/         → any general women's category photos
assets/products/      → any other product photos
assets/about/         → about page photo
```

---

## 4. Where to update product data

All product information (name, category, sizes, colours, description,
features, image, "new arrival" flag) lives in one file:

```
js/products.js
```

Every product card and every product-details page is generated automatically
from this file — you don't need to touch any HTML to add, edit, or remove a
product. Just copy an existing product object and edit the fields, including
its own `image` path (see section 3 above for how images work). Category
values you can use are documented at the top of the file:

```
"nighties"            -> Women's Nighties
"coord-sets"          -> Women's Co-ord Sets
"customized-nighty"   -> Customized Nighties
"customized-coord"    -> Customized Co-ord Sets
"girls-nightwear"     -> Girls' Nightwear
"girls-comfort"       -> Girls' Comfort Wear
"girls-coord"         -> Girls' Co-ord Sets
```

No prices are stored anywhere — every product always shows "Price on
Enquiry", as requested.

---

## 5. Where to update the WhatsApp number

The WhatsApp number is stored in **one place**:

```
js/main.js  →  const WHATSAPP_NUMBER = "919789672893";
```

Change that one line and every "Enquire Now", "Send Enquiry", "WhatsApp Us"
button and the floating WhatsApp button across the whole site will update
automatically.

Phone and email (used on the Contact page and footer) are written directly
into each HTML file — search for `8124566382` or
`sowjusenterprises@gmail.com` if either ever changes, and replace it in every
file (a find-and-replace across all `.html` files in a code editor is the
fastest way).

---

## 6. Where to add social media links later

The client did not provide social media accounts yet, so none are shown or
invented. When ready, add them inside the footer's "Get in Touch" column in
every page (search for `footer-social` for a ready-made icon-row style in
`css/style.css` — just add `<a>` tags with icons inside a
`<div class="footer-social">` block).

---

## Project structure

```
sowjus-comfort-wear/
├── index.html              Home
├── women.html               Full women's catalogue (search + filters)
├── nighties.html             Women's Nighties
├── coord-sets.html           Women's Co-ord Sets
├── customized-wear.html      Customized products + enquiry form
├── kids.html                  Girls' Kids Collection (girls only)
├── new-arrivals.html         New Arrivals (women + girls)
├── product-details.html      Single product page (?id=... in the URL)
├── about.html                 About Us
├── contact.html               Contact Us + enquiry form
│
├── css/
│   └── style.css             All styling
│
├── js/
│   ├── products.js           Product data (edit here to add/change products)
│   ├── main.js                Navbar, search, cards, WhatsApp helper, reveal animations
│   ├── product-details.js    Renders product-details.html from products.js
│   └── enquiry.js             Handles the Customized Wear + Contact forms
│
├── assets/                    Image folders (see section 3 above)
└── README.md
```

## What this site intentionally does NOT have

No cart, no "Buy Now", no checkout, no online payment, no prices, no invented
business details (no address, GST, awards, testimonials, or years of
experience). Every product and form leads to a WhatsApp enquiry, a phone
call, or an email — exactly as requested.
