var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("time");

// get current time
var time = moment();

// display current time in dddd/mmmm, am or pm
$(currentDay).text(moment(time).format("dddd, MMMM Do h:mm:ss a"));

// save in localStorage
//9
function saveNineam() {
    var nineam = document.getElementById("nineam").value;
    localStorage.setItem("hourNineam", nineam);
}
//10
function saveTenam() {
    var tenam = document.getElementById("tenam").value;
    localStorage.setItem("hourTenam", tenam);
}
//11
function saveElevenam() {
    var elevenam = document.getElementById("elevenam").value;
    localStorage.setItem("hourElevenam", elevenam);
}
//12
function saveNoon() {
    var noon = document.getElementById("noon").value;
    localStorage.setItem("hourNoon", noon);
}
//1
function saveOnepm() {
    var onepm = document.getElementById("onepm").value;
    localStorage.setItem("hourOnepm", onepm);
}
//2
function saveTwopm() {
    var twopm = document.getElementById("twopm").value;
    localStorage.setItem("hourTwopm", twopm);
}
//3
function saveThreepm() {
    var threepm = document.getElementById("threepm").value;
    localStorage.setItem("hourThreepm", threepm);
}
//4
function saveFourpm() {
    var fourpm = document.getElementById("fourpm").value;
    localStorage.setItem("hourFourpm", fourpm);
}
//5
function saveFivepm() {
    var fivepm = document.getElementById("fivepm").value;
    localStorage.setItem("hourFivepm", fivepm);
}

// now make function to recall stuff from localstorage

//9am
function getNineam(){
    var returnNineam = localstorage.getItem("hourNineam");

    document.getElementById('nineam').value=returnNineam;

    var nineamChange = document.getElementById('nineam')

    var time = moment().set("hour", 9);
        if(moment().isBefore(time)) {
            $(nineamChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(nineamChange).addClass("present");
        }
        else {
            $(nineamChange).addClass("past")
        }
}

//10am
function getTenam(){
    var returnTenam = localstorage.getItem("hourTenam");

    document.getElementById('tenam').value=returnTenam;

    var tenamChange = document.getElementById('tenam')

    var time = moment().set("hour", 10);
        if(moment().isBefore(time)) {
            $(tenamChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(tenamChange).addClass("present");
        }
        else {
            $(tenamChange).addClass("past")
        }
}

//11am
function getElevenam(){
    var returnElevenam = localstorage.getItem("hourElevenam");

    document.getElementById('Elevenam').value=returnElevenam;

    var elevenamChange = document.getElementById('elevenam')

    var time = moment().set("hour", 11);
        if(moment().isBefore(time)) {
            $(elevenamChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(elevenamChange).addClass("present");
        }
        else {
            $(elevenamChange).addClass("past")
        }
}

//12 NOON
function getNoon(){
    var returnNoon = localstorage.getItem("hourNoon");

    document.getElementById('noon').value=returnNoon;

    var noonChange = document.getElementById('noon')

    var time = moment().set("hour", 12);
        if(moment().isBefore(time)) {
            $(noonChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(noonChange).addClass("present");
        }
        else {
            $(noonChange).addClass("past")
        }
}

//1pm
function getOnepm(){
    var returnOnepm = localstorage.getItem("hourOnepm");

    document.getElementById('onepm').value=returnOnepm;

    var onepmChange = document.getElementById('onepm')

    var time = moment().set("hour", 13);
        if(moment().isBefore(time)) {
            $(onepmChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(onepmChange).addClass("present");
        }
        else {
            $(onepmChange).addClass("past")
        }
}

//2pm
function getTwopm(){
    var returnTwopm = localstorage.getItem("hourTwopm");

    document.getElementById('twopm').value=returnTwopm;

    var twopmChange = document.getElementById('twopm')

    var time = moment().set("hour", 14);
        if(moment().isBefore(time)) {
            $(twopmChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(twopmChange).addClass("present");
        }
        else {
            $(twopmChange).addClass("past")
        }
}

//3pm
function getThreepm(){
    var returnThreepm = localstorage.getItem("hourThreepm");

    document.getElementById('threepm').value=returnThreepm;

    var threepmChange = document.getElementById('threepm')

    var time = moment().set("hour", 15);
        if(moment().isBefore(time)) {
            $(threepmChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(threepmChange).addClass("present");
        }
        else {
            $(threepmChange).addClass("past")
        }
}

//4pm
function getFourpm(){
    var returnFourpm = localstorage.getItem("hourFourpm");

    document.getElementById('fourpm').value=returnFourpm;

    var fourpmChange = document.getElementById('fourpm')

    var time = moment().set("hour", 16);
        if(moment().isBefore(time)) {
            $(fourpmChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(fourpmChange).addClass("present");
        }
        else {
            $(fourpmChange).addClass("past")
        }
}

//5pm
function getFivepm(){
    var returnFivepm = localstorage.getItem("hourFivepm");

    document.getElementById('fivepm').value=returnFivepm;

    var fivepmChange = document.getElementById('fivepm')

    var time = moment().set("hour", 17);
        if(moment().isBefore(time)) {
            $(fivepmChange).addClass("future");
        }
        else if(moment().isBefore(time)) {
            $(fivepmChange).addClass("present");
        }
        else {
            $(fivepmChange).addClass("past")
        }
}

// show in localStorage

getNineam();
getTenam();
getElevenam();
getNoon();
getOnepm();
getTwopm();
getThreepm();
getFourpm();
getFivepm();


