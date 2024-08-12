let currentGame = 0;

document.getElementById('infoButton').addEventListener('click', function() {
    alert('Si tu parviens à gagner tous les mini-jeux, tu remporteras un cadeau spécial !');
});

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('gamesContainer').style.display = 'block';
    document.querySelector('header').style.display = 'none';
    showGame(0);  // Commencer avec le premier jeu
});

document.getElementById('hiddenHeartButton').addEventListener('click', function() {
    showModal('https://example.com/surprise-image.jpg', 'Félicitations ! Tu as trouvé le cœur caché.');
});

document.getElementById('nextGameButton').addEventListener('click', function() {
    showGame(currentGame + 1);
});

function showGame(gameNumber) {
    document.querySelectorAll('.game').forEach((game, index) => {
        game.style.display = index === gameNumber ? 'block' : 'none';
    });
    if (gameNumber >= 0) {
        currentGame = gameNumber;
        if (currentGame < document.querySelectorAll('.game').length) {
            document.getElementById('progressSection').style.display = 'none';
            document.querySelector('.game').style.display = 'block';
        } else {
            alert('Félicitations ! Tu as terminé tous les mini-jeux !');
        }
    }
}

function showModal(imageSrc, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalText').innerText = text;
    modal.style.display = 'block';

    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Jeu 1 : Trouve l'élément caché
function playFindHiddenObjectGame() {
    alert('Cherche l\'élément caché dans l\'image !');
    endGame('Jeu 1');
}

// Jeu 2 : Réponds à la question
function playQuestionGame() {
    let answer = prompt('Quelle
