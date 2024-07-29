// Placeholder for storing users (in a real application, use a database)
let users = {};

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users[username]) {
        document.getElementById('message').innerText = 'Username already exists';
    } else {
        users[username] = password;
        document.getElementById('message').innerText = 'Registration successful';
    }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('message').innerText = `Welcome, ${username}`;
        // Redirect or show secured content
    } else {
        document.getElementById('message').innerText = 'Invalid credentials';
    }
});
