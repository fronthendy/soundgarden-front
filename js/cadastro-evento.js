const formulario = document.querySelector('#form');
console.log(formulario);

formulario.addEventListener('submit', (e) => {
  //Evita que a página seja atualizada após o botão de enviar ser clicado
  e.preventDefault();
  //Cria um XMLHttpRequest a partir dos dados preenchidos no <form>
  const formData = new FormData(formulario);

  const valoresFormulario = [...formData.entries()];

  //const atracoes = valoresFormulario[1][1].split(',').map(atracao => atracao.trim());

  const body = {
    name: valoresFormulario[0][1],
    poster: "N/D",
    attractions: valoresFormulario[1][1].split(',').map(atracao => atracao.trim()),
    description: valoresFormulario[2][1],
    scheduled: valoresFormulario[3][1],
    number_tickets: valoresFormulario[4][1],
  }

  console.log(body);

  fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body)
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
})