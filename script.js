const scriptURL = 'https://script.google.com/macros/s/AKfycbwGjZa-J59UocPjLFhB4Gi8pZ6PH8jWKYLm5BXwfNMDwHKPaK6_aDB3blJY5O5j90Ar2Q/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Your form has been submitted.");
        window.location.reload();
      } else {
        return response.text().then(text => { throw new Error(text) });
      }
    })
    .catch(error => console.error('Error!', error.message));
});

function viewImage(src) {
  const modalImage = document.getElementById('modalImage');
  modalImage.src = src;
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
  imageModal.show();
}


document.addEventListener('DOMContentLoaded', () => {
  const booksTab = document.getElementById('books');
  fetch('books.html')
    .then(response => response.text())
    .then(html => {
      booksTab.innerHTML = html;
    })
    .catch(error => console.error('Error loading books:', error));
});

document.addEventListener('DOMContentLoaded', () => {
  const imagesTab = document.getElementById('images');
  fetch('images.html')
    .then(response => response.text())
    .then(html => {
      imagesTab.innerHTML = html;
    })
    .catch(error => console.error('Error loading images:', error));
});


document.addEventListener('DOMContentLoaded', () => {
  const imagesTab = document.getElementById('ringtones');
  fetch('ringtones.html')
    .then(response => response.text())
    .then(html => {
      imagesTab.innerHTML = html;
    })
    .catch(error => console.error('Error loading images:', error));
});
