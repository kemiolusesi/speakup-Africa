    const gifDuration = 4300;

    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        document.body.classList.add('loaded');
      }, gifDuration);
    });

    // Handle form submission
    const form = document.getElementById('reportForm');
    const message = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      message.style.display = 'block';
      form.reset();
    });