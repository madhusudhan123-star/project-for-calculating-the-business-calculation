function for8rupess() {
  const chapati = document.getElementById("chapity").value;
  const curry = document.getElementById("curry").value;
  const customer = document.getElementById("customername").value;
  const chapati_total = chapati * 8;
  var total = +chapati_total + +curry;
  var total = customer + " " + total;
  var ul = document.getElementById("result");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(total));
  ul.appendChild(li);
  li.onclick = taggil;
  total.value = "";
  button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  button.classList.add("delete");
  li.appendChild(button);
  button.onclick = deleteli;
}

function for6rupess() {
  const chapati = document.getElementById("chapity").value;
  const curry = document.getElementById("curry").value;
  const customer = document.getElementById("customername").value;
  const chapati_total = chapati * 6;
  var total = +chapati_total + +curry;
  var total = customer + " " + total;
  var ul = document.getElementById("result");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(total));
  ul.appendChild(li);
  li.onclick = taggil;
  total.value = "";
  button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  button.classList.add("delete");
  li.appendChild(button);
  button.onclick = deleteli;
}

function taggil(event) {
  var finished = this.classList.toggle("done");
}

function deleteli(evt) {
  evt.target.parentNode.remove();
}

const rupess8 = document.getElementById("rupess8");
const rupess6 = document.getElementById("rupess6");
rupess6.addEventListener("click", for6rupess);
rupess8.addEventListener("click", for8rupess);
