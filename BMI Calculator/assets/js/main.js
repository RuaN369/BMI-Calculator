// Capturar evento de submit do form

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setRes('Invalid weight!', false);
        return;
    }

    if (!height) {
        setRes('Invalid height!', false);
        return;
    }

    const bmi = getBMI(weight, height);
    const levelBMI = getLevelBMI(bmi);

    const msg = `Your BMI is ${bmi} (${levelBMI}).`;

    setRes(msg, true);

});

function getLevelBMI(bmi) {
    const level = ['Under weight', 'Normal weight', 'Overweight', 'Grade 1 obesity', 'Grade 2 obesity', 'Grade 3 obesity'];

    if (bmi < 18.5) {
        return level[0];
    }
    else if (bmi <= 24.9) {
        return level[1];
    }
    else if (bmi <= 29.9) {
        return level[2];
    }
    else if (bmi <= 34.9) {
        return level[3];
    }
    else if (bmi <= 39.9) {
        return level[4];
    }
    else {
        return level[5];
    }
}

function getBMI(weight, height) {
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
}

function createP() {
    const p = document.createElement('p');
    return p;
}

function setRes(msg, isValid) {
    const res = document.querySelector('.res');
    res.innerHTML = '';

    const p = createP();

    if (isValid) {
        p.classList.add('paragraph-res');
    }
    else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    res.appendChild(p);

}
