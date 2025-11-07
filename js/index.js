window.addEventListener('load', function()
{
    GetDay()
    Show()
})

function GetDay()
{
    const day = document.getElementById('day')
    const date = new Date(2023, 1, 8) // 月份从 0 开始：1 表示 2 月
    const today = new Date()
    const diffTime = today - date
    // day.innerHTML = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    day.innerHTML = 999
}

function Show()
{
    const wrapper = document.getElementById('wrapper')
    wrapper.style.visibility = "visible"
}