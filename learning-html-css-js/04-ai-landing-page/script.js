document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px,${y * speed * 20}px)`;
    });
});

// signin page open and close animation
const signinButton = document.getElementById('signinButton');
const signinPage = document.getElementById('signinPage');
const closeIcon = document.getElementById('closeIcon');

signinButton.addEventListener('click', () => {
    signinPage.classList.remove('close-signin-page');
    signinPage.classList.add('open-signin-page');
});

closeIcon.addEventListener('click', () => {
    signinPage.classList.remove('open-signin-page');
    signinPage.classList.add('close-signin-page');
});