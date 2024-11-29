const container = document.querySelector(".container");
const form = document.createElement("form");
const label = document.createElement("label");
label.innerText = "Введите название города, чтобы посмотреть погоду";
const btn = document.createElement("button");
const input = document.createElement("input");
form.classList.add("fetch-form");
btn.innerText = "Fetch Wheter";
form.append(label, input, btn);
container.append(form);

btn.addEventListener("click", getFetch);
async function getFetch(event) {
  event.preventDefault();
  const response = await fetch(`https://wttr.in/${input.value}`)
    .then((res) => res.text())
    .then((data) => render(data));
}
const wheter = document.createElement("div");
container.append(wheter);
function render(data) {
  wheter.innerHTML = `
      <p>${data}</p>
  `;
}
