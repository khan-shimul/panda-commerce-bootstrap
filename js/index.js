// all h2
const lightBlue = document.getElementsByTagName('h2');
for (const h2 of lightBlue) {
    h2.style.color = 'lightblue';
}

// backpack
document.getElementById('backpack').style.backgroundColor = 'tomato';

// card radius
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// onclick
function btn() {
    console.log('yeah jhankar bhai i can!!')
}

// remove btn
const buttons = document.getElementsByClassName('remove-button');
for (const button of buttons) {
    document.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(button)
    })
}

// disabled button
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const emailButton = document.getElementById('email-btn');
    if (event.target.value == 'email') {
        emailButton.removeAttribute('disabled');
    }
    else {
        emailButton.setAttribute('disabled', true);
    }
})

// double click event
const subsContainer = document.getElementById('subs-container');
subsContainer.addEventListener('dblclick', function () {
    subsContainer.style.backgroundColor = '#00bfff';
})