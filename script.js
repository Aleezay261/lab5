/* ---------- Contact form ---------- */
var form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});

/* ---------- Typing animation for the name ---------- */
// "Hi, I'm" stays static. Only the name is spelled out one letter at a time,
// stays visible for 10 seconds, gets erased, then spells out again.
(function () {
  var el = document.getElementById("typed-name");
  if (!el) return;

  var word = "Aleezay";
  var typeSpeed = 150;     // ms per letter when spelling
  var eraseSpeed = 80;     // ms per letter when removing
  var holdTime = 10000;    // 10 seconds fully visible
  var pauseEmpty = 600;    // short pause before spelling again

  // If the visitor prefers reduced motion, keep the name static
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = word;
    return;
  }

  var i = 0;
  el.textContent = "";

  function type() {
    if (i < word.length) {
      i++;
      el.textContent = word.slice(0, i);
      setTimeout(type, typeSpeed);
    } else {
      setTimeout(erase, holdTime);
    }
  }

  function erase() {
    if (i > 0) {
      i--;
      el.textContent = word.slice(0, i);
      setTimeout(erase, eraseSpeed);
    } else {
      setTimeout(type, pauseEmpty);
    }
  }

  setTimeout(type, 400);
})();