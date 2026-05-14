document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = document.querySelector('.login-btn');
  btn.textContent = 'Logging in...';
  btn.disabled = true;
  setTimeout(() => {
    window.location.href = 'awareness.html';
  }, 1500);
});
