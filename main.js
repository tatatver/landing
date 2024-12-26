function correctDate(date) {
  return date < 10 ? "0" + date : date;
}

function saleDate(containerId) {
    const container = document.getElementById(containerId);
    const times = container.getElementsByClassName("time");
  
    const finishDate = new Date(2024, 11, 31);
    const currentDate = new Date();
    const date = finishDate - currentDate;
  
      times[0].innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
      times[1].innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      times[2].innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
      times[3].innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));

  }


setInterval(function () {  /*вызов функции каждую секунду*/ 
  saleDate("timerFirst");
  saleDate("timerSecond");
}, 1000);

startTimes();


