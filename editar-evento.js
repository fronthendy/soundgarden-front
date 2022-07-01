const form = document.getElementById("edit-event-form");
form.addEventListener("submit", alterarEvento);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const url = "https://xp41-soundgarden-api.herokuapp.com/events/" + id;

function getEvento() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => completarCampos(json));
}

function completarCampos(json) {
  document.getElementById("nome").value = json.name;
  document.getElementById("banner").value = json.poster;
  document.getElementById("atracoes").value = json.attractions.toString();
  document.getElementById("descricao").value = json.description;
  document.getElementById("data").value = json.scheduled.slice(0, -8);
  document.getElementById("lotacao").value = json.number_tickets;
}

function alterarEvento() {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const atracoes = document.getElementById("atracoes").value.split(",");
  const descricao = document.getElementById("descricao").value;
  const data = document.getElementById("data").value;
  const dateObject = new Date(data);
  const isoDate = dateObject.toISOString();
  const lotacao = document.getElementById("lotacao").value;

  const evento = {
    name: nome,
    poster: "link",
    attractions: atracoes,
    description: descricao,
    scheduled: isoDate,
    number_tickets: lotacao,
  };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(evento),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(alert("Evento editado com sucesso!"))
    .then((location.href = "admin.html"))
    .catch((err) => {
      if (err === "404") {
        console.log("pagina não encontrada");
      }
    });
}

getEvento();
