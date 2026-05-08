const accordion = document.querySelector("[data-accordion]");

if (accordion) {
  accordion.addEventListener("click", (event) => {
    const trigger = event.target.closest(".panel-trigger");
    if (!trigger) return;

    const panel = trigger.closest(".panel");
    const isOpen = panel.classList.contains("is-open");

    accordion.querySelectorAll(".panel").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".panel-trigger").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      panel.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
}

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const tabButtons = Array.from(tabs.querySelectorAll(".tab"));
  const tabPanels = Array.from(tabs.querySelectorAll(".tab-panel"));

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((tab) => {
        tab.classList.remove("is-active");
        tab.setAttribute("aria-selected", "false");
      });

      tabPanels.forEach((panel) => panel.classList.remove("is-active"));

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");
      tabPanels[index].classList.add("is-active");
    });
  });
});
