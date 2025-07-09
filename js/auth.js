// Authentication functions
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}