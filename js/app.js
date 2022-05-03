function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let update = document.getElementById('update')
let int =getRandomInt((13)+3);
let truc = 0;
(function loop(){
    setInterval(function() {
            update.style.maxWidth= truc+'px'
            truc++
       loop();
   }, int*100);
 })();
 