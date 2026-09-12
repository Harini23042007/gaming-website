// Game information

const games = {

    "Minecraft": {
        description: "A creative adventure game where players can explore, build and survive in an open world.",
        category: "Adventure"
    },

    "PUBG": {
        description: "A battle royale game where players compete to become the last survivor.",
        category: "Battle Royale"
    },

    "Asphalt 9": {
        description: "A fast-paced racing game featuring exciting cars, tracks and racing challenges.",
        category: "Racing"
    },

    "Among Us": {
        description: "A multiplayer social deduction game where players work together and identify the impostor.",
        category: "Multiplayer"
    },

    "Fortnite": {
        description: "An action game featuring battles, building mechanics and multiplayer gameplay.",
        category: "Action"
    },

    "Subway Surfers": {
        description: "An endless runner game where players run through railway tracks while avoiding obstacles.",
        category: "Endless Runner"
    }

};


// Play button interaction

function showGameDetails(gameName) {

    alert("Game is starting...");

    const game = games[gameName];

    document.getElementById("gameDetails").innerHTML = `

        <h3>${gameName}</h3>

        <p>
            <strong>Description:</strong>
            ${game.description}
        </p>

        <p>
            <strong>Category:</strong>
            ${game.category}
        </p>

    `;

    document.getElementById("details").scrollIntoView({
        behavior: "smooth"
    });

}


// Search feature

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".game-card");

    cards.forEach(function (card) {

        const gameName = card
            .getAttribute("data-name")
            .toLowerCase();

        if (gameName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});