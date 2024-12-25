document.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.slide-up');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < window.innerHeight - 150) {
            card.classList.add('fade-in');
        }
    });
});
