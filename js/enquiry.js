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

    let message = `Hi Sowju's Comfort Wear, I would like to enquire about a ${productType || "customized product"}:\n` +
      `• Name: ${name || "-"}\n` +
      `• Phone: ${phone || "-"}\n` +
      `• Size: ${size || "-"}\n` +
      `• Colour: ${colour || "-"}\n` +
      `• Design: ${design || "-"}\n` +
      `• Additional Notes: ${extra || "None"}`;

    window.location.href = buildWhatsAppLink(message);
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

    let message = `Hi Sowju's Comfort Wear, I have a contact enquiry from your website:\n` +
      `• Name: ${name || "-"}\n` +
      `• Phone: ${phone || "-"}\n` +
      `• Email: ${email || "-"}\n` +
      `• Message: ${msg || "I would like to know more about your products."}`;

    window.location.href = buildWhatsAppLink(message);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCustomizedForm();
  initContactForm();
});
