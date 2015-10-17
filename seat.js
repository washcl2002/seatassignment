window.onload = function() {

for ( var i = 0; i<24; i++) {
    var seat = document.body.appendChild(document.createElement('div'));
    seat.className = 'available'
    seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
    seat.addEventListener("click", gotClicked);
}

function gotClicked() {
    if (seat.className === 'available')
        seat.className = 'unavailable';

}


}