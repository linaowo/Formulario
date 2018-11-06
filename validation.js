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
    const REGEX_YEARS = /^\d{2}$/;
   const REGEX_NAME = /^[a-zA-Z]/;

    validate = validateValue('date', REGEX_DATE);
    validate = validateValue('month-salary', REGEX_NUMBER);
    validate =  validateValue('approbe-salary', REGEX_NUMBER);
    validate = validateValue('date-contratation',REGEX_DATE);
    validate = validateValue('apellido_p',REGEX_NAME);
    validate = validateValue('apellido_m',REGEX_NAME);
    validate = validateValue('nombre',REGEX_NAME);
   validate = validateValue('edad',REGEX_YEARS);
    validate = validateValue('telefono',REGEX_NUMBER);
    validate = validateValue('fecha-nac',REGEX_DATE);
    validate = validateValue('estatura',REGEX_NUMBER);
    validate = validateValue('nacionalidad',REGEX_NAME);
   validate = validateValue('peso',REGEX_NUMBER);
   validate = validateValue('domicilio',REGEX_NAME);
   validate = validateValue('codigo-p',REGEX_NUMBER);
   validate = validateValue('ciudad',REGEX_NAME);
   validate = validateValue('nacimiento',REGEX_DATE);
   validate = validateValue('contribuyentes',REGEX_NAME);
   validate = validateValue('seguridad-social',REGEX_NUMBER);
   validate =validateValue('clave-unica',REGEX_NUMBER);
   validate = validateValue('colonia',REGEX_NAME);
   validate = validateValue('puesto',REGEX_NAME);
   return validate;
}