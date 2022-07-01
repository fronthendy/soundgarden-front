const form = document.getElementById("create-event-form");
form.addEventListener('submit', criarEvento);

const url = "https://xp41-soundgarden-api.herokuapp.com/events";

function criarEvento() {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const atracoes = document.getElementById("atracoes").value.split(",");
  const descricao = document.getElementById("descricao").value;
  
  const data = document.getElementById("data").value;
  const dateObject = new Date(data);
  const isoDate = dateObject.toISOString();
  
  const lotacao = document.getElementById("lotacao").value;
  const poster = document.getElementById("poster").value;

  const evento = {
    name: nome,
    poster: poster,
    attractions: atracoes,
    description: descricao,
    scheduled: isoDate,
    number_tickets: lotacao,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(evento),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(alert("Evento criado com sucesso!"))
    .then(location.href = "admin.html")
    .catch((err) => {
      if (err === '404') {console.log("pagina não encontrada")};
    });
}
