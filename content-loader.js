document.addEventListener('DOMContentLoaded', () => {
    const pageName = window.location.pathname.split('/').pop().split('.').shift();
  
    // Define file paths based on the page
    const contentMap = {
      hindu: { books: 'hindubooks.html', images: 'hinduimages.html', ringtones: 'hinduringtones.html'},
      islamic: { books: 'islamicbooks.html', images: 'islamicimages.html', ringtones: 'islamicringtones.html'},
      christ: { books: 'christbooks.html', images: 'christimages.html', ringtones: 'christringtones.html' },
      sikh: { books: 'sikhbooks.html', images: 'sikhimages.html', ringtones: 'sikhringtones.html' }
    };
  
    const currentContent = contentMap[pageName];
  
    if (currentContent) {
      // Load books content
      const booksTab = document.getElementById('books');
      if (booksTab) {
        fetch(currentContent.books)
          .then(response => response.text())
          .then(html => {
            booksTab.innerHTML = html;
          })
          .catch(error => console.error(`Error loading books for ${pageName}:`, error));
      }
  
      // Load images content
      const imagesTab = document.getElementById('images');
      if (imagesTab) {
        fetch(currentContent.images)
          .then(response => response.text())
          .then(html => {
            imagesTab.innerHTML = html;
          })
          .catch(error => console.error(`Error loading images for ${pageName}:`, error));
      }

      // Load ringtones content
      const ringtonesTab = document.getElementById('ringtones');
      if (ringtonesTab) {
        fetch(currentContent.ringtones)
          .then(response => response.text())
          .then(html => {
            ringtonesTab.innerHTML = html;
          })
          .catch(error => console.error(`Error loading ringtones for ${pageName}:`, error));
      }
    } else {
      console.warn(`No content mapping found for ${pageName}.`);
    }
  });
  