const webBehavior = document.getElementById('web-page');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    webBehavior.classList.toggle('click');
});