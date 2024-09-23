function showNames() {
    const input1 = document.getElementById('person1').value;
    const input2 = document.getElementById('person2').value;

    const result1 = input1;
    const result2 = input2;

    const toss = Math.random() * 2; 
    const floor = Math.floor(toss); 

    const coin = document.getElementById('coin');
    const winnerText = document.getElementById('winner');

    coin.style.display = 'block'; 
    coin.style.animation = 'spin 0.1s infinite'; 

    
    setTimeout(function () {
        if (floor === 0) {
            coin.style.transform = 'rotateY(0deg)'; 
            winnerText.innerHTML = 'Heads ' + result1 + ' WIN';
        } else {
            coin.style.transform = 'rotateY(180deg)'; 
            winnerText.innerHTML = 'Tails ' + result2 + ' WIN';
        }

        coin.style.animation = ''; 
    }, 3000); 
}
