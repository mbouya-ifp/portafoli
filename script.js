const grid = document.getElementById('grid');

const htmlProjects = [
  "AE01_02_horari",
  "AEA1_01_hola",
  "AEA1_03_Pel.lys",
  "AEA2_01_feedly",
  "AEA2_02_float",
  "AEA2_03_weblog",
  "AEA2_04_watchmen",
  "AEA2_05_dames",
  "AEA2_06_ifpagram",
  "AEA2_07_Photoshop",
  "AEA3_02_bus",
  "AEA3_03_COTXES",
  "AEA7_01_PROGRES",
  "AEAE2_bouya"
];

const jsProjects = [
  "JS01",
  "JS02",
  "JS03",
  "JS04",
  "JS05",
  "JS06",
  "JS07",
  "JS08"
];

// HTML (numerado)
htmlProjects.forEach((name, index) => {
  const card = document.createElement('a');

  card.className = 'card';
  card.textContent = String(index + 1).padStart(2, '0');
  card.href = `treballs/exhtml/${name}/index.html`;
  card.target = "_blank";

  grid.appendChild(card);
});

// JavaScript (nombre real)
jsProjects.forEach((name) => {
  const card = document.createElement('a');

  card.className = 'card';
  card.textContent = name;
  card.href = `treballs/exjava/${name}/index.html`;
  card.target = "_blank";

  grid.appendChild(card);
});