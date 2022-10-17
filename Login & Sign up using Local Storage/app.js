var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");

function clearAll() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

function submitData() {
    var userData = {
        myName: userName.value,
        myEmail: userEmail.value,
        myPassword: userPassword.value
    };
    // console.log("Data: ", userData);

    // Note: Form validation...!
    if (
        (userData.myName == "") ||
        (userData.myEmail == "") ||
        (userData.myPassword == "")
    ) {
        alert('All fields are required!');
    }

    else {
        console.log(userData);
        alert("You have signed up successfully!");

        // Note: Saving data in LS DB...!

        var dataInStr = JSON.stringify(userData);
        // console.log("String format: ", dataInStr);

        localStorage.setItem("User", dataInStr);
        location = "./login.html";
        clearAll();
    };
};