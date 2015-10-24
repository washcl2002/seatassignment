window.onload = function() {

var customers = []
function Person(name, email, seat) {
    this.Name = name;
    this.Email = email;
    this.Seat = seat;
}
function createSeats() {
for (var x = 1; x<=6; x++) {
    var row = document.body.appendChild(document.createElement('a'));
    row.className = 'row' +x;
    row.addEventListener("hover", gotHover);
    for( var i = 1; i<=4; i++){
        var seat = document.getElementsByClassName('row'+x)[0].appendChild(document.createElement('div'));
        seat.addEventListener("click", gotClicked);
        seat.className = 'available';
        seat.id = 'row' + x + 'column' + i;
        seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
    }
}
}
createSeats();

function gotClicked() {
    if (this.className === 'available'){
        this.className = 'unavailable';
        addForm();
    }
    else{
        alert("Seat unavailable.")
    }
}
function gotHover() {
    if (this.className === "row1" || "row2") {
        this.innerHTML = "$20";
    }
    else{
        this.innerHTML = "$10";
    }

        
}

function submit(){
    var name = document.getElementsByName('name').formAction;
        console.log(name);
    var email = document.getElementsByName('email').formAction;
        console.log(email);
}

// function addSeat() {
//     var seat = document.body.appendChild(document.createElement('div'));
//     seat.addEventListener("click", gotClicked);
//     seat.className = 'available';
//     seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
// }

function addForm() {
    var form = document.body.appendChild(document.createElement('form'));
    //form.onsubmit = 'submit()';
    form.innerHTML = 'Name:<br><input type="text" name="name"><br>Email:<br><input type="text" name="email"><br><input type="submit" value="Submit">';
    // var submitButton.getElementsByType
}



}