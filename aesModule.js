//加密模块
_CryptoJS = require("crypto-js");
//加密
module.exports.aesEncrypt = function (plaintext, key) {
    key = _CryptoJS.enc.Latin1.parse(key);
    var iv = key;
    var encrypted = _CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv,
        mode: _CryptoJS.mode.CBC,
        // padding: _CryptoJS.pad.ZeroPadding
        padding: _CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
};
//解密
module.exports.aesDecrypt = function (ciphertext, key) {
    key = _CryptoJS.enc.Latin1.parse(key);
    var iv = key;
    var ciphertext = _CryptoJS.enc.Base64.stringify(_CryptoJS.enc.Hex.parse(ciphertext));
    var decrypted = _CryptoJS.AES.decrypt(ciphertext, key, {iv: iv, padding: _CryptoJS.pad.Pkcs7});
    return decrypted.toString(_CryptoJS.enc.Utf8);
};