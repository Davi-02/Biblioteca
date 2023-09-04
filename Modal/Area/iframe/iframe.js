const btn = document.querySelector('#btn1');
const container1 = document.querySelector('.container1');

btn.addEventListener('click', function() {
    if (container1.styler.display === 'flex') {
        container1.styler.display = 'none';
    } else {
        container1.styler.display = 'flex';
    }
});