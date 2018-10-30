function validateValue(id, regex) {
    const value = document.querySelector(`#${id}`).value;
    return regex.test(value);
}

function validation() {
    const REGEX_NUMBER = /\d/;

    const monthSalary = validateValue('month-salary', REGEX_NUMBER);

    return false;
}