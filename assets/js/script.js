const players = [
    { name: "Bob", score: 300, level: 3 },
    { name: "Ivan", score: 320, level: 3 },
    { name: "Alice", score: 450, level: 5 },
    { name: "Heidi", score: 400, level: 5 },
    { name: "Eve", score: 200, level: 2 },
    { name: "Charlie", score: 500, level: 6 },
    { name: "Dave", score: 600, level: 7 },
    { name: "Judy", score: 450, level: 5 },
    { name: "Grace", score: 350, level: 4 },
    { name: "Frank", score: 550, level: 6 }
];

//Add index to each player to track their original input order
const playersWithIndex = players.map((player, index) => ({ ...player, index }));

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
      // Sort by score or level
      if (criterion === "score" || criterion === "level") {
        if (b[criterion] !== a[criterion]) {
            return b[criterion] - a[criterion]; // Sort by descending score/level
        }
    } else {
        return a[criterion].localeCompare(b[criterion]); // Sort by name alphabetically
    }

    // ***If scores or levels are equal, sort by original input order (index) ***
    return a.index - b.index; 
});

renderLeaderboard(sortedPlayers);
}

//Initial render
renderLeaderboard(players);

//Sort players when dropdown changes
sortSelect.addEventListener("change", (e) => {
    sortPlayers(e.target.value);
});
