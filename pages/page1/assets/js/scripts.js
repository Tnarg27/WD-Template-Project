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

// Sort players by score in descending order for the chart
const sortedPlayers = players.sort((a, b) => b.score - a.score);

// Generate Bar Chart Manually
const chartContainer = document.getElementById("barChart");
const maxScore = Math.max(...players.map(p => p.score));

sortedPlayers.forEach(player => {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = (player.score / maxScore) * 100 + "%";
    bar.innerText = player.score;
    chartContainer.appendChild(bar);
});

// Display top 3 players
const topPlayers = sortedPlayers.slice(0, 3);
const topPlayerElement = document.getElementById("topPlayer");
topPlayerElement.innerHTML = `
    <ul>
        ${topPlayers.map(player => `<li>🏆 ${player.name} - ${player.score} Points</li>`).join('')}
    </ul>
`;

// Calculate Averages
const avgScore = (players.reduce((sum, p) => sum + p.score, 0) / players.length).toFixed(2);
const avgLevel = (players.reduce((sum, p) => sum + p.level, 0) / players.length).toFixed(2);
document.getElementById("averages").innerHTML = `<b>Average Score: ${avgScore}</b><br><b>Average Level: ${avgLevel}</b>`;