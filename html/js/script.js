document.addEventListener("DOMContentLoaded", function() {
    const bonusButton = document.querySelector('.bonus-button');
    
    bonusButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        alert('Поздравляем! Вы получили бонус!');
    });
});