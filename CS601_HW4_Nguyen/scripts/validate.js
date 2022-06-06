function validateForm() {
    let firstName = document.forms["infoForm"]["firstName"].value
    let lastName = document.forms["infoForm"]["lastName"].value
    let facilitator = document.forms["infoForm"]["facilitator"].value
    const lettersOnly = /^[a-zA-Z]+$/
    const currentFacilitators = ["Fazil", "Josh", "Christian"]

    // clear previous errors
    document.getElementById("error").innerHTML = ""
    document.getElementById("firstNameError").innerHTML = ""
    document.getElementById("lastNameError").innerHTML = ""
    document.getElementById("facilitatorError").innerHTML = ""

    // validate first name
    if (firstName.length < 2){
        document.getElementById("firstNameError").innerHTML = "First name must have at least 2 characters."
        return false
    }

    if(!lettersOnly.test(firstName)){
        document.getElementById("firstNameError").innerHTML = "Only alpha characters allowed."
        return false
    }

    // validate last name
    if (lastName.length < 2){
        document.getElementById("lastNameError").innerHTML = "Last name must have at least 2 characters."
        return false
    }

    if(!lettersOnly.test(lastName)){
        document.getElementById("lastNameError").innerHTML = "Only alpha characters allowed."
        return false
    }
    
    // validate facilitator - assuming not case sensitive is okay
    if (facilitator != "" && !currentFacilitators.map(f => f.toLowerCase()).includes(facilitator.toLowerCase())){
        document.getElementById("facilitatorError").innerHTML = `Only include current facilitators. ${facilitator} is not one of ${currentFacilitators.join(", ")}.`
        return false
    }

    // check for emptyness 
    if (firstName == "" || lastName == "" || facilitator == ""){
        document.getElementById("error").innerHTML = "Required fields missing! Please check your input."
        return false
    }

    return true
}