const fullComparisons = [
  {
    id: "multi_event_003",
    category: "Rigid-body mechanics",
    prompt: "A marble rolls through a curved track, strikes a wooden block, and pushes it forward.",
    highlight: "strikes a wooden block, and pushes it forward",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_003_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_003_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 42", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_003_seed42.mp4"],
      ["phys", "+PhyS", "base", "wan26_t2v_10s/videos/multi_event_003.mp4"],
    ],
  },
  {
    id: "multi_event_005",
    category: "Rigid-body mechanics",
    prompt: "A swinging tennis ball hits stacked foam blocks, sliding them apart across the table.",
    highlight: "hits stacked foam blocks, sliding them apart",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_005_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_005_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 42", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_005_seed42.mp4"],
      ["phys", "+PhyS", "base", "wan26_t2v_10s/videos/multi_event_005.mp4"],
    ],
  },
  {
    id: "multi_event_009",
    category: "Rigid-body mechanics",
    prompt: "A falling block tips a seesaw, launching the ball from the opposite end.",
    highlight: "tips a seesaw, launching the ball",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_009_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_009_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 3042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_009_seed3042.mp4"],
      ["phys", "+PhyS", "seed 1042", "wan26_t2v_10s/videos/multi_event_009_seed1042.mp4"],
    ],
  },
  {
    id: "multi_event_013",
    category: "Soft-body deformation",
    prompt: "Grabbers squeeze a wet sponge; water drips out, then the sponge expands when released.",
    highlight: "squeeze a wet sponge; water drips out, then the sponge expands",
    videos: [
      ["self", "Self-Forcing", "seed 3042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_013_seed3042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_013_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 42", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_013_seed42.mp4"],
      ["phys", "+PhyS", "base", "wan26_t2v_10s/videos/multi_event_013.mp4"],
    ],
  },
  {
    id: "multi_event_014",
    category: "Soft-body deformation",
    prompt: "A rolling ball squashes a balloon against a wall before it rebounds.",
    highlight: "squashes a balloon against a wall before it rebounds",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_014_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_014_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 42", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_014_seed42.mp4"],
      ["phys", "+PhyS", "seed 1042", "wan26_t2v_10s/videos/multi_event_014_seed1042.mp4"],
    ],
  },
  {
    id: "multi_event_015",
    category: "Soft-body deformation",
    prompt: "A stretched rubber band snaps forward and pushes a cup across the table.",
    highlight: "snaps forward and pushes a cup",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_015_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 2042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_015_seed2042.mp4"],
      ["causal", "Causal-Forcing", "seed 3042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_015_seed3042.mp4"],
      ["phys", "+PhyS", "base", "wan26_t2v_10s/videos/multi_event_015.mp4"],
    ],
  },
  {
    id: "multi_event_021",
    category: "Fluid dynamics",
    prompt: "Blue dye falls into water, forming branching plumes that spread as the liquid is stirred.",
    highlight: "forming branching plumes that spread",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_021_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 2042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_021_seed2042.mp4"],
      ["causal", "Causal-Forcing", "seed 3042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_021_seed3042.mp4"],
      ["phys", "+PhyS", "seed 1042", "wan26_t2v_10s/videos/multi_event_021_seed1042.mp4"],
    ],
  },
  {
    id: "multi_event_023",
    category: "Fluid dynamics",
    prompt: "Red liquid fills one glass until it overflows, then pours into a second glass.",
    highlight: "fills one glass until it overflows, then pours into a second",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_023_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 2042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_023_seed2042.mp4"],
      ["causal", "Causal-Forcing", "seed 3042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_023_seed3042.mp4"],
      ["phys", "+PhyS", "base", "wan26_t2v_10s/videos/multi_event_023.mp4"],
    ],
  },
  {
    id: "multi_event_024",
    category: "Fluid dynamics",
    prompt: "Rising water lifts a rubber duck and carries it across the pan.",
    highlight: "lifts a rubber duck and carries it",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_024_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 2042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_024_seed2042.mp4"],
      ["causal", "Causal-Forcing", "seed 3042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_024_seed3042.mp4"],
      ["phys", "+PhyS", "base", "wan26_t2v_10s/videos/multi_event_024.mp4"],
    ],
  },
  {
    id: "multi_event_032",
    category: "Phase transitions",
    prompt: "Butter softens, melts into liquid, and spreads until it reaches the toast.",
    highlight: "softens, melts into liquid, and spreads",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_032_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_032_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 3042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_032_seed3042.mp4"],
      ["phys", "+PhyS", "seed 2042", "wan26_t2v_10s/videos/multi_event_032_seed2042.mp4"],
    ],
  },
  {
    id: "multi_event_033",
    category: "Phase transitions",
    prompt: "Candle wax melts, drips into a shiny puddle, then turns opaque as it solidifies.",
    highlight: "melts, drips into a shiny puddle, then turns opaque",
    videos: [
      ["self", "Self-Forcing", "seed 2042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_033_seed2042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 2042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_033_seed2042.mp4"],
      ["causal", "Causal-Forcing", "seed 2042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_033_seed2042.mp4"],
      ["phys", "+PhyS", "seed 1042", "wan26_t2v_10s/videos/multi_event_033_seed1042.mp4"],
    ],
  },
  {
    id: "multi_event_040",
    category: "Phase transitions",
    prompt: "Ice cream softens and drips, forming a puddle as the scoop loses its shape.",
    highlight: "softens and drips, forming a puddle",
    videos: [
      ["self", "Self-Forcing", "seed 3042", "wan26_4x_self_forcing_i2v_10s/videos/multi_event_040_seed3042.mp4"],
      ["rolling", "Rolling-Forcing", "seed 3042", "wan26_4x_rolling_forcing_i2v_10s/videos/multi_event_040_seed3042.mp4"],
      ["causal", "Causal-Forcing", "seed 1042", "wan26_4x_causal_forcing_i2v_10s/videos/multi_event_040_seed1042.mp4"],
      ["phys", "+PhyS", "seed 2042", "wan26_t2v_10s/videos/multi_event_040_seed2042.mp4"],
    ],
  },
  {
    id: "multi_event_038",
    category: "Phase transitions",
    prompt: "Sugar clumps, melts into clear syrup, and caramelizes into an amber liquid.",
    highlight: "melts into clear syrup, and caramelizes",
    videos: [["self", "Self-Forcing", "", ""], ["phys", "+PhyS", "", ""]],
  },
  {
    id: "multi_event_008",
    category: "Rigid-body mechanics",
    prompt: "A sliding puck strikes a cylinder off-center, causing it to spin and move sideways.",
    highlight: "strikes a cylinder off-center, causing it to spin",
    videos: [["rolling", "Rolling-Forcing", "", ""], ["phys", "+PhyS", "", ""]],
  },
  {
    id: "multi_event_036",
    category: "Phase transitions",
    prompt: "Chocolate softens into a glossy pool and flows onto a strawberry.",
    highlight: "softens into a glossy pool and flows",
    videos: [["rolling", "Rolling-Forcing", "", ""], ["phys", "+PhyS", "", ""]],
  },
  {
    id: "multi_event_016",
    category: "Soft-body deformation",
    prompt: "A falling metal ball compresses a pillow, rolls away, and knocks over a foam block.",
    highlight: "compresses a pillow, rolls away, and knocks over",
    videos: [["causal", "Causal-Forcing", "", ""], ["phys", "+PhyS", "", ""]],
  },
];

const annotationSamples = [
  {
    index: 0,
    title: "Egg white solidifies on a hot griddle",
    video: "assets/dataset/videos/phase_egg.mp4",
  },
  {
    index: 1,
    title: "Orange liquid flows into a larger beaker",
    video: "assets/dataset/videos/fluid_pouring.mp4",
  },
];

const grid = document.querySelector("#comparisonGrid");
const annotationGrid = document.querySelector("#annotationGrid");
const playVisible = document.querySelector("#playVisible");
const tabs = [...document.querySelectorAll(".method-tab")];
const methods = {
  self: { label: "Self-Forcing" },
  rolling: { label: "Rolling-Forcing" },
  causal: { label: "Causal-Forcing" },
};
const methodCaseIds = {
  self: ["multi_event_003", "multi_event_013", "multi_event_021", "multi_event_040", "multi_event_038"],
  rolling: ["multi_event_005", "multi_event_014", "multi_event_023", "multi_event_008", "multi_event_036"],
  causal: ["multi_event_009", "multi_event_015", "multi_event_032", "multi_event_024", "multi_event_016"],
};
let currentFamily = "self";
let observer;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function highlightedPrompt(item) {
  const [before, after = ""] = item.prompt.split(item.highlight);
  return `${escapeHtml(before)}<em>${escapeHtml(item.highlight)}</em>${escapeHtml(after)}`;
}

function videoPanel(item, video, family) {
  const [kind, label] = video;
  const side = kind === "phys" ? "phys" : "forcing";
  const source = `assets/videos/${family}/${item.id}-${side}.mp4`;
  const poster = `assets/posters/${family}-${item.id}-${side}.jpg`;
  return `
    <div class="video-panel video-panel--${kind}">
      <div class="video-label">
        <span>${escapeHtml(label)}</span>
      </div>
      <video muted loop playsinline preload="none" poster="${poster}" src="${source}" aria-label="${escapeHtml(label)} comparison video"></video>
      <span class="video-time" aria-hidden="true">10 s</span>
    </div>`;
}

function comparisonCard(item, index, family) {
  const baseline = item.videos.find(([kind]) => kind === family);
  const phys = item.videos.find(([kind]) => kind === "phys");
  return `
    <article class="comparison-card" data-case="${item.id}" style="--order:${index}">
      <header class="comparison-card__header comparison-card__header--prompt-only">
        <h3>${highlightedPrompt(item)}</h3>
      </header>
      <div class="video-pair video-pair--${family}">
        ${videoPanel(item, baseline, family)}
        ${videoPanel(item, phys, family)}
        <button class="pair-control" type="button" aria-label="Play ${methods[family].label} and +PhyS for ${item.id}" aria-pressed="false"><span>▶</span></button>
      </div>
    </article>`;
}

function setGroupState(card, shouldPlay) {
  const videos = [...card.querySelectorAll("video")];
  const control = card.querySelector(".pair-control");
  if (shouldPlay) {
    const readyTimes = videos.filter((video) => video.readyState > 0).map((video) => video.currentTime);
    const anchor = readyTimes.length ? Math.min(...readyTimes) : 0;
    videos.forEach((video) => {
      if (video.readyState > 0 && Math.abs(video.currentTime - anchor) > 0.15) video.currentTime = anchor;
      video.play().catch(() => {});
    });
    control.classList.add("is-playing");
    control.setAttribute("aria-pressed", "true");
    control.querySelector("span").textContent = "Ⅱ";
  } else {
    videos.forEach((video) => video.pause());
    control.classList.remove("is-playing");
    control.setAttribute("aria-pressed", "false");
    control.querySelector("span").textContent = "▶";
  }
}

function bindComparisonCards() {
  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-in-view", entry.intersectionRatio >= 0.45);
      if (entry.intersectionRatio < 0.2) setGroupState(entry.target, false);
    });
  }, { threshold: [0, 0.2, 0.45] });

  document.querySelectorAll(".comparison-card").forEach((card) => {
    observer.observe(card);
    card.querySelector(".pair-control").addEventListener("click", () => {
      const playing = card.querySelector(".pair-control").classList.contains("is-playing");
      setGroupState(card, !playing);
    });
  });
}

function renderFamily(family) {
  currentFamily = family;
  const familyCases = methodCaseIds[family]
    .map((id) => fullComparisons.find((item) => item.id === id));
  grid.innerHTML = familyCases.map((item, index) => comparisonCard(item, index, family)).join("");
  tabs.forEach((tab) => {
    const active = tab.dataset.family === family;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  playVisible.setAttribute("aria-pressed", "false");
  playVisible.querySelector(".play-visible__icon").textContent = "▶";
  playVisible.lastChild.textContent = " Play visible pairs";
  bindComparisonCards();
}

function jsonMarkup(value) {
  const escaped = escapeHtml(JSON.stringify(value, null, 2));
  return escaped.split("\n").map((line) => {
    let className = "json-line";
    if (/&quot;(physical_category|properties|physical_process|state_change|final_state|permanent_changes)&quot;/.test(line)) {
      className += " json-line--physics";
    }
    if (/&quot;(event_sequence|interactions|interaction_caption|event_caption|causal_link)&quot;/.test(line)) {
      className += " json-line--event";
    }
    return `<span class="${className}">${line || " "}</span>`;
  }).join("\n");
}

function annotationCard(sample, record) {
  const annotation = typeof record.caption === "string" ? JSON.parse(record.caption) : record.caption;
  return `
    <article class="annotation-card">
      <header class="annotation-card__header">
        <div>
          <span class="annotation-card__eyebrow">${escapeHtml(annotation.physical_category || "physical annotation")}</span>
          <h4>${escapeHtml(sample.title)}</h4>
        </div>
        <button class="copy-json" type="button" aria-label="Copy JSON for ${escapeHtml(record.video_name)}">Copy JSON</button>
      </header>
      <video class="annotation-video" autoplay muted loop playsinline preload="metadata" src="${sample.video}" aria-label="Key video segment: ${escapeHtml(sample.title)}"></video>
      <div class="annotation-meta">
        <span>video_id: ${escapeHtml(JSON.stringify(annotation.video_id ?? ""))}</span>
        <span>${escapeHtml(record.video_name)}</span>
      </div>
      <pre tabindex="0"><code>${jsonMarkup(annotation)}</code></pre>
    </article>`;
}

function renderAnnotations() {
  try {
    const records = window.PHYS_ANNOTATIONS;
    if (!Array.isArray(records) || records.length < 2) throw new Error("embedded annotation data is unavailable");
    annotationGrid.innerHTML = annotationSamples.map((sample) => annotationCard(sample, records[sample.index])).join("");
    annotationGrid.querySelectorAll(".copy-json").forEach((button, index) => {
      button.addEventListener("click", async () => {
        const record = records[annotationSamples[index].index];
        const annotation = typeof record.caption === "string" ? JSON.parse(record.caption) : record.caption;
        await navigator.clipboard.writeText(JSON.stringify(annotation, null, 2));
        button.textContent = "Copied";
        window.setTimeout(() => { button.textContent = "Copy JSON"; }, 1400);
      });
    });
  } catch (error) {
    annotationGrid.innerHTML = `<p class="annotation-error">The annotation records could not be loaded. ${escapeHtml(error.message)}</p>`;
  }
}

function bindAmbientVideos() {
  const videos = [...document.querySelectorAll(".dataset-video-grid video, .annotation-video")];
  const ambientObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
  }, { threshold: 0.22 });
  videos.forEach((video) => ambientObserver.observe(video));
}

renderFamily(currentFamily);
renderAnnotations();
bindAmbientVideos();

tabs.forEach((tab) => tab.addEventListener("click", () => renderFamily(tab.dataset.family)));

playVisible.addEventListener("click", () => {
  const shouldPlay = playVisible.getAttribute("aria-pressed") !== "true";
  const visibleCards = [...document.querySelectorAll(".comparison-card.is-in-view")];
  (visibleCards.length ? visibleCards : [...document.querySelectorAll(".comparison-card")].slice(0, 1))
    .forEach((card) => setGroupState(card, shouldPlay));
  playVisible.setAttribute("aria-pressed", String(shouldPlay));
  playVisible.querySelector(".play-visible__icon").textContent = shouldPlay ? "Ⅱ" : "▶";
  playVisible.lastChild.textContent = shouldPlay ? " Pause visible pairs" : " Play visible pairs";
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) document.querySelectorAll(".comparison-card").forEach((card) => setGroupState(card, false));
});
