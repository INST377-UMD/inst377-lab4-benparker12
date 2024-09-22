let isBlue = true;

function alertName() {
    const name = document.getElementById('name-input').value;
    alert(`Hi ${name}!`);
}

function changeColor() {
    document.body.style.backgroundColor = isBlue ? 'green' : 'rgb(0, 187, 255)';
    isBlue = !isBlue; // Toggle the boolean
}

function validateText() {
    const text = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert('Special characters are not allowed!');
    } else {
        alert('Text is valid!');
    }
}

function addText() {
    const heading = document.getElementById('main-heading');
    heading.innerText += ' Add Text';
}
