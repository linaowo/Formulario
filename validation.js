function redBorder(id) {
    const body = document.querySelector("body")

    body.classList.add(`${id}-incorrect`);
    return false;
}

function validateValue(id, regex) {
    const value = document.querySelector(`#${id}`).value;

    return (!regex.test(value) || !value.length)
        ? redBorder(id) : true
}

function validation() {
    let validate = true;
    const REGEX_NUMBER = /\d/;
    const REGEX_DATE = /\d{2}\/\d{2}\/\d{4}/;

    validate = validateValue('date', REGEX_DATE);
    // const monthSalary = validateValue('month-salary', REGEX_NUMBER);
    validate =  validateValue('approbe-salary', REGEX_NUMBER);
    // const dateContratation = validateValue('date-contratation',REGEX_NUMBER);

    return validate;
}