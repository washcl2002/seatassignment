window.onload = function() {

var Rows = [1,2,3,4,5,6];

for (var x = 1; x<=6; x++) {
    var row = document.body.appendChild(document.createElement('a'));
    row.className = 'row' +x;
    for( var i = 0; i<4; i++){
        var seat = document.getElementsByClassName('row'+x)[0].appendChild(document.createElement('div'));
        seat.addEventListener("click", gotClicked);
        seat.className = 'available';
        seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
    }
}

function gotClicked() {
    // myFunction();
    addForm();
    if (this.className === 'available')
        this.className = 'unavailable';
    else
        this.className = 'available';
    // console.log('got clicked');


}

function addSeat() {
    var seat = document.body.appendChild(document.createElement('div'));
    seat.addEventListener("click", gotClicked);
    seat.className = 'available';
    seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
}

function addForm() {
    var form = document.body.appendChild(document.createElement('form'));
    form.innerHTML = 'Name:<br><input type="text" name="name"><br>Email:<br><input type="text" name="email"><input type="submit" value="Submit">';
}

}