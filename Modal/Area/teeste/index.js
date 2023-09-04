const btn = document.querySelector('#btn1');
const form = document.querySelector('.container');

btn.addEventListener('click', function() {
    
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
});