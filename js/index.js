var day=document.getElementById('day');
var date=new Date("2023-02-08");
var today=new Date()

var diffTime=Math.abs(date-today)
var diffDays=Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// day.innerText=diffDays;
day.innerText='521';