// console.log(window.innerHeight);
// console.log(window.innerWidth);


// console.log(window.navigator);
let counter = 0;

// console.log(document.cookie);



let employee = [
    { id: 1, name: 'test1' }, { id: 2, name: 'test2' }
]

let jsonData = '{"name":"Test","age":10,"address":"India"}';

console.log(JSON.stringify(employee));


// window.alert("Welcome to skillsanta!");

var name = window.prompt("Please provide your name");

if (name === undefined) {
    window.alert("Please provide name");
}
else {
    document.cookie = "userName" + "=" + name + ";" + "expires : Fri, 30 Mat 2018 00:00:00 UTC ";

    console.log(document.cookie);

    document.getElementById("name").innerText = name;
}

let newWindow;
function openWindow() {
    newWindow = window.open('', '', 'height=200, width=200');
    newWindow.moveTo(500, 200);
}

function closeWindow() {
    if (newWindow !== undefined) {
        newWindow.close();
    }
}

function resizeWindow() {
    newWindow.resizeTo(400, 400);
    newWindow.focus();
}

function back() {
    window.history.back();
}


function forward() {
    window.history.forward();
}


function deleteRecord() {
    // var confirm = confirm("Are you sure you want to delete this record!")

    if (confirm("Are you sure you want to delete this record!")) {
        window.alert("Record deleted");
    }
}

// setTimeout(openWindow(), 10000);

let timerControl = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    if (counter >= 15) {
        clearTimeout(timerControl);
    }
}, 1000);


