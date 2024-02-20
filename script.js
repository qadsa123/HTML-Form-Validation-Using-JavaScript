function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Username and password are required');
    } else if (password.length < 8) {
        alert('Password length must be greater than 8 characters');
    } else {
        localStorage.setItem('username', username);

        
        alert('Successfully logged in as ' + username);
    }
}
