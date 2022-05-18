let header = ["#nav"];
let tags = ["#paypal", "#bank", "#card"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("#").innerHTML = html;
