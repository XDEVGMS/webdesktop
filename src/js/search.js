//
// ========
// + Search Feature +
// ========
//

// ALlow user to press 3 time, increasing this number without adding
// more search_engines will cause some serious bugs to occur.

let se = 4;

// Listens for click event in se_button, once clicked,
// se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function () {
  se++;
  cycleSearchEngines(se);
});

// List Search providers

const search_engines = [
  {
    src: "search.svg",
    placeholder: "Google",
    action: "https://www.google.com/search?q=",
  },
  {
    src: "search.svg",
    placeholder: "DuckDuckGo",
    action: "https://www.duckduckgo.com/",
  },
  {
    src: "search.svg",
    placeholder: "Bing",
    action: "https://www.bing.com/search?q=",
  },
  {
    src: "search.svg",
    placeholder: "YouTube",
    action: "https://www.youtube.com/results?q=",
  },
  {
    src: "search.svg",
    placeholder: "Yahoo",
    action: "https://search.yahoo.com/search?q=",
  },
];

// This happens when the user presses on the se button.

const cycleSearchEngines = (se) => {
  const curData = search_engines[(se + 1) % search_engines.length];

  document.getElementById("se_icon").src = "assets/icons/" + curData.src;
  document.getElementById("search").placeholder =
    "Buscar con " + curData.placeholder + "..";
  document.getElementById("search_eng_form").action = curData.action;
};
