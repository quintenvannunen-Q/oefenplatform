// Builds the platform cards on the start page from PLATFORMS (js/platforms.js).
const list = document.getElementById("platforms");

list.innerHTML = PLATFORMS.map(p => `
  <li>
    <a class="platform" href="${p.href}">
      <span class="platform-label">${p.label}</span>
      <span class="platform-text">
        <span class="platform-title">${p.title}</span>
        <span class="platform-desc">${p.description}</span>
      </span>
      <span class="platform-arrow" aria-hidden="true">→</span>
    </a>
  </li>`).join("");
