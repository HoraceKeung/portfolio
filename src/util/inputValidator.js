var EmailValidator = require('email-validator')

module.exports = {
    validate
}

function validate (inputName, inputValue, rules) {
    var errorMessages = []
    for (var i = 0; i < rules.length; i++) {
        var message = runFunctionByString(rules[i].name, inputName, inputValue, rules[i].parameter)
        if (message !== '') {
            errorMessages.push(message)
        }
    }
    return errorMessages
}

function runFunctionByString (functionName, inputName, inputValue, ruleParameter) {
    switch (functionName) {
    case 'REQUIRED':
        return REQUIRED(inputName, inputValue, ruleParameter)
    // case 'MOMENT_REQUIRED':
    //     return MOMENT_REQUIRED(inputName, inputValue, ruleParameter);
    case 'TEXT_MAX_LENGTH':
        return TEXT_MAX_LENGTH(inputName, inputValue, ruleParameter)
    case 'TEXT_MIN_LENGTH':
        return TEXT_MIN_LENGTH(inputName, inputValue, ruleParameter)
    case 'NUMBER_MAX_LIMIT':
        return NUMBER_MAX_LIMIT(inputName, inputValue, ruleParameter)
    case 'FACEBOOK_CHECK':
        return FACEBOOK_CHECK(inputName, inputValue)
    case 'INSTAGRAM_CHECK':
        return INSTAGRAM_CHECK(inputName, inputValue)
    case 'PHONE_NUMBER_CHECK':
        return PHONE_NUMBER_CHECK(inputName, inputValue, ruleParameter)
    case 'PRICE_FORMAT':
        return PRICE_FORMAT(inputName, inputValue)
    case 'POSITIVE_INTEGER':
        return POSITIVE_INTEGER(inputName, inputValue)
    case 'EMAIL':
        return EMAIL(inputName, inputValue)
    }
}

// BEGIN ALL RULES
function REQUIRED (inputName, inputValue, ruleParameter) {
    var outputMessage = ''
    var input = inputValue
    if (input !== null && typeof input !== 'string') {
        input = input.toString()
    }
    if (ruleParameter && (input === null || input.trim() === '')) {
        outputMessage = inputName + ' required'
    }
    return outputMessage
}

// function MOMENT_REQUIRED(inputName, inputValue, ruleParameter) {
//     var outputMessage = "";
//     if (ruleParameter && (inputValue === null || !moment.isMoment(inputValue))) {
//         outputMessage = inputName+" required";
//     }
//     return outputMessage;
// }

function TEXT_MAX_LENGTH (inputName, inputValue, ruleParameter) {
    var outputMessage = ''
    if (inputValue !== null && inputValue.length > ruleParameter) {
        outputMessage = inputName + ' cannot be longer than ' + ruleParameter + ' characters'
    }
    return outputMessage
}

function TEXT_MIN_LENGTH (inputName, inputValue, ruleParameter) {
    var outputMessage = ''
    if (inputValue !== null && inputValue.length < ruleParameter) {
        outputMessage = inputName + ' cannot be shorter than ' + ruleParameter + ' characters'
    }
    return outputMessage
}

function NUMBER_MAX_LIMIT (inputName, inputValue, ruleParameter) {
    var outputMessage = ''
    if (inputValue > ruleParameter) {
        outputMessage = inputName + ' cannot be greater than ' + ruleParameter
    }
    return outputMessage
}

function FACEBOOK_CHECK (inputName, inputValue) {
    var outputMessage = ''
    if (!(inputValue !== '' && /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(inputValue))) {
        outputMessage = inputName + ' is invalid'
    }
    return outputMessage
}

function INSTAGRAM_CHECK (inputName, inputValue) {
    var outputMessage = ''
    if (!(inputValue !== '' && /^(https?:\/\/)?((w{3}\.)?)(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/im.test(inputValue))) {
        outputMessage = inputName + ' is invalid'
    }
    return outputMessage
}

function PHONE_NUMBER_CHECK (inputName, inputValue, ruleParameter) {
    var outputMessage = ''
    var inputWithoutSpace = inputValue === null ? '' : inputValue.replace(/\s+/g, '')
    if (inputWithoutSpace !== '') {
        if (inputWithoutSpace.length < ruleParameter.min || inputWithoutSpace.length > ruleParameter.max || !(/^[0-9]*$/gm.test(inputWithoutSpace))) {
            outputMessage = inputName + ' is invalid'
        }
    }
    return outputMessage
}

function PRICE_FORMAT (inputName, inputValue) {
    var outputMessage = ''
    if (inputValue !== null && !(/^[0-9]+(\.[0-9]{1,2})?$/.test(inputValue))) {
        outputMessage = inputName + ' is invalid'
    }
    return outputMessage
}

function POSITIVE_INTEGER (inputName, inputValue) {
    var outputMessage = ''
    if (inputValue !== null && !(/^[1-9][0-9]*$/.test(inputValue))) {
        outputMessage = inputName + ' must be positive integer'
    }
    return outputMessage
}

function EMAIL (inputName, inputValue) {
    var outputMessage = ''
    if (inputValue !== null && !EmailValidator.validate(inputValue)) {
        outputMessage = inputName + ' invalid'
    }
    return outputMessage
}
// END ALL RULES
