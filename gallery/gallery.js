/* ===================== DATA ===================== */
/* Swap these paths/categories for your real collateral whenever ready.
   categories use the same keys as the chip data-filter values:
   ux, ui, website, app, dashboard, icon, logo, branding, social, brochure */
const GALLERY_ITEMS = [
  // WEBSITE
  {
    src: "../assets/ttdc-finalui.webp",
    title: "TN Tourism — Homepage UI",
    categories: ["ux", "ui", "website"],
  },
  {
    src: "../assets/helpflowai-landingpage.webp",
    title: "HelpFlow AI — Landing Page",
    categories: ["ux", "ui", "website"],
  },
  {
    src: "../assets/soullylush-landing-home-page.webp",
    title: "Soullylush — Storefront",
    categories: ["ux", "ui", "website"],
  },
  // APP
  {
    src: "./assets/shoobey/Splash Screen.jpg",
    title: "Shoobey - Mobile App - Splashscreen",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/shoobey/Home.jpg",
    title: "Shoobey - Mobile App - Home",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/shoobey/Category.jpg",
    title: "Shoobey - Mobile App - Category",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/shoobey/Product Page.jpg",
    title: "Shoobey - Mobile App - Product",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/shoobey/Wishlist.jpg",
    title: "Shoobey - Mobile App - Wishlist",
    categories: ["app", "ux","ui"],
  },
  {
    src: "../gallery/assets/shoobey/Basket.jpg",
    title: "Shoobey - Mobile App - Basket",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Onboarding 1.jpg",
    title: "Seasonal - Mobile App - Onboarding",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Onboarding 2.jpg",
    title: "Seasonal - Mobile App - Onboarding",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Home.jpg",
    title: "Seasonal - Mobile App - Home",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Explore.jpg",
    title: "Seasonal - Mobile App - Explore",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Wishlist.jpg",
    title: "Seasonal - Mobile App - Wishlist",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Bookings.jpg",
    title: "Seasonal - Mobile App - Bookings",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Profile.jpg",
    title: "Seasonal - Mobile App - Profile",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Search.jpg",
    title: "Seasonal - Mobile App - Search",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Details.jpg",
    title: "Seasonal - Mobile App - Deatils",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Notification.jpg",
    title: "Seasonal - Mobile App - Notification",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Reviews.jpg",
    title: "Seasonal - Mobile App - Reviews",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Settings.jpg",
    title: "Seasonal - Mobile App - Settings",
    categories: ["app", "ux","ui"],
  },
  {
    src: "./assets/seasonal/Route.jpg",
    title: "Seasonal - Mobile App - Route",
    categories: ["app", "ux","ui"],
  },
  {
    src: "../soullylush/assets/Product Display.webp",
    title: "Soullylush - App - PDP page",
    categories: ["soullylush app", "ux","ui"],
  },
  {
    src: "../soullylush/assets/Reorder.webp",
    title: "Mobile App - Reorder - Intention to not make user go through the same item list each week & month",
    categories: ["soullylush app", "ux","ui"],
  },
  {
    src: "../soullylush/assets/Login.webp",
    title: "Mobile App - Login - skip is given so that the user can explore and relate to the product without submiting their personal info",
    categories: ["soullylush app", "ux","ui"],
  },
  {
    src: "../soullylush/assets/Explore.webp",
    title: "Mobile App - Reorder - Intention to not make user go through the same item list each week & month",
    categories: ["soullylush app", "ux","ui"],
  },
  {
    src: "../soullylush/assets/card-2.webp",
    title: "Website - Card - Information abot a product is limited intentionally to remove cognitive overload (Progressive Disclosure)",
    categories: ["soullylush app", "ux","ui"],
  },
  {
    src: "./assets/dashboard/Orizon-Crypto.png",
    title: "Orizon Crypto",
    categories: ["ux", "ui", "dashboard"],
  },
  {
    src: "./assets/helflowaiDesignSystem.jpg",
    title: "HelpFlow AI — Design System",
    categories: ["ui", "ux"],
  },
  {
    src: "../assets/HelpflowaiBreakpoints.png",
    title: "HelpFlow AI — Responsive Breakpoints",
    categories: ["ui", "app", "ux"],
  },
  {
    src: "../assets/destination & regions.png",
    title: "TN Tourism — Destination Template",
    categories: ["ui", "website"],
  },
  // LOGO
  {
    src: "./assets/logo/HelpflowaiPri.jpg",
    title: "Helpflow ai - Humanoid Robot Help Flow Logo",
    categories: ["logo", "graphic"],
  },
  {
    src: "./assets/logo/HelpflowaiSec.jpg",
    title: "Helpflow ai - Humanoid Robot Help Flow Logo",
    categories: ["logo", "graphic"],
  },

  // GRAPHIC
  // {
  //   src: "./assets/social/80th 1.png",
  //   title: "Independence - Exploration",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/80th 2.png",
  //   title: "Independence - Exploration",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/80th 3.png",
  //   title: "Independence - Exploration",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/80th 4.png",
  //   title: "Independence - Exploration",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/burger.jpg",
  //   title: "Burgar - MANIAC",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/fashion.jpg",
  //   title: "Fashion friday - Watch Collection",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/Idly.jpg",
  //   title: "Hot idly plate as Space ship",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/tea.jpg",
  //   title: "Nature herbal Tea",
  //   categories: ["graphic", "social media"],
  // },
  // {
  //   src: "./assets/social/music.jpg",
  //   title: "World Music Day",
  //   categories: ["graphic", "social media"],
  // },
];

/* Categories with no real assets yet — shown as friendly placeholders
   so the filter still works and the grid never looks broken. */
const PLACEHOLDER_CATEGORIES = [
  { key: "dashboard", label: "Dashboards" },
  { key: "icon", label: "Icons" },
  { key: "logo", label: "Logo" },
  { key: "branding", label: "Branding" },
  { key: "social", label: "Social Media" },
  { key: "brochure", label: "Brochure" },
];

/* ===================== BUILD GRID ===================== */
const grid = document.getElementById("masonryGrid");

function buildGrid() {
  let html = "";
  GALLERY_ITEMS.forEach((item) => {
    html += `
      <div class="g-card" data-cats="${item.categories.join(" ")}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="g-body">
          <span class="g-cat">${item.categories[0]}</span>
          <p class="g-title">${item.title}</p>
        </div>
      </div>`;
  });
  PLACEHOLDER_CATEGORIES.forEach((cat) => {
    html += `
      <div class="g-card placeholder" data-cats="${cat.key}">
        <div class="g-body">
          <span class="g-cat">+ Add work</span>
          <p class="g-title">${cat.label} pieces go here</p>
        </div>
      </div>`;
  });
  grid.innerHTML = html;
}
buildGrid();

/* ===================== CHIP FILTERING ===================== */
const chipRow = document.getElementById("chipRow");
chipRow.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");
  const filter = chip.dataset.filter;
  document.querySelectorAll(".g-card").forEach((card) => {
    const cats = card.dataset.cats.split(" ");
    const show = filter === "all" || cats.includes(filter);
    card.classList.toggle("hidden", !show);
  });
});

/* ===================== FALLING IMAGE TRAIL ===================== */
const hero = document.getElementById("halftoneHero");
const fallLayer = document.getElementById("fallLayer");

const FALL_POOL = GALLERY_ITEMS.map((i) => i.src);
const SPAWN_INTERVAL_MS = 140; // min time between spawns
const MAX_DIMENSION = 400; // px, longer edge cap
const LIFETIME_MS = 2000;

let lastSpawn = 0;
let poolIndex = 0;

function spawnImage(x, y) {
  const now = performance.now();
  if (now - lastSpawn < SPAWN_INTERVAL_MS) return;
  lastSpawn = now;

  const src = FALL_POOL[poolIndex % FALL_POOL.length];
  poolIndex++;

  const img = new Image();
  img.onload = () => {
    const rect = hero.getBoundingClientRect();
    const cap = Math.min(MAX_DIMENSION, rect.width * 0.42);
    const naturalRatio = img.naturalWidth / img.naturalHeight;
    let w, h;
    if (naturalRatio >= 1) {
      w = cap;
      h = cap / naturalRatio;
    } else {
      h = cap;
      w = cap * naturalRatio;
    }

    const el = document.createElement("div");
    el.className = "fall-item";
    el.style.width = w + "px";
    el.style.height = h + "px";
    el.style.left = x - w / 2 + "px";
    el.style.top = y - h / 2 + "px";
    el.style.setProperty("--rot", (Math.random() * 10 - 5).toFixed(1) + "deg");

    const inner = document.createElement("img");
    inner.src = src;
    inner.alt = "";
    el.appendChild(inner);

    fallLayer.appendChild(el);
    setTimeout(() => el.remove(), LIFETIME_MS + 100);
  };
  img.src = src;
}

function heroLocalCoords(clientX, clientY) {
  const rect = hero.getBoundingClientRect();
  return { x: clientX - rect.left, y: clientY - rect.top };
}

// Desktop: plain mouse movement only (no click/drag required)
hero.addEventListener("mousemove", (e) => {
  const { x, y } = heroLocalCoords(e.clientX, e.clientY);
  spawnImage(x, y);
});

// Mobile: touchmove as the equivalent trigger (no mousemove on touch)
hero.addEventListener(
  "touchmove",
  (e) => {
    const t = e.touches[0];
    if (!t) return;
    const { x, y } = heroLocalCoords(t.clientX, t.clientY);
    spawnImage(x, y);
  },
  { passive: true },
);
