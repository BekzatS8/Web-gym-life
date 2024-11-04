const stars = document.querySelectorAll('.star');
let selectedRating = 0;
const submitButton = document.getElementById("submit-btn");
const notificationSound = document.getElementById("notificationSound");

submitButton.addEventListener('click', () => {
  notificationSound.play();
});

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    selectedRating = index + 1;
    updateStarSelection(selectedRating);
  });
});

function updateStarSelection(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

document.getElementById('submit-btn').addEventListener('click', () => {
  if (selectedRating === 0) {
    alert('Please select a rating before submitting.');
  } else {
    document.getElementById('message').classList.remove('hidden');
  }
});
