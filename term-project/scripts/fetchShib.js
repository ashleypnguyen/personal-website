const getMoreShib = async () => {
    const response = await fetch("https://shibe.online/api/shibes?count=4")
    const data = await response.json()

    data.map((link,i) => {
        var img = new Image();
        img.setAttribute("width", "400px")
        img.setAttribute("height", "auto")
        img.src = link
        document.getElementById('shib-container').prepend(img)
    })
}