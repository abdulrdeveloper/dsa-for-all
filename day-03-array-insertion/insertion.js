let arr = [72, 80, 45, 13, 5];
const valueInput = document.createElement('input');
valueInput.type = 'number';
valueInput.placeholder = 'Enter Value';
document.body.appendChild(valueInput);

const indexInput = document.createElement('input');
indexInput.type = 'number';
indexInput.placeholder = 'Enter Index';
document.body.appendChild(indexInput);

const button = document.createElement('button');
button.textContent = 'Insert Value';
document.body.appendChild(button);

const H2Before = document.createElement('h2');
H2Before.textContent = "The Array Before Insertion:";
document.body.appendChild(H2Before);

arr.forEach((number, _index) => {
    const span = document.createElement('span');
    span.className = 'traversal-item';
        span.textContent = _index === arr.length - 1 ? `${number}` : `${number}, `;
        document.body.appendChild(span);
    });

const H2After = document.createElement('h2');
H2After.textContent = "The Array After Insertion:";
document.body.appendChild(H2After);

button.addEventListener('click', () => {
    const value = parseInt(valueInput.value);
    const index = parseInt(indexInput.value);

    const isValidValue = !isNaN(value);
    const isValidIndex = !isNaN(index) && index >= 0 && index <= arr.length;

    if (!isValidValue || !isValidIndex) {
        alert('Please enter valid value and index.');
        return;
    }

    for(let i=arr.length-1; i >= index; i--){
        arr[i+1]=arr[i];
    }
    arr[index]=value;

    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';
    document.body.appendChild(resultContainer);

    arr.forEach((number, _index) => {
        const span = document.createElement('span');
        span.className = 'traversal-item';
        span.textContent = _index === arr.length - 1 ? `${number}` : `${number}, `;
        resultContainer.appendChild(span);
    });
});
