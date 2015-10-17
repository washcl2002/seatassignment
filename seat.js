window.onload = function() {

for ( var i = 0; i<24; i++) {
    var seat = document.body.appendChild(document.createElement('div'));
    seat.addEventListener("click", gotClicked);
    seat.className = 'available';
    seat.id = "seat" + (i+1);
    seat.innerHTML = "<img src='http://www.cliparthut.com/clip-arts/595/movie-theater-seats-clip-art-595331.png'/>"
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


// function myFunction() {
//     var person = prompt("Please enter your name", "username");
//  }

function addForm() {
    var form = document.body.appendChild(document.createElement('form'));
    form.innerHTML = 'Name:<br><input type="text" name="name"><br>Email:<br><input type="text" name="email"><input type="submit" value="Submit">';
}

}