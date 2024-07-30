let colors = ['red', 'green', 'blue'];
let selectedColor = '';

function startGame() {
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('result').innerText = 'Make your prediction!';
}

function makePrediction(color) {
    if (!selectedColor) {
        alert('Please start the game first!');
        return;
    }

    if (color === selectedColor) {
        document.getElementById('result').innerText = 'Congratulations! You predicted correctly!';
    } else {
        document.getElementById('result').innerText = `Sorry, wrong prediction. The correct color was ${selectedColor}.`;
    }

    selectedColor = '';
}
