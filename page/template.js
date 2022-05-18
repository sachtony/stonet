let header = ["#pay"];
let tags = ["#paypal", "#bank", "#card"];

let html = `${header}<ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("#").innerHTML = html;
