function getEventos() {
const url = "https://xp41-soundgarden-api.herokuapp.com/events";
  fetch(url)
    .then((response) => response.json())
    .then((data) => listarEventos(data))
    .catch(err => console.log(err));
}

function listarEventos(eventos) {
  eventos.forEach((evento, index) => {
    const tr = document.createElement("tr");
    const attractionsStr = evento.attractions.toString();
    const data = new Date(evento.scheduled).toLocaleString().slice(0,-3);
    tr.innerHTML = `<td scope="row" data-title="#">${index+4}</td>
    <td data-title="Data">${data}xx</td>
    <td data-title="Titulo">${evento.name}</td>
    <td data-title="Atrações">${attractionsStr}</td>
    <td class="no-xs-label">
        <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${evento._id}" _id="${evento._id}" id="editar-evento" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${evento._id}" _id="${evento._id}" class="btn btn-danger">excluir</a>
    </td>`;
    document.querySelector("table tbody").appendChild(tr);
  });
}

getEventos();
