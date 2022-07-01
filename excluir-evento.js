const form = document.getElementById("delete-event-form");
form.addEventListener("submit", deletarEvento);

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
  document.getElementById("data").value = json.scheduled;
  document.getElementById("lotacao").value = json.number_tickets;
}

function deletarEvento() {
  event.preventDefault();

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(alert("Evento deletado com sucesso!"))
    .then((location.href = "admin.html"))
    .catch((err) => {
      if (err === "404") {
        console.log("pagina não encontrada");
      }
    });
}

getEvento();
