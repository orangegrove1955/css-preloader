window.addEventListener('load', () => {
    setTimeout(() => {
        const preload = document.querySelector('.preload');
        preload.classList.add('preload-finished');
        const plane = document.querySelector('.plane');
        plane.classList.add('plane-finished');
    }, 5000);
});