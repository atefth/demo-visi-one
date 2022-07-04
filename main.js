let count = 1;

function counter() {
    if (count > 3) {
        count = 1;
    }
    return count++;
}

module.exports = counter;