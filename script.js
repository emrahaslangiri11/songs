document.addEventListener('DOMContentLoaded', () => {
    const eleganceButton = document.getElementById('eleganceButton');
    let isGraceful = false;

    eleganceButton.addEventListener('click', () => {
        if (!isGraceful) {
            eleganceButton.classList.add('graceful-transition');
            eleganceButton.textContent = 'Stop Grace';
            isGraceful = true;
        } else {
            eleganceButton.classList.remove('graceful-transition');
            eleganceButton.textContent = 'Graceful Effect';
            isGraceful = false;
        }
    });
});