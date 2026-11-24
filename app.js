(() => {
  const I = window.ICONS || {};
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

  // Labels for tech that has no brand icon
  const PLAIN = { yoco: "Yoco", paystack: "Paystack", web3forms: "Web3Forms", lenis: "Lenis", dndkit: "dnd-kit", tesseract: "Tesseract OCR", pdfjs: "pdf.js", nodemailer: "Nodemailer", imagekit: "ImageKit", rls: "Row-level security", motion: "Motion", router: "React Router", sw: "Service worker", csp: "CSP / HSTS", modbus: "Modbus / DNP3", packet: "Packet Tracer", vlan: "VLANs", rtu: "RTUs", iec: "IEC 61850", agile: "Agile / Scrum", sql: "SQL" };
  const G = (d) => `<svg class="line-ico" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const GLYPH = {
    vlan: G('<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>'),
    packet: G('<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M8.5 6h7M7.3 8.2l3.4 7.6M16.7 8.2l-3.4 7.6"/>'),
    modbus: G('<path d="M4 8h14l-3-3M20 16H6l3 3"/>'),
    iec: G('<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>'),
    rtu: G('<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1.5v3.5M15 1.5v3.5M9 19v3.5M15 19v3.5M1.5 9h3.5M1.5 15h3.5M19 9h3.5M19 15h3.5"/><rect x="9" y="9" width="6" height="6" rx="1"/>'),
    sql: G('<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>'),
    agile: G('<path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4"/>')
  };
  const LABEL = { tanstack: "TanStack", sqlalchemy: "SQLModel", jwt: "JWT", uv: "uv", shadcn: "shadcn/ui", radix: "Radix UI", pwa: "PWA" };

  const svg = (k) => {
    const i = I[k];
    return i ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${i.p}"/></svg>` : "";
  };
  const isDark = (hex) => { const n = parseInt(hex, 16); return ((n >> 16) * .299 + ((n >> 8) & 255) * .587 + (n & 255) * .114) > 215 || hex === "000000"; };
  const color = (k) => { const i = I[k]; if (!i) return "#151C17"; return isDark(i.h) ? "#151C17" : "#" + i.h; };
  const name = (k) => LABEL[k] || (I[k] && I[k].t) || PLAIN[k] || k;
  const chip = (k) => {
    const has = !!I[k];
    return `<span class="tech${has ? "" : " tech--plain"}" style="--c:${color(k)}">${svg(k)}${name(k)}</span>`;
  };
  const fillStacks = (root = document) => root.querySelectorAll("[data-stack]").forEach(el => {
    el.innerHTML = el.dataset.stack.split(",").map(chip).join("");
  });
  document.querySelectorAll(".si[data-icon]").forEach(el => el.innerHTML = svg(el.dataset.icon));

  /* ------------ Projects (stacks taken from each repo) ------------ */
  const P = [
    { slug: "fieldcore", name: "FieldCore", type: "software", badge: "Operations platform", year: "2026",
      client: "Samo Engineering", img: "/assets/work/fieldcore.webp", url: "https://seacom-app-frontend.vercel.app/login", domain: "internal · staff sign-in",
      line: "Task, incident and report management for NOC operators and field technicians.",
      desc: "A role-based operations platform that replaced spreadsheets and chat threads for Samo's NOC and field teams. Built with a React front end and a FastAPI service on PostgreSQL.",
      features: ["Separate NOC, technician and manager dashboards", "Tasks, incidents and reports with overdue tracking", "Site access requests and notifications", "JWT auth with Argon2-hashed passwords and refresh tokens", "Rolled out to 25 field technicians"],
      stack: ["react","typescript","vite","tanstack","shadcn","tailwind","zod","fastapi","python","postgresql","sqlalchemy","jwt"], size: "big" },
    { slug: "remit", name: "Remit", type: "software", badge: "SaaS · Fintech", year: "2026",
      client: "LamTech product", img: "/assets/work/remit.webp", url: "https://remitpay.co.za/", domain: "remitpay.co.za",
      line: "Branded invoicing for small businesses, from quote to paid.",
      desc: "Multi-tenant invoicing software: every account is its own business with its own logo, brand colour, clients and numbered invoices. Supabase row-level security keeps each business's data private.",
      features: ["20 invoice templates from one rendering engine", "Logo upload sets the brand colour automatically", "Quotes convert to invoices; on-device PO scanner with OCR", "Debtors age analysis, top clients and CSV exports", "Owner admin console to suspend or restore accounts"],
      stack: ["javascript","html5","css","supabase","postgresql","rls","resend","tesseract","pdfjs","vercel"] },
    { slug: "keepsake", name: "Keepsake", type: "software", badge: "SaaS · Templates", year: "2026",
      client: "LamTech product", img: "/assets/work/keepsake.webp", url: "https://keepsake-red-mu.vercel.app/", domain: "keepsake-red-mu.vercel.app",
      line: "A builder for love pages, lobola and wedding websites.",
      desc: "Pick an occasion, add words and photos, and download a one-of-a-kind website. Templates are themed to South Africa's 11 official languages and cultures.",
      features: ["Anniversary, proposal, lobola and wedding templates", "Culture themes with drawn heritage patterns", "RSVPs that become tickets and reply on WhatsApp", "Accounts and saved projects on Supabase", "Installable PWA with a service worker"],
      stack: ["javascript","html5","css","supabase","pwa","sw","vercel"] },
    { slug: "onefortyfour", name: "ONEFORTYFOUR®", type: "store", badge: "E-commerce · Fashion", year: "2026",
      client: "Streetwear brand", img: "/assets/work/onefortyfour-v2.webp", url: "https://onefortyfour.xyz/", domain: "onefortyfour.xyz",
      line: "Monochrome, drop-led streetwear store.",
      desc: "A custom storefront and commerce back end for a streetwear label, built around limited drops and money-safe order handling.",
      features: ["Next.js App Router storefront", "Supabase Postgres catalogue and orders", "Yoco Checkout with idempotent webhooks", "Admin tools and schema migrations in version control"],
      stack: ["nextjs","react","typescript","tailwind","supabase","postgresql","yoco","zod","vercel"] },
    { slug: "maison-decorum", name: "Maison Décorum", type: "store", badge: "E-commerce · Furniture", year: "2026",
      client: "Made-to-order furniture", img: "/assets/work/maison-decorum.webp", url: "https://maisondecorum.co.za/", domain: "maisondecorum.co.za",
      line: "Made-to-order furniture with instalments at checkout.",
      desc: "An editorial online store for a Gauteng furniture brand: full-bleed product imagery, a browser-saved cart and a custom enquiry flow.",
      features: ["Next.js 16 with Cache Components and React 19", "Supabase catalogue and admin area", "Custom enquiries emailed with Nodemailer", "Self-hosted fonts and Vercel Analytics"],
      stack: ["nextjs","react","typescript","tailwind","supabase","nodemailer","vercel"] },
    { slug: "shine", name: "Shine Crochet & Knit", type: "store", badge: "E-commerce · Handmade", year: "2026",
      client: "Bushbuckridge, Mpumalanga", img: "/assets/work/shine-crochet.webp", url: "https://shines-crochey-shop.vercel.app/", domain: "shines-crochey-shop.vercel.app",
      line: "Xibelana sets made to order, with WhatsApp checkout.",
      desc: "Moved a crochet maker from a WhatsApp catalogue to a real shop window. Customers choose sizes and colours, then send a ready-typed order with a reference number.",
      features: ["Catalogue, product pages, cart and checkout", "Deposit or pay-in-full order flows to WhatsApp", "Supabase database and invitation-only admin dashboard", "Mobile-first and accessible at 390px"],
      stack: ["react","typescript","vite","tailwind","router","supabase","whatsapp","vercel"] },
    { slug: "kombani", name: "Kombani IS", type: "website", badge: "Website · Telecoms", year: "2026",
      client: "Fibre contractor, Heidelberg", img: "/assets/work/kombani-is.webp", url: "https://kombani-is.co.za/", domain: "kombani-is.co.za",
      line: "A fibre contractor showing its track record.",
      desc: "A fast static site for a fibre optic infrastructure contractor, with stats, partners, services and an interactive project gallery.",
      features: ["Masonry gallery with filters and a swipeable lightbox", "Animated counters and quote form", "CSP, HSTS and caching headers on Vercel", "POPIA privacy policy"],
      stack: ["html5","css","javascript","csp","vercel"] },
    { slug: "signature-swirl", name: "Signature Swirl", type: "website", badge: "Website · Events", year: "2026",
      client: "Dessert carts, Pretoria", img: "/assets/work/signature-swirl.webp", url: "https://signatureswirl.co.za/", domain: "signatureswirl.co.za",
      line: "Event dessert carts with packages and quotes.",
      desc: "An editorial, journal-style site with a spinning treat wheel, menu tabs, package comparison and an enquiry form.",
      features: ["Interactive treat wheel and menu tabs", "Package comparison and set-up timeline", "Enquiry forms via Web3Forms with WhatsApp fallback", "Shared partials synced across pages"],
      stack: ["html5","css","javascript","web3forms","nodejs","vercel"] },
    { slug: "lamtech", name: "LamTech Solutions", type: "website", badge: "Agency site", year: "2026",
      client: "My studio", img: "/assets/work/lamtech.webp", url: "https://lamtechsolutions.co.za/", domain: "lamtechsolutions.co.za",
      line: "Technology that works. My web studio's home.",
      desc: "The site for my own studio: a preloader, CSS-drawn 3D spheres, inertia scrolling, page curtains and a work gallery fed by a Supabase-backed admin page.",
      features: ["Lenis smooth scrolling and masked line reveals", "Custom cursor and curtain page transitions", "Admin page that publishes projects to Supabase", "Three-step brief that opens WhatsApp or email"],
      stack: ["html5","css","javascript","lenis","supabase","netlify","imagekit"] }
  ];

  const grid = document.getElementById("projectGrid");
  grid.innerHTML = P.map((p, i) => `
    <article class="proj reveal ${p.size || ""}" data-type="${p.type}" data-i="${i}" tabindex="0" role="button" aria-label="Open ${p.name} details">
      <div class="proj__media">
        <span class="proj__badge">${p.badge}</span>
        <span class="proj__live"><span class="pulse"></span>Live</span>
        <img src="${p.img}" alt="${p.name} homepage" loading="lazy" width="1208" height="623">
      </div>
      <div class="proj__body">
        <div class="proj__top">
          <div><h3>${p.name}</h3><p class="proj__domain">${p.domain}</p></div>
          <span class="go" aria-hidden="true">↗\uFE0E</span>
        </div>
        <p class="proj__line">${p.line}</p>
        <div class="stack-row">${p.stack.slice(0, p.size === "big" ? 12 : 5).map(chip).join("")}</div>
      </div>
    </article>`).join("");

  // filter
  document.querySelectorAll(".chip[data-filter]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".chip[data-filter]").forEach(x => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
    const f = b.dataset.filter;
    grid.querySelectorAll(".proj").forEach(c => c.classList.toggle("hide", f !== "all" && c.dataset.type !== f));
  }));

  // drawer
  const dr = document.getElementById("drawer");
  let lastFocus;
  const open = (p) => {
    lastFocus = document.activeElement;
    dImg.src = p.img; dImg.alt = p.name + " screenshot";
    dMeta.textContent = `${p.badge} · ${p.client} · ${p.year}`;
    dTitle.textContent = p.name; dDesc.textContent = p.desc;
    dFeatures.innerHTML = p.features.map(f => `<li>${f}</li>`).join("");
    dStack.innerHTML = p.stack.map(chip).join("");
    dLink.href = p.url; dLink.firstChild.textContent = p.type === "software" && p.slug === "fieldcore" ? "Open staff sign-in " : "Visit live site ";
    dr.classList.add("open"); dr.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    dr.querySelector(".drawer__close").focus();
  };
  const close = () => { dr.classList.remove("open"); dr.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
  grid.addEventListener("click", e => { const c = e.target.closest(".proj"); if (c) open(P[c.dataset.i]); });
  grid.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("proj")) { e.preventDefault(); open(P[e.target.dataset.i]); } });
  dr.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", close));
  addEventListener("keydown", e => { if (e.key === "Escape" && dr.classList.contains("open")) close(); });

  /* ------------ Marquee ------------ */
  const mq = ["react","nextjs","typescript","javascript","python","fastapi","supabase","postgresql","tailwind","vite","nodejs","vercel","netlify","github","cisco","wireshark","mysql","java","html5","css","zod","resend","git","figma"];
  const mqHtml = mq.map(k => `<span class="mq" style="--c:${color(k)}">${svg(k)}${name(k)}</span>`).join("");
  document.getElementById("marquee").innerHTML = mqHtml + mqHtml;

  /* ------------ Toolkit ------------ */
  const groups = [
    ["Frontend", ["react","nextjs","typescript","javascript","html5","css","tailwind","vite","shadcn"]],
    ["Backend & data", ["python","fastapi","supabase","postgresql","mysql","nodejs","java","sqlalchemy","jwt"]],
    ["Ship & collaborate", ["vercel","netlify","github","git","bun","uv","resend","figma","pwa"]],
    ["Networks & ops", ["cisco","wireshark","vlan","packet","modbus","iec","rtu","sql","agile"]]
  ];
  document.getElementById("toolkitGroups").innerHTML = groups.map(([t, ks]) => `
    <div class="tk reveal"><h3>${t}</h3><div class="tk__items">${ks.map(k => `<div class="tki" style="--c:${color(k)}">${I[k] ? svg(k) : (GLYPH[k] || "")}<span>${name(k)}</span></div>`).join("")}</div></div>`).join("");

  fillStacks();

  /* ------------ Loader ------------ */
  const loader = document.querySelector(".loader");
  const finish = () => { loader.classList.add("done"); document.body.classList.remove("loading"); document.documentElement.classList.add("ready"); setTimeout(() => loader.remove(), 1200); };
  if (reduce || sessionStorageSafe("seen")) { loader.remove(); document.documentElement.classList.add("ready"); }
  else {
    document.body.classList.add("loading");
    const el = document.getElementById("loadCount"); let n = 0;
    const t = setInterval(() => { n = Math.min(100, n + Math.ceil(Math.random() * 9)); el.textContent = n; if (n >= 100) { clearInterval(t); setTimeout(finish, 250); } }, 40);
    sessionStorageSafe("seen", "1");
  }
  function sessionStorageSafe(k, v) { try { if (v) sessionStorage.setItem(k, v); return sessionStorage.getItem(k); } catch { return null; } }

  /* ------------ Reveal ------------ */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });

  /* ------------ Counters ------------ */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || ""; const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .6 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  /* ------------ Nav, progress, active section ------------ */
  const nav = document.querySelector(".nav"), bar = document.querySelector(".progress");
  const links = [...document.querySelectorAll(".nav__links a")];
  const secs = links.map(a => document.querySelector(a.getAttribute("href")));
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 30);
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    let cur = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === cur));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // mobile menu
  const burger = document.querySelector(".nav__burger"), mm = document.querySelector(".mobile-menu");
  const toggle = (o) => { burger.setAttribute("aria-expanded", o); mm.hidden = !o; document.body.style.overflow = o ? "hidden" : ""; };
  burger.addEventListener("click", () => toggle(mm.hidden));
  mm.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle(false)));

  if (reduce) return;

  /* ------------ Parallax on hero + case device ------------ */
  const depthEls = document.querySelectorAll("[data-depth]");
  if (fine) addEventListener("mousemove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    depthEls.forEach(el => { const d = +el.dataset.depth; el.style.translate = `${x * d}px ${y * d}px`; });
  });

  /* ------------ Tilt ------------ */
  if (fine) document.querySelectorAll(".tilt").forEach(c => {
    c.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`; });
    c.addEventListener("mouseleave", () => c.style.transform = "");
  });

  /* ------------ Magnetic buttons ------------ */
  if (fine) document.querySelectorAll(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; });
    b.addEventListener("mouseleave", () => b.style.transform = "");
  });

  /* ------------ Scroll-linked device tilt ------------ */
  const front = document.querySelector(".device--front");
  if (front) addEventListener("scroll", () => {
    const r = front.getBoundingClientRect(); const k = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / innerHeight));
    front.style.transform = `rotateY(${10 * k}deg) rotateX(${4 * k}deg) rotateZ(${-2 * k}deg)`;
  }, { passive: true });
})();
