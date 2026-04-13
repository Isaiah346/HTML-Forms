console.log("Script Started");

function processForm(event) {
    console.log("click");
    event.preventDefault();
    

    // Get name input element 
    let fNameInput = document.getElementById("firstname")
    let firstName = fNameInput.value;
    HTMLFormControlsCollection.log(firstName);

}