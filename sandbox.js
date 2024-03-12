function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}
console.log(validateInput("Trevor"));
console.log(validateInput("Morgan"));
console.log(validateInput(10000));
console.log(validateInput(500));

//below is formSubmission passing 5 tests. Re-writing code in scriptHelper.js

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  const launchStatus = document.getElementById("launchStatus");
  const faultyItems = document.getElementById("faultyItems");

  //Check that all fields are filled
  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    window.alert("All fields are required.");
    //make sure to add valid information for each field
  } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    window.alert("Please enter a valid name for the pilot and co-pilot.");
  } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    window.alert("Please enter a valid number for the fuel level and cargo level.");
    //update pilot and co-pilot status
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }
  if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    // cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = "red";
  } else if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = "red";
  } else if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
  } else if (Number(fuelLevel) > 10000 && Number(cargoLevel) < 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = "green";
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
  }
}