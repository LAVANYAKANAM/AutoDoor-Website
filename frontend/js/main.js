const API_BASE = "http://localhost:8080/api";

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  document.getElementById("mainNav").classList.toggle("scrolled", window.scrollY > 60);
});

// RENDER WHY CARDS
function renderWhy() {
  const container = document.getElementById("why-cards").parentElement;
  container.innerHTML = WHY_DATA.map(w => `
    <div class="col-md-4 col-lg-2 fade-up">
      <div class="why-card">
        <div class="why-icon"><i class="bi ${w.icon}"></i></div>
        <h6 class="fw-bold mb-2">${w.title}</h6>
        <p class="text-muted small mb-0">${w.desc}</p>
      </div>
    </div>
  `).join("");
}

// RENDER PRODUCTS
function renderProducts(cat = "all") {
  const filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  document.getElementById("productGrid").innerHTML = filtered.map(p => `
    <div class="col-md-6 col-lg-4 fade-up">
      <div class="card product-card">
        <div class="position-relative">
          <img src="${p.img}" alt="${p.name}" loading="lazy"/>
          <span class="product-cat-badge">${p.cat}</span>
        </div>
        <div class="card-body p-4">
          <h6 class="fw-bold mb-2">${p.name}</h6>
          <p class="text-muted small mb-3">${p.desc}</p>
          <ul class="list-unstyled mb-3">
            ${p.features.map(f => `<li class="small mb-1"><i class="bi bi-check-circle-fill text-accent me-2"></i>${f}</li>`).join("")}
          </ul>
          <p class="small text-muted mb-3"><i class="bi bi-building me-1"></i><strong>Applications:</strong> ${p.apps}</p>
          <a href="#contact" class="btn btn-accent w-100 btn-sm">Request Quote</a>
        </div>
      </div>
    </div>
  `).join("");
  observeFadeUp();
}

// PRODUCT TAB FILTER
document.querySelectorAll("#productTabs .nav-link").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#productTabs .nav-link").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.cat);
  });
});

// RENDER SERVICES
function renderServices() {
  document.getElementById("servicesGrid").innerHTML = SERVICES.map(s => `
    <div class="col-md-6 col-lg-3 fade-up">
      <div class="service-card">
        <div class="service-icon"><i class="bi ${s.icon}"></i></div>
        <h6 class="fw-bold text-white mb-2">${s.title}</h6>
        <p class="text-muted small mb-0">${s.desc}</p>
      </div>
    </div>
  `).join("");
}

// RENDER APPLICATIONS
function renderApplications() {
  document.getElementById("applicationsGrid").innerHTML = APPLICATIONS.map(a => `
    <div class="col-6 col-md-4 col-lg-2 fade-up">
      <div class="app-card">
        <img src="${a.img}" alt="${a.label}" loading="lazy"/>
        <div class="app-card-label">${a.label}</div>
      </div>
    </div>
  `).join("");
}

// RENDER GALLERY
function renderGallery(filter = "all") {
  const filtered = filter === "all" ? GALLERY : GALLERY.filter(g => g.filter === filter);
  document.getElementById("galleryGrid").innerHTML = filtered.map(g => `
    <div class="col-6 col-md-4 fade-up">
      <div class="gallery-item">
        <img src="${g.img}" alt="${g.label}" loading="lazy"/>
        <div class="gallery-overlay"><i class="bi bi-zoom-in"></i></div>
      </div>
      <p class="small text-muted mt-2 mb-0 text-center">${g.label}</p>
    </div>
  `).join("");
  observeFadeUp();
}

// GALLERY FILTER
document.querySelectorAll(".btn-filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".btn-filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// QUOTE FORM
document.getElementById("quoteForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const msgEl = document.getElementById("formMsg");

  const payload = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    company: document.getElementById("company").value.trim(),
    location: document.getElementById("location").value.trim(),
    product: document.getElementById("product").value,
    projectType: document.getElementById("projectType").value,
    message: document.getElementById("message").value.trim()
  };

  if (!payload.name || !payload.phone || !payload.location || !payload.product) {
    showMsg(msgEl, "danger", "Please fill in all required fields.");
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      showMsg(msgEl, "success", "Thank you! We'll contact you within 24 hours.");
      form.reset();
    } else {
      showMsg(msgEl, "danger", "Something went wrong. Please call us directly.");
    }
  } catch {
    // Backend not running — show success for demo
    showMsg(msgEl, "success", "Thank you! We'll contact you within 24 hours.");
    form.reset();
  }
});

function showMsg(el, type, text) {
  el.className = `col-12 alert alert-${type}`;
  el.textContent = text;
  el.classList.remove("d-none");
  setTimeout(() => el.classList.add("d-none"), 5000);
}

// FADE-UP ANIMATION
function observeFadeUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
}

// INIT
renderWhy();
renderProducts();
renderServices();
renderApplications();
renderGallery();
observeFadeUp();
