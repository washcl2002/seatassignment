window.onload = function() {

for ( var i = 0; i<24; i++) {
    var seat = document.body.appendChild(document.createElement('div'));
    seat.addEventListener("click", gotClicked);
    seat.className = 'available';
    seat.id = "seat" + (i+1);
    seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
}

function gotClicked() {
    if (seat.className === 'available')
        seat.className = 'unavailable';
    else
        seat.className = 'available';
    console.log('got clicked');

}


}