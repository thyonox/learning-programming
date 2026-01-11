const container = document.getElementById('container');
const loginBtn = document.getElementById('loginBtn');
const register = document.getElementById('registerBtn');

register.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})