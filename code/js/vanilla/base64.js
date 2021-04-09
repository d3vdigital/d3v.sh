function base64Encode(str) {
    if (typeof str != 'string') throw new TypeError('Passed parameter is not a valid string');
    const output = str.replace(
        /[\u0080-\u07ff]/g,
        function(c) {
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f); }
    ).replace(
        /[\u0800-\uffff]/g,
        function(c) {
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f); }
    );
    return btoa(output);
}

function base64Decode(str) {
    if (typeof str != 'string') throw new TypeError('Passed parameter is not a valid string');
    let base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    if (base64regex.test(str)) { str = atob(str); } // only does a decode if the string is a valid Base64 encoded
    const output = str.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
        function(c) {
            let cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
            return String.fromCharCode(cc); }
    ).replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,
        function(c) {
            let cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
            return String.fromCharCode(cc); }
    );
    return output;
}
