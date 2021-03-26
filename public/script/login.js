const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    console.log(username);
    console.log(password);
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log(response);
      
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/posting');
      } else {
        console.log(response.statusText);
      }
    }
  };

  
  document
    .getElementById('login')
    .addEventListener('click', loginFormHandler);
