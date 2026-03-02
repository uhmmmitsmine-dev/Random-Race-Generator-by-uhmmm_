const CURRENT_YEAR = new Date().getFullYear();

const seasonData = {
  f1: {
    name: "Formula 1",
    year: 2025,
    races: [
      "Australian Grand Prix", "Chinese Grand Prix", "Japanese Grand Prix", "Bahrain Grand Prix", "Saudi Arabian Grand Prix",
      "Miami Grand Prix", "Emilia Romagna Grand Prix", "Monaco Grand Prix", "Spanish Grand Prix", "Canadian Grand Prix",
      "Austrian Grand Prix", "British Grand Prix", "Belgian Grand Prix", "Hungarian Grand Prix", "Dutch Grand Prix",
      "Italian Grand Prix", "Azerbaijan Grand Prix", "Singapore Grand Prix", "United States Grand Prix", "Mexico City Grand Prix",
      "São Paulo Grand Prix", "Las Vegas Grand Prix", "Qatar Grand Prix", "Abu Dhabi Grand Prix"
    ],
    drivers: [
      { name: "Max Verstappen", team: "Red Bull", rating: 99 },
      { name: "Sergio Pérez", team: "Red Bull", rating: 90 },
      { name: "Lewis Hamilton", team: "Mercedes", rating: 95 },
      { name: "George Russell", team: "Mercedes", rating: 92 },
      { name: "Charles Leclerc", team: "Ferrari", rating: 96 },
      { name: "Carlos Sainz", team: "Ferrari", rating: 93 },
      { name: "Lando Norris", team: "McLaren", rating: 94 },
      { name: "Oscar Piastri", team: "McLaren", rating: 92 },
      { name: "Fernando Alonso", team: "Aston Martin", rating: 91 },
      { name: "Lance Stroll", team: "Aston Martin", rating: 82 },
      { name: "Pierre Gasly", team: "Alpine", rating: 86 },
      { name: "Esteban Ocon", team: "Alpine", rating: 86 },
      { name: "Alex Albon", team: "Williams", rating: 85 },
      { name: "Logan Sargeant", team: "Williams", rating: 77 },
      { name: "Yuki Tsunoda", team: "RB", rating: 84 },
      { name: "Daniel Ricciardo", team: "RB", rating: 84 },
      { name: "Valtteri Bottas", team: "Sauber", rating: 84 },
      { name: "Zhou Guanyu", team: "Sauber", rating: 80 },
      { name: "Nico Hülkenberg", team: "Haas", rating: 82 },
      { name: "Kevin Magnussen", team: "Haas", rating: 81 }
    ]
  },
  nascar: {
    name: "NASCAR Cup Series",
    year: 2025,
    races: [
      "Daytona 500", "Ambetter Health 400 (Atlanta)", "Pennzoil 400 (Las Vegas)", "Shriners Children's 500 (Phoenix)",
      "Food City 500 (Bristol)", "Toyota Owners 400 (Richmond)", "GEICO 500 (Talladega)", "AdventHealth 400 (Kansas)",
      "Coca-Cola 600 (Charlotte)", "Enjoy Illinois 300 (Gateway)", "The Great American Getaway 400 (Pocono)",
      "Brickyard 400 (Indianapolis)", "Cook Out Southern 500 (Darlington)", "Bass Pro Shops Night Race (Bristol)",
      "Hollywood Casino 400 (Kansas)", "South Point 400 (Las Vegas)", "Xfinity 500 (Martinsville)", "NASCAR Cup Series Championship (Phoenix)"
    ],
    drivers: [
      { name: "Kyle Larson", team: "Hendrick Motorsports", rating: 96 },
      { name: "William Byron", team: "Hendrick Motorsports", rating: 94 },
      { name: "Chase Elliott", team: "Hendrick Motorsports", rating: 93 },
      { name: "Alex Bowman", team: "Hendrick Motorsports", rating: 88 },
      { name: "Denny Hamlin", team: "Joe Gibbs Racing", rating: 94 },
      { name: "Christopher Bell", team: "Joe Gibbs Racing", rating: 93 },
      { name: "Martin Truex Jr.", team: "Joe Gibbs Racing", rating: 91 },
      { name: "Ty Gibbs", team: "Joe Gibbs Racing", rating: 86 },
      { name: "Ryan Blaney", team: "Team Penske", rating: 92 },
      { name: "Joey Logano", team: "Team Penske", rating: 91 },
      { name: "Austin Cindric", team: "Team Penske", rating: 84 },
      { name: "Ross Chastain", team: "Trackhouse Racing", rating: 90 },
      { name: "Daniel Suárez", team: "Trackhouse Racing", rating: 85 },
      { name: "Tyler Reddick", team: "23XI Racing", rating: 92 },
      { name: "Bubba Wallace", team: "23XI Racing", rating: 87 },
      { name: "Brad Keselowski", team: "RFK Racing", rating: 88 },
      { name: "Chris Buescher", team: "RFK Racing", rating: 89 },
      { name: "Chase Briscoe", team: "Stewart-Haas Racing", rating: 84 },
      { name: "Kyle Busch", team: "Richard Childress Racing", rating: 90 },
      { name: "Austin Dillon", team: "Richard Childress Racing", rating: 80 }
    ]
  },
  wec: {
    name: "FIA World Endurance Championship",
    year: 2025,
    races: [
      "Qatar 1812km", "6 Hours of Imola", "6 Hours of Spa-Francorchamps", "24 Hours of Le Mans",
      "6 Hours of São Paulo", "Lone Star Le Mans (COTA)", "6 Hours of Fuji", "8 Hours of Bahrain"
    ],
    drivers: [
      { name: "Sébastien Buemi", team: "Toyota", rating: 94 },
      { name: "Brendon Hartley", team: "Toyota", rating: 93 },
      { name: "Ryo Hirakawa", team: "Toyota", rating: 89 },
      { name: "Mike Conway", team: "Toyota", rating: 91 },
      { name: "Kamui Kobayashi", team: "Toyota", rating: 92 },
      { name: "Nyck de Vries", team: "Toyota", rating: 88 },
      { name: "Kévin Estre", team: "Porsche", rating: 92 },
      { name: "André Lotterer", team: "Porsche", rating: 90 },
      { name: "Laurens Vanthoor", team: "Porsche", rating: 90 },
      { name: "Matt Campbell", team: "Porsche", rating: 89 },
      { name: "Mick Schumacher", team: "Alpine", rating: 84 },
      { name: "Nicolas Lapierre", team: "Alpine", rating: 86 },
      { name: "Ferdinand Habsburg", team: "Alpine", rating: 82 },
      { name: "James Calado", team: "Ferrari", rating: 89 },
      { name: "Antonio Giovinazzi", team: "Ferrari", rating: 88 },
      { name: "Alessandro Pier Guidi", team: "Ferrari", rating: 90 },
      { name: "Robin Frijns", team: "BMW", rating: 87 },
      { name: "René Rast", team: "BMW", rating: 88 },
      { name: "Dries Vanthoor", team: "BMW", rating: 86 },
      { name: "Jenson Button", team: "Jota", rating: 85 }
    ]
  }
};

const seriesSelect = document.getElementById("seriesSelect");
const raceSelect = document.getElementById("raceSelect");
const simulateBtn = document.getElementById("simulateBtn");
const results = document.getElementById("results");
const resultsTitle = document.getElementById("resultsTitle");
const podium = document.getElementById("podium");
const topTen = document.getElementById("topTen");
const summary = document.getElementById("summary");
const timeline = document.getElementById("timeline");

function chance(min, max) {
  return Math.random() * (max - min) + min;
}

function pickUniqueDrivers(drivers, count) {
  const available = [...drivers];
  const picks = [];

  while (picks.length < count && available.length > 0) {
    const index = Math.floor(chance(0, available.length));
    picks.push(available[index]);
    available.splice(index, 1);
  }

  return picks;
}

function createRaceTimeline(classified, seriesName) {
  const leaderPool = classified.slice(0, 5);
  const midfieldPool = classified.slice(5, 15);

  const leadChanges = pickUniqueDrivers(leaderPool, 3);
  const incidents = pickUniqueDrivers(midfieldPool, 2);
  const fastestLapDriver = classified[Math.floor(chance(0, Math.min(10, classified.length)))];

  const timelineEvents = [
    { marker: "Start", text: `${classified[0].name} launches cleanly and leads into the opening phase.` },
    { marker: "Lap 8", text: `Lead change: ${leadChanges[0]?.name || classified[1].name} takes P1 after a strong attack.` },
    { marker: "Lap 16", text: `Crash: ${incidents[0]?.name || classified[10].name} hits trouble, bringing out a yellow flag.` },
    { marker: "Lap 18", text: `Yellow flag period slows the field while marshals clear debris.` },
    { marker: "Lap 26", text: `Restart complete. ${leadChanges[1]?.name || classified[2].name} moves to the front in heavy traffic.` },
    { marker: "Lap 34", text: `${fastestLapDriver.name} sets the fastest lap of the race with a late push.` },
    { marker: "Lap 42", text: `Second incident: ${incidents[1]?.name || classified[12].name} spins, but racing stays green.` },
    { marker: "Finish", text: `${classified[0].name} secures victory in the ${seriesName} event.` }
  ];

  return timelineEvents;
}

function populateSeries() {
  const options = Object.entries(seasonData)
    .map(([key, value]) => `<option value="${key}">${value.name}</option>`)
    .join("");
  seriesSelect.innerHTML = options;
  populateRaces();
}

function populateRaces() {
  const selected = seasonData[seriesSelect.value];
  raceSelect.innerHTML = selected.races
    .map((race) => `<option value="${race}">${race}</option>`)
    .join("");
}

function runSimulation(seriesKey, raceName) {
  const series = seasonData[seriesKey];

  const classified = series.drivers
    .map((driver) => {
      const formBoost = chance(-6, 7);
      const incidentRisk = chance(0, 100);
      const incidentPenalty = incidentRisk > 92 ? chance(18, 45) : 0;
      const pace = driver.rating + formBoost - incidentPenalty;

      return {
        ...driver,
        pace
      };
    })
    .sort((a, b) => b.pace - a.pace);

  const winner = classified[0];
  const p2 = classified[1];
  const p3 = classified[2];
  const timelineEvents = createRaceTimeline(classified, series.name);

  return {
    series,
    raceName,
    results: classified,
    timelineEvents,
    story: `${winner.name} delivered a strong run in the ${raceName}, taking victory for ${winner.team}. ${p2.name} and ${p3.name} completed the podium after a competitive race with multiple position changes throughout the field.`
  };
}

function renderSimulation(simResult) {
  const { series, raceName, results: fullResults, timelineEvents, story } = simResult;
  results.hidden = false;

  resultsTitle.textContent = `${series.name} — ${raceName}`;
  summary.textContent = `${story} Season data shown is ${series.year}, which is the latest verified real-driver roster in this generator (current year: ${CURRENT_YEAR}).`;

  const medal = ["🥇", "🥈", "🥉"];
  podium.innerHTML = fullResults
    .slice(0, 3)
    .map(
      (driver, index) => `
      <article class="podium-card">
        <h4>${medal[index]} P${index + 1}: ${driver.name}</h4>
        <p>${driver.team}</p>
      </article>
    `
    )
    .join("");

  topTen.innerHTML = fullResults
    .slice(0, 10)
    .map((driver, index) => `<li>P${index + 1} — ${driver.name} (${driver.team})</li>`)
    .join("");

  timeline.innerHTML = timelineEvents
    .map(
      (event) => `
      <li class="timeline-item">
        <span class="timeline-marker">${event.marker}</span>
        <span>${event.text}</span>
      </li>
    `
    )
    .join("");
}

seriesSelect.addEventListener("change", populateRaces);
simulateBtn.addEventListener("click", () => {
  const simResult = runSimulation(seriesSelect.value, raceSelect.value);
  renderSimulation(simResult);
});

populateSeries();
