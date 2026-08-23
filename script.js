

(function () {
  // Função para verificar seleção de alimentos
  function verificarSelecaoAlimentos(event) {
    const checkboxes = document.querySelectorAll('input[name="alimentos"]:checked');

    if (checkboxes.length === 0) {
      alert("Por favor, selecione ao menos um alimento antes de continuar!");
      event.preventDefault(); // Impede a ação padrão do botão
    }
  }

  // Adiciona o listener ao botão "Escolher bebidas"
  const botaoEscolherPratos = document.getElementById("escolherPratos");
  if (botaoEscolherPratos) {
    botaoEscolherPratos.addEventListener("click", verificarSelecaoAlimentos);
  }
})();






// Mostrar o botão ao rolar a página
window.onscroll = function () {
  var botao = document.getElementById("voltarTopo");
  if (window.scrollY > 100) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
};

// Função para rolar até o topo
document.getElementById("voltarTopo").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};










function sendFeedback(option) {
  const resultElement = document.getElementById('feedback-result');
  resultElement.textContent = `Obrigado pelo feedback!`;
}

const calendarGrid = document.getElementById("calendar-grid");
const timeSelector = document.getElementById("time-selector");
const timeSlotsContainer = document.getElementById("time-slots");
const selectedTimesList = document.getElementById("selected-times-list");
const selectedSlots = {};

const months = [
  { name: "Janeiro", days: 31 },
  { name: "Fevereiro", days: 28 },
  { name: "Março", days: 31 },
  { name: "Abril", days: 30 },
  { name: "Maio", days: 31 },
  { name: "Junho", days: 30 },
  { name: "Julho", days: 31 },
  { name: "Agosto", days: 31 },
  { name: "Setembro", days: 30 },
  { name: "Outubro", days: 31 },
  { name: "Novembro", days: 30 },
  { name: "Dezembro", days: 31 },
];

const times = [ "12:00", "18:00"];

function createCalendar() {
  months.forEach((month, monthIndex) => {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";
    monthDiv.style.backgroundColor = getColorForMonth(monthIndex);

    const monthHeader = document.createElement("h3");
    monthHeader.innerText = month.name;
    monthDiv.appendChild(monthHeader);

    const daysGrid = document.createElement("div");
    daysGrid.className = "days-grid";

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
    weekDays.forEach((day) => {
      const dayHeader = document.createElement("div");
      dayHeader.className = "day-header";
      dayHeader.innerText = day;
      daysGrid.appendChild(dayHeader);
    });

    const firstDayOfWeek = new Date(2024, monthIndex, 1).getDay();

    for (let emptyDay = 0; emptyDay < firstDayOfWeek; emptyDay++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.className = "day empty";
      daysGrid.appendChild(emptyDiv);
    }

    for (let day = 1; day <= month.days; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.className = "day";
      dayDiv.innerText = day;
      dayDiv.addEventListener("click", () =>
        openTimeSelector(monthIndex, day)
      );
      daysGrid.appendChild(dayDiv);

      const dateKey = `${monthIndex + 1}-${day}`;
      selectedSlots[dateKey] = [];
    }

    monthDiv.appendChild(daysGrid);
    calendarGrid.appendChild(monthDiv);
  });
}

function getColorForMonth(monthIndex) {
  const colors = [
    "#F2B705",
    "#BF0B0B",
    "#F2B705",
    "#BF0B0B",
    "#F2B705",
    "#BF0B0B",
    "#F2B705",
    "#BF0B0B",
    "#F2B705",
    "#BF0B0B",
    "#F2B705",
    "#BF0B0B",
  ];
  return colors[monthIndex];
}

function openTimeSelector(monthIndex, day) {
  const dateKey = `${monthIndex + 1}-${day}`;
  timeSelector.style.display = "block";
  timeSelector.dataset.dateKey = dateKey;

  timeSlotsContainer.innerHTML = "";
  times.forEach((time) => {
    const timeSlot = document.createElement("div");
    timeSlot.className = `time-slot ${
      selectedSlots[dateKey].includes(time) ? "selected" : ""
    }`;
    timeSlot.innerText = time;
    timeSlot.addEventListener("click", () =>
      toggleTimeSlot(dateKey, time, timeSlot, monthIndex, day)
    );
    timeSlotsContainer.appendChild(timeSlot);
  });
}

function toggleTimeSlot(dateKey, time, element, monthIndex, day) {
  const timeSlots = selectedSlots[dateKey];
  const index = timeSlots.indexOf(time);

  if (index === -1) {
    timeSlots.push(time);
    element.classList.add("selected");
  } else {
    timeSlots.splice(index, 1);
    element.classList.remove("selected");
  }

  displaySelectedTimes();
}

function closeTimeSelector() {
  timeSelector.style.display = "none";
}

function displaySelectedTimes() {
  selectedTimesList.innerHTML = "";

  let dayCount = 0;
  let totalTimes = 0;

  for (const dateKey in selectedSlots) {
    const [monthIndex, day] = dateKey.split("-").map(Number);
    const monthName = months[monthIndex - 1].name;
    const times = selectedSlots[dateKey];

    if (times.length > 0) {
      dayCount++;
      totalTimes += times.length;

      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${day} de ${monthName}:</strong>`;

      selectedTimesList.appendChild(listItem);

      times.forEach((time) => {
        const timeItem = document.createElement("li");
        timeItem.style.marginLeft = "20px";
        timeItem.innerText = time;
        selectedTimesList.appendChild(timeItem);
      });
    }
  }

  if (dayCount > 1 || totalTimes >= 4) {
    const lineBreak = document.createElement("br");
    selectedTimesList.appendChild(lineBreak);
  }
}

createCalendar();




document.getElementById("escolherPratos").addEventListener("click", function(event) {
  const checkboxes = document.querySelectorAll('input[name="alimentos"]:checked');
  
  if (checkboxes.length === 0) {
      alert("Por favor, selecione ao menos uma opção antes de continuar!");
      event.preventDefault(); // Impede a ação padrão do botão
  }
});



function checkSelection() {
  // Verifica se algum plano foi selecionado
  const selectedPlan = document.querySelector('input[name="plano"]:checked');
  if (selectedPlan) {
      window.location.href = "calendario.html"; // Redireciona para a página calendario.html
  } else {
      alert("Por favor, escolha um plano antes de continuar.");
  }
}

function checkSelection2() {
  // Verifica se algum plano foi selecionado
  const selectedPlan = document.querySelector('input[name="plano"]:checked');
  if (selectedPlan) {
      window.location.href = "calendario_fit.html"; // Redireciona para a página calendario.html
  } else {
      alert("Por favor, escolha um plano antes de continuar.");
  }
}

