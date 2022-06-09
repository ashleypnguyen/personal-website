const renderShib = async () => {
    const response = await fetch("http://shibe.online/api/shibes?count=50")
    const data = await response.json()
 
    var container = document.getElementById("body");

    data.map(link => {
        var img = new Image();
        img.setAttribute("width", "400px")
        img.setAttribute("height", "auto")
        img.setAttribute("opacity", "0.6")
        img.src = link
        container.appendChild(img); 
    })
}

// renderShib()

const getMoreShib = async () => {
    const response = await fetch("http://shibe.online/api/shibes?count=3")
    const data = await response.json()

    data.map((link,i) => {
        var img = new Image();
        img.setAttribute("width", "400px")
        img.setAttribute("height", "auto")
        img.src = link
        document.getElementById('container').prepend(img)
    })



}