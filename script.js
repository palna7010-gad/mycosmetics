document.addEventListener('DOMContentLoaded', () => {
  let itemCount = 0;

  // DOM Elements
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumb');
  const swatches = document.querySelectorAll('.swatch');
  const shadeNameDisplay = document.getElementById('shadeName');
  const cartCountDisplay = document.getElementById('cartCount');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const quizModal = document.getElementById('quizModal');
  const openQuizBtn = document.getElementById('openQuizBtn');
  const closeQuizBtn = document.getElementById('closeQuizBtn');
  const quizOptions = document.querySelectorAll('.quiz-option');

  // Image Gallery Switcher
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const newImgSrc = thumb.getAttribute('data-img');
      mainImage.src = newImgSrc;

      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Shade Selection
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const selectedShade = swatch.getAttribute('data-shade');
      shadeNameDisplay.innerText = selectedShade;
    });
  });

  // Add to Bag
  addToCartBtn.addEventListener('click', () => {
    itemCount++;
    cartCountDisplay.innerText = itemCount;
    alert('Item added to your bag!');
  });

  // Modal Controls
  openQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'flex';
  });

  closeQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'none';
  });

  // Close modal when clicking outside of modal content
  window.addEventListener('click', (e) => {
    if (e.target === quizModal) {
      quizModal.style.display = 'none';
    }
  });

  // Quiz Options Logic
  quizOptions.forEach(option => {
    option.addEventListener('click', () => {
      const recommendedShade = option.getAttribute('data-shade');
      shadeNameDisplay.innerText = recommendedShade + ' (Recommended)';
      
      // Update swatch active state to match recommendation
      swatches.forEach(swatch => {
        if (swatch.getAttribute('data-shade') === recommendedShade) {
          swatches.forEach(s => s.classList.remove('active'));
          swatch.classList.add('active');
        }
      });

      quizModal.style.display = 'none';
    });
  });
});
 
