document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);

    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;

    function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      obj.textContent = value + "+";
      if (value == end) {
        clearInterval(timer);
      }
    }

    timer = setInterval(run, stepTime);
    run();
  }

  animateValue('projects', 0, 78, 500);
  animateValue('specialists', 0, 120, 500);



  const carousel = document.getElementById('carousel');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');
  const posts = document.querySelectorAll('.post');
  const postWidth = posts[0].offsetWidth + 24; // 24 is the combined gap (6 * 4 sides) plus any extra margin/padding
  const totalPosts = posts.length;
  let currentIndex = 0;

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${postWidth * currentIndex}px)`;
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex < totalPosts - 2) {
      currentIndex++;
      carousel.style.transform = `translateX(-${postWidth * currentIndex}px)`;
    }
  });
});
