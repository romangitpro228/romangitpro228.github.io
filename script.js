let clickCount = 0;

document.getElementById('click-button').addEventListener('click', function() {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
});
