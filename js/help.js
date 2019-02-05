var exitButtonDOM = document.querySelector('.btn-exit-help');
var helpButtonDOM = document.querySelector('.btn-help');
var helpBoxDOM = document.querySelector('.help-box');

helpButtonDOM.addEventListener('click', function() {
    helpBoxDOM.style.display = 'block';
});

exitButtonDOM.addEventListener('click', function() {
    helpBoxDOM.style.display = 'none';
});