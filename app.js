const modalButton = document.querySelector('.modal-button');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close-button');

modalButton.addEventListener('click', displayOverlay);
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal');
})

function displayOverlay() {
    if (!modalOverlay.classList.contains('open-modal')) {
        modalOverlay.classList.add('open-modal');
    }
}