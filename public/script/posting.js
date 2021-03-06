const newFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('#posttitle').value.trim();
  const post_content = document.querySelector('#content').value.trim();

  if (post_title && post_content) {
    console.log(title, content);
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_title, post_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/posting');
    } else {
      console.log(response.statusText);
    }
  }
};
const delButtonHandler = async function (event) {
  console.log('ready');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/posting');
    } else {
      console.log('didnt work m8');
    }
  }
};


document
  .getElementById('newPost')
  .addEventListener('click', newFormHandler);
document.querySelector('#deletePost')
  .addEventListener('click', delButtonHandler);

