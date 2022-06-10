const fetchEducation = () => {
    fetch("https://warm-fenglisu-170e31.netlify.app/education.json")
        .then(response => { 
            if (response.status != 200) {
                console.error(`Received bad status from url: ${response.status}`)
            } else {
                return response.json()
            }
        })
        .then(data => {
            document.getElementById('container').prepend(data)
        })
        .catch(error => {console.error(error)})
    // const data = await response.json()

    // data.map((link,i) => {
    //     var img = new Image();
    //     img.setAttribute("width", "400px")
    //     img.setAttribute("height", "auto")
    //     img.src = link
    //     document.getElementById('container').prepend(img)
    // })
}