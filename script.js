// Handle recommendation submission
document.getElementById('recommendation-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('new-recommendation');
  const text = input.value.trim();

  if (text) {
    const list = document.getElementById('recommendation-list');
    const newItem = document.createElement('li');
    newItem.textContent = `"${text}" – Anonymous`;
    list.appendChild(newItem);

    alert('Thank you! Your recommendation has been added.');
    input.value = '';
  }
});