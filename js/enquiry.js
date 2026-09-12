/* =========================================================
   ENQUIRY.JS — every form on the site sends its details to
   WhatsApp instead of a server. No backend, no database.
   ========================================================= */

function val(form, name){
  const field = form.elements[name];
  return field ? field.value.trim() : "";
}

/* ---------------- Customized Wear form ---------------- */
function initCustomizedForm(){
  const form = document.getElementById("customized-form");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = val(form, "name");
    const phone = val(form, "phone");
    const productType = val(form, "productType");
    const size = val(form, "size");
    const colour = val(form, "colour");
    const design = val(form, "design");
    const extra = val(form, "extra");

    let message = `Hi Sowju's Comfort Wear, I would like to enquire about a ${productType || "customized product"}.`;
    if(size) message += ` My preferred size is ${size}.`;
    if(colour) message += ` Preferred colour: ${colour}.`;
    if(design) message += ` Design preference: ${design}.`;
    if(extra) message += ` Additional requirements: ${extra}.`;
    if(name) message += ` My name is ${name}.`;
    if(phone) message += ` Contact number: ${phone}.`;

    window.open(buildWhatsAppLink(message), "_blank");
  });
}

/* ---------------- Contact page enquiry form ---------------- */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = val(form, "name");
    const phone = val(form, "phone");
    const email = val(form, "email");
    const msg = val(form, "message");

    let message = `Hi Sowju's Comfort Wear, my name is ${name || "-"}.`;
    if(phone) message += ` Phone: ${phone}.`;
    if(email) message += ` Email: ${email}.`;
    message += ` Message: ${msg || "I would like more information."}`;

    window.open(buildWhatsAppLink(message), "_blank");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCustomizedForm();
  initContactForm();
});
