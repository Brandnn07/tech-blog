async function logout() {
    console.log('ok!');
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {  
        res.redirect('/login');
    } else {
        alert(response.statusText)
    }
}

document.getElementById('logout').addEventListener('click', logout)
