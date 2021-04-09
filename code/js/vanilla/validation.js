function isEmpty(str) {
    if(!str || str.length === 0 ){ return true; }
    if(!str || /^\s*$/.test(str)){ return true; }
    return false;
}

function IsAlphaNumeric(str) {
    let re = /[^a-zA-Z0-9]/;
    return re.test(str);
}

function isNumeric(val){
    val = val.replace(",","");
    val = val.replace(" ","");
    return !isNaN(val);
}

function isMoney(val){
    let re = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    return re.test(val);
}

function isEmail(email) {
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(email);
}
