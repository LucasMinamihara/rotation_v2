let field_person = document.getElementById("field-person");
let display_person = document.getElementById("display_person");

let date = new Date();
let day = date.getDay();

let card = "";

let pointer = 0;
let nextPerson = 0;

display_person.addEventListener("click", getPerson);

function getPerson() {
  card = "";

  let people = [
    {
      name: "Lucas",
      day: "Sabado",
      priv: "S",
      able: true,
      last: false,
      pos: 0,
    },
    { name: "Erik", day: "Sabado", priv: "S", able: true, last: false, pos: 1 },
    { name: "José", day: "Sabado", priv: "S", able: true, last: false, pos: 2 },
    {
      name: "Tiago Marques",
      day: "Sabado",
      priv: "S",
      able: true,
      last: false,
      pos: 3,
    },
    {
      name: "Ricardo",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 4,
    },
    {
      name: "Célio",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 5,
    },
    {
      name: "Fernando",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 6,
    },
    {
      name: "Edmilson",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 7,
    },
    {
      name: "Paulo",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 8,
    },
    {
      name: "Tiago Costa",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 9,
    },
    {
      name: "Critiano",
      day: "Sabado, Domingo",
      priv: "A",
      able: true,
      last: false,
      pos: 10,
    },
  ];

  weekends.forEach((eachDay, i) => {
    let rotate = pointer + 1 == people.length - 1;

    if (rotate) {
      people.forEach((eachPerson) => {
        eachPerson.last = false;
      });
    }
    console.log(people[i].last);

    if (!people[i].last) {
      if (i < weekends.length) {
        card += `
      <div class="card m-5" style="width: 80%">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${people[i].name}</li>
      <li class="list-group-item">${people[i].day}</li>
      <li class="list-group-item">${eachDay}</li>
      </ul>
      </div>`;

        people[i].last = true;

        pointer = i;
      }
    }
  });
  console.log(people);

  field_person.innerHTML = card;
  field_person.style.display = "block";
}

// continuar a pegar os valores apartir do objeto que tem o last como true;
// voltar para o início do array (modificando o ponteiro) quando o valor do ponteiro for maior que as posições do array
//

function getWeekendInMonth(month = date.getMonth(), year = date.getFullYear()) {
  console.log("Weekend for", new Date(year, month, 1).toString());
  return new Array(new Date(year, month + 1, 0).getDate())
    .fill()
    .map((n, i) => {
      const weekend = new Date(year, month, ++i).getDay();
      return (
        (weekend == 0 && i) ||
        (weekend == 6 && i) ||
        (weekend == 2 && i) ||
        (weekend == 1 && i)
      );
    })
    .filter((val) => !!val);
}

let weekends = getWeekendInMonth(date.getMonth(), date.getFullYear());
