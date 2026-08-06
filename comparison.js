const comparisons = {
  self: {
    note: "Self-Forcing generates each block from its own previous predictions.",
    label: "Self-Forcing",
    cases: [
      {
        id: "multi_event_003",
        category: "Rigid-body mechanics",
        prompt: "A marble rolls through a curved track, strikes a wooden block, and pushes it forward.",
        highlight: "strikes a wooden block, and pushes it forward",
        seed: "seed 2042",
        physSeed: "base",
      },
      {
        id: "multi_event_013",
        category: "Soft-body deformation",
        prompt: "Grabbers squeeze a wet sponge; water drips out, then the sponge expands.",
        highlight: "squeeze a wet sponge; water drips out, then the sponge expands",
        seed: "seed 3042",
        physSeed: "base",
      },
      {
        id: "multi_event_021",
        category: "Fluid dynamics",
        prompt: "Blue dye falls into water, forming branching plumes that spread as the liquid is stirred.",
        highlight: "forming branching plumes that spread",
        seed: "seed 2042",
        physSeed: "seed 1042",
      },
      {
        id: "multi_event_040",
        category: "Phase transitions",
        prompt: "Ice cream softens and drips, forming a puddle as the scoop loses its shape.",
        highlight: "softens and drips, forming a puddle",
        seed: "seed 2042",
        physSeed: "seed 2042",
      },
      {
        id: "multi_event_038",
        category: "Phase transitions",
        prompt: "Sugar clumps, melts into clear syrup, and caramelizes into an amber liquid.",
        highlight: "melts into clear syrup, and caramelizes",
        seed: "seed 2042",
        physSeed: "seed 2042",
      },
    ],
  },
  rolling: {
    note: "Rolling-Forcing extends the stream through overlapping generated windows.",
    label: "Rolling-Forcing",
    cases: [
      {
        id: "multi_event_005",
        category: "Rigid-body mechanics",
        prompt: "A swinging tennis ball hits stacked foam blocks, sliding them apart.",
        highlight: "hits stacked foam blocks, sliding them apart",
        seed: "seed 3042",
        physSeed: "base",
      },
      {
        id: "multi_event_014",
        category: "Soft-body deformation",
        prompt: "A rolling ball squashes a balloon against a wall before it rebounds.",
        highlight: "squashes a balloon against a wall before it rebounds",
        seed: "seed 3042",
        physSeed: "seed 1042",
      },
      {
        id: "multi_event_023",
        category: "Fluid dynamics",
        prompt: "Red liquid fills one glass until it overflows, then pours into a second glass.",
        highlight: "fills one glass until it overflows, then pours into a second",
        seed: "seed 2042",
        physSeed: "base",
      },
      {
        id: "multi_event_008",
        category: "Rigid-body mechanics",
        prompt: "A sliding puck strikes a cylinder off-center, causing it to spin and move sideways.",
        highlight: "strikes a cylinder off-center, causing it to spin",
        seed: "seed 2042",
        physSeed: "seed 2042",
      },
      {
        id: "multi_event_036",
        category: "Phase transitions",
        prompt: "Chocolate softens into a glossy pool and flows onto a strawberry.",
        highlight: "softens into a glossy pool and flows",
        seed: "seed 42",
        physSeed: "base",
      },
    ],
  },
  causal: {
    note: "Causal-Forcing predicts the next block from a causal temporal context.",
    label: "Causal-Forcing",
    cases: [
      {
        id: "multi_event_009",
        category: "Rigid-body mechanics",
        prompt: "A falling block tips a seesaw, launching the ball from the opposite end.",
        highlight: "tips a seesaw, launching the ball",
        seed: "seed 3042",
        physSeed: "seed 1042",
      },
      {
        id: "multi_event_015",
        category: "Soft-body deformation",
        prompt: "A stretched rubber band snaps forward and pushes a cup across the table.",
        highlight: "snaps forward and pushes a cup",
        seed: "seed 3042",
        physSeed: "base",
      },
      {
        id: "multi_event_032",
        category: "Phase transitions",
        prompt: "Butter softens, melts into liquid, and spreads until it reaches the toast.",
        highlight: "softens, melts into liquid, and spreads",
        seed: "seed 3042",
        physSeed: "seed 2042",
      },
      {
        id: "multi_event_024",
        category: "Fluid dynamics",
        prompt: "Rising water lifts a rubber duck and carries it across the pan.",
        highlight: "lifts a rubber duck and carries it",
        seed: "seed 42",
        physSeed: "seed 2042",
      },
      {
        id: "multi_event_016",
        category: "Soft-body deformation",
        prompt: "A falling metal ball compresses a pillow, rolls away, and knocks over a foam block.",
        highlight: "compresses a pillow, rolls away, and knocks over",
        seed: "seed 42",
        physSeed: "seed 1042",
      },
    ],
  },
};

const grid = document.querySelector("#comparisonGrid");
const methodNote = document.querySelector("#methodNote");
const playVisible = document.querySelector("#playVisible");
const tabs = [...document.querySelectorAll(".method-tab")];
let currentFamily = "self";
let observer;

function highlightedPrompt(item) {
  const [before, after = ""] = item.prompt.split(item.highlight);
  return `${before}<em>${item.highlight}</em>${after}`;
}

function videoPanel({ family, item, side, label, seed }) {
  const source = `assets/videos/${family}/${item.id}-${side}.mp4`;
  const poster = `assets/posters/${family}-${item.id}-${side}.jpg`;
  return `
    <div class="video-panel video-panel--${side}">
      <div class="video-label">
        <span>${label}</span>
        <small>${seed}</small>
      </div>
      <video muted loop playsinline preload="metadata" poster="${poster}" src="${source}" aria-label="${item.id}, ${label}"></video>
      <span class="video-time" aria-hidden="true">10 s</span>
    </div>`;
}

function comparisonCard(family, familyData, item, index) {
  return `
    <article class="comparison-card" data-case="${item.id}" style="--order:${index}">
      <header class="comparison-card__header">
        <div class="case-meta"><span>${item.id.replace("multi_event_", "ME–")}</span>${item.category}</div>
        <h3>${highlightedPrompt(item)}</h3>
      </header>
      <div class="video-pair">
        ${videoPanel({ family, item, side: "forcing", label: familyData.label, seed: item.seed })}
        ${videoPanel({ family, item, side: "phys", label: "+PhyS", seed: item.physSeed })}
        <button class="pair-control" type="button" aria-label="Play both videos for ${item.id}" aria-pressed="false"><span>▶</span></button>
      </div>
    </article>`;
}

function setPairState(card, shouldPlay) {
  const videos = [...card.querySelectorAll("video")];
  const control = card.querySelector(".pair-control");
  if (shouldPlay) {
    const anchor = Math.min(...videos.map((video) => Number.isFinite(video.currentTime) ? video.currentTime : 0));
    videos.forEach((video) => {
      if (Math.abs(video.currentTime - anchor) > 0.12) video.currentTime = anchor;
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

function bindCards() {
  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.6) setPairState(entry.target, true);
      else setPairState(entry.target, false);
    });
  }, { threshold: [0, 0.6] });

  document.querySelectorAll(".comparison-card").forEach((card) => {
    observer.observe(card);
    card.querySelector(".pair-control").addEventListener("click", () => {
      const isPlaying = card.querySelector(".pair-control").classList.contains("is-playing");
      setPairState(card, !isPlaying);
    });
  });
}

function renderFamily(family) {
  currentFamily = family;
  const familyData = comparisons[family];
  methodNote.textContent = familyData.note;
  grid.innerHTML = familyData.cases.map((item, index) => comparisonCard(family, familyData, item, index)).join("");
  tabs.forEach((tab) => {
    const active = tab.dataset.family === family;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  playVisible.setAttribute("aria-pressed", "false");
  playVisible.querySelector(".play-visible__icon").textContent = "▶";
  playVisible.lastChild.textContent = " Play visible pairs";
  bindCards();
}

tabs.forEach((tab) => tab.addEventListener("click", () => renderFamily(tab.dataset.family)));

playVisible.addEventListener("click", () => {
  const shouldPlay = playVisible.getAttribute("aria-pressed") !== "true";
  document.querySelectorAll(".comparison-card").forEach((card) => setPairState(card, shouldPlay));
  playVisible.setAttribute("aria-pressed", String(shouldPlay));
  playVisible.querySelector(".play-visible__icon").textContent = shouldPlay ? "Ⅱ" : "▶";
  playVisible.lastChild.textContent = shouldPlay ? " Pause all pairs" : " Play visible pairs";
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) document.querySelectorAll(".comparison-card").forEach((card) => setPairState(card, false));
});

renderFamily(currentFamily);
