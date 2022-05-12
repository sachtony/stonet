var i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}
timedCount();

var accountid = "818356f2dccbaaeaba2b09d356fc9441";
elem = document.getElementById("worker"); // Find an element 
elem.innerHTML = accountid;           // Display x in the element

var servive.worker.router = "jobsker.1010101.workers.dev";

