const mockData = [
    {
        "school": "University of Virginia",
        "program": "College of Arts & Sciences",
        "majors": ["Computer Science", "Cognitive Science"],
        "type": "BA",
        "year_conferred": "2017"
    }, 
    {
        "school": "Boston University",
        "program": "Metropolitan College",
        "majors": ["Software Development"],
        "type": "MS",
        "year_conferred": "2023"
    }
]

// Function responsible for handling JSON data to render as HTML
const renderEducationData = (eduData) => {
    const div = document.getElementById("table-content")

    eduData.forEach( eduObject => {
        const header = document.createElement("h2")
        div.appendChild(header)
        header.textContent = eduObject.school

        for (let [key, value] of Object.entries(eduObject)) {
            // create elements
            const details = document.createElement("p")
            details.className += "details"
            header.appendChild(details)

            // handle special case for array
            if (key == "majors") {
                value = value.join(", ")
            }

            // format key nicely
            key = key.toUpperCase().replace("_", " ")

            // set the text in the html
            details.textContent = `${key} -- ${value}`
          }
    })
}

const fetchEducation = () => {
    fetch("https://warm-fenglisu-170e31.netlify.app/education.json")
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