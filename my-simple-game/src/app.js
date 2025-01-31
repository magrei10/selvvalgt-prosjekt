function startGame() {
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function updateScore() {
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
    }

    function createTarget() {
        const target = document.createElement('div');
        target.className = 'target';
        target.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';
        target.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
        target.addEventListener('click', () => {
            updateScore();
            gameArea.removeChild(target);
            createTarget();
        });
        gameArea.appendChild(target);
    }

    createTarget();
}

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});