// Punto 1

// funcion Secret
function secret(p1, p2, p3) {
  var msg;

  if (p2 == encrypt) {
    msg = encrypt(p1, p3);
  } else if (p2 == decrypt) {
    msg = decrypt(p1, p3);
  }
  return msg;
}
// funcion encrypt
function encrypt(msg, key) {
  var rMsg = msg;
  var msgLen = rMsg.length;
  for (i = 0; i < msgLen; i++) {
    rMsg[i] = rMsg[i] + key;
  }
  return rMsg;
}
// funcion decrypt
function decrypt(msg, key) {
  var rMsg = msg;
  var msgLen = rMsg.length;
  for (i = 0; i < msgLen; i++) {
    rMsg[i] = rMsg[i] - key;
  }
  return rMsg;
}

secret([5, 7, 2, 4], encrypt, 2);

secret([5, 7, 2, 4], decrypt, 2);

// Punto 2

mcd = (a, b) => (a == b ? a : a < b ? mcd(a, b - a) : mcd(b, a - b));
