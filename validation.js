function validateValue(id, regex) {
    const value = document.querySelector(`#${id}`).value;
    return regex.test(value);
}

function validation() {
    const REGEX_NUMBER = /\d/;
    const REGEX_NAME = /\cX/;

    const date = validateValue('date',REGEX_NUMBER);
    const monthSalary = validateValue('month-salary', REGEX_NUMBER);
    const approbeSalary = validateValue('approbe-salary',REGEX_NUMBER);
    const dateContratation = validateValue('date-contratation',REGEX_NUMBER);

    return false;
}