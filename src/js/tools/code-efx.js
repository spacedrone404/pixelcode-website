document.querySelectorAll(".crt-container").forEach((container) => {
  // Set data-text attribute for the crt-text within this container
  const pre = container.querySelector(".crt-text");
  if (pre) {
    const textContent = pre.textContent;
    pre.setAttribute("data-text", textContent);
  }

  // Handle copy button within this container
  const copyButton = container.querySelector(".copy-button");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const text = pre.textContent;

      try {
        await navigator.clipboard.writeText(text);
        copyButton.textContent = "OK!";
        setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
        copyButton.textContent = "Error";
        setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 2000);
      }
    });
  }

  // Broken TV effect for this container
  function triggerBrokenTvEffect() {
    // Random delay between 5 and 15 seconds
    const delay = Math.random() * 10000 + 5000;
    setTimeout(() => {
      container.classList.add("broken-tv");
      // Remove class after animation duration (0.3s)
      setTimeout(() => {
        container.classList.remove("broken-tv");
        // Schedule next effect
        triggerBrokenTvEffect();
      }, 300);
    }, delay);
  }
  // Start the effect for this container
  triggerBrokenTvEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  // Create audio elements
  const hoverSound = new Audio("../media/aud/hover.mp3");
  const clickSound = new Audio("../media/aud/copy.mp3");

  // Set volume if needed (0.0 to 1.0)
  hoverSound.volume = 0.1;
  clickSound.volume = 0.1;

  // Preload sounds
  hoverSound.preload = "auto";
  clickSound.preload = "auto";

  // Get all menu links
  const menuLinks = document.querySelectorAll(".copy-button");

  // Add event listeners to each menu link
  menuLinks.forEach((link) => {
    // Hover sound
    link.addEventListener("mouseenter", function () {
      hoverSound.currentTime = 0;
      hoverSound
        .play()
        .catch((e) => console.log("Hover sound play failed:", e));
    });

    // Click sound with navigation delay
    link.addEventListener("click", function (e) {
      // Prevent immediate navigation
      e.preventDefault();
      const targetUrl = this.href;

      // Play click sound
      clickSound.currentTime = 0;
      clickSound
        .play()
        .catch((e) => console.log("Click sound play failed:", e));
    });
  });
});
