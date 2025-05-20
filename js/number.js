 // Function to animate counting up numbers
  function animateCountUp(element, endValue, duration = 2000) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / endValue));
    const timer = setInterval(() => {
      start += 1;
      element.textContent = start.toLocaleString('vi-VN');
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // When DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.highlight-item h3');
    items.forEach(item => {
      const target = parseInt(item.textContent.replace(/\./g, '').replace(/,/g, ''), 10);
      item.textContent = '0';  // Reset initial text
      animateCountUp(item, target, 2000);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.highlight-item');

  function checkVisibility() {
    const triggerBottom = window.innerHeight / 1.2;

    items.forEach(item => {
      const boxTop = item.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});