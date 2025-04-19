document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };
  
    fetch('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Your message has been sent successfully!');
          document.getElementById('contactForm').reset(); // Reset the form
        } else {
          alert('There was an error sending your message. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again later.');
      });
  });
  