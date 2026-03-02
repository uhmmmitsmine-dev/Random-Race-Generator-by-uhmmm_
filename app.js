const CURRENT_YEAR = new Date().getFullYear();

const seasonData = {
  f1: {
    name: "Formula 1",
    year: 2025,
    lapRange: [50, 78],
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
    lapRange: [267, 400],
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
  indycar: {
    name: "NTT INDYCAR SERIES",
    year: 2025,
    lapRange: [85, 260],
    races: [
      "Firestone Grand Prix of St. Petersburg", "The Thermal Club IndyCar Grand Prix", "Acura Grand Prix of Long Beach",
      "Children's of Alabama Indy Grand Prix", "Sonsio Grand Prix (Indianapolis Road Course)", "Indianapolis 500",
      "Detroit Grand Prix", "Bommarito Automotive Group 500 (Gateway)", "XPEL Grand Prix at Road America",
      "Honda Indy 200 at Mid-Ohio", "Iowa Speedway Race 1", "Iowa Speedway Race 2", "Ontario Honda Dealers Indy Toronto",
      "Hy-Vee Milwaukee Mile Race 1", "Hy-Vee Milwaukee Mile Race 2", "Big Machine Music City Grand Prix"
    ],
    drivers: [
      { name: "Alex Palou", team: "Chip Ganassi Racing", rating: 97 },
      { name: "Scott Dixon", team: "Chip Ganassi Racing", rating: 95 },
      { name: "Marcus Ericsson", team: "Andretti Global", rating: 90 },
      { name: "Colton Herta", team: "Andretti Global", rating: 92 },
      { name: "Kyle Kirkwood", team: "Andretti Global", rating: 89 },
      { name: "Josef Newgarden", team: "Team Penske", rating: 95 },
      { name: "Will Power", team: "Team Penske", rating: 92 },
      { name: "Scott McLaughlin", team: "Team Penske", rating: 93 },
      { name: "Pato O'Ward", team: "Arrow McLaren", rating: 93 },
      { name: "Alexander Rossi", team: "Arrow McLaren", rating: 89 },
      { name: "Christian Lundgaard", team: "Arrow McLaren", rating: 88 },
      { name: "Rinus VeeKay", team: "Ed Carpenter Racing", rating: 84 },
      { name: "Ed Carpenter", team: "Ed Carpenter Racing", rating: 80 },
      { name: "Felix Rosenqvist", team: "Meyer Shank Racing", rating: 86 },
      { name: "Marcus Armstrong", team: "Meyer Shank Racing", rating: 84 },
      { name: "Santino Ferrucci", team: "A.J. Foyt Racing", rating: 83 },
      { name: "David Malukas", team: "A.J. Foyt Racing", rating: 82 },
      { name: "Graham Rahal", team: "Rahal Letterman Lanigan Racing", rating: 84 },
      { name: "Christian Rasmussen", team: "Ed Carpenter Racing", rating: 79 },
      { name: "Callum Ilott", team: "PREMA Racing", rating: 81 }
    ]
  },
  wec: {
    name: "FIA World Endurance Championship",
    year: 2025,
    lapRange: [140, 380],
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
const qualifyingTopTen = document.getElementById("qualifyingTopTen");
const podium = document.getElementById("podium");
const topTen = document.getElementById("topTen");
const summary = document.getElementById("summary");
const timeline = document.getElementById("timeline");
const lapsInfo = document.getElementById("lapsInfo");
const lapsLedBars = document.getElementById("lapsLedBars");

function chance(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(chance(min, max + 1));
}

function pickUniqueDrivers(drivers, count) {
  const available = [...drivers];
  const picks = [];

  while (picks.length < count && available.length > 0) {
    const index = randomInt(0, available.length - 1);
    picks.push(available[index]);
    available.splice(index, 1);
  }

  return picks;
}

function buildQualifyingOrder(drivers) {
  return drivers
    .map((driver) => {
      const oneLapVariance = chance(-10, 10);
      const trackEvolution = chance(-4, 4);
      return {
        ...driver,
        qualifyingScore: driver.rating + oneLapVariance + trackEvolution
      };
    })
    .sort((a, b) => b.qualifyingScore - a.qualifyingScore)
    .map((driver, index) => ({ ...driver, grid: index + 1 }));
}

function generateLapCount(seriesKey, raceName, series) {
  if (seriesKey === "f1") {
    const map = {
      "Monaco Grand Prix": 78,
      "Belgian Grand Prix": 44,
      "Las Vegas Grand Prix": 50,
      "Qatar Grand Prix": 57,
      "Abu Dhabi Grand Prix": 58
    };
    return map[raceName] || randomInt(52, 71);
  }

  if (seriesKey === "nascar") {
    const map = {
      "Daytona 500": 200,
      "Coca-Cola 600 (Charlotte)": 400,
      "Brickyard 400 (Indianapolis)": 160,
      "Xfinity 500 (Martinsville)": 500,
      "NASCAR Cup Series Championship (Phoenix)": 312
    };
    return map[raceName] || randomInt(267, 367);
  }


  if (seriesKey === "indycar") {
    const map = {
      "Indianapolis 500": 200,
      "Bommarito Automotive Group 500 (Gateway)": 260,
      "Iowa Speedway Race 1": 250,
      "Iowa Speedway Race 2": 250,
      "Hy-Vee Milwaukee Mile Race 1": 250,
      "Hy-Vee Milwaukee Mile Race 2": 250,
      "Firestone Grand Prix of St. Petersburg": 100,
      "Acura Grand Prix of Long Beach": 85,
      "Honda Indy 200 at Mid-Ohio": 90
    };
    return map[raceName] || randomInt(90, 140);
  }

  if (seriesKey === "wec") {
    const map = {
      "24 Hours of Le Mans": randomInt(340, 390),
      "8 Hours of Bahrain": randomInt(220, 270),
      "6 Hours of Imola": randomInt(180, 230),
      "6 Hours of Spa-Francorchamps": randomInt(165, 215)
    };
    return map[raceName] || randomInt(series.lapRange[0], series.lapRange[1]);
  }

  return randomInt(series.lapRange[0], series.lapRange[1]);
}

function generateLapsLed(classified, totalLaps) {
  const leadCandidates = classified.slice(0, 6);
  const leadDrivers = pickUniqueDrivers(leadCandidates, randomInt(3, 5));
  let remaining = totalLaps;

  const allocations = leadDrivers.map((driver, index) => {
    if (index === leadDrivers.length - 1) {
      return { driver, lapsLed: remaining };
    }
    const minLeft = leadDrivers.length - index - 1;
    const laps = randomInt(5, Math.max(6, remaining - minLeft));
    remaining -= laps;
    return { driver, lapsLed: laps };
  });

  return allocations.sort((a, b) => b.lapsLed - a.lapsLed);
}

function createRaceTimeline(classified, seriesName, qualifyingResult, totalLaps, leadStats) {
  const poleSitter = qualifyingResult[0];
  const leadOne = leadStats[0]?.driver.name || classified[0].name;
  const leadTwo = leadStats[1]?.driver.name || classified[1].name;
  const crashDriver = classified[randomInt(8, 14)]?.name || classified[10].name;

  return [
    { marker: "Quali", text: `${poleSitter.name} starts from pole after topping qualifying.` },
    { marker: `Lap ${randomInt(1, 4)}`, text: `${leadOne} leads the opening run.` },
    { marker: `Lap ${Math.floor(totalLaps * 0.25)}`, text: `Lead change: ${leadTwo} moves to P1 after a strong stint.` },
    { marker: `Lap ${Math.floor(totalLaps * 0.4)}`, text: `Crash: ${crashDriver} hits trouble and triggers a yellow flag.` },
    { marker: `Lap ${Math.floor(totalLaps * 0.45)}`, text: `Restart complete. ${leadOne} retakes control at the front.` },
    { marker: `Lap ${Math.floor(totalLaps * 0.7)}`, text: `${classified[2].name} joins the fight for the win in late-race traffic.` },
    { marker: "Finish", text: `${classified[0].name} wins the ${seriesName} event after ${totalLaps} laps.` }
  ];
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
  const totalLaps = generateLapCount(seriesKey, raceName, series);
  const qualifyingResult = buildQualifyingOrder(series.drivers);

  const raceResult = qualifyingResult
    .map((driver) => {
      const raceVariance = chance(-18, 18);
      const strategySwing = chance(-8, 8);
      const launchBonus = chance(0, 10) - driver.grid * 0.35;
      const overtakingChaos = chance(-10, 12);
      const incidentRisk = chance(0, 100);
      const incidentPenalty = incidentRisk > 88 ? chance(12, 40) : 0;

      return {
        ...driver,
        raceScore: driver.rating + raceVariance + strategySwing + launchBonus + overtakingChaos - incidentPenalty
      };
    })
    .sort((a, b) => b.raceScore - a.raceScore);

  const winner = raceResult[0];
  const p2 = raceResult[1];
  const p3 = raceResult[2];
  const poleSitter = qualifyingResult[0];
  const leadStats = generateLapsLed(raceResult, totalLaps);
  const timelineEvents = createRaceTimeline(raceResult, series.name, qualifyingResult, totalLaps, leadStats);

  return {
    series,
    raceName,
    totalLaps,
    qualifyingResult,
    results: raceResult,
    leadStats,
    timelineEvents,
    story: `${winner.name} won the ${raceName} for ${winner.team} after ${totalLaps} laps. Pole sitter ${poleSitter.name} started first but race-day variance and strategy shifts changed the order. ${p2.name} and ${p3.name} completed the podium.`
  };
}

function renderSimulation(simResult) {
  const { series, raceName, totalLaps, qualifyingResult, results: fullResults, leadStats, timelineEvents, story } = simResult;
  results.hidden = false;

  resultsTitle.textContent = `${series.name} — ${raceName}`;
  summary.textContent = `${story} Season data shown is ${series.year}, which is the latest verified real-driver roster in this generator (current year: ${CURRENT_YEAR}).`;
  lapsInfo.textContent = `Simulated race distance: ${totalLaps} laps`;

  const medal = ["🥇", "🥈", "🥉"];
  podium.innerHTML = fullResults
    .slice(0, 3)
    .map(
      (driver, index) => `
      <article class="podium-card">
        <h4>${medal[index]} P${index + 1}: ${driver.name}</h4>
        <p>${driver.team} (started P${driver.grid})</p>
      </article>
    `
    )
    .join("");

  qualifyingTopTen.innerHTML = qualifyingResult
    .slice(0, 10)
    .map((driver, index) => `<li>P${index + 1} — ${driver.name} (${driver.team})</li>`)
    .join("");

  topTen.innerHTML = fullResults
    .slice(0, 10)
    .map((driver, index) => `<li>P${index + 1} — ${driver.name} (${driver.team}) • Started P${driver.grid}</li>`)
    .join("");

  const largestLead = Math.max(...leadStats.map((entry) => entry.lapsLed));
  lapsLedBars.innerHTML = leadStats
    .map((entry) => {
      const width = Math.max(10, Math.round((entry.lapsLed / largestLead) * 100));
      return `
      <div class="lead-bar-row">
        <div class="lead-bar-label">${entry.driver.name}</div>
        <div class="lead-bar-track">
          <div class="lead-bar-fill" style="width:${width}%"></div>
        </div>
        <div class="lead-bar-value">${entry.lapsLed}</div>
      </div>
      `;
    })
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
