const visits = document.querySelector(".visitor");

let milliseconds = 86400000
let today = Date.now();
let numVisits = Number(localStorage.getItem("visits"));
let lastVisit = localStorage.getItem('dateVisited');
let daysSinceVisit, difference;
 
if (numVisits !== 0) {
    localStorage.setItem("dateVisited", today);
    difference = today - lastVisit
    daysSinceVisit = Math.round(difference / milliseconds)
}
else {
    localStorage.setItem('visits', 1)
    localStorage.setItem("dateVisited", today);
    daysSinceVisit = "Welcome, this is your first visit!"

}

numVisits++

localStorage.setItem('visits', numVisits)

visits.textContent = daysBwtnVisits