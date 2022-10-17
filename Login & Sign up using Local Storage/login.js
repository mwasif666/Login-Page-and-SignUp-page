var email = document.getElementById("email");
var password = document.getElementById("password");

// Note: Fetching data from LS DB...!
var fetchData = localStorage.getItem("User");
var dataInJSON = JSON.parse(fetchData);
// console.log("Data In JSON: ", dataInJSON);


function clearAll() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

function submitData() {
    var userData = {
        userEmail: email.value,
        userPassword: password.value
    };
    // console.log("Data: ", userData);

    if (
        (userData.userEmail == dataInJSON.myEmail) &&
        (userData.userPassword == dataInJSON.myPassword)
    ) {
        alert("You have logged in successfully!");
        // console.log("Data: ", userData);
        location = "https://www.google.com.pk/";
        clearAll();
    }

    else {
        alert("Error\nData Not Matched 😢");
    };
};
