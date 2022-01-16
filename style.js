let button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', function () {
    fetch('https://api.chucknorris.io/jokes/random')

        .then(response => response.json())
        .then(value => {
             p.textContent = value.value;

        });


});


console.log('klick');