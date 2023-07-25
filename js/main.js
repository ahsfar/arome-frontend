
// JavaScript to show pop-up on click
function showPopup(popupId) {
    const popup = document.querySelector(`.${popupId}`);
    popup.style.display = 'block';
}

// JavaScript to hide pop-up on click of close button
function hidePopup(popupId) {
    const popup = document.querySelector(`.${popupId}`);
    popup.style.display = 'none';
}

// JavaScript to handle click on boxes and apply the "clicked" class
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove the "clicked" class from all boxes
        boxes.forEach(otherBox => otherBox.classList.remove('clicked'));
        // Add the "clicked" class to the clicked box
        box.classList.add('clicked');
    });
});