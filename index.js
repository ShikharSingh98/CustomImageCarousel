const images = document.querySelectorAll('img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let count = 0;

images[count].style.display = 'block';

nextBtn.addEventListener('click', () => {
  images[count].style.display = 'none';
  count++;
  if (count < images.length) {
    images[count].style.display = 'block';
  } else {
    count = 0;
    images[count].style.display = 'block';
  }
});

prevBtn.addEventListener('click', () => {
  images[count].style.display = 'none';
  count--;
  if (count >= 0) {
    images[count].style.display = 'block';
  } else {
    count = images.length - 1;
    images[count].style.display = 'block';
  }
});
