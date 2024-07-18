var day=document.getElementById('day');
var paper=document.getElementById('paper');
var date=new Date("2023-02-08");
var today=new Date()

function ShowPaper()
{
    paper.style.visibility="visible"
}

var diffTime=Math.abs(date-today)
var diffDays=Math.ceil(diffTime / (1000 * 60 * 60 * 24));

day.innerText=diffDays;