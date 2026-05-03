// ─── DATA ────────────────────────────────────────────────────
const tools = [
  { name:"ChatGPT", category:"Chatbot", tags:["coding","writing"], pricing:"freemium", rating:{coding:9,writing:10,design:7}, link:"https://chat.openai.com", description:"All-round AI assistant by OpenAI, capable of coding, writing, analysis, and much more." },
  { name:"Claude", category:"Chatbot", tags:["writing"], pricing:"freemium", rating:{coding:7,writing:10,design:6}, link:"https://claude.ai", description:"Best for long-form text, nuanced reasoning, and thoughtful writing." },
  { name:"Gemini", category:"Chatbot", tags:["writing","research"], pricing:"free", rating:{coding:7,writing:9,design:6}, link:"https://gemini.google.com", description:"Google's AI assistant with deep search and multimodal capabilities." },
  { name:"Blackbox", category:"Coding", tags:["coding"], pricing:"free", rating:{coding:8,writing:5,design:4}, link:"https://blackbox.ai", description:"In-browser code assistant with real-time code completion." },
  { name:"GitHub Copilot", category:"Coding", tags:["coding"], pricing:"paid", rating:{coding:10,writing:4,design:3}, link:"https://github.com/copilot", description:"The gold standard AI coding partner, deeply integrated into VS Code." },
  { name:"Cursor", category:"Coding", tags:["coding"], pricing:"freemium", rating:{coding:9,writing:5,design:3}, link:"https://cursor.sh", description:"AI-first IDE built for velocity — write, edit, and chat with your codebase." },
  { name:"Codeium", category:"Coding", tags:["coding"], pricing:"free", rating:{coding:8,writing:4,design:3}, link:"https://codeium.com", description:"Free AI coding assistant with autocomplete and chat." },
  { name:"Midjourney", category:"Design", tags:["design"], pricing:"paid", rating:{coding:2,writing:3,design:10}, link:"https://midjourney.com", description:"World-class AI image generation with an artistic, premium aesthetic." },
  { name:"DALL·E", category:"Design", tags:["design"], pricing:"freemium", rating:{coding:2,writing:3,design:9}, link:"https://openai.com/dall-e", description:"OpenAI's AI image creator — versatile and photorealistic." },
  { name:"Leonardo AI", category:"Design", tags:["design"], pricing:"freemium", rating:{coding:2,writing:3,design:9}, link:"https://leonardo.ai", description:"AI image generation tuned for game assets and creative design." },
  { name:"Canva AI", category:"Design", tags:["design"], pricing:"freemium", rating:{coding:2,writing:6,design:8}, link:"https://canva.com", description:"Design assistant with AI features built into the Canva ecosystem." },
  { name:"Runway ML", category:"Video", tags:["design"], pricing:"freemium", rating:{coding:2,writing:3,design:9}, link:"https://runwayml.com", description:"AI video editing and generation platform used by creators." },
  { name:"Pictory", category:"Video", tags:["design"], pricing:"paid", rating:{coding:1,writing:5,design:8}, link:"https://pictory.ai", description:"Convert text scripts or articles into short videos automatically." },
  { name:"Synthesia", category:"Video", tags:["design"], pricing:"paid", rating:{coding:1,writing:6,design:8}, link:"https://synthesia.io", description:"Create AI presenter videos with realistic avatars." },
  { name:"Notion AI", category:"Productivity", tags:["writing"], pricing:"freemium", rating:{coding:5,writing:9,design:6}, link:"https://notion.so", description:"AI writing and brainstorming inside your Notion workspace." },
  { name:"Grammarly", category:"Writing", tags:["writing"], pricing:"freemium", rating:{coding:3,writing:9,design:5}, link:"https://grammarly.com", description:"Grammar, clarity, and style assistant for any text." },
  { name:"Jasper", category:"Writing", tags:["writing"], pricing:"paid", rating:{coding:3,writing:9,design:6}, link:"https://jasper.ai", description:"AI content platform for marketing teams and copywriters." },
  { name:"Copy.ai", category:"Writing", tags:["writing"], pricing:"freemium", rating:{coding:3,writing:8,design:5}, link:"https://copy.ai", description:"Fast content generation for marketing, social, and email." },
  { name:"Perplexity", category:"Research", tags:["writing"], pricing:"freemium", rating:{coding:6,writing:9,design:6}, link:"https://perplexity.ai", description:"AI search engine that cites sources and explains answers clearly." },
  { name:"Elicit", category:"Research", tags:["writing"], pricing:"free", rating:{coding:5,writing:8,design:5}, link:"https://elicit.org", description:"AI research assistant for literature reviews and paper summaries." },
  { name:"Otter AI", category:"Productivity", tags:["writing"], pricing:"freemium", rating:{coding:2,writing:8,design:5}, link:"https://otter.ai", description:"Real-time AI meeting transcription and notes." },
  { name:"Fireflies AI", category:"Productivity", tags:["writing"], pricing:"freemium", rating:{coding:2,writing:8,design:5}, link:"https://fireflies.ai", description:"AI meeting assistant that records, transcribes, and summarizes calls." },
  { name:"ElevenLabs", category:"Audio", tags:["design"], pricing:"freemium", rating:{coding:1,writing:5,design:9}, link:"https://elevenlabs.io", description:"State-of-the-art AI voice cloning and text-to-speech generation." },
  { name:"PlayHT", category:"Audio", tags:["design"], pricing:"freemium", rating:{coding:1,writing:5,design:8}, link:"https://play.ht", description:"Realistic text-to-speech with hundreds of AI voices." },
  { name:"Tome", category:"Productivity", tags:["design"], pricing:"freemium", rating:{coding:2,writing:7,design:8}, link:"https://tome.app", description:"AI-powered storytelling and presentation creation tool." },
  { name:"Gamma", category:"Productivity", tags:["design"], pricing:"freemium", rating:{coding:2,writing:7,design:8}, link:"https://gamma.app", description:"Build beautiful presentations, docs, and websites with AI." },
  { name:"Durable", category:"Web", tags:["design"], pricing:"paid", rating:{coding:3,writing:6,design:8}, link:"https://durable.co", description:"AI website builder that creates a full site in seconds." },
  { name:"Framer AI", category:"Web", tags:["design"], pricing:"freemium", rating:{coding:4,writing:6,design:9}, link:"https://framer.com", description:"Design and publish stunning AI-powered websites with no code." },
  { name:"Beautiful.ai", category:"Design", tags:["design"], pricing:"paid", rating:{coding:1,writing:6,design:8}, link:"https://beautiful.ai", description:"AI slide design that auto-formats and beautifies your presentations." },
  { name:"Remove.bg", category:"Design", tags:["design"], pricing:"freemium", rating:{coding:1,writing:2,design:9}, link:"https://remove.bg", description:"Instantly remove image backgrounds with AI accuracy." },
  { name:"Zapier AI", category:"Productivity", tags:["coding"], pricing:"freemium", rating:{coding:7,writing:6,design:5}, link:"https://zapier.com", description:"Automate workflows between 6000+ apps using AI." },
  { name:"Make", category:"Productivity", tags:["coding"], pricing:"freemium", rating:{coding:7,writing:5,design:5}, link:"https://make.com", description:"Visual workflow automation platform with powerful AI modules." },
  { name:"Replit Ghostwriter", category:"Coding", tags:["coding"], pricing:"paid", rating:{coding:9,writing:4,design:3}, link:"https://replit.com", description:"AI coding assistant built into Replit's collaborative IDE." },
  { name:"Tabnine", category:"Coding", tags:["coding"], pricing:"freemium", rating:{coding:8,writing:4,design:3}, link:"https://tabnine.com", description:"AI code completion trained on your codebase for personalized suggestions." },
  { name:"Writesonic", category:"Writing", tags:["writing"], pricing:"freemium", rating:{coding:3,writing:8,design:5}, link:"https://writesonic.com", description:"AI writing platform for blogs, ads, landing pages, and more." },
  { name:"Rytr", category:"Writing", tags:["writing"], pricing:"freemium", rating:{coding:2,writing:7,design:5}, link:"https://rytr.me", description:"Budget-friendly AI content writer for quick copy generation." },
  { name:"Quillbot", category:"Writing", tags:["writing"], pricing:"freemium", rating:{coding:2,writing:8,design:5}, link:"https://quillbot.com", description:"AI paraphrasing and rewriting tool for students and writers." },
  { name:"Wordtune", category:"Writing", tags:["writing"], pricing:"freemium", rating:{coding:2,writing:8,design:5}, link:"https://wordtune.com", description:"AI rewriting assistant that improves clarity and tone in real time." }
];

// ─── CONSTANTS ────────────────────────────────────────────────
const icons = {
  Chatbot:"🤖", Coding:"💻", Design:"🎨", Writing:"✍️",
  Productivity:"📊", Video:"🎬", Audio:"🎧", Research:"🔍", Web:"🌐"
};

const catColors = {
  Chatbot:"rgba(59,130,246,0.15)",   Coding:"rgba(16,185,129,0.15)",
  Design:"rgba(236,72,153,0.15)",    Writing:"rgba(245,158,11,0.15)",
  Productivity:"rgba(139,92,246,0.15)", Video:"rgba(239,68,68,0.15)",
  Audio:"rgba(6,182,212,0.15)",      Research:"rgba(99,102,241,0.15)",
  Web:"rgba(34,197,94,0.15)"
};

const catText = {
  Chatbot:"#93c5fd",  Coding:"#6ee7b7",  Design:"#f9a8d4",
  Writing:"#fcd34d",  Productivity:"#c4b5fd", Video:"#fca5a5",
  Audio:"#67e8f9",    Research:"#a5b4fc",  Web:"#86efac"
};

const ratingColors = {
  coding:  "linear-gradient(90deg,#3b82f6,#06b6d4)",
  writing: "linear-gradient(90deg,#10b981,#34d399)",
  design:  "linear-gradient(90deg,#ec4899,#f472b6)"
};

// ─── STATE ────────────────────────────────────────────────────
let selectedTask = "coding";
let favs = JSON.parse(localStorage.getItem("fav")) || [];

// ─── INIT ─────────────────────────────────────────────────────
function init() {
  buildCategoryNav();
  displayTools(tools);
  loadCompare();
  updateFavCount();
}

// ─── CATEGORY NAV ─────────────────────────────────────────────
function buildCategoryNav(list = tools) {
  const nav = document.getElementById("categoryNav");
  const cats = [...new Set(list.map(t => t.category))];
  nav.innerHTML = cats.map(c => `
    <button class="cat-pill" onclick="scrollToCategory('${c}')">
      ${icons[c] || "📁"} ${c}
    </button>
  `).join("");
}

function scrollToCategory(cat) {
  const el = document.getElementById("cat-" + cat);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── DISPLAY TOOLS ────────────────────────────────────────────
function displayTools(list = tools) {
  const section = document.getElementById("tools-section");
  section.innerHTML = "";
  buildCategoryNav(list);

  const grouped = {};
  list.forEach(t => {
    if (!grouped[t.category]) grouped[t.category] = [];
    grouped[t.category].push(t);
  });

  for (const cat in grouped) {
    const block = document.createElement("div");
    block.className = "category-block";
    block.id = "cat-" + cat;

    block.innerHTML = `
      <div class="category-header">
        <div class="cat-icon-lg" style="background:${catColors[cat]||'rgba(255,255,255,0.05)'}; color:${catText[cat]||'#94a3b8'}">
          ${icons[cat] || "📁"}
        </div>
        <h2>${cat}</h2>
        <span class="count">${grouped[cat].length} tools</span>
        <div style="flex:1;height:1px;background:var(--border);margin-left:8px;"></div>
      </div>
      <div class="tools-grid" id="grid-${cat}"></div>
    `;

    section.appendChild(block);

    const grid = document.getElementById("grid-" + cat);
    grouped[cat].forEach((tool, i) => {
      const card = createCard(tool, i);
      grid.appendChild(card);
    });
  }

  // Intersection Observer for fade-up on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".tool-card").forEach(c => observer.observe(c));
}

// ─── CREATE CARD ──────────────────────────────────────────────
function createCard(tool, i) {
  const div = document.createElement("div");
  div.className = "tool-card";
  div.style.animationDelay = (i * 0.05) + "s";

  const isSaved = favs.includes(tool.name);
  const pricingClass = { free:"pricing-free", freemium:"pricing-freemium", paid:"pricing-paid" }[tool.pricing] || "";

  div.innerHTML = `
    <div class="card-top">
      <span class="card-cat-pill" style="background:${catColors[tool.category]||'rgba(255,255,255,0.07)'};color:${catText[tool.category]||'#94a3b8'};border:1px solid ${catText[tool.category]||'#94a3b8'}22;">
        ${icons[tool.category] || "📁"} ${tool.category}
      </span>
      <span class="pricing-badge ${pricingClass}">${tool.pricing}</span>
    </div>
    <h3>${tool.name}</h3>
    <p class="tool-desc">${tool.description}</p>
    <div class="ratings-mini">
      ${['coding','writing','design'].map(k => `
        <div class="rating-mini-row">
          <span class="lbl">${k.charAt(0).toUpperCase()+k.slice(1)}</span>
          <div class="mini-bar-bg">
            <div class="mini-bar-fill" style="width:${tool.rating[k]*10}%;background:${ratingColors[k]}"></div>
          </div>
          <span class="mini-bar-val">${tool.rating[k]}</span>
        </div>
      `).join("")}
    </div>
    <div class="card-actions">
      <a href="${tool.link}" target="_blank" class="visit-btn" onclick="event.stopPropagation()">Visit →</a>
      <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleFav('${tool.name}', this)" title="${isSaved ? 'Saved' : 'Save'}">
        ${isSaved ? '❤️' : '🤍'}
      </button>
    </div>
  `;

  div.addEventListener("click", () => openModal(tool.name));
  return div;
}

// ─── SEARCH ───────────────────────────────────────────────────
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  displayTools(tools.filter(t =>
    t.name.toLowerCase().includes(val) ||
    t.description.toLowerCase().includes(val) ||
    t.category.toLowerCase().includes(val)
  ));
});

// ─── SEGMENT CONTROL ──────────────────────────────────────────
function selectSegment(btn) {
  document.querySelectorAll(".segment-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedTask = btn.dataset.val;
}

// ─── RECOMMEND ────────────────────────────────────────────────
function recommend() {
  const task = selectedTask;
  let filtered = tools.filter(t => t.tags.includes(task));
  filtered.sort((a, b) => b.rating[task] - a.rating[task]);

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  filtered.slice(0, 3).forEach((t, i) => {
    const d = document.createElement("div");
    d.className = "result-card";
    d.style.animationDelay = (i * 0.1) + "s";
    d.innerHTML = `
      <div style="font-size:0.75rem;color:${catText[t.category]};margin-bottom:6px;font-weight:600;">
        #${i+1} TOP PICK · ${t.category.toUpperCase()}
      </div>
      <h3>${t.name}</h3>
      <p>${t.description}</p>
      <div class="result-score">⭐ ${t.rating[task]}/10 ${task}</div>
    `;
    d.onclick = () => openModal(t.name);
    resultsDiv.appendChild(d);
  });

  resultsDiv.scrollIntoView({ behavior: "smooth" });
}

// ─── COMPARE ──────────────────────────────────────────────────
function loadCompare() {
  const c1 = document.getElementById("compare1");
  const c2 = document.getElementById("compare2");
  tools.forEach(t => {
    c1.innerHTML += `<option>${t.name}</option>`;
    c2.innerHTML += `<option>${t.name}</option>`;
  });
  c2.selectedIndex = 1;
}

function compareTools() {
  const t1 = tools.find(t => t.name === document.getElementById("compare1").value);
  const t2 = tools.find(t => t.name === document.getElementById("compare2").value);
  if (!t1 || !t2) return;

  const metrics = ["coding","writing","design"];
  let t1wins = 0, t2wins = 0;
  metrics.forEach(m => {
    if (t1.rating[m] > t2.rating[m]) t1wins++;
    else if (t2.rating[m] > t1.rating[m]) t2wins++;
  });

  document.getElementById("compareResult").innerHTML = `
    <div class="compare-card ${t1wins >= t2wins ? 'winner' : ''}">
      <h2>${t1.name} ${t1wins > t2wins ? '<span style="font-size:0.75rem;color:var(--cyan)">▲ Winner</span>' : ''}</h2>
      ${metrics.map(m => `
        <div class="rating-row">
          <div class="label"><span>${m.charAt(0).toUpperCase()+m.slice(1)}</span><span>${t1.rating[m]}/10</span></div>
          <div class="rating-bar-bg">
            <div class="rating-bar-fill" style="width:${t1.rating[m]*10}%;background:${ratingColors[m]}"></div>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="compare-card ${t2wins > t1wins ? 'winner' : ''}">
      <h2>${t2.name} ${t2wins > t1wins ? '<span style="font-size:0.75rem;color:var(--cyan)">▲ Winner</span>' : ''}</h2>
      ${metrics.map(m => `
        <div class="rating-row">
          <div class="label"><span>${m.charAt(0).toUpperCase()+m.slice(1)}</span><span>${t2.rating[m]}/10</span></div>
          <div class="rating-bar-bg">
            <div class="rating-bar-fill" style="width:${t2.rating[m]*10}%;background:${ratingColors[m]}"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// ─── FAVORITES ────────────────────────────────────────────────
function toggleFav(name, btn) {
  if (favs.includes(name)) {
    favs = favs.filter(f => f !== name);
    if (btn) { btn.innerHTML = "🤍"; btn.classList.remove("saved"); }
    showToast("Removed from saved");
  } else {
    favs.push(name);
    if (btn) { btn.innerHTML = "❤️"; btn.classList.add("saved"); }
    showToast("Saved! ❤️");
  }
  localStorage.setItem("fav", JSON.stringify(favs));
  updateFavCount();
  renderFavPanel();
}

// backward-compat alias
function addFav(name) { toggleFav(name, null); }

function updateFavCount() {
  document.getElementById("fav-count").textContent = favs.length;
}

function renderFavPanel() {
  const list = document.getElementById("favList");
  if (favs.length === 0) {
    list.innerHTML = `<p style="color:var(--muted);font-size:0.88rem;text-align:center;margin-top:2rem;">No saved tools yet.</p>`;
    return;
  }
  list.innerHTML = favs.map(name => {
    const t = tools.find(x => x.name === name);
    if (!t) return "";
    return `
      <div class="fav-item">
        <div>
          <div class="fav-item-name">${t.name}</div>
          <div class="fav-item-cat">${icons[t.category]} ${t.category}</div>
        </div>
        <button class="fav-remove" onclick="toggleFav('${name}', null); renderFavPanel();">✕</button>
      </div>
    `;
  }).join("");
}

function toggleFavPanel() {
  renderFavPanel();
  document.getElementById("favPanel").classList.toggle("open");
}

// ─── MODAL ────────────────────────────────────────────────────
function openModal(name) {
  const t = tools.find(x => x.name === name);
  if (!t) return;

  document.getElementById("modalCat").innerHTML = `${icons[t.category]} ${t.category} &nbsp;·&nbsp; <span style="color:var(--muted)">${t.pricing}</span>`;
  document.getElementById("modalTitle").textContent = t.name;
  document.getElementById("modalDesc").textContent = t.description;
  document.getElementById("modalLink").href = t.link;

  document.getElementById("modalRatings").innerHTML = ["coding","writing","design"].map(m => `
    <div class="rating-row">
      <div class="label">
        <span>${m.charAt(0).toUpperCase()+m.slice(1)}</span>
        <span style="font-weight:600;color:var(--text)">${t.rating[m]}/10</span>
      </div>
      <div class="rating-bar-bg">
        <div class="rating-bar-fill" style="width:${t.rating[m]*10}%;background:${ratingColors[m]}"></div>
      </div>
    </div>
  `).join("");

  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

function handleModalClick(e) {
  if (e.target === document.getElementById("modal")) closeModal();
}

// ─── THEME ────────────────────────────────────────────────────
function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.querySelector(".theme-btn");
  btn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
}

// ─── TOAST ────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}

// ─── START ────────────────────────────────────────────────────
init();
