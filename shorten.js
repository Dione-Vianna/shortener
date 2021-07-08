const shortUrl = new (function () {
  let alpha = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_',
    base = alpha.length;
  this.encode = function (num) {
    let srt = '';
    while (num > 0) {
      srt = alpha.charAt(num % base) + srt;
      num = Math.floor(num / base);
    }

    return srt;
  };

  this.decode = function (str) {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      num = num * base + alpha.indexOf(str.charAt(i));
    }
    return num;
  };
})();
