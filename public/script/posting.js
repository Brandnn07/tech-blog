const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-desc').value.trim();
  
    if (name && content) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log('Failed to create blog post');
      }
    }
  };
  
  document
    .getElementById('newPost')
    .addEventListener('submit', newFormHandler);
  
