const myElement = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        myElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    
    myElement.innerHTML = `
        <p>Latitude: ${latitude}</p>
        <p>Longitude: ${longitude}</p>
        <p>City: Fetch from API</p>
        <p>Country: Fetch from API</p>
    `;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            myElement.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            myElement.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            myElement.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            myElement.innerHTML = "An unknown error occurred.";
            break;
    }
}

function validateForm() {
    const form = document.getElementById("myForm");
    const ageInput = document.getElementById("age");
    const validationMessage = document.getElementById("validationMessage");

    if (!form.checkValidity()) {
        validationMessage.innerHTML = ageInput.validationMessage;
    } else {
        const age = parseInt(ageInput.value);
        if (age >= 18 && age <= 50) {     
            validationMessage.innerHTML = "Your age is valid!";
        } else {
            validationMessage.innerHTML = "Age must be between 18 and 50.";
        }
    }
}

function goBack() {
    window.history.go(-1);
}

function saveData() {
    const inputData = document.getElementById("inputData").value;
    if (inputData.trim() !== '') {
        localStorage.setItem("savedData", inputData);
        alert("Data saved to local storage.");
    } else {
        alert("Please enter some data to save.");
    }
}

function displayData() {
    const savedData = localStorage.getItem("savedData");
    if (savedData) {
        alert("Data retrieved from local storage: " + savedData);
    } else {
        alert("No data found in local storage.");
    }
}
