var cloud1 = document.getElementById('cloud1');
var cloud2 = document.getElementById('cloud2');

cloud1.style.top = Math.random()*100;

setTimeout(function() {
    cloud2.className += ' fly';
    cloud2.style.top = Math.random()*135;
}, 3000);

setInterval(function () {
    cloud1.style.top = Math.random()*135;
}, 22000);

setInterval(function () {
    cloud2.style.top = Math.random()*135;
}, 25000);