const players = [
    { name: "Alice", score: 450, level: 5 },
    { name: "Bob", score: 300, level: 3 },
    { name: "Charlie", score: 500, level: 6 },
    { name: "Dave", score: 600, level: 7 },
    { name: "Eve", score: 200, level: 2 },
    { name: "Frank", score: 550, level: 6 },
    { name: "Grace", score: 350, level: 4 },
    { name: "Heidi", score: 400, level: 5 },
    { name: "Ivan", score: 320, level: 3 },
    { name: "Judy", score: 450, level: 5 }
];

const leaderboardTable = document.querySelector("#leaderboard tbody");
const sortSelect = document.getElementById("sort");

function renderLeaderboard(players) {
    leaderboardTable.innerHTML = "";
    players.forEach((player) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>${player.level}</td>
        `;
        leaderboardTable.appendChild(row);
    });
}

function sortPlayers(criterion) {
    const sortedPlayers = [...players].sort((a, b) => {
      if (criterion === "score" || criterion === "level") {
        return b[criterion] - a[criterion];
      }
      return a[criterion].localeCompare(b[criterion]);
    });

    renderLeaderboard(sortedPlayers);
}

//Initial render
renderLeaderboard(players);

//Sort players when dropdown changes
sortSelect.addEventListener("change", (e) => {
    sortPlayers(e.target.value);
});