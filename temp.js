function convert() {
    const inputVal = parseFloat(document.getElementById('inputValue').value);
    const inputType = document.getElementById('inputTemp').value;
    const outputType = document.getElementById('outputTemp').value;
    let result;

    if (inputType === 'celsius' && outputType === 'fahrenheit') {
        result = (inputVal * 9/5) + 32;
    } else if (inputType === 'fahrenheit' && outputType === 'celsius') {
        result = (inputVal - 32) * 5/9;
    } else {
        result = inputVal; // Same type, no conversion
    }

    document.getElementById('resultValue').value = result.toFixed(2);
}