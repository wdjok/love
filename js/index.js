window.onload = async function()
{
    await loading()
    ShowPaper()
}

function loading()
{
    return new Promise((resolve) =>
    {
        var day = document.getElementById('day')
        var date = new Date(2023, 1, 8) // 月份从 0 开始：1 表示 2 月
        var today = new Date()
        var diffTime = today - date
        var days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        day.innerHTML = days
        resolve()
    })
}

function ShowPaper()
{
    var wrapper = document.getElementById('wrapper')
    wrapper.style.visibility = "visible"
}