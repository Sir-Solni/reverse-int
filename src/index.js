module.exports = function reverse (n) {
    n = Math.abs(n);
    let d = String(n);

    let arr = [];
    arr = d.split("");
    arr.reverse();
    d = arr.join("");
    d = Number(d);
    return d;
}
