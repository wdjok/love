window.onload = async function()
{
    await Promise.all([loadFont('hand', '../fonts/Papernotes.ttf'), loading()])
    ShowPaper()
}

function loadFont(name, url)
{
    return new Promise((resolve) =>
    {
        const font = new FontFace(name, `url(${url})`)
        font.load().then((loadedFont) =>
        {
            document.fonts.add(loadedFont)
            resolve()
        })
    })
}

function loading()
{
    return new Promise((resolve) =>
    {
        var day = document.getElementById('day')
        var date = new Date("2023-02-08")
        var today = new Date()
        var diffTime = Math.abs(date - today)
        day.innerHTML = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        resolve()
    })
}

function ShowPaper()
{
    var wrapper = document.getElementById('wrapper')
    wrapper.style.visibility = "visible"
}