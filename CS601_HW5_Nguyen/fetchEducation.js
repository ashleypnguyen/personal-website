const DEGREE_MAP = {
    "BS": "Bachelor of Science",
    "MS": "Master of Science",
    "BA": "Bachelor of Arts"
}

// Function responsible for handling JSON data to render as HTML
const renderEducationData = (eduData) => {
    const div = document.getElementById("table-content")
    const helperText = document.createElement("h4")
    helperText.className += "helper-text"
    div.appendChild(helperText)
    helperText.textContent = "Refresh to hit the button again!"

    eduData.forEach( eduObject => {
        const header = document.createElement("h2")
        div.appendChild(header)
        header.textContent = eduObject.school

        for (let [key, value] of Object.entries(eduObject)) {
            // ignore school since its in the header 
            if (key !== "school") {
                // create elements
                const details = document.createElement("p")
                details.className += "details"
                header.appendChild(details)

                // handle special case for array
                if (key == "majors") {
                    value = value.join(", ")
                }

                // friendly name degree type
                if (key == "type") {
                    value = DEGREE_MAP[value] ?? value //if degree was not accounted for in map default to original value
                }

                // format key nicely
                key = key.toUpperCase().replace("_", " ")

                // set the text in the html
                details.textContent = `${key} -- ${value}`
            }
          }
    })
}

const fetchEducation = () => {
    fetch(`/education.json`)
        .then(response => { 
            if (response.status != 200) {
                console.error(`Received bad status from url: ${response.status}`)
            } else {
                return response.json()
            }
        })
        .then(data => renderEducationData(data))
        .catch(error => {console.error(error)})
}