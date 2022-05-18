function NavHeader() {
    let header = ["#pay"];
    let tags = ["#paypal", "#bank", "#card"];

    let html = `${header}<ul>`;

    for (const x of tags) {
      html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    document.getElementById("#").innerHTML = html;
};

function myPrice() {
    let price = 10;
    let VAT = 0.25;
    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

    document.getElementById("#").innerHTML = total;
};

function getBalance() {
    let x = 0.51;
    let amount = 5000.00;
    let getX = `${(x + amount).toFixed(2)}`;

    document.getElementById("#").innerHTML = getX;
}
