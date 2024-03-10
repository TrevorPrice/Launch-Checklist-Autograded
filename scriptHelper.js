// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if ((isNaN(Number(testInput)))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    };
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
    
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter a valid input.");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        list.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "red";
    } else if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        list.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "red";
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        console.log(response);
        return response.json();
     });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    planet = planets[Math.floor(Math.random()*planets.length)];
    //Get random number and get planet with that index
    return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;