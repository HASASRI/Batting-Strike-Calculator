document.getElementById('strike-rate-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name-input').value;
    const runs = parseInt(document.getElementById('runs-input').value);
    const balls = parseInt(document.getElementById('balls-input').value);

    if (balls === 0) {
        alert("Balls faced cannot be zero. Please try again!");
        return;
    }

    const strikeRate = (runs / balls) * 100;
    document.getElementById('strike-rate-result').textContent = ` ${strikeRate.toFixed(2)}`;
});
